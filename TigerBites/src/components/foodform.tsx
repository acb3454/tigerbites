import { Timestamp, DocumentReference } from 'firebase/firestore';
import { addDoc, collection, doc, setDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../config/firebase";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import './foodform.css';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export interface Food {
    contact: DocumentReference;
    name: string;
    description: string;
    location: string;
    startPickup: Timestamp;
    endPickup: Timestamp;
    mealsAvailable: number;
    imageUrl: string;
}

const FoodForm = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const { user, userData, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user && !userData) {
            navigate('/login');
        }
    }, [user, userData, loading, navigate]);
    
    const formSchema = z.object({
        name: z.string().min(3, {
            message: "Title must be at least 3 characters long.",
        }),
        description: z.string().min(10, {
            message: "Description must be at least 10 characters long.",
        }),
        location: z.string().min(3, {
            message: "Description must be at least 3 characters long.",
        }),
        startPickup: z.string(),
        endPickup: z.string(),
        mealsAvailable: z.preprocess((val) => Number(val), z.number()),
        image: z.any()
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            location: '',
            startPickup: new Date(Date.now()).toISOString(),
            endPickup: new Date(Date.now()).toISOString(),
            mealsAvailable: 0,
        }
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };


    const handleSave = async (data: FormValues) => {
        let imageUrl = '';
        if (selectedFile) {
            const imageRef = ref(storage, `images/${selectedFile.name}`);
            await uploadBytes(imageRef, selectedFile);
            imageUrl = await getDownloadURL(imageRef);
        }

        const userRef = doc(firestore, 'users', userData!.id); 
        const food: Food = {
            name: data.name,
            description: data.description,
            location: data.location,
            contact: userRef as DocumentReference,
            startPickup: Timestamp.fromDate(new Date(data.startPickup)),
            endPickup: Timestamp.fromDate(new Date(data.endPickup)),
            mealsAvailable: data.mealsAvailable,
            imageUrl: imageUrl,
        };
        console.log(food);
        const col = collection(firestore, 'food');
        try {
            await addDoc(col, food);
            await updateCurrentUser(userData, data.mealsAvailable);
            alert('Thank you for reducing food waste!');
            form.reset();
            setSelectedFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = ''; 
            }
        } catch (e) {
            console.log(e);
        }
    };

    const onSubmit = (data: FormValues) => {
        handleSave(data);
    };

    return (
        <div className='form'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Food Name</FormLabel>
                                <FormControl>
                                    <Input {...field} type="text" />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input {...field}  type="text" />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="startPickup"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Start Pickup</FormLabel>
                                <FormControl>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        {...field} type="datetime-local" />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="endPickup"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>End Pickup</FormLabel>
                                <FormControl>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        {...field} type="datetime-local" />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mealsAvailable"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Meals Available</FormLabel>
                                <FormControl>
                                    <Input {...field} type="number" />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input {...field} type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

const updateCurrentUser = async (userData: import("@/hooks/useAuth").User | null, mealsAvailable: number) => {
    if (!userData) {
        throw new Error('User data is not available.');
    }

    const userRef = doc(firestore, 'users', userData!.id);;
    const mealNum = userData.meals_saved + mealsAvailable;
    try {
        await setDoc(userRef, { meals_saved: mealNum }, { merge: true });
    } catch (error) {
        console.error('Error updating user data:', error);
    }
};

export default FoodForm;

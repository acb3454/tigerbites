import { firestore } from "../../config/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useRef } from "react";

export default function home() {

    const messageRef = useRef(null);
    const ref = collection(firestore, "messages");


    const handleSave = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        let data = {
            
            message: "hello"
        }
        try {
            addDoc(ref, data);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleSave}>
                <label> Enter Message: </label>
                <input type="text" ref={messageRef}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
![image](TigerBites/src/assets/tigerbyteslogo.png)

![badge1](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)  ![badge2](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)   ![badge3](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)   ![badge6](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  ![badge4](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)   ![badge5](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) 

## Getting Started
To set up the project for local development, please perform the following commands from the root directory.
```
cd TigerBites
npm install
npm run dev
```
Alternatively, just visit the live version of the website [here](tigerbytes.tech)!

## Inspiration
Our inspiration from TigerBytes came from RIT’s Foodshare and a well-known app, Too Good To Go. We wanted to implement a solution to food waste on our college campus, and each of us were very familiar with the Too Good To Go app that is available in popular cities to connect people with food that would otherwise be wasted. With this idea, we were guided by the United Nations Sustainability Goals, specifically Zero Hunger (2), Good Health and Well-Being (3), and Sustainable Cities and Communities (11). We wanted to develop a way to bring these goals to our RIT community, and TigerBytes was the solution. The goal of TigerBytes is to support students who may not have meal plans or are on a tight budget by providing access to free, ready-to-eat meals. While Foodshare is a valuable resource for non-perishable groceries, it does not currently offer prepared meals. With the amount of food that goes to waste at large events (like a hackathon for example), where large quantities of food are ordered and leftovers go unused, TigerBytes can help mediate this issue by connecting students who have insufficient dining dollars or funds and are in need of food. Through TigerBytes, we promote a sustainable college community, ensuring that no one goes hungry and that every student stays in good health.


## What it does
TigerBytes is an innovative app designed to combat food waste on RIT’s campus while promoting sustainability and student well-being. TigerBytes connects students with leftover prepared meals from events, gatherings, and campus activities—ensuring that good food doesn’t go to waste. From the home screen of TigerBytes, students can view food available in their area, as well as locations and pickup times. They are also able to post their own food offerings so they can share with others. Profile features allow students to see how much they’ve been able to help others, as well as how many meals their community has helped to provide them. 

## How we built it
We used React with Tailwind CSS for the frontend, and Firebase for our database. We connected Firebase to Google Cloud storage in order to allow for image upload and storage.  Hosting is done through Vercel. 

## Challenges we ran into

There were three main challenges that we ran into when working on this project. The first of which was working with the firebase database. This was a new technology for us as most of our experience lies in Docker and MongoDB. We chose to go the firebase route because it provides hosting, making the process easier. Despite that benefit, it was difficult to add in images with the limited amount of space provided with the free trial. Not to mention that we had to make several videos on firebase before we were able to implement the schema. 

Our second challenge was working with CSS. Although our team had some experience with CSS, tailwind was new to most of our members and it was difficult to get everything to work. CSS isn’t a huge focus in many of our classes considering that most courses we take have a huge focus on the backend. Because of this we were constantly blocked, having elements in the wrong spot and trying to make everything adaptive for different types of displays. Despite this challenge, we were able to overcome it through trial and error, taking time to ensure the hierarchy of our styling was correct.

The third challenge came on Sunday morning, when our Vercel deployments suddenly stopped working. After a couple minutes of confusion, we realized that we had reached the limit of 100 deployments in 24 hours. We raced to set up a new vercel account, switched over the hosting, and reconnected the domain. Luckily, it all turned out fine, but it was quite an unexpected bump in the road so close to the end.   

## Accomplishments that we're proud of

We’re proud of our unique and creative UI (which is both desktop and mobile friendly!), since it definitely was a challenge for us to get it to work. We’re also proud that we were able to connect our app to a database and host it so it could be fully functional. 

## What we learned
We learned a lot about full stack development, especially using Firebase! 

## What's next for TigerBytes
TigerBytes has so much potential - for our next improvements and features, we hope to add notifications, and also expand TigerBytes offerings to not only include food, but also include other items that often cause waste, such as electronics. 

import selfs from "../img/self.png";
import resumepic from "../img/resume.png";
import shusher from "../img/shusher.png";
import CC from "../img/CC.gif";
import Car from "../img/Car.gif";
import SM from "../img/SM.gif";
import HK from "../img/Hashikahan.png";
import docker from "../img/docker.png";
import { resume } from "react-dom/server";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(12, 245, 32)", "rgb(255, 153, 153)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Hashem",
  lastName: "Ibrahim",
  initials: "HI", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Engineer",
  selfPortrait: selfs, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "💻",
      text: "loves PCs",
    },
    {
      emoji: "🌎",
      text: "based in Sweden",
    },
    {
      emoji: "🏫",
      text: "Software Engineering and Management Bachelors",
    },
    {
      emoji: "📧",
      text: "iamhashemibrahim@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/hashoomyyyy/?hl=en",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/HashemIbrahim",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/hashem-ibrahim-3097582a4/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Hashem. I'm a software engineer. I studied Software Engineering at Gothenburg University, I enjoy everything tech, and I am a fast learner. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "Java",
      "C++",
      "Python",
    ],
    exposedTo: ["nodejs", "docker", "CI/cd", "WSL"],
  },
  hobbies: [
    {
      label: "Gaming",
      emoji: "🎮",
    },
    {
      label: "Guitar",
      emoji: "🎸",
    },

    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      id: "shusher",
      title: "SHUSHER",
      tagline: "A device to monitor sound levels (Arduino + C++)",
      image: shusher, // or import
      repo: "https://github.com/HashemIbrahim/Shusher",
      authors: [
        { name: "Hashem Ibrahim", link: "https://github.com/HashemIbrahim" },
        { name: "Mika Rannisto", link: "https://github.com/MikaRanAway" },
        { name: "Johan Engstrom", link: "https://github.com/johanengstrom98" },
        { name: "Ashor Abraham", link: "https://git.chalmers.se/ashabr" },
        { name: "Isaac Ternbom", link: "https://github.com/IsaacLT" },
      ],
      tools: [
        { name: "C++", icon: "devicon-cplusplus-plain" },
        { name: "Arduino", icon: "devicon-arduino-plain" },
        { name: "MQTT", icon: "devicon-embeddedc-plain" }, // or custom PNG
        { name: "Java", icon: "devicon-java-plain" },
      ],
      lessons: [
        "Threading & real-time constraints on microcontrollers",
        "MQTT pub/sub basics and structured repo workflows",
        "Hardware integration: mic, ultrasonic sensor, LED strip",
      ],
      usage: [
        "Warns user if sound exceeds threshold",
        "Customizable thresholds & Wio Terminal UI themes",
      ],
    },
    {
      id: "CC",
      title: "Cavity Control",
      tagline:
        "A fully working dentist booking app distributed across different machines",
      image: CC, // or import
      repo: "https://docs.google.com/document/d/1pFW1ZwzXaUzfFVjavyheJqJNrh0ZXE8yLT6rEsn7lbs/edit?tab=t.0",
      authors: [
        { name: "Hashem Ibrahim", link: "https://github.com/HashemIbrahim" },
        { name: "Mika Rannisto", link: "https://github.com/MikaRanAway" },
        { name: "Rasmus Nygren", link: "https://git.chalmers.se/rasmusny" },
        { name: "Vilmer Hedin", link: "https://github.com/VilmerHedin" },
        { name: "Johan Engstrom", link: "https://github.com/johanengstrom98" },
        { name: "Felix Humleby", link: "https://git.chalmers.se/humleby" },
      ],
      tools: [
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "Vue", icon: "devicon-vuejs-plain" },
        { name: "MQTT", icon: "devicon-embeddedc-plain" }, // or custom PNG
        { name: "Java", icon: "devicon-java-plain" },
        { name: "Maven", icon: "devicon-maven-plain" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
      ],
      lessons: [
        "This project was a definite struggle to complete. Given the nature of the entire app being distributed across many different hosts, teamwork, structure, and overall testing of the app was super important. The Cavity Control Application was composed of a Patient Component, Dentist Component, Notification Component, Booking database, and multiple services that acted as middleware for further functionality. Given this structure and the fact that every component communicated via MQTT with HiveMQ, collaboration and planning was a huge learning outcome from this project. If any component didnt follow along our plannings and diagrams, parts and pieces of the Cavity Control will simply not work entirely. The team was also seperated amongst these components, which lead to further planning on a general consensus of what the apps scope should be. Therefore requirements, user stories, MQTT diagrams, and agreed upon JSON formats were also made within this project. My personal biggest problem when it came to developing Cavity Control had to be testing the whole app. Since the app was seperated amongst many machines and our team rarely were all together for a meeting, setting up the app would require reaching out to certain members of the team to turn on their component. This was a bit of a hassle to work with, but ended up teaching us that we should have structured our schedule more onto actually running and finding bugs with the system. My biggest learning outcome from this project definitely has to be the plethera of tools used within this program. ALthough the functionality of each component in the distributed app was pretty simple, this project was a great was to see how why and how so many different software technologies can come together to fulfill a general goal of the app. I will definitely apply such experience to any future projects!",
      ],
      usage: [
        "A user is able to find dentist clinics on a map, updated real-time, and book them accordingly",

        "A dentist user is able to view their scheduled appointments, cancel them in real-time, or open new slots",

        "The app being hosted on different machines via seperate software components allows for its use on seperate machines at once.",
      ],
    },
    {
      id: "Car",
      title: "Self Driving Car",
      tagline:
        "A steering angle program to calculate the next steering input of a self-driving car",
      image: Car, // or import
      repo: "https://docs.google.com/document/d/1pFW1ZwzXaUzfFVjavyheJqJNrh0ZXE8yLT6rEsn7lbs/edit?tab=t.0",
      authors: [
        { name: "Hashem Ibrahim", link: "https://github.com/HashemIbrahim" },
        { name: "Mika Rannisto", link: "https://github.com/MikaRanAway" },
      ],
      tools: [
        { name: "C++", icon: "devicon-cplusplus-plain" },
        { name: "Cmake", icon: "devicon-cmake-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "OpenCV", icon: "devicon-opencv-plain" },
      ],
      lessons: [
        "This project was a problematic one. The premise of the project was to make software features towards data sourced directly from real-time remote control vehicles. It was a mix of embedded systems, cyber physical systems, and how we, as a team, are to fit our software into that. The goal was to generate steering angles throughout an entire recording of a vehicle racing through a track. In order to pass, we were required to replicate atleast 25% of angles produced when the vehicle was racing in real-time. Given the concept of the project, concept was a very important factor in the process of developing the software. We initially thought a rule-based approach to the problem was applicable. This was implemented via ground values of where the cones should be when the car is going directly straight. Offset values from where the cones currently are, were then processed in a simple calculator to arrive at our steering angle. This didnt work. Because we completely missed that the recordings had turns that differed from other turns and had its own certain behaviour, mimicing it with a simple static rule base was almost impossible. Realizing this about 5 days before the deadline, lots of work was done to completely start from scrath and go towards machine learning to learn more intricate patterns to mimic such delicate actions more carefully. Although I definitely learned how to use tools like OpenCV and gained vast amounts of knowledge around image detection and video processing, I personally think that my biggest learning outcome from this project is the importance of problem-base thinking. If we were able to review and analyze the problem more initially, realizing that this should have been a task for machine learning would have come alot sooner. Therefore for any future tasks dealing with big problem spaces, I now know more time should be spent with brainstorming in that space.",
      ],
      usage: [
        "Provided multiple recordings of a RC car driving through a track, our Cone Vision calculates and prints accurate steering angles for any given future recordings of the same car",
      ],
    },
    {
      id: "SmartMatch",
      title: "Smart Match",
      tagline:
        "An AI model that generates a list of most likely jobs a given resume fits under",
      image: SM, // or import
      repo: "https://github.com/danielvdh24/smart-match",
      authors: [
        { name: "Hashem Ibrahim", link: "https://github.com/HashemIbrahim" },
        { name: "Mika Rannisto", link: "https://github.com/MikaRanAway" },
        { name: "Vilmer Hedin", link: "https://github.com/VilmerHedin" },
        { name: "Daniel Hueval", link: "https://github.com/danielvdh24" },
        { name: "Kai Rowley", link: "https://github.com/irmata" },
      ],
      tools: [
        { name: "Django", icon: "devicon-django-plain" },
        { name: "MySql", icon: "devicon-mysql-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },
      ],
      lessons: [
        "This was a fantastic project to hone many different skills at once. Due to the nature of the Smart Match, I learned and gained alot of experience around machine learning, the hosting of apps, and generally what tools to use when given an assignment like this. Because the app was hosted on Google Cloud with the use of Docker and Kubernetes, the biggest issue we faced was data persistency. Since the app included features of adding or removing resumes to a shared database, we had to handle actually keeping those changes present. Finding out that this was due to databases being reset everytime a new docker image was pushed, I learned alot researching about the use of Persistent Disks and Volume Claims when it comes to hosting an app on the web. Understanding the behaviour of databases within docker images, now Im able to avoid such a time waste when it came to fixing such a big issue so late in the project. Another issue faced and lesson learnt was documentation. Since the group was pretty excited to be working with training their own machine learning model, not much time was spent discussing the general structure of the app. Time spent on brainstorming ideas, could have been spent more efficiently on planning proper diagrams and structure the app should take. Because there was only a mere verbal consensus on such matters, confusion and mistakes occured alot more down the line. Therefore, understanding from our experience, any future projects should definitely encourage the idea of creating diagrams and program structures so that such disorganization doesnt happen again.",
      ],
      usage: [
        "Smart Match allows users to insert their given resumes and is returned relevant job positions",

        "An admin dashboard allows training of new models, selection of different model versions, and the management of the database of resumes",
      ],
    },
    {
      id: "Hashikahan",
      title: "Hashikahan",
      tagline:
        "A fullstack web-app to display your own photo and albums to other users",
      image: HK, // or import
      repo: "https://github.com/MikaRanAway/Hashikahan",
      authors: [
        { name: "Hashem Ibrahim", link: "https://github.com/HashemIbrahim" },
        { name: "Mika Rannisto", link: "https://github.com/MikaRanAway" },
        { name: "Johan Engstrom", link: "https://github.com/johanengstrom98" },
      ],
      tools: [
        { name: "ExpressJs", icon: "devicon-expressjs-plain" },
        { name: "VueJs", icon: "devicon-vuejs-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
      ],
      lessons: [
        "This project was a super fun one. We were tasked to making a full fledged web-app. Our group deciding with a shared photo/album space similar to SmugMug, got into developing the actual app pretty quickly. This project was my first time fully developing a responsive web-app, and it was very fun doing so. With a VueJS front end and ExpressJS backend frameworks, it was really interesting how websites on the internet actually function. With ideas ranging from Http requests to cookies and session storages, I absolutely had a blast with everything in the project. My favourite part has to be understanding how the backend works in all web apps. Since the frontend seemed kind of simple with HTML being the frame of how elements appear and CSS being the styling of such elements, I showed most of my interest into visualizing and understanding how the backend works. We spent alot of time with postman and testing each Http request of the app to see if functionality works and lots of time was also used in troubleshooting certain functions. Because we had functionalities that handled posting photos, middlewares were also sourced and used to do so, making the process ever so cool to work with. I personally believe that my biggest learning outcome from the Hashikan project was the importance of databases and the backend for such types of functional web-apps. Making different models, inserting such models or removing such models from MongoDB via Http requests was definitely an eye opener to future projects. I also learned how to visualize such models in databases with Entity Relationship diagrams and understand now the basics of using such diagrams to aid the process of making database-reliant apps!",
      ],
      usage: [
        "A user is able to create a profile on the site",

        "A user is able to post their own photos and categorize them into custom albums",

        "A user is able to view other peoples pictures on the site",
      ],
    },
  ],
};

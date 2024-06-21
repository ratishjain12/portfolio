import Blogify from "../../assets/blogify.png";
import taskmanager from "../../assets/taskmanager.jpg";
import shopit from "../../assets/shopit.jpeg";
import chat from "../../assets/chat.png";
import threads from "../../assets/threads.jpeg";
import vercel from "../../assets/vercel.jpg";
const data = [
  {
    id: 1,
    title: "Threads Clone",
    img: threads,
    description:
      "A Fullstack Social Media Application which lets you post threads, like threads, comment on threads see other users profiles as well as get notifications",
    stack: ["NEXTJS", "POSTGRESQL", "PRISMA", "NEXTAUTH", "TAILWIND"],
    category: "html",
    live: "https://threads-clone-fullstack.vercel.app/",
    source: "https://github.com/ratishjain12/threads-clone",
    duration: 0.3,
  },

  {
    id: 2,
    title: "Vercel System Design Implementation",
    img: vercel,
    description:
      "A proof of concept of implementation of vercel upload and deployment system using microservice using aws s3, redis and nodejs as core backend with proper system design",
    stack: ["NODEJS", "AWS S3", "REDIS", "EXPRESSJS", "REACT", "SHADCN"],
    category: "html",
    source:
      "https://github.com/ratishjain12/vercel-system-design-Implementation-",
    duration: 0.5,
  },
  {
    id: 3,
    title: "Chatty Chat Application",
    img: chat,
    category: "mern",
    description:
      "A Fullstack Chat application which lets you create groups as well as lets you chat any individual user",
    stack: ["REACTJS", "MONGODB", "EXPRESSJS", "NODEJS", "SOCKET.IO"],
    source: "https://github.com/ratishjain12/chatty",
    duration: 0.7,
  },
  {
    id: 4,
    title: "Shopit Ecom Store",
    img: shopit,
    category: "mern",
    description:
      "A Fullstack Ecommerce platform created with stripe as a payment service",
    stack: ["REACTJS", "MONGODB", "EXPRESSJS", "NODEJS", "STRIPE"],
    source: "https://github.com/ratishjain12/shopit",
    duration: 0.9,
  },

  {
    id: 5,
    title: "Blogify",
    img: Blogify,
    category: "mern",
    stack: [
      "REACTJS",
      "MONGODB",
      "EXPRESSJS",
      "NODEJS",
      "CLERK",
      "AZURE CLOUD",
    ],
    description:
      "A Fullstack blogging platform for developers with rich text editor lets them create blogs, like and comment on blogs as well as edit/delete there blog posts",
    live: "https://blogify-mern-app.vercel.app/",
    source: "https://github.com/ratishjain12/Blogify-mern-app",
    duration: 1.1,
  },
  {
    id: 6,
    title: "Task Manager",
    img: taskmanager,
    category: "mern",
    stack: ["REACTJS", "MONGODB", "EXPRESSJS", "NODEJS"],
    description:
      "A Fully responsive task manager app where user can update, delete, add tasks as well as change the status of the task, created using MERN stack.",
    live: "https://taskmanager-mern.vercel.app/",
    source: "https://github.com/ratishjain12/taskmanager-mern",
    duration: 1.3,
  },
];

export default data;

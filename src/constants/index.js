import project1 from "../assets/assets/projects/project-1.jpg";
import project2 from "../assets/assets/projects/project-2.jpg";
import project3 from "../assets/assets/projects/project-3.jpg";
import project4 from "../assets/assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Ripple Mind Pvt Ltd",
    description: `I'm currently developing Marudhararts.com, an innovative e-commerce platform featuring live bidding for printed and e-auctions. To enable seamless real-time bidding, I've integrated Socket.io and utilized Jotai for efficient state management. The back-end services are built using Node.js and Express, while the front-end leverages the power of Next.js. For the admin interfaces, I've employed React to ensure a smooth and intuitive user experience.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","Typescript","Nodejs","Socket.io","Jotai"],
  },
  {
    year: "2022 Nov - 2023 sep",
    role: "Web Developer",
    company: "Brototype",
    description: `I designed and developed user interfaces for web applications using Next.js and React. In collaboration with backend developers, I integrated frontend components seamlessly with Node.js APIs. My work involved implementing responsive designs to ensure a consistent experience across all devices and optimizing frontend performance for faster load times and smoother user interactions. Additionally, I effectively managed application state using Redux, ensuring data consistency and predictability. Through these efforts, I consistently delivered high-quality, scalable, and maintainable code, contributing to the success of various projects.`,
    technologies: ["HTML", "CSS", "Javascript","Typescript","MongoDb", "Postgres","Redux"],
  }
 
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.And also integrated the payment option with paypal.",
    technologies: ["HTML", "CSS", "ejs", "Node.js", "MongoDB"],
  },
  {
    title: "Employees Management App",
    image: project2,
    description:
      "An application for managing  employees, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "MongoDb","Redux","Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind","Framer Motion"],
  },
  {
    title: "Social Media",
    image: project4,
    description:
      "A platform for creating and publishing  posts, with features like posting, commenting,sharing and user profiles.",
    technologies: ["HTML", "CSS", "React.js", "Express", "MongoDb","Tailwind","Socket.io"],
  },
];

export const CONTACT = {
  address: "Kalathingal(H) ,Manhappatta(PO),Manjeri,Kerala,India",
  phoneNo: "+91 9562568046 ",
  email: "nasvank7@gmail.com",
};

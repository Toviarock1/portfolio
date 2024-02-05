import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sidehustle,
  incubation,
  freelance,
  postgresql,
  jquery,
  bootstrap,
  burgerbuilder,
  basedata,
  techhub,
  machinelearningengineer,
  nemahairs,
  oceanease,
  bayelsaDreamQueen,
  princewill,
  onlyfans,
  makeInNigeria,
  campusRide,
  newsapp,
  monoFrontend,
  marziv,
  avatar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Frontend Developer intern",
    company_name: "SideHustle",
    icon: sidehustle,
    iconBg: "#383E56",
    date: "Jan 2021 - Apr 2021",
    points: [],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Sep 2021",
    points: [
      "Implemented enhancements that improved web functionality and responsiveness.",
      "Managed front-end development of client side.",
      "Worked closely with programmers to meet client project requirements, goals, and desired functionality.",
      "Coding of UI/UX designs into digital applications.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "BOI-UAT-TECH HUB",
    icon: incubation,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Dec 2022",
    points: [],
  },
  {
    title: "Full-stack Developer",
    company_name: "Maziv Technologies Limited",
    icon: marziv,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Simon for his exceptional work on my blog website. He delivered exactly what I envisioned, ensuring a seamless and functional experience. His expertise in web development is evident in the smooth performance of my blog. I'm thrilled with the results and appreciate his commitment to meeting my expectations.",
    name: "Faith Adama",
    designation: "CEO",
    company: "Nemahairs & Delicakes",
    image: avatar,
  },
  {
    testimonial:
      "I am thrilled to write this testimonial for Simon, an outstanding frontend web developer who has consistently exceeded my expectations. Working with Simon has been a game-changer for our project, and I cannot emphasize enough the impact he has had on the success of our product.",
    name: "Princewill Chima",
    designation: "UI/UX & Graphics designer",
    company: "Baji Brands",
    image: avatar,
  },
  {
    testimonial:
      "I have had the pleasure of working with Simon, and his  skills as a full stack developer are truly outstanding. his ability to seamlessly navigate both front-end and back-end development, coupled with a commitment to clean, efficient code, makes them an invaluable asset to any project. Simon is not just a talented developer but also a great team player.",
    name: "Seyi Ezekiel",
    designation: "Frontend Developer",
    company: "",
    image: avatar,
  },
];

const projects = [
  {
    name: "Burger Builder",
    description:
      "Burger builder is a web application where users can make a burger by choosing different ingredients and order it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: burgerbuilder,
    source_code_link: "https://github.com/Toviarock1/burger-builder",
    live_link: "https://react-my-burger-238eb.web.app/",
  },
  {
    name: "Campus Ride",
    description:
      "Campus Ride is a mobile application used for booking rides within schools",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
    ],
    image: campusRide,
    source_code_link: "https://github.com/Toviarock1/campus-ride",
    live_link: "",
  },
  {
    name: "React Native Newsapp",
    description:
      "React Native Newsapp is a mobile application that shows the current news",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/Toviarock1/react-native-newsapp",
    live_link: "",
  },
  {
    name: "Basedata",
    description:
      "A web app where you can Buy electricity and Affordable MTN Data Plan for your Smartphones, Tablets and Computers in Nigeria",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: basedata,
    source_code_link: "https://github.com/Toviarock1/basedata",
    live_link: "https://basedata.vercel.app/",
  },
  {
    name: "Tech Hub",
    description: "BOI-INCUBATION-CENTER web application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: techhub,
    source_code_link: "https://github.com/Toviarock1/techhub",
    live_link: false,
  },
  {
    name: "Nemahairs",
    description: "This is a blog based on Black Women/Men natural hair,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "sanity",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: nemahairs,
    source_code_link: "https://github.com/Toviarock1/nemahairs_blog",
    live_link: "https://www.nemahairs.com/",
  },
  {
    name: "Portfolio",
    description: "Machine Learning Engineer Portfolio",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: machinelearningengineer,
    source_code_link: "https://github.com/Toviarock1/daniel_adama",
    live_link: "https://danieladama.vercel.app/",
  },
  {
    name: "OceanEase",
    description:
      "Ocean-ease Ltd is a nigerian entity established to proride subsea services to the oil and gas industry.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: oceanease,
    source_code_link: "https://github.com/Toviarock1/oceanease",
    live_link: "https://oceanease.com.ng",
  },
  {
    name: "Bayelsa-dream-queen",
    description:
      'bayelsa-dream-queen is a website for contestants competing for the title "Bayelsa Dream Queen"',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: bayelsaDreamQueen,
    source_code_link: "https://github.com/Toviarock1/bayelsa-dream-queen",
    live_link:
      "https://bayelsa-dream-queen-zlza-jfrj7hxn5-toviarock1.vercel.app/",
  },
  {
    name: "Portfolio",
    description: "UI/UX & Graphics Designer portfolio",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: princewill,
    source_code_link: "https://github.com/Toviarock1/princewill-nextjs",
    live_link: "https://princewill-nextjs.vercel.app/",
  },
  {
    name: "make-in-nigeria",
    description: "Make in nigeria website",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: makeInNigeria,
    source_code_link: "https://github.com/Toviarock1/make-in-nigeria",
    live_link: "https://make-in-nigeria-mp89-bvl27y0d6-toviarock1.vercel.app",
  },
  {
    name: "Monofrontend",
    description: "Monofrontend dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: monoFrontend,
    source_code_link: "https://github.com/Toviarock1/make-in-nigeria",
    live_link: "https://make-in-nigeria-mp89-bvl27y0d6-toviarock1.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };

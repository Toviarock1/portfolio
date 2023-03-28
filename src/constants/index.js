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
  onlyfans,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'jQuery',
    icon: jquery,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
];

const experiences = [
  {
    title: 'Frontend Developer intern',
    company_name: 'SideHustle',
    icon: sidehustle,
    iconBg: '#383E56',
    date: 'Jan 2021 - Apr 2021',
    points: [],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Freelance',
    icon: freelance,
    iconBg: '#E6DEDD',
    date: 'Apr 2021 - Sep 2021',
    points: [
      'Implemented enhancements that improved web functionality and responsiveness.',
      'Managed front-end development of client side.',
      'Worked closely with programmers to meet client project requirements, goals, and desired functionality.',
      'Coding of UI/UX designs into digital applications.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'BOI-UAT-TECH HUB',
    icon: incubation,
    iconBg: '#E6DEDD',
    date: 'Feb 2022 - Dec 2022',
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Burger Builder',
    description:
      'Burger builder is a web application where users can make a burger by choosing different ingredients and order it.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: burgerbuilder,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Basedata',
    description:
      'A web app where you can Buy electricity and Affordable MTN Data Plan for your Smartphones, Tablets and Computers in Nigeria',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'green-text-gradient',
      },
    ],
    image: basedata,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Tech Hub',
    description: 'BOI-INCUBATION-CENTER web application',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: techhub,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Nemahairs',
    description: 'This is a blog based on Black Women/Men natural hair,',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'sanity',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
    ],
    image: nemahairs,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Portfolio',
    description: 'Machine Learning Engineer Portfolio',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: machinelearningengineer,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Onlyfans',
    description: 'Onlyfans landing page',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: onlyfans,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };

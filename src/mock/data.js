import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/uc?export=download&id=151G7N_ipg5DdEGxBvKwGnwwXG_dSyVfA', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Inertia',
    info: 'Using Machine Learning techniques, predict employee grades and assign them to relevant tasks. It was built using ReactJS, Django, and MongoDB. A configurable dashboard was utilized as the user interface to engage with our notion, and it was hosted on AWS.',
    info2: '',
    url: '',
    repo: 'https://github.com/Sihad-VictoR/Uni---Projects/tree/main/ReactJS%20%2B%20MongoDB%20%2B%20Django', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Premier League Management System',
    info: 'A league management system that manages the football club\'s details.Java, Angular and Play Framework were used in this and a simple text file is used as a database.',
    info2: '',
    url: '',
    repo: 'https://github.com/Sihad-VictoR/Uni---Projects/tree/main/Java%20%2B%20Angular%20%2B%20PLAY/Premier%20League%20Scorecard%20And%20Details', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Flick Attic',
    info: 'A mobile app  to store and review your favorite movies. Android- java was  used to implement  and sqllite3 was used as database.',
    info2: '',
    url: '',
    repo: 'https://github.com/Sihad-VictoR/Uni---Projects/tree/main/Android/FlickAttic', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sihaddepp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_sihd_0/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/mohammed.sihad/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/sihad-fareed-9886b9194/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Sihad-VictoR',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

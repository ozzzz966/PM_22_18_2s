import {Contacts, Education, HeaderInfo, Interest, Job, Reference, Skill} from './dto_interfaces';

export const skills: Skill[] = [
  {name:"Photoshop", percentage:70},
  {name:"Illustrator", percentage:75},
  {name:"Indesign", percentage:70},
  {name:"Word", percentage:85},
  {name:"PowerPoint", percentage:90}
];

export const jobs: Job[] = [
  {position: "Enter Job Position Here", date: "Present",company: "Company Name / Location", description:"Lorem ipsum dolor sit amet, this is a thena consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et"},
  {position: "Enter Job Position Here", date: "2015 - 2017",company: "Company Name / Location", description:"Lorem ipsum dolor sit amet, this is a thena consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et"},
]

export const education: Education[] = [
  {major: "ENTER YOUR MAJOR", university: "Name of Your University", years: "2005-2222"},
  {major: "ENTER YOUR MAJOR", university: "Name of Your University", years: "2222-2012"}
];

export const reference: Reference[] = [
  {name:"Glenin M. Gregory", position:"Director Marix Media ltd.", phone:"+555 123 454"},
  {name:"Jennifer S. Gavin", position:"Director Marix Media limited", phone:"+555 123 454"}
];

export const contacts: Contacts[] = [
  {icon:"assets/phone-icon.png", iconName:"assets/phone-icon.png", title:"PHONE", text: "+000 123 456 789" },
  {icon:"assets/email-icon.png", iconName:"assets/email-icon.png", title:"EMAIL", text: "urname@gmail.com" },
  {icon:"assets/location-icon.png", iconName:"assets/location-icon.png", title:"AREA", text: "Your Street Address Here" },
];

export const interests: Interest[] = [
  {name:"Travel", iconName:"Travel", img:"assets/travel.png"},
  {name:"Music", iconName:"Music", img:"assets/audio.png"},
  {name:"Writing", iconName:"Writing", img:"assets/document.png"},
  {name:"Chess", iconName:"Chess", img:"assets/chess.png"}
];

export const headerData: HeaderInfo =
  { img:"https://memi.klev.club/uploads/posts/2024-04/memi-klev-club-7xph-p-memi-rizhii-kotik-stoit-2.jpg",
    photoName: "Profile Photo",
    name: "Mathew",
    surname: "Smith",
    job: "Graphic & Web Designer",
    profile: "PROFILE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }

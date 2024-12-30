import zerone from '/assets/events/zerone.jpg';
import sf from '/assets/events/sf2025.jpg';
import hf from '/assets/events/hf2025.jpg';
import et from '/assets/events/electrotech.jpg';
import lostcomittee from '/assets/events/lostcommittee.jpg';
import research from '/assets/events/research.jpg';

import techaxis from '/assets/sponsors/TechAxis.svg';
import jobaxle from '/assets/sponsors/JobAxle.svg';
import yarshatech from '/assets/sponsors/yarshatech.jpeg';
import techkey from '/assets/sponsors/techkey.png';
import hardwarefellowship from '/assets/events/hardwarefellowship.png';
import SoftwareFellowship from '/assets/events/SoftwareFellowship.png';
import electrotech from '/assets/events/electrotech.png';
import CIT from '/assets/events/WIAxCIT.png';

export const eventsData = [
  {
    id: 1,
    title: "ZERONE-ONLINE-ARTICLE-WRITING-COMPETITION",
    date_and_time: {
      start_date: "December, 2024",
      end_date: "December 20, 2024",
      // time: "9:00 AM - 5:00 PM"
    },
    imgSrc: zerone,
    registration: {
      fee: 0,
      button_text: "Register Free/-"
    },
    event_type: {
      status: "Closed",
      mode: "Online",
      category: "Event"
    },
    prize: {
      prizePool: "Rs 30,000",
      popularChoicePrize: "Rs 4,500"
    },
    contacts: [
      {
        name: "Rohan Maharjan",
        phone: "8921767709"
      },
      
    ],
    description: "The Zerone Online Article Writing Competition is an exciting opportunity for writers to showcase their creativity and talent. Organized by Locus, this event invites participants to submit articles under different categories. It provides an excellent platform for budding writers to get their voices heard and potentially have their work published in the prestigious Zerone Magazine, the highlight of the LOCUS edition.\n\n" +
      "This year, the competition boasts an impressive total prize pool of Rs 30,000. Each category winner receives Rs 8,500, while the Popular Choice Award, recognizing the most-voted article, awards Rs 4,500. All winners will have their articles featured in the esteemed Zerone Magazine.",
    rules: "1. Individual participation only\n" +
      "2. Submissions must align with the selected category\n" +
      "3. Articles must be original and unpublished\n" +
      "4. Maximum word limit: 1500 words\n" +
      "5. Entries must be submitted before the deadline\n" +
      "6. Participants must adhere to the LOCUS Code of Conduct",
    sponsoredby: []
  },
  
  {
    id: 2,
    title: "SOFTWARE-FELLOWSHIP",
    date_and_time: {
      start_date: "July 16th, 2024",
      end_date: "July 27th, 2024",
      time: "9:00 AM - 5:00 PM"
    },
    imgSrc: SoftwareFellowship,
    registration: {
      fee: 200,
      button_text: "Register 200/-"
    },
    event_type: {
      status: "Closed",
      mode: "Offline",
      category: "Workshop"
    },
    prize: {
      prizePool: "",
      popularChoicePrize: ""
    },
    contacts: [
      {
        name: "Pratik Shrestha",
        phone: "9840667466"
      },
      {
        name: "Divya Karki",
        phone: "9863867235"
      },
      
    ],
    description: "The Locus Committee's Software Fellowship is a comprehensive workshop series providing deep insights into modern technologies. This intensive program covers:\n\n" +
      "• Web Development: HTML, CSS, JavaScript, React\n" +
      "• UI/UX Design: Figma\n" +
      "• Backend Development: Databases, APIs\n" +
      "• Data Science & AI: Python, Machine Learning\n\n" +
      "Participants benefit from:\n" +
      "• Hands-on project experience\n" +
      "• Industry expert mentorship\n" +
      "• Networking opportunities\n" +
      "• Access to latest tools and technologies\n" +
      "• Professional development resources",
    rules: "1. Regular attendance is mandatory\n" +
      "2. Participants must bring their own laptops\n" +
      "3. Prior basic programming knowledge recommended\n" +
      "4. Active participation in projects required\n" +
      "5. Code of conduct must be followed",
    sponsoredby: [
      {
        name: "TechAxis",
        image: techaxis
      },
      {
        name: "JobAxle",
        image: jobaxle
      }
    ]
  },
  {
    id: 3,
    title: "HARDWARE-FELLOWSHIP",
    date_and_time: {
      start_date: "July 5th, 2024",
      end_date: "July 12th, 2024",
      time: "9:00 AM - 5:00 PM"
    },
    imgSrc: hardwarefellowship,
    registration: {
      fee: 800,
      button_text: "Register 800/-"
    },
    event_type: {
      status: "Closed",
      mode: "Offline",
      category: "Workshop"
    },
    prize: {
      prizePool: "",
      popularChoicePrize: ""
    },
    contacts: [
      {
        name: "Aarjan Budhathoki",
        phone: "9821825820"
      },
      
    ],
    description: "The Hardware Fellowship by LOCUS provides an intensive hands-on experience in electronics and hardware fundamentals.\n\n" +
      "Program Highlights:\n" +
      "• Electronics fundamentals and practical applications\n" +
      "• Microcontroller programming (Arduino)\n" +
      "• Sensor integration and control systems\n" +
      "• Autonomous bot development\n" +
      "• Project-based learning approach\n\n" +
      "This initiative bridges the gap between theoretical knowledge and practical application, fostering creativity, teamwork, and innovation among students. Participants gain hands-on experience in building circuits, working with microcontrollers, and developing real-world projects.\n\n" +
      "The fellowship creates a collaborative environment where students can learn, experiment, and grow their technical skills under expert guidance.",
    rules: "1. Mandatory attendance for all sessions\n" +
      "2. Basic electronics knowledge preferred\n" +
      "3. Personal laptop required\n" +
      "4. Active participation in project work\n" +
      "5. Safety protocols must be followed in labs\n" +
      "6. Team collaboration is encouraged",
    sponsoredby: [{
      name:"Yarshatech",
      image:yarshatech 
    },
  {
    name:"Techkey",
    image:techkey
  }]
  },

  {
    id: 4,
    title: "ELECTRO-TECH-WEEK",
    date_and_time: {
      start_date: "21st July,2024",
      end_date: "27 July,2024",
      time: "9:00 AM - 5:00 PM"
    },
    imgSrc: electrotech,
    registration: {
      fee: 450,
      button_text: "Register fee 450/-"
    },
    event_type: {
      status: "Closed",
      mode: "Offline",
      category: "Workshop"
    },
    prize: {
      prizePool: "Prize-Pool -",
      popularChoicePrize: ""
    },
    contacts: [
      {
        name: "Pursottam Thakur",
        phone: "9803288790"
      },
      
    ],
    description: "Electro Tech Week, organized by LOCUS, is an annual event that brings together tech enthusiasts, professionals, and learners to explore cutting-edge technologies.\n\n" +
      "Key Features:\n" +
      "• Expert-led discussions and hands-on learning\n" +
      "• MATLAB simulation techniques workshop\n" +
      "• PLC (Programmable Logic Controllers) projects\n" +
      "• Advanced circuits optimization\n" +
      "• Buck-boost converter optimization sessions\n\n" +
      "This event provides participants with practical experience and knowledge essential for staying competitive in the rapidly evolving tech landscape. Through hands-on sessions and expert guidance, attendees gain valuable insights into technologies driving innovation.",
    rules: "1. Basic knowledge of electronics recommended\n" +
      "2. Laptop required with MATLAB installed\n" +
      "3. Regular attendance mandatory\n" +
      "4. Active participation in practical sessions\n" +
      "5. Safety protocols must be followed during hardware sessions",
    sponsoredby: []
  },
  ];

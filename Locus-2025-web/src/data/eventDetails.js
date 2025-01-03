import zerone from "/assets/events/zerone.jpg";
import techaxis from "/assets/sponsors/TechAxis.svg";
import jobaxle from "/assets/sponsors/JobAxle.svg";
import yarshatech from "/assets/sponsors/yarshatech.jpeg";
import techkey from "/assets/sponsors/techkey.png";
import LogicTronic from "/assets/sponsors/Logictronix-trans.png";
import miraiglobal from "/assets/sponsors/mirai.png";
import gizLogo from "/assets/sponsors/GIZ_logo.jpg";
import hardwarefellowship from "/assets/events/hardwarefellowship.png";
import SoftwareFellowship from "/assets/events/SoftwareFellowship.png";
import electrotech from "/assets/events/electrotech.png";
import girlsfutsal from "/assets/events/Girls-Futsal.png";
import energy from "/assets/events/Energy-Hackathon.png";
import hackaweek from "/assets/events/Hack-A-Week.png";
import fpga from "/assets/events/FPGA.png";
import Itonics from "/assets/sponsors/itonics-light.svg";
import CIT from "/assets/events/WIAxCIT.png";

export const eventsData = [
  {
    id: 1,
    title: "ZERONE-ONLINE-ARTICLE-WRITING-COMPETITION",
    date_and_time: {
      start_date: "December 20, 2024",
      end_date: "December 20, 2024",
      // time: "9:00 AM - 5:00 PM"
    },
    imgSrc: zerone,
    registration: {
      fee: 0,
      button_text: "Register Free/-",
    },
    event_type: {
      status: "Closed",
      mode: "Online",
      category: "Event",
    },
    prize: {
      prizePool: "Rs 30,000",
      popularChoicePrize: "Rs 4,500",
    },
    contacts: [
      {
        name: "Rohan Maharjan",
        phone: "8921767709",
      },
    ],
    description:
      "The Zerone Online Article Writing Competition is an exciting opportunity for writers to showcase their creativity and talent. Organized by Locus, this event invites participants to submit articles under different categories. It provides an excellent platform for budding writers to get their voices heard and potentially have their work published in the prestigious Zerone Magazine, the highlight of the LOCUS edition.\n\n" +
      "This year, the competition boasts an impressive total prize pool of Rs 30,000. Each category winner receives Rs 8,500, while the Popular Choice Award, recognizing the most-voted article, awards Rs 4,500. All winners will have their articles featured in the esteemed Zerone Magazine.",
    rules:
      "1. Individual participation only\n" +
      "2. Submissions must align with the selected category\n" +
      "3. Articles must be original and unpublished\n" +
      "4. Maximum word limit: 1500 words\n" +
      "5. Entries must be submitted before the deadline\n" +
      "6. Participants must adhere to the LOCUS Code of Conduct",
    sponsoredby: [],
  },

  {
    id: 2,
    title: "SOFTWARE-FELLOWSHIP",
    date_and_time: {
      start_date: "July 16th, 2024",
      end_date: "July 27th, 2024",
      time: "9:00 AM - 5:00 PM",
    },
    imgSrc: SoftwareFellowship,
    registration: {
      fee: 200,
      button_text: "Register 200/-",
    },
    event_type: {
      status: "Closed",
      mode: "Offline",
      category: "Workshop",
    },
    prize: {
      prizePool: "",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Pratik Shrestha",
        phone: "9840667466",
      },
      {
        name: "Divya Karki",
        phone: "9863867235",
      },
    ],
    description:
      "The Locus Committee's Software Fellowship is a comprehensive workshop series providing deep insights into modern technologies. This intensive program covers:\n\n" +
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
    rules:
      "1. Regular attendance is mandatory\n" +
      "2. Participants must bring their own laptops\n" +
      "3. Prior basic programming knowledge recommended\n" +
      "4. Active participation in projects required\n" +
      "5. Code of conduct must be followed",
    sponsoredby: [
      {
        name: "TechAxis",
        image: techaxis,
      },
      {
        name: "JobAxle",
        image: jobaxle,
      },
    ],
  },
  {
    id: 3,
    title: "HARDWARE-FELLOWSHIP",
    date_and_time: {
      start_date: "July 5th, 2024",
      end_date: "July 12th, 2024",
      time: "9:00 AM - 5:00 PM",
    },
    imgSrc: hardwarefellowship,
    registration: {
      fee: 800,
      button_text: "Register 800/-",
    },
    event_type: {
      status: "Closed",
      mode: "Offline",
      category: "Workshop",
    },
    prize: {
      prizePool: "",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Aarjan Budhathoki",
        phone: "9821825820",
      },
    ],
    description:
      "The Hardware Fellowship by LOCUS provides an intensive hands-on experience in electronics and hardware fundamentals.\n\n" +
      "Program Highlights:\n" +
      "• Electronics fundamentals and practical applications\n" +
      "• Microcontroller programming (Arduino)\n" +
      "• Sensor integration and control systems\n" +
      "• Autonomous bot development\n" +
      "• Project-based learning approach\n\n" +
      "This initiative bridges the gap between theoretical knowledge and practical application, fostering creativity, teamwork, and innovation among students. Participants gain hands-on experience in building circuits, working with microcontrollers, and developing real-world projects.\n\n" +
      "The fellowship creates a collaborative environment where students can learn, experiment, and grow their technical skills under expert guidance.",
    rules:
      "1. Mandatory attendance for all sessions\n" +
      "2. Basic electronics knowledge preferred\n" +
      "3. Personal laptop required\n" +
      "4. Active participation in project work\n" +
      "5. Safety protocols must be followed in labs\n" +
      "6. Team collaboration is encouraged",
    sponsoredby: [
      {
        name: "Yarshatech",
        image: yarshatech,
      },
      {
        name: "Techkey",
        image: techkey,
      },
    ],
  },

  {
    id: 4,
    title: "ELECTRO-TECH-WEEK",
    date_and_time: {
      start_date: "21st July,2024",
      end_date: "27 July,2024",
      time: "9:00 AM - 5:00 PM",
    },
    imgSrc: electrotech,
    registration: {
      fee: 450,
      button_text: "Register fee 450/-",
    },
    event_type: {
      status: "Closed",
      mode: "Offline",
      category: "Workshop",
    },
    prize: {
      prizePool: "Prize-Pool -",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Pursottam Thakur",
        phone: "9803288790",
      },
    ],
    description:
      "Electro Tech Week, organized by LOCUS, is an annual event that brings together tech enthusiasts, professionals, and learners to explore cutting-edge technologies.\n\n" +
      "Key Features:\n" +
      "• Expert-led discussions and hands-on learning\n" +
      "• MATLAB simulation techniques workshop\n" +
      "• PLC (Programmable Logic Controllers) projects\n" +
      "• Advanced circuits optimization\n" +
      "• Buck-boost converter optimization sessions\n\n" +
      "This event provides participants with practical experience and knowledge essential for staying competitive in the rapidly evolving tech landscape. Through hands-on sessions and expert guidance, attendees gain valuable insights into technologies driving innovation.",
    rules:
      "1. Basic knowledge of electronics recommended\n" +
      "2. Laptop required with MATLAB installed\n" +
      "3. Regular attendance mandatory\n" +
      "4. Active participation in practical sessions\n" +
      "5. Safety protocols must be followed during hardware sessions",
    sponsoredby: [],
  },
  {
    id: 5,
    title: "GIRLS FUTSAL",
    date_and_time: {
      start_date: "December 23th, 2024",
      end_date: "December 24th, 2024",
      time: "Morning Shift: 7:30 AM - 9:30 AM, Evening Shift: 4:00 PM - 6:00 PM and 5:00 PM - 7:00 PM",
    },
    imgSrc: girlsfutsal,
    registration: {
      fee: 0,
      button_text: "Register Free",
    },
    event_type: {
      status: "Closed",
      mode: "Offline",
      category: "Event",
    },
    prize: {
      prizePool: "Prizepool : Rs 10,000",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Kashish Bataju",
        phone: "9817172888",
      },
      {
        name: "Roshni Poudel",
        phone: "9841181571",
      },
    ],
    description:
      "The Girls Futsal Tournament is an engaging sports event promoting teamwork, competition, and physical fitness. Held at Pulchowk Campus, this four-day event features exciting matches designed for female players to showcase their skills and passion for football.\n\n" +
      "Event Highlights:\n" +
      "• Morning and evening shifts to accommodate participants\n" +
      "• A fun and inclusive environment for players\n" +
      "• A chance to connect and compete with other teams\n\n" +
      "The tournament is free for all participants, fostering a spirit of community and active engagement in sports. Players can look forward to a memorable experience on the field, cheered on by enthusiastic supporters.",
    rules:
      "1. Teams must arrive 15 minutes before their scheduled matches.\n" +
      "2. Players are responsible for their equipment.\n" +
      "3. Teams should adhere to fair play and sportsmanship.\n" +
      "4. The organizing committee reserves the right to make final decisions on disputes.\n" +
      "5. Matches will be conducted according to standard futsal rules.",
    registration_link: "https://bit.ly/GirlsFutsal2025",
    sponsoredby: [
      {
        name: "Mirai Global",
        image: miraiglobal,
      },
    ],
  },
  {
    id: 6,
    title: "NATIONAL FPGA DESIGN COMPETITION",
    date_and_time: {
      start_date: "December 30th, 2024",
      end_date: "January 23rd, 2025",
      time: "January 23rd, 2025 (Full Day Hackathon)",
    },
    imgSrc: fpga,
    registration: {
      fee: 0,
      button_text: "Register Free",
    },
    event_type: {
      status: "Active",
      mode: "Offline",
      category: "Competition",
    },
    prize: {
      prizePool: "Prizepool : Rs 32000 & Internships/Training + Certificates",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Aarjan Budhathoki",
        phone: "9745357170",
      },
      {
        name: "LogicTronic",
        phone: "9841078525",
      },
    ],
    description:
      "The National FPGA Design Competition invites participants to showcase their skills in FPGA design and development. Held at Pulchowk Campus, the event concludes with a Full Day Hackathon on January 23rd, 2025.\n\n" +
      "Event Highlights:\n" +
      "• Design and implement innovative FPGA-based solutions\n" +
      "• Compete for cash prizes, internships, and training opportunities\n" +
      "• Gain recognition and certifications for exceptional performance\n\n" +
      "This competition is a platform for FPGA enthusiasts to demonstrate their expertise, connect with industry professionals, and explore exciting opportunities in the field of hardware design.",
    rules: "",
    registration_link:
      "https://bit.ly/FPGA_Design_Competition_Locus2025_Logictronix",
    sponsoredby: [
      {
        name: "LogicTronix Technologies",
        image: LogicTronic,
      },
    ],
  },
  {
    id: 7,
    title: "HACK-A-WEEK",
    date_and_time: {
      start_date: "January 7th, 2025",
      end_date: "",
      time: "TBA",
    },
    imgSrc: hackaweek,
    registration: {
      fee: "TBA",
      button_text: "Register Now",
    },
    event_type: {
      status: "Active",
      mode: "Offline",
      category: "Hackathon",
    },
    prize: {
      prizePool: "Prizepool : Rs 1,00,000",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Pratik Tharu",
        phone: "9812414094",
      },
      {
        name: "Prasun Sitaula",
        phone: "9824014450",
      },
      {
        name: "Susheel Thapa",
        phone: "9816227392",
      },
    ],
    description:
      "Hack-a-week is an innovative and collaborative event where participants team up to brainstorm, design, and develop cutting-edge solutions to real-world challenges. Taking place at Pulchowk Campus, this hackathon is an excellent opportunity to network, innovate, and compete for exciting prizes.\n\n" +
      "Event Highlights:\n" +
      "• A week of intensive brainstorming and project development\n" +
      "• Showcase your technical skills and creativity\n" +
      "• Compete for a grand prize of Rs. 1 Lakh\n\n" +
      "Hack-a-week offers a platform for tech enthusiasts to collaborate, experiment, and bring their ideas to life in a vibrant and competitive environment.",
    rules:
      "1. Team size and participation guidelines will be announced prior to the event.\n" +
      "2. Teams must adhere to the project submission deadline.\n" +
      "3. Participants are encouraged to bring their own laptops and equipment.\n" +
      "4. Organizers reserve the right to disqualify teams for rule violations.",
    registration_link: "https://bit.ly/Hack-A-Week_LOCUS2025",
    sponsoredby: [
      {
        name: "Itonics",
        image: Itonics,
      },
    ],
  },
  {
    id: 8,
    title: "Energy Hackathon",
    date_and_time: {
      start_date: "2081-09-22",
      end_date: "2081-09-29",
      time: "10 am onwards",
    },
    imgSrc: energy,
    registration: {
      fee: "Rs 1000",
      button_text: "Register Now",
    },
    event_type: {
      status: "Active",
      mode: "Offline",
      category: "event",
    },
    prize: {
      prizePool: "Prizepool : Rs 80,000",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Shashi Adhikari",
        phone: "9864503030",
      },
      {
        name: "Nitiz Khanal",
        phone: "9844097563",
      },
    ],
    description:
      "The Energy Hackathon is a dynamic event focused on creating innovative energy solutions. Participants will engage in a 7-day intensive hackathon featuring mentoring sessions held at the Library Hall, Pulchowk Campus. Compete for the grand prize of Rs 80,000 and gain invaluable experience in collaboration and innovation.\n\n" +
      "Event Highlights:\n" +
      "• A week of guided project development and innovation\n" +
      "• Networking opportunities with industry experts\n" +
      "• Compete for a grand prize of Rs. 80,000\n\n" +
      "Energy Hackathon provides a unique platform for enthusiasts to tackle real-world energy challenges, collaborate with peers, and showcase their expertise in a competitive setting.",
    rules:
      "1. Teams can consist of up to 4 members.\n" +
      "2. Projects must align with the provided themes and adhere to deadlines.\n" +
      "3. Participants must bring their own laptops and required equipment.\n" +
      "4. Organizers may disqualify teams for non-compliance with the rules.",
    registration_link:
      "https://docs.google.com/forms/d/1Ec1v19OcbV5u9AW_ZVGcNshDWRRqc-RoX_Y1DQ0Irus/edit",
    sponsoredby: [
      {
        name: "GIZ",
        image: gizLogo,
      },
    ],
  },
];

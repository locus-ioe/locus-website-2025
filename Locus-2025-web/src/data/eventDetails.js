import zerone from '/assets/events/zerone.jpg';
import sf from '/assets/events/sf2025.jpg';
import hf from '/assets/events/hf2025.jpg';
import et from '/assets/events/electrotech.jpg';
import lostcomittee from '/assets/events/lostcommittee.jpg';
import research from '/assets/events/research.jpg';

export const events = [
  {
    id: 1,
    title: "LOCUS 2025 COMMITTEE",
    date: "2024-2025",
    imgSrc: lostcomittee,
    price: "Free",
    time: "Throughout the Year",
    mode: "Offline",
    type: "Organization",
    description: "The dedicated Locus Committee, composed of passionate students from Computer, Electronics and Electrical engineering departments, has worked tirelessly to bring this event to life. Their enthusiasm and innovative spirit are clear in every aspect of LOCUS 2025, making it a truly remarkable experience for everyone involved.\n\n" +
      "Key Contributions:\n" +
      "• Organization of workshops and competitions\n" +
      "• Exhibition preparation and management\n" +
      "• Technical event coordination\n" +
      "• Community building initiatives\n\n" +
      "The committee members have demonstrated exceptional dedication, creating not just a platform for innovation but fostering a vibrant community among young technologists.",
    rules:
      "1. Active participation in event planning and execution\n" +
      "2. Regular attendance at committee meetings\n" +
      "3. Collaboration with other departments\n" +
      "4. Maintaining professional conduct\n" +
      "5. Contributing to technical and creative aspects"
  },
  {
    id: 2,
    title: "SPEED FREAK",
    date: "April 5",
    imgSrc: research,
    price: "30/-",
    winner: 1500,
    runnerup: 1000,
    time: "9:00 AM - 5:00 PM",
    mode: "Offline",
    type: "Individual",
    description: "Speed Freak is an exciting competition where participants showcase their technical skills and innovative thinking in a time-bound environment.",
    rules: "1. Time limit strictly enforced\n2. Individual participation only\n3. Bring your own laptops"
  },
  {
    id: 3,
    title: "SOFTWARE FELLOWSHIP",
    date: "July 16th - 27th, 2024",
    imgSrc: sf,
    price: "Free",
    time: "9:00 AM - 5:00 PM",
    mode: "Offline",
    type: "Workshop Series",
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
      "5. Code of conduct must be followed"
  },
  {
  id: 4,
    title: "ELECTRO TECH WEEK",
    date: "2024",
    imgSrc: et,
    price: "Free",
    time: "9:00 AM - 5:00 PM",
    mode: "Offline",
    type: "Workshop Series",
    description: "Electro Tech Week, organized by LOCUS, is an annual event that brings together tech enthusiasts, professionals, and learners to explore cutting-edge technologies.\n\n" +
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
      "5. Safety protocols must be followed during hardware sessions"
  },
  {
    id: 5,
    title: "ZERONE ONLINE ARTICLE WRITING COMPETITION",
    date: "April 6",
    imgSrc: zerone,
    price: "Free",
    prizePool: "Rs 30,000",
    popularChoicePrize: "Rs 4,500",
    time: "9:00 AM - 5:00 PM",
    mode: "Online",
    type: "Individual",
    description: "The Zerone Online Article Writing Competition is an exciting opportunity for writers to showcase their creativity and talent. Organized by Locus, this event invites participants to submit articles under different categories. It provides an excellent platform for budding writers to get their voices heard and potentially have their work published in the prestigious Zerone Magazine, the highlight of the LOCUS edition.\n\n" +
      "This year, the competition boasts an impressive total prize pool of Rs 30,000. Each category winner receives Rs 8,500, while the Popular Choice Award, recognizing the most-voted article, awards Rs 4,500. All winners will have their articles featured in the esteemed Zerone Magazine.",
    rules:
      "1. Individual participation only\n" +
      "2. Submissions must align with the selected category\n" +
      "3. Articles must be original and unpublished\n" +
      "4. Maximum word limit: 1500 words\n" +
      "5. Entries must be submitted before the deadline\n" +
      "6. Participants must adhere to the LOCUS Code of Conduct"
  },
  
  {
    id: 6,
    title: "HARDWARE FELLOWSHIP",
    date: "July 5th - July 12th, 2024",
    imgSrc: hf,
    price: "Free",
    time: "9:00 AM - 5:00 PM",
    mode: "Offline",
    type: "Workshop Series",
    description: "The Hardware Fellowship by LOCUS provides an intensive hands-on experience in electronics and hardware fundamentals.\n\n" +
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
      "6. Team collaboration is encouraged"
  }
];
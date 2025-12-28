// import zerone from "/assets/events/zerone.jpg";
import techaxis from "/assets/sponsors/TechAxis.svg";
import jobaxle from "/assets/sponsors/JobAxle.svg";
import yarshatech from "/assets/sponsors/yarshatech.jpeg";
import techkey from "/assets/sponsors/techkey.png";
import LogicTronic from "/assets/sponsors/Logictronix-trans.png";
import miraiglobal from "/assets/sponsors/mirai.png";
import gizLogo from "/assets/sponsors/GIZ_logo.jpg";
import codejam from "/assets/events/codejam.png";
import cybershield from "/assets/events/cybershield.png";
import dataverse from "/assets/events/dataverse.png";
import energy from "/assets/events/energyhackathon.png";
import hackaweek from "/assets/events/hackaweek.png";
import exhibition from "/assets/events/exhibition.png";
import flashmob from "/assets/events/flashmob.png";
import girlslocuscup from "/assets/events/girlslocuscup.png";
import girlstocode from "/assets/events/girlstocode.png";
import walkathon from "/assets/events/walkathon.png";
import hardwarefellowship from "/assets/events/hardwarefellowship.png";
import niural from "/assets/sponsors/niural.png";
// import SoftwareFellowship from "/assets/events/SoftwareFellowship.png";
// import electrotech from "/assets/events/electrotech.png";
// import girlsfutsal from "/assets/events/Girls-Futsal.png";
// import fpga from "/assets/events/FPGA.png";

import Itonics from "/assets/sponsors/itonics-light.svg";
import neek from "/assets/sponsors/NEEK-logo.png";
import rerl from "/assets/sponsors/undp_logo.png";
import nea from "/assets/sponsors/Logo-NEAEC.png";
import thecomputerclub from "/assets/sponsors/thecomputerclub.png";
import nestnepal from "/assets/sponsors/nestnepal.png";

export const eventsData = [
  {
    id: 4,
    title: "HARDWARE-FELLOWSHIP",
    date_and_time: {
      start_date: "Poush 20, 2082",
      end_date: "Poush 26, 2082",
      time: "9:00 AM - 5:00 PM",
    },
    imgSrc: "https://drive.google.com/uc?export=view&id=1WR6D4l6MmXZj05h88YHxPgw-CDIzE_3h",
    registration: {
      fee: 800,
      button_text: "Register 800/-",
    },
    event_type: {
      // status: "Closed",
      mode: "Offline",
      category: "Workshop",
    },
    prize: {
      prizePool: "",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Aashutosh Pandey",
        phone: "9804875975",
      },
            {
        name: "Nandani Sah",
        phone: "9706389046",
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
    ],
  },

  {
    id: 3,
    title: "CYBER SHIELD",
    date_and_time: {
      start_date: "Poush 24, 2082",
      end_date: "Poush 28, 2082",
      time: "8:00 AM - 10:00 AM | 3:00 PM - 5:00 PM"
    },
    imgSrc: cybershield,
    registration: {
      fee: 0,
      button_text: "Coming Soon/-",
    },
    event_type: {
      // status: "Closed",
      mode: "Online",
      category: "Event",
    },
    prize: {
      prizePool: "Venu will be announced soon",
    },
    contacts: [
      {
        name: "Aashish Karki",
        phone: "9862021531",
      },
      {
        name: "Ashim Sapkota",
        phone: "9846567535",
      },
    ],
    description:
      "CyberShield is a pre-event of LOCUS-2026, the 22nd National Technological Festival. " +
      "It is a newly introduced, 4-day intensive workshop designed as a platform for students to step into the world of cybersecurity, ethical hacking, and digital defense.\n\n" +
      "The event aims to introduce university students to the dynamic world of cybersecurity through immersive learning. " +
      "Participants will learn to identify threats, protect systems, and strengthen their cyber resilience by covering topics like:\n" +
      "• Cybersecurity Fundamentals and Threat Landscape\n" +
      "• Network Scanning, Common Network Vulnerabilities, and Attack Surface Analysis\n" +
      "• OWASP Top 10, Exploiting/Fixing Vulnerabilities, and Secure Coding\n" +
      "• Digital Forensics, Incident Response, and Log Analysis\n\n" +
      "Why join?\n" +
      "• Gain hands-on experience with professional security tools\n" +
      "• Collaborate on defense strategies\n" +
      "• Explore real-world cybersecurity threats\n" +
      "• Enhance technical understanding of cybersecurity\n" +
      "• Participate in a multi-round Capture-the-Flag (CTF) Challenge",
    rules:
      "1. Organizer: LOCUS 2026, Nepal's largest student-led national tech festival\n" +
      "2. Duration: 4 days, from Poush 24 to Poush 28, 2082\n" +
      "3. Venue: To be announced\n" +
      "4. Eligibility: Open to students from engineering, CSIT, and applied science backgrounds\n" +
      "5. Schedule: Sessions will be held in three shifts: Morning (8:00 AM to 10:00 AM) and Evening (3:00 PM to 5:00 PM)",
    sponsoredby: [],
  },

  {
    id: 6,
    title: "GIRLS LOCUS CUP",
    date_and_time: {
      start_date: "13th Poush, 2082",
      end_date: "15th Poush, 2082",
      time: "Morning Shift: 7:30 AM - 9:30 AM, Evening Shift: 4:00 PM - 6:00 PM and 5:00 PM - 7:00 PM",
    },
    imgSrc: girlslocuscup,
    registration: {
      fee: 0,
      button_text: "Register Free",
    },
    event_type: {
      // status: "Closed",
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
    id: 7,
    title: "HACK-A-WEEK",
    date_and_time: {
      start_date: "Poush 17th, 2082",
      end_date: "Poush 23nd, 2082",
      time: "TBA",
    },
    imgSrc: hackaweek,
    registration: {
      fee: "300 per person",
      button_text: "Register Now",
    },
    event_type: {
      // status: "Closed",
      mode: "Offline",
      category: "Hackathon",
    },
    prize: {
      prizePool: "Prizepool : Rs 1,00,000",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Sadhana Panthi",
        phone: "9749847424",
      },
      {
        name: "Bishal Lamichhane",
        phone: "9864511097",
      },
    ],
    description:
      "Hack-a-week is an innovative and collaborative event where participants team up to brainstorm, design, and develop cutting-edge solutions to real-world challenges. Taking place at Pulchowk Campus, this hackathon is an excellent opportunity to network, innovate, and compete for exciting prizes.\n\n" +
      "Event Highlights:\n" +
      "• A week of intensive brainstorming and project development\n" +
      "• Showcase your technical skills and creativity\n" +
      "• Compete for a grand prize pool of Rs. 1 Lakh\n\n" +
      "Hack-a-week offers a platform for tech enthusiasts to collaborate, experiment, and bring their ideas to life in a vibrant and competitive environment.",
    rules:
      "1. Team size and participation guidelines will be announced prior to the event.\n" +
      "2. Teams must adhere to the project submission deadline.\n" +
      "3. Participants are encouraged to bring their own laptops and equipment.\n" +
      "4. Organizers reserve the right to disqualify teams for rule violations.",
    registration_link: "https://bit.ly/Hack-A-Week_LOCUS2025",
    sponsoredby: [
       {
        name: "Niural AI",
        image: niural,
      },
    ],
  },

  {
    id: 1,
    title: "CODE-JAM",
    date_and_time: {
      start_date: "Poush 25, 2082",
      // end_date: "Poush 26, 2082",
      // time: "9:00 AM - 5:00 PM"
    },
    imgSrc: codejam,
    registration: {
      fee: 0,
      button_text: "Register Free/-",
    },
    event_type: {
      // status: "Closed",
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
      "CodeJam is a pre-event of LOCUS-2026, the 22nd National Technological Festival, designed to bring together developers and programmers for a competitive and innovative challenge. " +
      "It is a platform where students dive into the art of problem-solving, algorithm design, and efficient coding.\n\n" +
      "The event involves a series of proceedings where technique and algorithm are used to evaluate the participant's expertise. Participants will tackle algorithmic challenges covering various domains such as:\n" +
      "• Graph theory\n" +
      "• Number theory\n" +
      "• Dynamic programming\n" +
      "• And more, with varying levels of difficulty\n\n" +
      "Why join?\n" +
      "• Sharpen your analytical skills and enhance programming proficiency\n" +
      "• Experience the thrill of competitive coding\n" +
      "• Encourage algorithmic thinking and problem solving\n" +
      "• Get a chance to bring your skill to grow and prosper personally\n" +
      "• Compete for exciting prizes",
    rules:
      "1. Competition Levels: The event has two levels for fair competition: Beginners (mainly for 1st and 2nd year students) and Advanced (for 3rd and 4th year students, and graduates are welcome)\n" +
      "2. Beginners' Task: Solve the problem in the allocated time; time and space complexity will not be taken into account\n" +
      "3. Advanced Task: Solve the problem in the allocated time constraint; Time and space complexity will be taken into account\n" +
      "4. Format: The competition will be conducted online using platforms such as VJudge\n" +
      "5. Scoring: Participants are ranked based on the number of correct solutions and the time taken to submit them\n" +
      "6. Evaluation: VJudge will automatically evaluate submissions and check for correctness and plagiarism\n" +
      "7. Penalties: Negative marking will be applied for wrong submissions",
    sponsoredby: [],
  },

  {
    id: 2,
    title: "GIRLS-TO-CODE",
    date_and_time: {
      start_date: "Poush 28th, 2082",
      end_date: "Poush 32th, 2082",
      time: "10:00 AM - 4:00 PM",
    },
    imgSrc: girlstocode,
    registration: {
      fee: 0,
      button_text: "Apply Now",
    },
    event_type: {
      // status: "Open",
      mode: "Offline",
      category: "Training Program",
    },
    prize: {
      prizePool: "",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Anisha Paudel",
        phone: "9860123456",
      },
      {
        name: "Ritika Lama",
        phone: "9812348912",
      },
    ],
    description:
      "GIRLS-TO-CODE is an empowering initiative designed to introduce girls to the world of programming. This beginner-friendly program helps participants build confidence and develop foundational tech skills. The curriculum includes:\n\n" +
      "• Programming basics (Python/JavaScript)\n" +
      "• Web development fundamentals\n" +
      "• Problem-solving through coding exercises\n" +
      "• Introduction to UI/UX design\n" +
      "• Mentorship sessions with women in tech\n\n" +
      "What participants gain:\n" +
      "• A supportive learning environment\n" +
      "• Hands-on mini-projects\n" +
      "• Guidance from experienced mentors\n" +
      "• Peer networking opportunities\n" +
      "• Certification upon completion",
    rules:
      "1. Only female participants are eligible\n" +
      "2. Basic computer knowledge recommended but not required\n" +
      "3. Participants must attend at least 80% of sessions\n" +
      "4. Bring your own laptop\n" +
      "5. Maintain respectful and inclusive behavior",
    sponsoredby: [],
  },

  // {
  //   id: 2,
  //   title: "SOFTWARE-FELLOWSHIP",
  //   date_and_time: {
  //     start_date: "July 16th, 2024",
  //     end_date: "July 27th, 2024",
  //     time: "9:00 AM - 5:00 PM",
  //   },
  //   imgSrc: SoftwareFellowship,
  //   registration: {
  //     fee: 200,
  //     button_text: "Register 200/-",
  //   },
  //   event_type: {
  //     status: "Closed",
  //     mode: "Offline",
  //     category: "Workshop",
  //   },
  //   prize: {
  //     prizePool: "",
  //     popularChoicePrize: "",
  //   },
  //   contacts: [
  //     {
  //       name: "Pratik Shrestha",
  //       phone: "9840667466",
  //     },
  //     {
  //       name: "Divya Karki",
  //       phone: "9863867235",
  //     },
  //   ],
  //   description:
  //     "The Locus Committee's Software Fellowship is a comprehensive workshop series providing deep insights into modern technologies. This intensive program covers:\n\n" +
  //     "• Web Development: HTML, CSS, JavaScript, React\n" +
  //     "• UI/UX Design: Figma\n" +
  //     "• Backend Development: Databases, APIs\n" +
  //     "• Data Science & AI: Python, Machine Learning\n\n" +
  //     "Participants benefit from:\n" +
  //     "• Hands-on project experience\n" +
  //     "• Industry expert mentorship\n" +
  //     "• Networking opportunities\n" +
  //     "• Access to latest tools and technologies\n" +
  //     "• Professional development resources",
  //   rules:
  //     "1. Regular attendance is mandatory\n" +
  //     "2. Participants must bring their own laptops\n" +
  //     "3. Prior basic programming knowledge recommended\n" +
  //     "4. Active participation in projects required\n" +
  //     "5. Code of conduct must be followed",
  //   sponsoredby: [
  //     {
  //       name: "TechAxis",
  //       image: techaxis,
  //     },
  //     {
  //       name: "JobAxle",
  //       image: jobaxle,
  //     },
  //   ],
  // },

  {
    id: 5,
    title: "DATAVERSE",
    date_and_time: {
      start_date: "Magh 1st, 2082",
      end_date: "Magh 3rd, 2082",
      time: "10:00 AM - 3:00 PM",
    },
    imgSrc: dataverse,
    registration: {
      fee: 200,
      button_text: "Register 200/-",
    },
    event_type: {
      // status: "Open",
      mode: "Offline",
      category: "Competition",
    },
    prize: {
      prizePool: "Rs. 12,000+",
      popularChoicePrize: "Audience Choice Award",
    },
    contacts: [
      {
        name: "Niraj Shahi",
        phone: "9801234567",
      },
      {
        name: "Sarina Maharjan",
        phone: "9845123488",
      },
    ],
    description:
      "DATAVERSE is a data-centric battle where participants dive into real-world datasets to extract insights, build predictive models, and tell compelling data stories. The competition focuses on:\n\n" +
      "• Data cleaning and preprocessing\n" +
      "• Exploratory data analysis\n" +
      "• Machine learning model building\n" +
      "• Evaluation metrics and optimization\n" +
      "• Data visualization and storytelling\n\n" +
      "Why participate?\n" +
      "• Work with real datasets\n" +
      "• Improve your ML & analytics skills\n" +
      "• Showcase your data storytelling abilities\n" +
      "• Win exciting prizes and recognition",
    rules:
      "1. Team size: 1–3 members\n" +
      "2. Participants must bring their own laptops\n" +
      "3. External datasets or pretrained models are not allowed\n" +
      "4. Submissions must include code, report, and final predictions\n" +
      "5. Plagiarism or copied notebooks will lead to disqualification",
    sponsoredby: [],
  },
  {
    id: 8,
    title: "Energy Hackathon",
    date_and_time: {
      start_date: "2082-09-04",
      end_date: "2082-09-08",
      time: "10 am onwards",
    },
    imgSrc: energy,
    registration: {
      fee: "Rs 1000",
      button_text: "Register Now",
    },
    event_type: {
      // status: "Closed",
      mode: "Offline",
      category: "event",
    },
    prize: {
      prizePool: "Prizepool : Rs 80,000",
      popularChoicePrize: "",
    },
    contacts: [
      {
        name: "Utsav Raj Karki",
        phone: "9862083508",
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
  },

  {
    id: 8,
    title: "Walkathon",
    date_and_time: {
      start_date: "2082-10-01",
      end_date: "2082-10-06",
      time: "10 am onwards",
    },
    imgSrc: walkathon,
    registration: {
      fee: "Rs 1000",
      button_text: "Register Now",
    },
    event_type: {
      // status: "Closed",
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
      {
        name: "NEEK",
        image: neek,
      },
      {
        name: "RERL",
        image: rerl,
      },
      {
        name: "NEA",
        image: nea,
      },
    ],
  },

  {
    id: 8,
    title: "Flashmob",
    date_and_time: {
      start_date: "2082-10-01",
      end_date: "2082-10-06",
      time: "10 am onwards",
    },
    imgSrc: flashmob,
    registration: {
      fee: "Rs 1000",
      button_text: "Register Now",
    },
    event_type: {
      // status: "Closed",
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
      {
        name: "NEEK",
        image: neek,
      },
      {
        name: "RERL",
        image: rerl,
      },
      {
        name: "NEA",
        image: nea,
      },
    ],
  },

  {
    id: 8,
    title: "LOCUS Exhibition",
    date_and_time: {
      start_date: "2082-10-01",
      end_date: "2082-10-06",
      time: "10 am onwards",
    },
    imgSrc: exhibition,
    registration: {
      fee: "Rs 1000",
      button_text: "Register Now",
    },
    event_type: {
      // status: "Coming Soon",
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
      {
        name: "NEEK",
        image: neek,
      },
      {
        name: "RERL",
        image: rerl,
      },
      {
        name: "NEA",
        image: nea,
      },
    ],
  },
];

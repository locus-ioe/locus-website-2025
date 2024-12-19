import React from 'react';
import {Link} from 'react-router-dom';

// Assuming these images are in the public folder
const sf = '/assets/events/sf2025.jpg';
const hf = '/assets/events/hf2025.jpg';
const et = '/assets/events/electrotech.jpg';

const events = [
  {
    title: "VELOCITY",
    date: "April 19",
    time: "10AM - 12PM",
    registrationFee: "₹20",
    prizes: ["1st Prize: 1K", "2nd Prize: 500"],
    image: sf,
  },
  {
    title: "SPEED FREAK",
    date: "April 20",
    time: "NA",
    registrationFee: "₹10",
    prizes: ["1st Prize: 1K", "2nd Prize: 500"],
    image: hf,
  },
  {
    title: "CYBER VERSE",
    date: "April 19",
    time: "11AM - 1PM",
    registrationFee: "FREE",
    prizes: ["1st Prize: 1K"],
    image: et,
  },
];

export default function Events() {
  return (
    <div className="text-center mt-12 md:mt-20">
      <h1 className="text-[#00ffcc] text-5xl md:text-7xl mb-10 md:mb-16">Locus Events</h1>
      <div className="flex justify-center flex-wrap gap-8 mb-12">
        {events.map((event, index) => (
          <div key={index} className="max-w-[381.45px] text-left">
            <img 
              src={event.image} 
              alt={event.title} 
              width={381} 
              height={214} 
              className="w-full rounded-lg"
            />
            {/* <h2 className="text-primary text-2xl my-2">{event.title}</h2>
            <p className="text-base my-1">{event.date}</p>
            <p className="text-base my-1">{event.time}</p>
            <p className="text-base my-1">Registration Fee: {event.registrationFee}</p>
            <ul className="list-none p-0 my-2">
              {event.prizes.map((prize, i) => (
                <li key={i} className="my-1">{prize}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
      <Link to="/events" className="inline-block px-6 py-2 text-white bg-[#00bcd4] rounded hover:bg-[#008c9e] transition-colors duration-300">
        Show More
      </Link>
    </div>
  );
}




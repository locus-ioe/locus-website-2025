import './EventsList.css';
import zerone from '/assets/events/zerone.jpg';
import sf from '/assets/events/sf2025.jpg'
import hf from '/assets/events/hf2025.jpg'
import et from '/assets/events/electrotech.jpg'
import lostcomittee from '/assets/events/lostcommittee.jpg'
import research from '/assets/events/research.jpg'
import { Link } from 'react-router-dom';

const events = [
  { id: 1, title: "VELOCITY", date: "April 4", imgSrc: lostcomittee },
  { id: 1, title: "SPEED FREAK", date: "April 5", imgSrc: research },
  { id: 1, title: "CYBER VERSE", date: "April 6", imgSrc: et },
  { id: 1, title: "CYBER VERSE", date: "April 6", imgSrc: sf },
  { id: 1, title: "CYBER VERSE", date: "April 6", imgSrc: zerone },
  { id: 6, title: "CYBER VERSE", date: "April 6", imgSrc: hf },
];

const EventsList = () => {
  return (
    <div className="text-center mt-12 md:mt-20 px-4 ">
      <h1 className="text-[#00ffcc] text-5xl md:text-7xl mb-3 md:mb-3"><span className="text-white">Locus</span> Events</h1>
      <div className="h-0.5 bg-[#00ffcc] w-[80%] mx-auto mb-10 md:mb-16"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="aspect-w-5 aspect-h-5 bg-gray-200">
              <img
                src={event.imgSrc}
                alt={`Event ${event.id}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
      {/* <Link
        to="/events"
        className="inline-block px-6 py-2 text-white bg-[#00bcd4] rounded hover:bg-[#008c9e] transition-colors duration-300"
      >
        Show More
      </Link> */}
    </div>
  );
};

export default EventsList;

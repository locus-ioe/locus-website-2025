import './EventsList.css';
import { Link } from 'react-router-dom';
import { events } from '../data/eventDetails';

const EventsList = () => {
  return (
    <div className="text-center mt-12 md:mt-20 px-4">
      <h1 className="text-[#00ffcc] text-5xl md:text-7xl mb-3 md:mb-3">
        <span className="text-white">Locus</span> Events
      </h1>
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
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
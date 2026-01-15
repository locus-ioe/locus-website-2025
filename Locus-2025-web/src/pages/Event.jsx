import EventsList from "../components/EventsList";
import MainEventsList from "../components/MainEventsList";
// import EventDescription from '../components/EventDescription'
const Event = () => {
  return (
    <>
      <MainEventsList />
      <EventsList />
    </>
    // <div><EventDescription /></div>
  );
};

export default Event;

import ProfileCard from "../components/about_page/ProfileCard";
import team_data from "../data/teams.json";

function Teams() {
  return (
    <div className="w-full max-w-[1148px] mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          <span className="text-[#48d0ff]">LOCUS Open Source</span> Team
        </h1>

        <div className="mt-6 mb-4">
          <hr className="border-gray-700" />
        </div>
      </div>

      {/* Team Members Section */}
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {team_data.map((person, index) => (
            <ProfileCard
              key={index}
              imageUrl={person.imageUrl}
              name={person.name}
              designation={person.designation}
              facebook={person.facebook}
              twitter={person.twitter}
              instagram={person.instagram}
              linkedin={person.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;

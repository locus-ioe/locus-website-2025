import ProfileCard from "../components/about_page/ProfileCard";
import teams from "../data/teams.json";
import creativeTeams from "../data/creative_teams.json";
import { useState } from "react";

function Teams() {
  const { locusTeam, hackaWeekTeam } = teams;
  const [selectedTeam, setSelectedTeam] = useState("contentWritingTeam");

  const creativeTeamsList = [
    {
      id: "contentWritingTeam",
      label: "Content Writing Team",
      data: creativeTeams.contentWritingTeam,
    },
    {
      id: "designTeamAlpha",
      label: "Design Team Alpha",
      data: creativeTeams.designTeamAlpha,
    },
    {
      id: "designTeamBeta",
      label: "Design Team Beta",
      data: creativeTeams.designTeamBeta,
    },
    {
      id: "designTeamDelta",
      label: "Design Team Delta",
      data: creativeTeams.designTeamDelta,
    },
    {
      id: "designTeamGamma",
      label: "Design Team Gamma",
      data: creativeTeams.designTeamGamma,
    },
    {
      id: "photographyTeam",
      label: "Photography Team",
      data: creativeTeams.photographyTeam,
    },
    {
      id: "shortContentCreatorTeam",
      label: "Short Content Creator Team",
      data: creativeTeams.shortContentCreatorTeam,
    },
    {
      id: "videoEditingTeam",
      label: "VideoEditing Team",
      data: creativeTeams.videoEditingTeam,
    },
  ];

  const currentTeam = creativeTeamsList.find((t) => t.id === selectedTeam);

  return (
    <div className="w-full max-w-[1148px] mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          <span className="text-[#48d0ff]">Our</span> Teams
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Meet the passionate individuals driving innovation and excellence
        </p>
        <div className="mt-6 mb-4">
          <hr className="border-gray-700" />
        </div>
      </div>

      {/* LOCUS Team */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#48d0ff]">LOCUS Open Source</span> Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {locusTeam.map((person, index) => (
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

      {/* Divider */}
      <div className="my-16">
        <hr className="border-gray-700" />
      </div>

      {/* Hack a Week Team */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#48d0ff]">Neural AI Hack a Week</span>{" "}
          Organizers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {hackaWeekTeam.map((person, index) => (
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

      {/* Divider */}
      <div className="my-16">
        <hr className="border-gray-700" />
      </div>

      {/* Creative Teams Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#48d0ff]">Creative</span> Teams
        </h2>

        {/* Team Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 justify-items-center max-w-4xl mx-auto">
          {creativeTeamsList.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team.id)}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 w-full max-w-xs ${
                selectedTeam === team.id
                  ? "bg-[#48d0ff] shadow-lg"
                  : "bg-[#2a3f5f] hover:bg-[#354a6f]"
              }`}
            >
              {team.label}
            </button>
          ))}
        </div>

        {/* Selected Team Members */}
        {currentTeam && (
          <>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="text-[#48d0ff]">{currentTeam.label}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {currentTeam.data.map((person, index) => (
                <ProfileCard
                  key={index}
                  imageUrl={person.imageUrl}
                  name={person.name}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Teams;

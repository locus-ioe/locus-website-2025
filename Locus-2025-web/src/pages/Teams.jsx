import ProfileCard from "../components/about_page/ProfileCard";
import teams from "../data/teams.json";
import creativeTeams from "../data/creative_teams.json";
import { useState } from "react";

function Teams() {
  const { locusTeam, hackaWeekTeam } = teams;
  const [selectedMainTeam, setSelectedMainTeam] = useState("locus");
  const [selectedCreativeTeam, setSelectedCreativeTeam] =
    useState("contentWritingTeam");

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
      label: "Video Editing Team",
      data: creativeTeams.videoEditingTeam,
    },
  ];

  const currentCreativeTeam = creativeTeamsList.find(
    (t) => t.id === selectedCreativeTeam,
  );

  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      {/* Header Section */}
      <div className='text-center mb-12 sm:mb-16 mt-8 sm:mt-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6'>
          <span className='text-white'>Our </span>
          <span className='text-[#48d0ff]'>Teams</span>
        </h1>
        <p className='text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto'>
          Meet the passionate individuals driving innovation and excellence
        </p>
        <div className='mt-6 sm:mt-8'>
          <div className='h-0.5 bg-[#48d0ff] w-4/5 sm:w-3/4 mx-auto'></div>
        </div>
      </div>

      {/* Main Team Selection */}
      <div className='flex justify-center gap-4 mb-12'>
        <button
          onClick={() => setSelectedMainTeam("locus")}
          className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
            selectedMainTeam === "locus"
              ? "bg-[#48d0ff] text-black shadow-md shadow-[#48d0ff]/20"
              : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
          }`}
        >
          LOST
        </button>
        <button
          onClick={() => setSelectedMainTeam("hackaweek")}
          className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
            selectedMainTeam === "hackaweek"
              ? "bg-[#48d0ff] text-black shadow-md shadow-[#48d0ff]/20"
              : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
          }`}
        >
          Hack a Week
        </button>
        <button
          onClick={() => setSelectedMainTeam("creative")}
          className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
            selectedMainTeam === "creative"
              ? "bg-[#48d0ff] text-black shadow-md shadow-[#48d0ff]/20"
              : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
          }`}
        >
          Creative Teams
        </button>
      </div>

      {/* LOCUS Team */}
      {selectedMainTeam === "locus" && (
        <div className='mb-16 sm:mb-24'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-12'>
            <span className='text-[#48d0ff]'>LOCUS Open Source</span>
            <span className='text-white'> Team</span>
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
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
      )}

      {/* Hack a Week Team */}
      {selectedMainTeam === "hackaweek" && (
        <div className='mb-16 sm:mb-24'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-12'>
            <span className='text-[#48d0ff]'>Neural AI Hack a Week</span>
            <span className='text-white'> Organizers</span>
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
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
      )}

      {/* Creative Teams Section */}
      {selectedMainTeam === "creative" && (
        <div className='mb-16 sm:mb-24'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-8 sm:mb-12'>
            <span className='text-[#48d0ff]'>Creative</span>
            <span className='text-white'> Teams</span>
          </h2>

          {/* Team Selection Buttons */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-5xl mx-auto'>
            {creativeTeamsList.map((team) => (
              <button
                key={team.id}
                onClick={() => setSelectedCreativeTeam(team.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white transition-all duration-300 transform hover:scale-105 ${
                  selectedCreativeTeam === team.id
                    ? "bg-[#48d0ff] shadow-md shadow-[#48d0ff]/20"
                    : "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700"
                }`}
              >
                {team.label}
              </button>
            ))}
          </div>

          {/* Selected Team Members */}
          {currentCreativeTeam && (
            <div className='space-y-8 sm:space-y-10'>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-center'>
                <span className='text-[#48d0ff]'>
                  {currentCreativeTeam.label}
                </span>
              </h3>
              {/* Display first member in single row for Design Team Beta */}
              {selectedCreativeTeam === 'designTeamBeta' && (
                <div className='flex justify-center mb-8'>
                  <ProfileCard
                    imageUrl={currentCreativeTeam.data[0].imageUrl}
                    name={currentCreativeTeam.data[0].name}
                    designation={currentCreativeTeam.data[0].designation}
                  />
                </div>
              )}
              {/* Display remaining team members */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {currentCreativeTeam.data.slice(selectedCreativeTeam === 'designTeamBeta' ? 1 : 0).map((person, index) => (
                  <ProfileCard
                    key={index}
                    imageUrl={person.imageUrl}
                    name={person.name}
                    designation={person.designation}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Teams;

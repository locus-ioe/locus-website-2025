import React from "react";
import sponsor_data from '../data/sponsor_data.json'

const Sponsors = () => {


  // Group sponsors by sponsor_title
  const groupedSponsors = sponsor_data.reduce((groups, sponsor) => {
    const { sponsor_title } = sponsor;
    if (!groups[sponsor_title]) {
      groups[sponsor_title] = [];
    }
    groups[sponsor_title].push(sponsor);
    return groups;
  }, {});

  return (
    <div className="text-center bg-black text-white py-10 px-6">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Locus <span className="text-teal-400">2025</span> Sponsors
        </h1>
      </div>

      {/* Iterate through sponsor groups */}
      {Object.keys(groupedSponsors).map((sponsor_title, index) => (
        <div key={index} className="mb-12">
          {/* sponsor_title Heading with Horizontal Bar */}
          <div className="relative flex items-center justify-center mb-6">
            <hr className="absolute w-full border-t-2 border-gray-600" />
            <h2 className="relative bg-black px-4 text-2xl md:text-3xl font-semibold text-teal-400">
              {sponsor_title}
            </h2>
          </div>

          {/* Responsive Sponsors Grid */}
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {groupedSponsors[sponsor_title].map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-6 w-full shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300 flex flex-col sm:flex-row items-center"
              >
                <a
                  href={sponsor.sponsorlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <img
                    src={sponsor.image}
                    alt={`${sponsor.name} image`}
                    className="w-32 h-32 object-contain rounded-md mb-4 sm:mb-0 sm:mr-6"
                  />
                </a>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-teal-400 mb-2">
                    {sponsor.sponsor_name}
                  </h3>
                  {sponsor.subtitle && (
                    <p className="text-gray-400 text-sm">{sponsor.subtitle}</p>
                  )}
                  <a
                    href={sponsor.sponsorlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-teal-300 hover:underline"
                  >
                    Visit Sponsor
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;

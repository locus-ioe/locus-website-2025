import React from "react";
import sponsor_data from '../data/sponsor_data.json'
import { ExternalLink } from "lucide-react";

const Sponsors = () => {
  const groupedSponsors = sponsor_data.reduce((groups, sponsor) => {
    const { sponsor_title } = sponsor;
    if (!groups[sponsor_title]) {
      groups[sponsor_title] = [];
    }
    groups[sponsor_title].push(sponsor);
    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Locus </span>
            <span className="text-[#48d0ff]">2026</span>
            <span className="text-white"> Sponsors</span>
          </h1>
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full" />
          </div>
        </div>

        {/* Sponsor Groups */}
        {Object.keys(groupedSponsors).map((sponsor_title, index) => (
          <div key={index} className="mb-16 sm:mb-20">
            {/* Category Title */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#48d0ff] tracking-tight">
                {sponsor_title}
              </h2>
              <div className="flex justify-center mt-4 sm:mt-6">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-[#48d0ff]/50 to-transparent w-1/2 sm:w-1/3 rounded-full" />
              </div>
            </div>

            {/* Sponsors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {groupedSponsors[sponsor_title].map((sponsor, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-b from-gray-900/90 to-gray-800/90 rounded-xl p-6 sm:p-8 border-2 border-gray-700/50 hover:border-[#48d0ff] transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,208,255,0.4)] hover:scale-105 flex flex-col items-center text-center"
                >
                  {/* Logo */}
                  <a
                    href={sponsor.sponsorlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6 transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.sponsor_name}
                      className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg"
                    />
                  </a>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#48d0ff] transition-colors duration-300">
                      {sponsor.sponsor_name}
                    </h3>
                    {sponsor.subtitle && (
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {sponsor.subtitle}
                      </p>
                    )}
                    <a
                      href={sponsor.sponsorlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-[#48d0ff]/10 border border-[#48d0ff]/40 text-[#48d0ff] text-sm font-semibold hover:bg-[#48d0ff] hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(72,208,255,0.5)]"
                    >
                      <span>{sponsor.sponsor_text || "Visit Website"}</span>
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

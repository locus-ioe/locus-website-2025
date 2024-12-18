import React from "react";

const Sponsors = () => {
  const sponsors = [
    {
      name: "TechAxis",
      tier: "Title Sponsor",
      amount: "Rs. 5,00,000",
      logo: "https://via.placeholder.com/150?text=TechAxis+Logo",
      link: "https://techaxisnepal.com",
    },
    {
      name: "Ncell",
      tier: "Gold Sponsor",
      logo: "https://via.placeholder.com/150?text=Ncell+Logo",
      link: "https://ncell.axiata.com",
    },
    {
      name: "Daraz",
      tier: "Gold Sponsor",
      logo: "https://via.placeholder.com/150?text=Daraz+Logo",
      link: "https://daraz.com.np",
    },
    {
      name: "eSewa",
      tier: "Gold Sponsor",
      logo: "https://via.placeholder.com/150?text=eSewa+Logo",
      link: "https://esewa.com.np",
    },
    {
      name: "Nepal Telecom",
      tier: "Silver Sponsor",
      logo: "https://via.placeholder.com/150?text=Nepal+Telecom+Logo",
      link: "https://ntc.net.np",
    },
    {
      name: "Himalayan Bank",
      tier: "Silver Sponsor",
      logo: "https://via.placeholder.com/150?text=Himalayan+Bank+Logo",
      link: "https://himalayanbank.com",
    },
    {
      name: "Vianet",
      tier: "Silver Sponsor",
      logo: "https://via.placeholder.com/150?text=Vianet+Logo",
      link: "https://vianet.com.np",
    },
    {
      name: "Khalti",
      tier: "Bronze Sponsor",
      logo: "https://via.placeholder.com/150?text=Khalti+Logo",
      link: "https://khalti.com",
    },
    {
      name: "Foodmandu",
      tier: "Bronze Sponsor",
      logo: "https://via.placeholder.com/150?text=Foodmandu+Logo",
      link: "https://foodmandu.com",
    },
  ];

  // Group sponsors by tier
  const groupedSponsors = sponsors.reduce((groups, sponsor) => {
    const { tier } = sponsor;
    if (!groups[tier]) {
      groups[tier] = [];
    }
    groups[tier].push(sponsor);
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
      {Object.keys(groupedSponsors).map((tier, index) => (
        <div key={index} className="mb-12">
          {/* Tier Heading with Horizontal Bar */}
          <div className="relative flex items-center justify-center mb-6">
            <hr className="absolute w-full border-t-2 border-gray-600" />
            <h2 className="relative bg-black px-4 text-2xl md:text-3xl font-semibold text-teal-400">
              {tier}
            </h2>
          </div>

          {/* Sponsors List (One in Each Row) */}
          <div className="space-y-8">
            {groupedSponsors[tier].map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl mx-auto shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300 flex flex-col sm:flex-row items-center"
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="w-32 h-32 object-contain rounded-md mb-4 sm:mb-0 sm:mr-6"
                  />
                </a>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-teal-400 mb-2">
                    {sponsor.name}
                  </h3>
                  {sponsor.amount && (
                    <p className="text-gray-400 text-sm">{sponsor.amount}</p>
                  )}
                  <a
                    href={sponsor.link}
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

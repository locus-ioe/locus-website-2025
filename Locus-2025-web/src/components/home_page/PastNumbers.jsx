import { Link } from "react-router-dom";
import { Button } from "../navbar/Button";

  
function StatCard({ number, label }) {
    return (
        <div className="rounded-lg py-4 text-center bg-primary text-white">
        <h3 className="text-2xl font-bold">{number}+</h3>
        <p className="text-lg">{label}</p>
        </div>
    );
    }


const PastYearSection = () => {
  return (
      <section id="previous-year" className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center">What Out <span className="text-primary">Events</span> Bring?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <StatCard number="$50,000" label="In Prizes" />
              <StatCard number="1500" label="Hackers" />
              <StatCard number="300" label="Projects" />
              <StatCard number="200" label="Shop" />
            </div>
          </div>
          <div className="mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 pt-12 text-center">Join Our <span className="text-primary">Locus</span> Community</h2>
        <p className="mb-4 text-gray-200 text-base sm:text-md lg:text-lg leading-relaxed">
          Becoming A Locus Community Member Is Your Exclusive Ticket To Becoming The Face And Voice Of Our Vibrant Academic Community.
          It&apos;s Not Just A Role, It&apos;s An Opportunity To Share The Dynamic Spirit Of Our Campus With The World!
        </p>
        <Link to="https://discord.gg/qWwVPgJJdM">
        <Button className="mt-6 rounded-full bg-primary px-6 py-2 text-sm  hover:bg-primary/90 sm:px-8 sm:py-3 sm:text-base">
          Join Us On Discord
        </Button></Link>
      </div>

        </section>
      );
      

}

export default PastYearSection
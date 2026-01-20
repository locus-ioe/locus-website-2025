// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import locuslogo from "../../assets/about/logo.png";

const ProfileCard = ({
  imageUrl,
  name,
  designation,

}) => {
  // Always show all icons, even if links aren't provided
  return (
    <div className='w-full max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden flex flex-col transform transition-transform hover:scale-105'>
      {/* Image Section */}
      <div className='relative h-72'>
        <img
          src={imageUrl}
          alt={name}
          className='w-full h-full object-cover object-center'
        />
      </div>

      {/* Text Section */}
      <div className='p-4 flex flex-col flex-grow'>
        <p className='text-xs text-body flex items-center gap-2'>
          <div className='w-6 h-6'>
            <img
              src={locuslogo}
              alt='Locus Logo'
              className='w-full h-full object-contain'
            />
          </div>
          <span>{designation}</span>
        </p>
        <h3 className='text-lg font-semibold text-white truncate text-left'>
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ProfileCard;

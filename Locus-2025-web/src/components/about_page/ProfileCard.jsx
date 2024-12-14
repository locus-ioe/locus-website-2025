import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import locuslogo from "../../assets/about/logo.png";

const ProfileCard = ({
  imageUrl,
  name,
  designation,
  facebook,
  twitter,
  instagram,
  linkedin,
}) => {
  return (
    <div className='w-full max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden flex flex-col transform transition-transform hover:scale-105'>
      {/* Image Section */}
      <div className='relative h-72'>
        <img
          src={imageUrl}
          alt={name}
          className='w-full h-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity'>
          {facebook && (
            <a
              href={facebook}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-500 text-2xl'
            >
              <FaFacebook />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-400 text-2xl'
            >
              <FaTwitter />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-pink-500 text-2xl'
            >
              <FaInstagram />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-blue-700 text-2xl'
            >
              <FaLinkedin />
            </a>
          )}
        </div>
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
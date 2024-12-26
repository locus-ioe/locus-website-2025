function Image_content({ image, description, order }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 gap-5 items-center md:items-start flex-wrap">
      {/* Image Section */}
      <div
        className={`flex ${
          order === 2 ? "order-2 md:order-2" : "order-1 md:order-1"
        } w-full sm:w-[80%] md:w-[40%] mx-auto`}
      >
        <img
          src={image}
          alt="content"
          className="w-full h-auto max-h-[350px] object-cover rounded-lg"
        />
      </div>

      {/* Description Section */}
      <div
        className={`flex ${
          order === 2 ? "order-1 md:order-1" : "order-2 md:order-2"
        } w-full sm:w-[80%] md:w-[50%]`}
      >
        <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Image_content;

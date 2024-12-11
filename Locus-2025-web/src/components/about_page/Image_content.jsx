function Image_content({ image, description, order }) {
    return (
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Image Section */}
        <div
          className={`flex ${order === 2 ? "order-2 md:order-2" : "order-1 md:order-1"}`}
          style={{ width: "40%" }}  // 40% width for the image
        >
          <img
            src={image}
            alt="content"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
          />
        </div>
  
        {/* Description Section */}
        <div
          className={`flex ${order === 2 ? "order-1 md:order-1" : "order-2 md:order-2"}`}
          style={{ width: "60%" }}  // 60% width for the text
        >
          <p className="text-white text-sm md:text-base text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    );
  }
  
  export default Image_content;
  
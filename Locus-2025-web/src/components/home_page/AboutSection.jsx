export default function AboutSection() {
    return (
      <main className="min-h-screen flex flex-col my-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto ">
          <div className="space-y-8 sm:space-y-12">
            {/* Video Section */}
<div className="rounded-lg h-[50svh]">
  <video
    className="h-full w-full mx-auto"
    controls
    poster="assets/video/Screenshot from 2024-12-07 18-49-39.png"  
  >
    <source src="assets/video/Locus Exhibition 2021 Promo Video - Pulchowk Campus.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

  
            {/* About Section */}
            <div className="space-y-6 max-h-h-[50svh] m-auto text-center sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="text-white">About </span>
                <span className="text-[#2DD4BF]">LOCUS</span>
              </h2>
              
              <p className="text-white text-base sm:text-md lg:text-lg leading-relaxed max-w-4xl">
                LOCUS is a non-profit organization led by undergraduate students of Electrical, Electronics, and Computer Engineering departments 
                from IOE, Pulchowk Campus. Since its inception in 2003, LOCUS has been providing a platform for young innovators from schools and 
                colleges all over Nepal to showcase their skills and knowledge. LOCUS 2025 marks the 21st edition of the National Level Technological 
                Exhibition. All its activities are guided by a single compass: fostering collaboration, promoting individual development and facilitating 
                innovation.
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
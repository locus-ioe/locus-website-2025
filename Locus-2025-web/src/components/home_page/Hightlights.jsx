

const highlightImages = [
  { src: 'assets/highlight/cit1.jpg', alt: 'Locus Highlight 1' },
  { src: 'assets/highlight/cit2.jpg', alt: 'Locus Highlight 2' },
  { src: 'assets/highlight/cit3.jpg', alt: 'Locus Highlight 3' },
  { src: 'assets/highlight/flashmob.jpg', alt: 'Locus Highlight 4' },
  { src: 'assets/highlight/machine.jpg', alt: 'Locus Highlight 5' },
  { src: 'assets/highlight/mainevent1.jpg', alt: 'Locus Highlight 6' },
  { src: 'assets/highlight/rekhasharma.jpg', alt: 'Locus Highlight 7' },
  { src: 'assets/highlight/robosoccor.jpg', alt: 'Locus Highlight 8' },
]

export default function LocusHighlights() {
  return (
    <section className="min-h-screen text-white flex flex-col p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
        <span className="text-white">Locus </span>
        <span className="text-[#2DD4BF]">Highlights</span>
      </h2>
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {highlightImages.map((image, index) => (
          <div key={index} className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}


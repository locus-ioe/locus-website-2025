import WireframeSphere from "./wireframe"
const LocusDirectors = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4">
             
             
             
             {/* <WireframeSphere /> */}

        
        {/* <div className="h-[40vw] w-[40vw] my-auto ">  */}
           <WireframeSphere />
        {/* </div>  */}
        <div className="my-auto max-w-[50svw] space-y-4">
          <h2 className="text-xl sm:text-6xl lg:text-7xl tracking-tight ">
            <span className="text-primary">LOCUS </span>
            <span className="text-white">2025 </span>
            <span className="text-primary">Marvels </span>
            <span className="text-white">all </span>
            <span className="text-white">across </span>
            {/* <span className="text-white">the </span> */}
            <span className="text-primary">the </span>
            <span className="text-white">country </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default LocusDirectors
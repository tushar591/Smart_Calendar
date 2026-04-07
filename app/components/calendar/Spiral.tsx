const Spiral = () => (
  <div className="absolute top-0 left-0 right-0 h-12 flex justify-around px-12 z-50 -translate-y-1/2 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div key={i} className="relative">
        <div className="w-2 h-10 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500 rounded-full shadow-lg border-x border-gray-300/50" />
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/20 rounded-full blur-[1px]" />
      </div>
    ))}
  </div>
);

export default Spiral;
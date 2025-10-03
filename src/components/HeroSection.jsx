
export default function HeroSection({badge, slug1, slug2, description}) {
  return (
    <section className="relative py-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className='text-center text-white transform transition-all duration-1000'>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-6 backdrop-blur-sm">
              <span className="text-sm text-blue-200"># {badge}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-[poppins]">
              {slug1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white">
                {slug2}
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>
  )
}
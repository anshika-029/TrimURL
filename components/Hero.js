import Link from 'next/link'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-110"
        style={{
          backgroundImage: "url('/herobg.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
            TrimURL
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white font-medium drop-shadow-lg">
            Shorten your URLs quickly and easily. Create custom short links for better sharing.
          </p>
        </div>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* <Link
            href="/login" >
            <button className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
              Get Started
            </button>
          </Link> */}
          <Link href="#shorten" scroll={true} className='scroll-smooth group'>
            <button className="bg-cyan-500/20 backdrop-blur-sm hover:cursor-pointer border-2 border-cyan-300/70 hover:bg-cyan-400 hover:text-black text-cyan-100 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 group-hover:border-cyan-300">
              <span className="flex items-center gap-2">
                Try Now 
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/40 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-300/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-300/30 rounded-full animate-pulse"></div>
    </div>
  )
}

export default Hero

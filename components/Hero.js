import Link from 'next/link'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{
          backgroundImage: "url('/herobg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">
          TrimURL
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Shorten your URLs quickly and easily. Create custom short links for better sharing.
        </p>

        {/* Two Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/login" >
            <button className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
              Get Started
            </button>
          </Link>
          <Link href="#shorten" scroll={true} className='scroll-smooth'>
          <button className="bg-transparent hover:cursor-pointer border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Try Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

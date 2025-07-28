import Link from 'next/link'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
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
            href="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Get Started
          </Link>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Try Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

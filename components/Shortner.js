import React from 'react'

const Shortner = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Shorten Your URL
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Transform long URLs into short, shareable links
        </p>

        <form className="mb-8">
          <div className="flex flex-col gap-4">
            <input
              type="url"
              placeholder="Paste your long URL here..."
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
            />
            <input
              type="text"
              placeholder="Enter preferred short name (optional)"
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Shorten URL
            </button>
          </div>
        </form>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Fast & Easy</h3>
            <p className="text-gray-600 text-sm">Shorten URLs instantly with one click</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-xl">🔒</span>
            </div>
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-gray-600 text-sm">Your links are safe and secure</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 text-xl">📊</span>
            </div>
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm">Track clicks and performance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shortner

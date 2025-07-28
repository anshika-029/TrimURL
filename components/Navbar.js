"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false;
  const linkStyle = "text-gray-700 hover:text-blue-600 px-3 py-2";
  const buttonStyle = "text-white px-4 py-2 rounded";

  return (
    <nav className="bg-white shadow border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TrimURL
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className={linkStyle}>Home</Link>
            
            {isLoggedIn && (
              <Link href="/dashboard" className={linkStyle}>Dashboard</Link>
            )}
            
            <Link href="/about" className={linkStyle}>About</Link>
            
            {isLoggedIn ? (
              <button className={`bg-red-600 ${buttonStyle}`}>Logout</button>
            ) : (
              <>
                <Link href="/login" className={`bg-blue-600 ${buttonStyle}`}>Login</Link>
                <Link href="/register" className={`bg-green-600 ${buttonStyle}`}>Register</Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link href="/" className={linkStyle}>Home</Link>
              
              {isLoggedIn && (
                <Link href="/dashboard" className={linkStyle}>Dashboard</Link>
              )}
              
              <Link href="/about" className={linkStyle}>About</Link>
              
              {isLoggedIn ? (
                <button className={`bg-red-600 ${buttonStyle} w-fit`}>Logout</button>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link href="/login" className={`bg-blue-600 ${buttonStyle} text-center w-fit`}>Login</Link>
                  <Link href="/register" className={`bg-green-600 ${buttonStyle} text-center w-fit`}>Register</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

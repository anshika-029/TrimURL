"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const Shortner = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = async (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setGenerated(`http://localhost:3000/${shorturl}`)
                }
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <section id="shorten" className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>

            {/* Animated Background Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/15 rounded-full blur-lg animate-ping"></div>

            <div className="relative max-w-5xl mx-auto px-4 py-20">
                {/* Main Card */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10 relative overflow-hidden">
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>

                    {/* Header */}
                    <div className="relative text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                            Shorten Your URL
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            Transform long URLs into short, shareable links with our lightning-fast service
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="relative mb-12">
                        <form className="space-y-6">
                            <div className="space-y-6">
                                {/* URL Input */}
                                <div className="relative group">
                                    <input
                                        value={url}
                                        type="url"
                                        placeholder="Paste your long URL here..."
                                        onChange={e => { seturl(e.target.value) }}
                                        className="w-full px-6 py-4 text-lg bg-white/50 backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Short URL Input */}
                                <div className="relative group">
                                    <input
                                        value={shorturl}
                                        type="text"
                                        placeholder="Enter preferred short name (optional)"
                                        onChange={e => { setshorturl(e.target.value) }}
                                        className="w-full px-6 py-4 text-lg bg-white/50 backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100/50 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    onClick={generate}
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <span>✨</span>
                                        Shorten URL
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Result Section */}
                    {generated && (
                        <div className="relative mb-12 animate-fade-in">
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-emerald-100/30"></div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                                        <span className="text-3xl">🎉</span>
                                        Your Shortened URL is Ready!
                                    </h3>
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <div className="flex-1 bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl border border-green-200/50 min-h-[60px] flex items-center">
                                            <code className="text-blue-600 font-mono text-lg font-bold break-all">
                                                <Link href={generated} className="hover:text-blue-800 transition-colors duration-200">
                                                    {generated}
                                                </Link>
                                            </code>
                                        </div>
                                        <button
                                            onClick={() => navigator.clipboard.writeText(generated)}
                                            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
                                        >
                                            <span>📋</span>
                                            Copy Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Shortner

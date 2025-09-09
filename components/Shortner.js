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
        <section id="shorten">
            <div className="max-w-5xl mx-auto px-4 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen">
                <div className="bg-white rounded-3xl shadow-2xl p-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                            Shorten Your URL
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            Transform long URLs into short, shareable links with our lightning-fast service
                        </p>
                    </div>

                    <div className="mb-12">
                        <form className="space-y-6">
                            <div className="space-y-6">
                                <input
                                    value={url}
                                    type="url"
                                    placeholder="Paste your long URL here..."
                                    onChange={e => { seturl(e.target.value) }}
                                    className="w-full px-6 py-4 text-lg bg-white border-2 border-gray-300 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none"
                                />

                                <input
                                    value={shorturl}
                                    type="text"
                                    placeholder="Enter preferred short name (optional)"
                                    onChange={e => { setshorturl(e.target.value) }}
                                    className="w-full px-6 py-4 text-lg bg-white border-2 border-gray-300 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 focus:outline-none"
                                />

                                <button
                                    type="submit"
                                    onClick={generate}
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold text-xl"
                                >
                                    Shorten URL
                                </button>
                            </div>
                        </form>
                    </div>

                    {generated && (
                        <div className="mb-12">
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🎉</span>
                                    Your Shortened URL is Ready!
                                </h3>
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="flex-1 bg-white px-6 py-4 rounded-2xl border border-green-200 min-h-[60px] flex items-center">
                                        <code className="text-blue-600 font-mono text-lg font-bold break-all">
                                            <Link href={generated} className="hover:text-blue-800">
                                                {generated}
                                            </Link>
                                        </code>
                                    </div>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(generated)}
                                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 whitespace-nowrap"
                                    >
                                        <span>📋</span>
                                        Copy Link
                                    </button>
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

import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortUrlResult, setShortUrlResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl || !shortUrl) return;

    try {
      const res = await axios.post("https://trimurl-geiz.onrender.com/api/shorten", {
        longUrl,
        shortUrl
      });
      setShortUrlResult(res.data.shortUrl);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to save URL");
    }
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <h1 className="title">URL Shortener</h1>
        <p className="subtitle">Convert long URLs into short, memorable links</p>

        <form onSubmit={handleSubmit} className="url-form">
          <label>
            Long URL
            <input
              required
              type="text"
              placeholder="Enter long URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
          </label>

          <label>
            Preferred Short URL
            <input
              required
              type="text"
              placeholder="Enter preferred short URL"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
            />
          </label>

          <button type="submit" className="convert-btn">Convert</button>
        </form>

        {shortUrlResult && (
          <div className="result-container">
            <p>Your Short URL:</p>
            <a
              href={`https://trimurl-geiz.onrender.com/${shortUrlResult}`}
              target="_blank"
              rel="noopener noreferrer"
              className="short-url"
            >
              {shortUrlResult}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

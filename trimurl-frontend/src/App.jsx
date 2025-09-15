import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortUrlResult, setShortUrlResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    if (!longUrl || !shortUrl) return; // validation already done

    try {
      const res = await axios.post("http://localhost:5000/api/shorten", {
        longUrl,
        shortUrl
      });
      console.log(res.data); // you'll see message + urls
      setShortUrlResult(res.data.shortUrl); // store to display
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to save URL");
    }
  };


  return (
    <>
      <h1>Form + URL Shortner</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type='text'
          placeholder='Enter long URL'
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <p>Long URL: {longUrl}</p>

        <input
          required
          type='text'
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          placeholder='Enter preferred short url'
        />
        <p>Your short URL: {shortUrl}</p>
        <button type='submit'>Convert</button>
      </form>
      {shortUrlResult && (
        <div>
          Short URL:
          <a
            href={`http://localhost:5000/${shortUrlResult}`}
            target='_blank'
          >
            {shortUrlResult}</a>
        </div>
      )}
    </>
  )
}

export default App

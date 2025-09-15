# TrimURL 🔗

A simple and fast URL shortener that transforms long URLs into short, shareable links.

## 📝 Purpose

TrimURL helps you:
- Shorten long URLs for easier sharing
- Create custom short links with your preferred names
- Share clean, professional-looking links

## 🚀 How to Use

### Online (Deployed Version)
Visit the live app and:
1. Paste your long URL in the first field
2. Enter a custom short name (optional)
3. Click "Shorten URL" 
4. Copy and share your new short link!

### Local Development

#### Prerequisites
- Node.js (v16 or higher)
- MongoDB (for backend)

#### Frontend Setup
```bash
cd trimurl-frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`

#### Backend Setup
```bash
cd trimurl-backend
npm install
npm start
```
The backend API will run on `http://localhost:3000`

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- Axios for API calls

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## 📁 Project Structure

```
TrimURL/
├── trimurl-frontend/    # React frontend application
├── trimurl-backend/     # Express.js backend API
└── README.md           # This file
```

## 🌐 API Endpoints

- `POST /api/shorten` - Create a short URL
  - Body: `{ "longUrl": "https://example.com", "shortUrl": "mylink" }`


---


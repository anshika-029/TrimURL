# TrimURL

A simple and efficient URL shortening service built with Next.js.

## How It Works (Simple Logic Flow)

### 🌐 **What Users See:**
1. **Landing Page** - Beautiful hero section with "Try Now" button
2. **URL Shortener Form** - Two input fields and a submit button
3. **Result Display** - Shows the shortened URL with copy button

### 🔄 **Step-by-Step Functionality:**

#### **Step 1: User Enters Data**
- User pastes their long URL (e.g., `https://www.verylongwebsite.com/very/long/path`)
- User enters their preferred short name (e.g., `mylink`)

#### **Step 2: Form Submission**
- User clicks "Shorten URL" button
- Website prevents page refresh
- Data gets sent to the server

#### **Step 3: Server Processing**
- Server checks if the short name already exists
- If exists → Shows error message
- If available → Saves URL and short name to database

#### **Step 4: Database Storage**
```
Database stores:
- Original URL: https://www.verylongwebsite.com/very/long/path
- Short name: mylink
```

#### **Step 5: Result Display**
- Success message appears
- Shortened URL shows: `{deployed_link}/mylink`
- Copy button lets user copy the link

#### **Step 6: URL Redirection**
- When someone visits `{deployed_link}/mylink`
- Server looks up "mylink" in database
- Finds the original URL
- Automatically redirects to the original website

## 📁 **File Structure & Purpose**

```
trimurl/
├── app/
│   ├── [shorturl]/
│   │   └── page.js          # Handles redirecting short URLs to original URLs
│   ├── api/
│   │   └── generate/
│   │       └── route.js     # Creates and saves short URLs to database
│   ├── layout.js            # Website layout with navbar
│   └── page.js              # Home page (Hero + Shortener)
├── components/
│   ├── Navbar.js            # Navigation bar
│   ├── Hero.js              # Landing section with "Try Now" button
│   └── Shortner.js          # URL shortening form and logic
├── lib/
│   └── mongodb.js           # Database connection
└── .env.local               # Database and website settings
```

## 🧠 **Simple Code Logic**

### **Frontend Logic (Shortner.js):**
```javascript
1. User types URL and short name
2. Click submit button
3. Send data to /api/generate
4. Show success/error message
5. Display shortened URL
```

### **Backend Logic (api/generate/route.js):**
```javascript
1. Receive URL and short name
2. Check if short name exists in database
3. If exists → return error
4. If not → save to database
5. Return success message
```

### **Redirect Logic ([shorturl]/page.js):**
```javascript
1. Someone visits /mylink
2. Look up "mylink" in database
3. Find original URL
4. Redirect user to original URL
5. If not found → redirect to home page
```

## Features

- Shorten long URLs into compact links
- Custom short names for your URLs
- Clean and responsive design
- Mobile-friendly interface

## Technology Stack

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **React** - Frontend library
- **MongoDB** - Database for storing URLs

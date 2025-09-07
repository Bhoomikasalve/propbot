# 🏡 EstateApp – Real Estate Listings App

EstateApp is a modern React-based web application for browsing and managing property listings.  
It includes authentication (Firebase), property search & filtering, and a clean responsive UI.

---

## 🚀 Features
- 🔑 Firebase Authentication (Login / Signup / Logout)
- 🏠 Property Listings with search filters
- 📤 Easy deployment to Netlify
- 🌐 Fast and modern React (Vite + Tailwind CSS)

---

## ⚙️ Setup Instructions

1️⃣ Clone the repository
bash
git clone https://github.com/your-username/estateapp.git
cd estateapp
2️⃣ Install dependencies
npm install
3️⃣ Run locally (development server)
npm run dev
Your app will be available at:
👉 http://localhost:5173

---

🔥 Firebase Setup

1. Go to Firebase Consoleand create a new project.

2. Add a Web App to your Firebase project.

3. Copy your Firebase config (apiKey, authDomain, projectId, etc.).

4. In your project, create a file:

// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

---

🌍 Deployment (Netlify)

1. Build your app:
npm run build

2. A dist/ folder will be generated inside estateapp/.

3. Go to Netlify Drop

4. Drag & Drop the dist/ folder from estateapp.

5. Done 🎉 – Netlify will give you a live URL.

---

🛠️ Tech Stack

React (Vite)

Tailwind CSS

Firebase Auth

Netlify (Hosting)

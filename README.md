# 🌍 Tour Management Project

## 🎯 Project Purpose  
This Tour Management application provides a seamless experience for travelers to browse, book, and manage tours. It also empowers guides to post and manage tour packages. The platform features secure user authentication, real-time booking updates, and a modern, responsive UI.

---

## ✨ Features  
- 🔐 User registration & login via **Firebase Authentication**  
- 🔍 Browse and search tours with ease  
- 📅 Book tours and manage bookings in real-time  
- 🎨 Smooth animations and interactive UI powered by **Framer Motion** and **Lottie React**  
- 📱 Fully responsive design for all devices  
- 🔑 JWT authentication integrated with Firebase tokens  
- 🚨 Real-time notifications using **Sweet Alert**  
- 🛡️ Secure backend API built with **Node.js**, **Express.js**, and **Firebase Admin SDK**  
- 💾 Data stored and managed in **MongoDB**

---

## 🚀 Live URLs  
- 🌐 Frontend: [https://tripease.surge.sh](https://tripease.surge.sh)  

---

## 🛠️ Tech Stack

### Frontend  
React, React Router, Tailwind CSS, DaisyUI, Firebase Authentication, React Icons, Framer Motion, Sweet Alert, Lottie React, Axios, dotenv

### Backend  
Node.js, Express.js, Firebase Admin SDK, MongoDB, dotenv

### Deployment  
Frontend on Surge, Backend on Vercel

---

## 📦 NPM Packages Used

### Frontend  
`react`, `react-router-dom`, `tailwindcss`, `daisyui`, `firebase`, `sweetalert2`, `react-icons`, `framer-motion`, `axios`, `lottie-react`, `dotenv`

### Backend  
`express`, `dotenv`, `firebase-admin`, `mongodb`

---

## ⚙️ How to Run Locally

### 1. Clone Frontend and Backend repos

```bash
git clone https://github.com/your-username/tour-management-frontend.git
git clone https://github.com/your-username/tour-management-backend.git

2. Frontend Setup
bash
Copy
Edit
cd tour-management-frontend
npm install
# Create a .env file with your Firebase config and backend API URL
npm run dev
3. Backend Setup
bash
Copy
Edit
cd tour-management-backend
npm install
# Create a .env file with MongoDB URI, Firebase Admin credentials, and PORT
npm start

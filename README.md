# 🌐 SkillSwap Platform

**Project Name:** SkillSwap Platform  
**Purpose:** An interactive platform where users can offer, learn, and trade skills within their local area. Examples include guitar lessons, language exchange, coding help, or yoga training. Users can browse listings, rate experiences, and connect with local skill providers.

A modern, responsive, and user-friendly **React + Firebase** web application with smooth animations, secure authentication, and an engaging UI.

---

## 🚀 Live Demo

🔗 Firebase: [View Live Project](https://skill-swap-4c338.web.app)

🔗 Netlify: [View Live Project](https://skillswap-platform-sm.netlify.app)

---

## ⚙️ Key Features

✅ **Firebase Authentication** – Email/password signup, login, logout, and password reset  
✅ **Profile Management** – Update name, avatar, and view user info in real-time  
✅ **Dynamic Sliders** – Auto and manual slides using Swiper.js  
✅ **Smooth Animations** – AOS (Animate on Scroll) effects throughout the UI  
✅ **Toast Notifications** – Real-time feedback using `react-hot-toast`  
✅ **Responsive Navbar & Routing** – Managed via `react-router`  
✅ **Loading Spinners** – Custom loaders with `react-spinners`  
✅ **Modern UI** – Built using `TailwindCSS` and icons from `lucide-react` & `react-icons`  
✅ **Skill Listings** – Browse and connect with local skill providers  
✅ **Ratings & Reviews** – Users can rate and review experiences  
✅ **Search & Filter** – Search skills by category and location  

---

## 🧩 Tech Stack & NPM Packages Used

| Category | Technology / NPM Packages |
|-----------|--------------------------|
| Frontend | React (v19.1.1) |
| Styling | Tailwind CSS (v4.1.15) |
| Animations | AOS (v2.3.4), Swiper (v12.0.3) |
| Routing | React Router (v7.9.4) |
| Backend / Auth | Firebase (v12.4.0) |
| Notifications | react-hot-toast (v2.6.0) |
| Icons | react-icons (v5.5.0), lucide-react (v0.546.0) |
| Loading UI | react-spinners (v0.17.0) |
| Build Tool | Vite with Tailwind Plugin & DaisyUI |

**Install Packages:**  
```bash
npm install react react-dom react-router-dom firebase aos swiper react-hot-toast react-icons lucide-react react-spinners tailwindcss daisyui
```

---

## 🧠 Project Overview

This project is a **SkillSwap Platform** that allows users to:
- Register, log in, and manage their profiles.
- Explore multiple online courses (Full Stack Development, Marketing, Video Editing, Python, etc.).
- View responsive and animated slides for each course.
- Update their name, avatar, and other personal details in profile.
- Reset passwords securely using Firebase Authentication.
- Experience smooth UI transitions and toast notifications.
- Browse and connect with local skill providers.
- Rate and review experiences.

The design is **responsive**, **fast**, and **optimized for all devices**.

---

## 📁 Folder Structure

```
src/
 ┣ assets/              # Images, icons, and media
 ┣ components/          # Reusable UI components (Navbar, Slider, etc.)
 ┣ contexts/            # AuthContext (Firebase integration)
 ┣ layout/              # Manage structure
 ┣ pages/               # Page components (Home, Profile, Login, etc.)
 ┣ Routes/              # Root component
 ┣ main.jsx             # Entry point
 ┗ index.css            # Tailwind base and custom styles
```

---

## 📸 Screenshots

### 🏠 Home Page
![Homepage Screenshot](public/screenshots/home_page.PNG)

### 📰 Course Details Page
![Course Details Screenshot](public/screenshots/course_details.PNG)

### 🔐 Sign Up Page
![Login Screenshot](public/screenshots/signup.PNG)

---

## 🔒 Environment & Security

- Firebase credentials are securely managed via environment variables.
- Sensitive data is never hardcoded.
- Authentication and user sessions are handled via Firebase Auth.

---

## 🧑‍💻 Developer Notes

- Built using **React 19** and **Vite** for ultra-fast development.
- UI fully responsive and mobile-friendly.
- Clean code, modular structure, and reusable components.
- Deployed on **Netlify**.

---

## 🧷 Future Enhancements

- Sign IN & Sign Up user friendly
- Password reset option
- View course details & Book a Session
- Implement progress tracking per user
- Add instructor and admin panel

---

⭐ **Don’t forget to give this repo a star if you like it!**

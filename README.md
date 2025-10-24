# SkillSwap – A Local Skill Exchange Platform

![SkillSwap Banner](./public/banner_2.jpg)

## Project Overview
SkillSwap is a **local skill exchange platform** that enables individuals to offer, learn, and trade skills within their community. Users can browse skill listings, view details, book sessions, and connect with skill providers.

The platform is a **single-page application (SPA)** with a minimalist design and smooth animations.

---

## Live Demo
🔗 [View Live Site](YOUR_LIVE_SITE_URL_HERE)

---

## Features
- **Authentication:** Email/password login, Google login, Forgot Password.
- **Protected Routes:** Skill details page accessible only to logged-in users.
- **Skill Listings:** Cards generated from `public/data.json`. Each card shows:
  - Skill name, image, price, rating, “View Details” button.
- **Skill Details Page:** Shows all skill info with a booking form and toast notification.
- **Profile Management:** Users can view and update profile info (name & photo).
- **Responsive Design:** Works on mobile, tablet, and desktop.
- **Animations:** Hero sliders and component animations using Framer Motion and Swiper.js.
- **Extra Homepage Section:** “Our Success Stories” showcasing top providers.

---

## Folder Structure
```
├── assets/ # Images & assets
├── components/ # Reusable components (Navbar, Footer, Popular, etc.)
├── context/ # Auth context provider
├── firebase/ # Firebase configuration
├── layout/ # Root layout (Navbar + Footer wrapper)
├── pages/ # Route pages (Home, Login, SignUp, Profile, CourseDetail, etc.)
├── routes/ # React Router setup
├── App.jsx # Main app component
├── main.jsx # Entry point
└── index.css # Global styles
public/
├── data.json # Skill listings
├── teachers.json # Top-rated providers data
└── logo.png # Site logo
```

---

## Installation & Setup
1. Clone the repository:
```bash
git clone https://github.com/hossain-shifat/SkillSwap.git
cd Assignment-09
```

2. Install dependencies:
```bash
npm install
```
3. Create `.env.local` file and add Firebase config:

 ```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Run development server:
```bash
npm run dev
```
## Technologies & Packages Used

* React.js – Frontend library

* Tailwind CSS – Utility-first CSS framework

* Firebase – Authentication backend

* Framer Motion – Animations

* React-Toastify – Toast notifications

* Swiper.js – Hero slider

* DaisyUI – UI components

* Vite – Development and build tool


## Future Enhancements

* Add real backend for bookings.

* Email verification for new users.

* Review & rating system for skill providers.

* Multi-language support.

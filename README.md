# 🥬 FreshFarmers – Subscription Box Service Platform

FreshFarmers is a full-featured subscription box platform that allows users to browse and subscribe to curated monthly grocery boxes, including fresh vegetables, fruits, and other essentials. The platform is designed to save time and provide high-quality products delivered directly to your doorstep.

---

## 🌐 Live Website

🔗 [Visit Live Site](https://subscription-box-df504.web.app)

---

## 🖼️ Screenshot

![FreshFarmers Screenshot](https://i.ibb.co/sample-image.png) <!-- Replace with your actual screenshot URL -->

---

## 🎯 Project Purpose

The goal of FreshFarmers is to simplify grocery shopping for busy individuals through:
- Personalized monthly subscription boxes
- Convenient delivery on the 1st of each month
- Easy management of subscription preferences
- Seamless and secure user experience

---

## 🚀 Technologies Used

### 🧩 Frontend:
- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- Swiper.js (for homepage slider)
- React Toastify
- React Icons
- React Helmet for dynamic titles

### 🔐 Authentication:
- Firebase Authentication (Email/Password + Google)
- Firebase's updateProfile() for user info editing

### 🎁 Data:
- Static JSON-based service listings
- Hosted images via ImgBB/PostImages

### 🚀 Deployment:
- Client: Firebase Hosting

---

## ✨ Key Features

- 🌐 Fully responsive layout for mobile, tablet, and desktop  
- 🧭 Dynamic navigation bar showing user profile image and logout option when logged in  
- 👤 Protected routes with persistent authentication (Profile, Subscription Details, Blog)  
- 🔐 User info update capability using Firebase updateProfile()  
- 🧾 Subscription box browsing with detailed view and review/rating submission  
- 🎨 Interactive banner slider implemented with Swiper.js  
- 📌 Dynamic page titles for SEO and UX via React Helmet  
- 🔁 Show/hide password toggle on registration and login forms  
- 🌙 Light/Dark theme toggle using DaisyUI  
- 🎉 Success and error notifications via SweetAlert2 and React Toastify  
- 🧪 Functional "Forgot Password" page with email pre-fill and redirect  
- 🛠 Custom 404 page with user-friendly messaging  

---

## 📦 Dependencies

- `react`  
- `react-router-dom`  
- `tailwindcss` + `daisyui`  
- `swiper`  
- `firebase`  
- `react-toastify`  
- `react-icons`  
- `react-helmet`  
- `sweetalert2`  
- `aos` *(for animation)*  

---

## 🛠️ How to Run Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/freshfarmers-client.git
cd freshfarmers-client

```
Step 2: Install Dependencies
bash
Copy
Edit
npm install
Step 3: Create a .env File
env
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Step 4: Run the App
bash
Copy
Edit
npm run dev
🔗 Relevant Links
🔴 Live Website: https://subscription-box-df504.web.app

🟠 GitHub Repo: https://github.com/your-username/freshfarmers-client

📌 Notes
✅ Firebase & API credentials are stored securely in .env

✅ SweetAlert2 and React Toastify are used for all user notifications

✅ Password validation includes uppercase, lowercase, and minimum length rules

✅ Authentication state persists on page reloads for private routes

✅ Review and rating system implemented on subscription details page

✅ Profile page allows users to securely update their display name and photoURL

✅ Includes custom 404 page and loading spinners

✅ Dynamic page titles improve UX and SEO

👤 Author
🔗 Portfolio: [your-portfolio-link]

📧 Email: your@email.com

🐦 Twitter: [@your-handle]

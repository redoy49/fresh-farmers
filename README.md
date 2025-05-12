# Subscription Box Service Platform

Welcome to the **Subscription Box Service Platform**, a personalized service where users can browse, subscribe to, and manage monthly subscription boxes curated based on their preferences. The platform offers a variety of products and experiences designed to excite and delight every month.

## 🚀 Live Site

[Live Link Here](https://your-live-link.netlify.app)

## 📂 GitHub Repository

[GitHub Repo Link Here](https://github.com/yourusername/subscription-box-service)

---

## ✨ Key Features

- **User Authentication** with Firebase (Email/Password & Google)
- **Protected Routes** (Only logged-in users can access protected pages)
- **Responsive Design** for Mobile, Tablet, and Desktop
- **Forget Password Functionality** (email prefilled from login page)
- **Subscription Services Cards** with dynamic details
- **Reviews & Ratings** feature on service detail pages
- **Profile Update** using Firebase's `updateProfile()`
- **Dynamic Titles** for each page
- **Show/Hide Password** toggle in registration
- **404 Not Found Page**
- **Extra Protected Route** with meaningful content
- **Persistent Login State** using `onAuthStateChanged`
- **Toast Notifications** for success and error messages
- **Swiper Slider / AOS Animation** implemented

---

## 🧱 Project Structure

- `Navbar` with active links, login/logout, and user info
- `Home Page` includes:
  - Swiper slider with minimum 3 slides
  - Subscription Services (from JSON with 6+ items)
  - 2 Additional Custom Sections
- `Subscription Details Page`:
  - Protected route
  - Shows full info of selected service
  - Allows adding reviews & ratings (1-5)
- `My Profile Page`:
  - View & update Name and Photo
- `Login`, `Register`, and `Forget Password` Pages
- `Footer` with T&C, Privacy Policy, and Social Media links

---

## 🔒 Authentication

- Firebase Authentication (Email/Password + Google)
- Password Requirements:
  - At least 1 Uppercase & 1 Lowercase Letter
  - Minimum 6 Characters
- Persistent login using `onAuthStateChanged`
- Forgot Password with prefilled email from login

---

## 🛠️ NPM Packages Used

- `firebase`
- `react-router-dom`
- `react-toastify`
- `react-icons`
- `swiper` OR `aos` (only one required)
- `daisyui`
- `tailwindcss`

---

## ⚙️ Environment Variables

Create a `.env` file to store Firebase credentials:

```
VITE_APIKEY=your_api_key  
VITE_AUTHDOMAIN=your_auth_domain  
VITE_PROJECTID=your_project_id  
VITE_STORAGEBUCKET=your_storage_bucket  
VITE_MESSAGINGSENDERID=your_sender_id  
VITE_APPID=your_app_id  
```

---

## ✅ Checklist for Full Marks

- [x] 10+ Meaningful GitHub Commits  
- [x] README File with All Details  
- [x] Fully Responsive UI  
- [x] Firebase Config via `.env`  
- [x] Unique & Local-Focused Design  
- [x] Hosted on Netlify / Firebase with Correct Routing  
- [x] JSON Data from Public Folder & Hosted Images on imgbb/postimages  
- [x] All Functional Requirements Implemented  

---

## ✉️ Contact

If you have any questions or suggestions, feel free to contact me via [Your Email or Social Media].

---

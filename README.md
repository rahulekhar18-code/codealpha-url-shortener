# 🔗 URL Shortener

A modern and elegant URL Shortener web application built using **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**. This project allows users to convert long URLs into short and shareable links through a beautiful glassmorphism-inspired user interface.

---

## 📌 Project Overview

URL Shortener is a web-based application that transforms lengthy URLs into compact and easy-to-share short links. The application provides a clean user experience with instant URL generation, copy functionality, and direct redirection support.

This project was developed as part of an internship/project task to demonstrate full-stack web development skills including frontend design, backend API development, routing, and data management.

---

## ✨ Features

* 🔗 Convert long URLs into short URLs
* ⚡ Fast URL generation
* 📋 One-click copy functionality
* 🚀 Direct redirection to original URL
* 🎨 Modern Glassmorphism UI
* 🌌 Animated Background Effects
* 📱 Responsive Design
* 🛡 Secure URL Validation
* 📊 Professional Dashboard Style Layout
* 💾 Local JSON-based Data Storage

---

## 🖼️ Screenshots

### Home Screen

![Home Screen](screenshots/home-screen.png)

### Generated URL Screen

![Generated URL Screen](screenshots/result-screen.png)

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Development Tools

* VS Code
* Git
* GitHub
* Thunder Client

### Database

* JSON File Storage

---

## 📂 Project Structure

```text
url-shortener/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   ├── controllers/
│   │   └── urlController.js
│   │
│   ├── models/
│   │   └── urlModel.js
│   │
│   ├── routes/
│   │   └── urlRoutes.js
│   │
│   ├── utils/
│   │   └── generateShortCode.js
│   │
│   └── app.js
│
├── database.json
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation Guide

### Clone Repository

```bash
git clone https://github.com/rahulekhar18-code/codealpha-url-shortener.git
```

### Navigate to Project

```bash
cd codealpha-url-shortener
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
npm run dev
```

### Open Browser

```text
http://localhost:5000
```

---

## 🚀 How It Works

1. User enters a long URL.
2. URL is validated on the frontend.
3. Request is sent to the Express server.
4. Server generates a unique short code.
5. URL mapping is stored in JSON database.
6. Short URL is returned to the user.
7. User can copy or open the generated URL.
8. Visiting the short URL redirects to the original URL.

---

## 🎯 Future Enhancements

* QR Code Generation
* Custom Short URLs
* Click Analytics Dashboard
* User Authentication
* MongoDB Integration
* URL Expiration Feature
* Admin Dashboard
* Link History Tracking

---

## 👨‍💻 Author

**Rahul Ekhar**

📧 Email: [rahulekhar18@gmail.com](mailto:rahulekhar18@gmail.com)

💻 GitHub: https://github.com/rahulekhar18-code

---

## 📜 License

This project is developed for educational, learning, and internship purposes.

---

### ⭐ If you found this project useful, please consider giving it a star on GitHub.

# JWT Inspector - Real-Time JWT Decoder & Analyzer

<p align="center">
  A sleek, modern, and real-time JWT (JSON Web Token) decoder built for developers. Instantly decode and inspect the header and payload of any JWT in a clean, readable format.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  <a href="https://deepwiki.com/R4F405/jwt-inspector"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</p>

---

## 📋 About The Project

**JWT Inspector** is an essential tool for any developer working with modern authentication systems. It provides a simple, efficient, and secure way to decode JSON Web Tokens directly in your browser. Paste a token, and the application instantly breaks it down into its constituent parts—Header, Payload, and Signature—displaying the decoded data in a beautifully formatted and easy-to-understand layout.

This project was built using a modern tech stack to ensure a fast, responsive, and maintainable application.

### ✨ Key Features

* **⚡ Instant Decoding**: See the decoded Header and Payload update in real-time as you paste or type your token.
* **🎨 Syntax Highlighting**: The encoded token is color-coded, making it easy to distinguish the Header, Payload, and Signature at a glance.
* **👓 Clean & Readable Output**: The decoded JSON data is neatly formatted and presented in separate, clearly labeled cards.
* **🛡️ Invalid Token Detection**: The app provides immediate feedback if the pasted token is malformed or invalid.
* **🚀 Built with Modern Tools**: Powered by React, Vite, and Tailwind CSS for a lightning-fast development experience and a highly optimized build.
* **🔒 Secure & Private**: All decoding happens client-side in your browser. Your tokens are never sent to any server.

---

## 🛠️ Tech Stack

This project is built with a curated set of modern frontend technologies:

* **[Vite](https://vitejs.dev/)**: A next-generation frontend build tool for a faster and leaner development experience.
* **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
* **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
* **[jwt-decode](https://github.com/auth0/jwt-decode)**: A small browser-friendly library for decoding JWTs.
* **[Lucide React](https://lucide.dev/)**: A beautiful and consistent icon library.

---

## ⚡ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
* **Node.js** (v18.x or newer recommended)
* **npm** (comes with Node.js)

    ```sh
    node -v
    npm -v
    ```

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/R4F405/jwt-inspector.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd jwt-inspector
    ```

3.  **Install NPM packages:**
    This project is configured to use **Tailwind CSS v3.3.3** to ensure stability.
    ```sh
    # Install dev dependencies (including Tailwind CSS)
    npm install -D tailwindcss@3.3.3 postcss autoprefixer

    # Install production dependencies
    npm install react react-dom jwt-decode lucide-react
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

---

## 🚀 How to Use

1.  Run the application locally following the steps above.
2.  Find a JWT to test with. A great place to get a sample token is [jwt.io](https://jwt.io/).
3.  Copy the entire encoded token string.
4.  Paste it into the "Encoded Token" text area in the application.
5.  The decoded **Header** and **Payload** will appear instantly on the right-hand side.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

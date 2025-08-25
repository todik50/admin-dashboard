# Next.js Admin Dashboard

[![License](https://img.shields.io/github/license/todik50/admin-dashboard)](LICENSE)

A simple, customizable admin dashboard built with **Next.js**.  
This project provides a clean starting point with 5 pre-configured pages that you can fill with your own content.

## ✨ Features

- ⚡️ Built with Next.js (React + Vercel Ready)
- 📂 Pre-defined pages:
  - **Dashboard** (main)
  - **Staff**
  - **Clients**
  - **Profile**
  - **Settings**
- 🎨 Minimal structure so you can extend it however you like
- 🚀 Ready for deployment to Vercel or any Node.js server

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) – React framework
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)
- Node.js 18+ required

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/todik50/admin-dashboard.git
cd admin-dashboard
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

/app
├── page.tsx → Landing page (button to /dashboard)
└── dashboard
├── layout.tsx → Dashboard layout (wrapper for sub-pages)
├── page.tsx → Main dashboard page
├── clients
│ └── page.tsx → Clients page
├── staff
│ └── page.tsx → Staff page
├── profile
│ └── page.tsx → Profile page
└── settings
└── page.tsx → Settings page

## 📌 Customization

Each page is intentionally empty so you can add your own components, data, and design. Use it as a starter template for any admin project.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

```

```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
jorgenSrc
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ Components
│  │  ├─ BlogCard
│  │  │  └─ BlogCard.jsx
│  │  ├─ Navbar
│  │  │  ├─ Navbar.jsx
│  │  │  └─ navbar.module.css
│  │  └─ SillyCard
│  │     └─ SillyCard.jsx
│  ├─ hooks
│  │  └─ useData.js
│  ├─ index.css
│  └─ main.jsx
└─ vite.config.js

```
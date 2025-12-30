# ⚡ SysDash

![Cobra AI Banner](https://img.shields.io/badge/🚀_SysDash-_+_System_stats-065F46?style=for-the-badge&logo=code&logoColor=white)


> A modern, high-performance system monitor built with Electron, React, and Tailwind CSS v4.

**SysDash** bridges the gap between modern web UI design and native OS performance metrics. It features a sleek "Glassmorphism" interface that visualizes real-time CPU load and RAM usage using a secure IPC bridge.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Electron](https://img.shields.io/badge/Electron-33.0-47848F)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)

---

## ✨ Features

- **Real-Time Monitoring:** Live tracking of CPU load and RAM usage (updates every 1s).
- **Glassmorphism UI:** A premium, dark-themed interface with frosted glass effects and smooth animations.
- **Secure Architecture:** Uses the `ContextBridge` pattern to safely expose Node.js APIs to the Renderer.
- **Modern Stack:** Built with the latest Tailwind CSS v4 (Zero Config) and Electron-Vite.

## 🛠️ Tech Stack

- **Core:** [Electron](https://www.electronjs.org/) (Main Process)
- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS v4
- **Bundler:** Electron-Vite
- **System Data:** `systeminformation` (Node.js)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/201Harsh/SysDash.git
   ```

   ---

2. **Install dependencies**

```bash

npm install or npm i 
```

---

3. **Run in Development Mode**


```bash

npm run dev
Build for Production
```

```bash

npm run build
```

---

### 📂 Project Structure

```markdown
SysDash/
├── src/
│ ├── main/ # Electron Main Process (Node.js)
│ ├── preload/ # IPC Bridge (Security Layer)
│ └── renderer/ # React Frontend (UI)
│ ├── src/
│ │ ├── assets/ # Tailwind CSS v4 setup
│ │ ├── components/
│ │ └── App.tsx
├── electron.vite.config.ts # Vite Configuration
└── package.json
```

---

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License
This project is licensed under the MIT License.

---

## 📮 Contact

- LinkedIn: https://www.linkedin.com/in/201harsh/
- GitHub: https://github.com/201Harsh
- Instagram: https://instagram.com/201harshs
- Email: gamerpandeyharsh@gmail.com

---

# Made with ❤️ by Harsh Pandey
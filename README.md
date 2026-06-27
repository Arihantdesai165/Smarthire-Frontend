# SmartHire Frontend 🚀

A modern, AI-powered job recruitment platform built with React and Vite. SmartHire connects top talent with leading companies using intelligent job recommendations and a seamless hiring experience.

## ✨ Features

- **AI-Powered Recommendations** — Matches your skills with the most relevant job openings
- **Smart Job Search** — Filter by title, location, and skill sets
- **Verified Companies** — Every company undergoes rigorous verification
- **Secure Authentication** — JWT-based auth with protected routes
- **Dark Mode UI** — Premium glassmorphism design system
- **Real-time Notifications** — Toast alerts for seamless UX

## 🛠 Tech Stack

| Category        | Technology                  |
|-----------------|-----------------------------|
| Framework       | React 19 + Vite 6           |
| Routing         | React Router DOM v7         |
| HTTP Client     | Axios                       |
| Notifications   | React Hot Toast             |
| Icons           | React Icons (Heroicons)     |
| Styling         | Vanilla CSS (Design System) |

## 📦 Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Arihantdesai165/Smarthire-Frontend.git

# Navigate into the project
cd Smarthire-Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8080
```

## 📁 Project Structure

```
src/
├── api/            # Axios instance and interceptors
├── components/     # Reusable UI components (Navbar, JobCard)
├── pages/          # Page-level components
│   ├── LandingPage/
│   ├── LoginPage/
│   ├── RegisterPage/
│   ├── JobsDashboard/
│   ├── RecommendationPage/
│   └── CreateJobPage/
├── routes/         # Protected route wrapper
├── services/       # API service functions (auth, jobs)
├── utils/          # Helper utilities
├── index.css       # Global design system tokens
└── App.jsx         # Root component with routing
```

## 🚀 Scripts

| Script         | Description                   |
|----------------|-------------------------------|
| `npm run dev`  | Start development server      |
| `npm run build`| Build for production          |
| `npm run preview` | Preview production build   |

## 🎨 Design System

The project uses a custom CSS design system with:
- **Color Palette**: Indigo primary + Emerald accent
- **Glassmorphism** cards with backdrop blur
- **Smooth animations** and micro-interactions
- **Responsive** mobile-first layouts

## 📄 License

MIT License — feel free to use this project for learning and development.

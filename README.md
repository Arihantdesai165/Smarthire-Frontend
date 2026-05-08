# SmartHire — Intelligent Job Board & Recruitment System

A modern, responsive React frontend for the SmartHire recruitment platform.

## Features

- **JWT Authentication**: Secure login and registration with role-based access.
- **Jobs Dashboard**: Browse, search, and filter job opportunities by title, location, and skills.
- **AI Matchmaker**: Get job recommendations based on your professional skills with match percentage visualization.
- **Recruiter Portal**: Post new job listings with detailed requirements.
- **Premium UI**: Dark-themed, glassmorphic design using modern CSS practices.
- **Mobile Responsive**: Fully optimized for all screen sizes.

## Tech Stack

- **React 19**
- **Vite** (Build Tool)
- **React Router DOM** (Navigation)
- **Axios** (API Requests)
- **React Icons** (Modern Iconography)
- **React Hot Toast** (Notifications)

## Prerequisites

- Node.js (v18+)
- npm or yarn
- **Backend**: Ensure the Spring Boot backend is running at `http://localhost:8080`.

## Installation

1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd SmartHire_Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file (already provided) and verify the backend URL:
   ```
   VITE_API_BASE_URL=http://localhost:8080
   ```

## Running the Project

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── api/          # Axios configuration
├── components/   # Reusable UI components (Navbar, JobCard)
├── pages/        # Application pages (Landing, Login, Register, Dashboard, etc.)
├── routes/       # Protected route handling
├── services/     # API service layer (Auth, Jobs)
├── utils/        # Helper functions and formatters
├── App.jsx       # Main application component
└── index.css     # Global design system
```

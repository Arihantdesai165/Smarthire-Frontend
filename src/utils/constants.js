/**
 * Application-wide constants for SmartHire Frontend
 */

// API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

// Auth
export const AUTH_TOKEN_KEY = 'smarthire_token';
export const AUTH_USER_KEY = 'smarthire_user';

// Job Categories
export const JOB_TYPES = [
  { value: 'full-time', label: 'Full Time' },
  { value: 'part-time', label: 'Part Time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'remote', label: 'Remote' },
];

// Experience levels
export const EXPERIENCE_LEVELS = [
  { value: 0, label: 'Fresher (0 years)' },
  { value: 1, label: '1+ year' },
  { value: 2, label: '2+ years' },
  { value: 3, label: '3+ years' },
  { value: 5, label: '5+ years' },
  { value: 8, label: '8+ years' },
  { value: 10, label: '10+ years' },
];

// UI
export const TOAST_DURATION = 3000;
export const DEBOUNCE_DELAY = 400;
export const MAX_JOBS_DISPLAY = 50;

// Match score thresholds
export const MATCH_EXCELLENT = 80;
export const MATCH_GOOD = 60;
export const MATCH_FAIR = 40;

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  JOBS: '/jobs',
  RECOMMENDATIONS: '/recommendations',
  CREATE_JOB: '/create-job',
};

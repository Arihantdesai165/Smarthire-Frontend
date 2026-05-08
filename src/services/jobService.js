import API from '../api/axios'

export const jobService = {
  getAllJobs: () => API.get('/api/jobs'),

  createJob: (data) => API.post('/api/jobs', data),

  searchByLocation: (location) =>
    API.get('/api/jobs/search/location', { params: { location } }),

  searchBySkill: (skill) =>
    API.get('/api/jobs/search/skill', { params: { skill } }),

  searchByTitle: (keyword) =>
    API.get('/api/jobs/search/title', { params: { keyword } }),

  getRecommendations: (skills) =>
    API.get('/api/jobs/recommend', { params: { skills } })
}

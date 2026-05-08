import API from '../api/axios'

export const authService = {
  register: (data) => API.post('/api/auth/register', data),

  login: async (credentials) => {
    const response = await API.post('/api/auth/login', credentials)
    const { token } = response.data
    if (token) {
      localStorage.setItem('smarthire_token', token)
      // Decode basic info from JWT payload
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const user = {
          email: payload.sub || credentials.email,
          role: payload.role || 'CANDIDATE'
        }
        localStorage.setItem('smarthire_user', JSON.stringify(user))
      } catch {
        localStorage.setItem('smarthire_user', JSON.stringify({ email: credentials.email }))
      }
    }
    return response
  },

  logout: () => {
    localStorage.removeItem('smarthire_token')
    localStorage.removeItem('smarthire_user')
  },

  getToken: () => localStorage.getItem('smarthire_token'),

  getUser: () => {
    try {
      return JSON.parse(localStorage.getItem('smarthire_user'))
    } catch {
      return null
    }
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('smarthire_token')
    if (!token) return false
    // Check if token is expired
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      return payload.exp * 1000 > Date.now()
    } catch {
      return false
    }
  }
}

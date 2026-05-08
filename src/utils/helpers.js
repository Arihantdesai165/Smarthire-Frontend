/**
 * Format salary as Indian currency
 */
export const formatSalary = (amount) => {
  if (!amount && amount !== 0) return 'Not disclosed'
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Get initials from a name
 */
export const getInitials = (name) => {
  if (!name) return '?'
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Get match percentage color
 */
export const getMatchColor = (percentage) => {
  if (percentage >= 80) return '#10b981'
  if (percentage >= 50) return '#6366f1'
  if (percentage >= 30) return '#f59e0b'
  return '#ef4444'
}

/**
 * Parse error message from API response
 */
export const getErrorMessage = (error) => {
  if (error.response?.data?.message) return error.response.data.message
  if (error.response?.data?.error) return error.response.data.error
  if (error.response?.data) {
    if (typeof error.response.data === 'string') return error.response.data
  }
  if (error.message) return error.message
  return 'Something went wrong. Please try again.'
}

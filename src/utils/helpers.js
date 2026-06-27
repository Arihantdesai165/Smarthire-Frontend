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

/**
 * Format date to relative time (e.g., "2 hours ago")
 */
export const timeAgo = (dateInput) => {
  if (!dateInput) return '';
  const date = new Date(dateInput);
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  if (seconds < 60) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  
  return date.toLocaleDateString();
};

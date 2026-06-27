import { useState, useEffect } from 'react';

/**
 * useDebounce — delays updating a value until after a specified delay.
 * Useful for search inputs to reduce API calls.
 *
 * @param {*} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds. Defaults to 400ms.
 * @returns {*} - The debounced value.
 */
const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

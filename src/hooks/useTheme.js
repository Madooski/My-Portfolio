import { useState, useEffect } from 'react';

/**
 * useTheme — manages dark/light mode.
 * Priority: 1) localStorage (user preference), 2) OS prefers-color-scheme
 * Applies `data-theme` attribute to <html> so CSS variables can react.
 */
const useTheme = () => {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
};

export default useTheme;

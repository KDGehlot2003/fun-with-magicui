import { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default App;

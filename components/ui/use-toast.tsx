import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description }) => {
    console.log('Toast:', title, description);
    // Add logic to display the toast in the UI
    setToasts([...toasts, { title, description }]);
  };

  return { toast };
};

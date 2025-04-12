// ProtectedRoutes.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/loginpage');
    }
    setIsLoading(false);
  }, [user, navigate]);

  if (isLoading) return null; // or a loading spinner

  return <>{children}</>;
};

export default ProtectedRoutes;

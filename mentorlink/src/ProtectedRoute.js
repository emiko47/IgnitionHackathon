import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './services/AuthServices';

const ProtectedRoute = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
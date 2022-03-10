import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import AccountManagement from '../public/AccountManagement';
import CreateHousePage from '../public/CreateHousePage';
import HomePage from '../public/HomePage';
import JoiningForm from '../public/JoiningForm';
import SignInPage from '../public/SignInPage';

interface UnauthenticatedRoutesProps {}

const UnauthenticatedRoutes: React.FC<UnauthenticatedRoutesProps> = () => {
  return (
    <Routes>
      <Route path="auth" element={<SignInPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="form" element={<JoiningForm />} />
      <Route path="create" element={<CreateHousePage />} />
      <Route path="account" element={<AccountManagement />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;

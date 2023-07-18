import React, { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import CreateAccountPage from './Components/CreateAccountPage/CreateAccountPage';
import Dashboard from './Components/Dashboard/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'login') {
      return <LoginPage onPageChange={handlePageChange} />;
    } else if (currentPage === 'createAccount') {
      return <CreateAccountPage onPageChange={handlePageChange} />;
    } else if (currentPage === 'dashboard') {
      return <Dashboard />;
    }
  };

  return <div>{renderPage()}</div>;
};


export default App;


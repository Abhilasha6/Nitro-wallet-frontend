// import React, { useState, useContext } from 'react';
// import LoginPage from './Components/LoginPage/LoginPage';
// import CreateAccountPage from './Components/CreateAccountPage/CreateAccountPage';
// import Dashboard from './Components/Dashboard/Dashboard';
// import AuthContextProvider, { AuthContext } from './Authorisation/AuthContext'; // Import AuthContextProvider and AuthContext

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('login');
//   const authContext = useContext(AuthContext); // Access the AuthContext here

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPage = () => {
//     // <Navbar/>
//     if (currentPage === 'login') {
//       return <LoginPage onPageChange={handlePageChange} />;
//     } else if (currentPage === 'createAccount') {
//       return <CreateAccountPage onPageChange={handlePageChange} />;
//     } else if (currentPage === 'dashboard') {
//       return <Dashboard publicKey={authContext.publicKey} />; // Pass publicKey to Dashboard component
//     }
//   };

//   return (
//     <AuthContextProvider>
//       <div>{renderPage()}</div>
//     </AuthContextProvider>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import CreateAccountPage from './Components/CreateAccountPage/CreateAccountPage';
import Dashboard from './Components/Dashboard/Dashboard';
import AuthContextProvider from './Authorisation/AuthContext'; // Import AuthContextProvider
import PrivateRoute from './Authorisation/PrivateRoute';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/create-account" component={CreateAccountPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
};

export default App;

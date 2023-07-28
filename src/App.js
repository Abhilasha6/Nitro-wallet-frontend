import React, { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import CreateAccountPage from './Components/CreateAccountPage/CreateAccountPage';
import Dashboard from './Components/Dashboard/Dashboard';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';


const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    // <Navbar/>
    if (currentPage === 'login') {
      return <LoginPage onPageChange={handlePageChange} />;
    } else if (currentPage === 'createAccount') {
      return <CreateAccountPage onPageChange={handlePageChange} />;
    } else if (currentPage === 'dashboard') {
      return <Dashboard />;
    }

    // <Router>
    //   {/* <navbar /> */}
    //   <Switch>
    //     <Route path='./Dogs' exact component={Dogs} />
    //     <Route path='./Cats' component={Cats} />
    //     <Route path='./Sheeps' component={Sheeps} />
    //   </Switch>
    // </Router>
  };

  return <div>{renderPage()}</div>;
};


export default App;


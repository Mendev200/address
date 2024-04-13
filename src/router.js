import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddContact from './pages/AddContact';
import Header from './pages/Header';
import Home from './pages/Home';
import ShowUser from './pages/ShowUser';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UpdateUser from './pages/UpdateUser';


function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AddContact />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ShowUser />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

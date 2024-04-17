import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddContact from './pages/AddContact';
import Header from './pages/Header';
import Home from './pages/Home';
import ShowUser from './pages/ShowUser';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UpdateContact from './pages/UpdateContact';
import UpdateUser from './pages/UpdateUser';


function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/add-contact" element={<AddContact />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/home/:userId" element={<Home />} />
                <Route path="/show-user/" element={<ShowUser />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/update-contact/:contactId" element={<UpdateContact />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;

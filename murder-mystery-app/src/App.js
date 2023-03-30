// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateParty from './components/CreateParty';
import Party from './components/Party';
import Character from './components/Character';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register';
import Confirm from './components/Confirm';
import ResetPassword from './components/ResetPassword'; // Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Add this route */}
        <Route path="/createparty" element={<CreateParty />} />
        <Route path="/party/:id" element={<Party />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

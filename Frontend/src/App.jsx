import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import Settings from './components/Settings';
import MessageCompose from './components/MessageCompose'; 
import PersonalDetails from './components/PersonalDetails';
import MiscDetails from './components/MiscDetails';
import FormDetails from './components/FormDetails'; // Import the new component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='dashboard'>
        <Sidebar />
        <div className="dashboard--content">
          <Routes>
            {/* Redirect root path to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<><Content /><Profile /></>} />
            <Route path="/assignments" element={<div>Placeholder for Assignments</div>} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/form-details" element={<FormDetails />} /> {/* New Route for Fill your Form */}
            <Route path="/settings" element={<Settings />} />
            <Route path="/compose-message" element={<MessageCompose />} />
            <Route path="/MiscDetails" element={<MiscDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

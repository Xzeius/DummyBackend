import React, { useState } from 'react';
import { BiBell, BiMoon, BiSun, BiLock, BiKey, BiBellOff } from 'react-icons/bi'; // Import icons
import '../styles/Settings.css'; // Import CSS for styling

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [securityMode, setSecurityMode] = useState(false);

  const handleToggleNotification = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleTogglePrivacyMode = () => {
    setPrivacyMode(!privacyMode);
  };

  const handleToggleSecurityMode = () => {
    setSecurityMode(!securityMode);
  };

  const handleSaveChanges = () => {
    alert('Changes saved successfully!'); // Replace with actual save logic
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="setting-item">
        <BiBell className="setting-icon" />
        <span>Enable Notifications</span>
        <label className="switch">
          <input type="checkbox" checked={notificationsEnabled} onChange={handleToggleNotification} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-item">
        {darkMode ? <BiMoon className="setting-icon active" /> : <BiSun className="setting-icon" />}
        <span>Dark Mode</span>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={handleToggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-item">
        <BiLock className="setting-icon" />
        <span>Privacy Mode</span>
        <label className="switch">
          <input type="checkbox" checked={privacyMode} onChange={handleTogglePrivacyMode} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-item">
        <BiKey className="setting-icon" />
        <span>Security Mode</span>
        <label className="switch">
          <input type="checkbox" checked={securityMode} onChange={handleToggleSecurityMode} />
          <span className="slider round"></span>
        </label>
      </div>

      <button className="save-button" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default Settings;

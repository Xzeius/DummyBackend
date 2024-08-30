import React, { useState } from 'react';
import '../styles/MessageCompose.css';

const MessageCompose = () => {
  const [recipient, setRecipient] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageData = { recipient, reason: reason === 'other' ? customReason : reason, message };
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    messages.push(messageData);
    localStorage.setItem('messages', JSON.stringify(messages));

    alert('Message saved locally!');
    // Reset form fields
    setRecipient('');
    setReason('');
    setMessage('');
    setCustomReason('');
  };

  return (
    <div className="compose-content">
      <h1>Compose a Message</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipient">Recipient:</label>
        <select
          id="recipient"
          name="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        >
          <option value="">Select Recipient</option>
          <option value="mentor">Mentor</option>
          <option value="classTeacher">Class Teacher</option>
          <option value="hod">HOD</option>
          <option value="principal">Principal</option>
        </select>

        <label htmlFor="reason">Reason:</label>
        <select
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <option value="">Select Reason</option>
          <option value="assignment">Assignment Issue</option>
          <option value="feedback">Feedback</option>
          <option value="query">Query</option>
          <option value="other">Other</option>
        </select>

        {reason === 'other' && (
          <div>
            <label htmlFor="customReason">Please specify:</label>
            <input
              type="text"
              id="customReason"
              name="customReason"
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
            />
          </div>
        )}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageCompose;

import React, { useState } from 'react';

const App= () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both fields are filled
    if (firstName.trim() === '' || lastName.trim() === '') {
      alert('Please fill out both fields.');
    } else {
      // Combine the values and set the full name
      const combinedName = `${firstName} ${lastName}`;
      setFullName(combinedName);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br></br>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>

      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default App;

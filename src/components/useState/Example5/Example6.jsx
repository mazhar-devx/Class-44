import { useState } from 'react';

function Events() {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  return (
    <div className="m-4">
      <input
        type="text"
        className="outline-indigo-600 outline rounded-sm p-2 outline-1"
        value={value}
        name="username"
        placeholder="Enter your username"
        onChange={handleInputChange}
      />
      <p>Username: {value}</p>
    </div>
  );
}

export default Events;
import { useState } from 'react';

function EventsObj() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="m-4">
      <input
        type="text"
        className="outline-indigo-600 outline rounded-sm p-2 outline-1"
        value={form.username}
        name="username"
        placeholder="Enter your username"
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="outline-indigo-600 outline rounded-sm p-2 outline-1 mt-2"
        value={form.password}
        name="password"
        placeholder="Enter your password"
        onChange={handleInputChange}
      />
      <p>Username: {form.username}</p>
      <p>Password: {form.password}</p>
    </div>
  );
}

export default EventsObj;
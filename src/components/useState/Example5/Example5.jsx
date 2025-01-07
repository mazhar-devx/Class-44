import { useState } from "react";

const Example5 = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Doe", age: 26 },
    { id: 3, name: "Alice Smith", age: 30 },
  ]);

  const addUser = () => {
    const newId = users.length
      ? Math.max(...users.map((user) => user.id)) + 1
      : 1;
    console.log(newId);

    const newUser = { id: newId, name: "Muddassir Aslam", age: 24 };
    setUsers([...users, newUser]);
  };
  const updateUserAge = (id, newAge) => {
        const updateUsers = users.map(user => 
        user.id === id ? { ...user, age: newAge } : user
        );
        setUsers(updateUsers);
    }
    const removeUser = (id)=>{
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers)
    }
    return(
        <div className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Users Table</h3>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Age</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border border-gray-300">{user.id}</td>
                <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                <td className="px-4 py-2 border border-gray-300">{user.age}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => updateUserAge(user.id, user.age + 1)}
                    className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
                  >
                    Increase Age
                  </button>
                  <button
                    onClick={() => removeUser(user.id)}
                    className="px-2 py-1 text-white bg-red-500 rounded"
                  >
                    Remove User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addUser}
          className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
        >
          Add User
        </button>
      </div>
    )
}
export default Example5

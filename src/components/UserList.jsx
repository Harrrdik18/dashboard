import { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ openModal }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(() => alert('Failed to fetch users!'));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <button 
        onClick={() => openModal('add')} 
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add User
      </button>
      <table className="w-full max-w-4xl border border-gray-300 rounded-lg text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">First Name</th>
            <th className="py-2">Last Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Department</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id} className="border-t">
              <td className="py-2">{user.id}</td>
              <td className="py-2">{user.name.split(' ')[0]}</td>
              <td className="py-2">{user.name.split(' ')[1]}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.company.name}</td>
              <td className="py-2">
                <button 
                  onClick={() => openModal('edit', user)} 
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex space-x-2">
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
          <button 
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;

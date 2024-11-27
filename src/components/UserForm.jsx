import { useState } from 'react';
import axios from 'axios';

const UserForm = ({ closeModal, user, action }) => {
  const [formData, setFormData] = useState(
    user || { firstName: '', lastName: '', email: '', department: '' }
  );
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.department) errors.department = 'Department is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const url = 'https://jsonplaceholder.typicode.com/users';
    const request = action === 'add'
      ? axios.post(url, formData)
      : axios.put(`${url}/${formData.id}`, formData);

    request
      .then(() => {
        alert(`${action === 'add' ? 'User added' : 'User updated'} successfully!`);
        closeModal();
      })
      .catch(() => alert('Failed to submit!'));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{action === 'add' ? 'Add User' : 'Edit User'}</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name:</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={`w-full border rounded px-2 py-1 ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name:</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={`w-full border rounded px-2 py-1 ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full border rounded px-2 py-1 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Department:</label>
          <input
            type="text"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className={`w-full border rounded px-2 py-1 ${errors.department ? 'border-red-500' : ''}`}
          />
          {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;

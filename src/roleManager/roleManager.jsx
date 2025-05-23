import React, { useState } from 'react';
import { changeUserRole } from '../store/change_role/adminSlice';
import { useDispatch } from 'react-redux';
import { useGetUsersQuery } from '../store/getAllUsers/getAllUsersSlice';

const RoleManager = ({ users }) => {
 console.log('pesho', users);
 const dispatch = useDispatch();
 const token = localStorage.getItem('token');
 const [selectedUser, setSelectedUser] = useState(null);
 const [newRole, setNewRole] = useState('');
 const { data, isLoading, error } = useGetUsersQuery();

 const handleChangeRole = () => {
  console.log('pesho', token);
  if (!selectedUser || !newRole) return;

  dispatch(changeUserRole({ username: selectedUser, newRole, token }));
 };

 if (isLoading) return <p>Loading users...</p>;
 if (error) return <p>Error: {error?.data?.message || 'Something went wrong'}</p>;
 return (
  <div className="p-4">
   <h2 className="text-xl font-bold mb-2">Change User Role</h2>
   <select onChange={(e) => setSelectedUser(e.target.value)} className="border p-1 mr-2">
    <option value="">Select user</option>
    {data.map((u, i) => (
     <option key={i} value={u.username}>
      {u.username}
     </option>
    ))}
   </select>

   <select onChange={(e) => setNewRole(e.target.value)} className="border p-1 mr-2">
    <option value="">Select new role</option>
    <option value="user">User</option>
    <option value="admin">Admin</option>
   </select>

   <button onClick={handleChangeRole} className="bg-blue-500 text-white px-3 py-1 rounded">
    Change Role
   </button>
  </div>
 );
};

export default RoleManager;

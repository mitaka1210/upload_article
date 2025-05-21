import React, { useState } from 'react';
import { changeUserRole } from '../store/change_role/adminSlice';
import { useDispatch } from 'react-redux';

const RoleManager = ({ users }) => {
 console.log('pesho', users);
 const dispatch = useDispatch();
 const token = localStorage.getItem('token');
 const [selectedUser, setSelectedUser] = useState(null);
 const [newRole, setNewRole] = useState('');

 const handleChangeRole = () => {
  console.log('pesho', token);
  if (!selectedUser || !newRole) return;

  dispatch(changeUserRole({ username: selectedUser, newRole, token }));
 };

 return (
  <div className="p-4">
   <h2 className="text-xl font-bold mb-2">Change User Role</h2>
   <select onChange={(e) => setSelectedUser(e.target.value)} className="border p-1 mr-2">
    <option value="">Select user</option>
    {users.map((u, i) => (
     <option key={i} value={u.username}>
      {u.userName}
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

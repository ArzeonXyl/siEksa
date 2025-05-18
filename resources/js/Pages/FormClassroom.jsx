import React, { useState } from 'react';
import SidebarStudent from '../components/SidebarStudent';

const FormClassroom = () => {
  const [classCode, setClassCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!classCode.trim()) {
      setMessage('❌ Class code is required.');
      return;
    }

    // Simulasi submit ke backend (ganti dengan fetch/axios nanti)
    console.log('Joining class with code:', classCode);
    setMessage(`✅ Successfully joined class with code: ${classCode}`);
    setClassCode('');
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar tetap pakai komponen SidebarStudent */}
      <SidebarStudent activePage="Join Class" />

      {/* Konten Utama */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Join a Classroom</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-md"
        >
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Class Code</span>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-500"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value)}
              placeholder="Enter class code..."
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Join Class
          </button>

          {message && (
            <p className="mt-4 text-sm font-semibold text-green-600">{message}</p>
          )}
        </form>
      </main>
    </div>
  );
};

export default FormClassroom;

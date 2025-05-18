import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
      <div className="p-6">
        <h3 className="text-2xl font-bold">
          <i className="fas fa-school mr-2"></i>Classroom
        </h3>
      </div>
      <nav className="flex flex-col gap-2 px-4">
        <a className="py-2 px-4 bg-blue-600 rounded hover:bg-blue-700" href="#">
          <i className="fas fa-home mr-2"></i> Dashboard
        </a>
        <a className="py-2 px-4 hover:bg-gray-700 rounded" href="#">
          <i className="fas fa-chalkboard mr-2"></i> My Classes
        </a>
        <a className="py-2 px-4 hover:bg-gray-700 rounded" href="#">
          <i className="fas fa-users mr-2"></i> Students
        </a>
        <a className="py-2 px-4 hover:bg-gray-700 rounded" href="#">
          <i className="fas fa-tasks mr-2"></i> Assignments
        </a>
        <a className="py-2 px-4 hover:bg-gray-700 rounded" href="#">
          <i className="fas fa-cog mr-2"></i> Settings
        </a>
      </nav>
    </aside>
  );
}

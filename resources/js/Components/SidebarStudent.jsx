// resources/js/Components/SidebarStudent.jsx
import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function SidebarStudent() {
  const currentUrl = usePage().url;

  const isActive = (href) => currentUrl === href;

  return (
    <aside className="w-64 bg-gray-800 p-4 text-white min-h-screen">
      <div className="text-xl font-bold mb-8 flex items-center gap-2">
        <i className="fas fa-school" /> Classroom
      </div>
      <nav className="space-y-2">
        <Link
          href="/student/dashboard"
          className={`flex items-center p-2 rounded hover:bg-gray-700 ${
            isActive('/student/dashboard') ? 'bg-gray-700' : ''
          }`}
        >
          <i className="fas fa-home w-6" /> Dashboard
        </Link>
        <Link
          href="/student/classroom"
          className={`flex items-center p-2 rounded hover:bg-gray-700 ${
            isActive('/student/classroom') ? 'bg-gray-700' : ''
          }`}
        >
          <i className="fas fa-book-open w-6" /> My Classes
        </Link>
        <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
          <i className="fas fa-tasks w-6" /> Assignments
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
          <i className="fas fa-users w-6" /> Students
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
          <i className="fas fa-cog w-6" /> Settings
        </a>
      </nav>
    </aside>
  );
}

import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Head } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar'; // import Sidebar

export default function Dashboard({ auth }) {
  useEffect(() => {
    import('chart.js/auto').then(({ default: Chart }) => {
      const ctx = document.getElementById('enrollmentChart');
      if (!ctx) return;

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Enrollment',
            data: [12, 19, 3, 5, 2, 3, 7],
            borderColor: '#3b82f6', // Tailwind blue-500
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            fill: true,
            tension: 0.4,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
          },
        },
      });
    });
  }, []);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Welcome to Classroom Dashboard</h1>
            <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md hover:-translate-y-1 transition p-4">
              <div className="bg-blue-500 text-white p-3 rounded-t-xl flex items-center">
                <i className="fas fa-chalkboard mr-2"></i>
                <h5 className="text-lg font-semibold">Total Classes</h5>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-3xl font-bold">12</h2>
                <p className="text-green-500 mt-2 flex justify-center items-center gap-1">
                  <i className="fas fa-arrow-up"></i> 12% from last month
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:-translate-y-1 transition p-4">
              <div className="bg-blue-500 text-white p-3 rounded-t-xl flex items-center">
                <i className="fas fa-users mr-2"></i>
                <h5 className="text-lg font-semibold">Total Students</h5>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-3xl font-bold">150</h2>
                <p className="text-green-500 mt-2 flex justify-center items-center gap-1">
                  <i className="fas fa-arrow-up"></i> 15% from last month
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:-translate-y-1 transition p-4">
              <div className="bg-blue-500 text-white p-3 rounded-t-xl flex items-center">
                <i className="fas fa-tasks mr-2"></i>
                <h5 className="text-lg font-semibold">Total Assignments</h5>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-3xl font-bold">45</h2>
                <p className="text-yellow-500 mt-2 flex justify-center items-center gap-1">
                  <i className="fas fa-arrow-down"></i> 5% from last month
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2 bg-white rounded-xl shadow-md p-4">
              <div className="bg-blue-500 text-white p-3 rounded-t-xl">
                <h5 className="text-lg font-semibold">Recent Activity</h5>
              </div>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-100 p-3 rounded">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span>New student joined "Mathematics 101"</span>
                    <span className="text-gray-500">3 mins ago</span>
                  </div>
                  <p className="text-gray-600 text-sm">Student ID: MTH001</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span>Assignment submitted by John Doe</span>
                    <span className="text-gray-500">1 hour ago</span>
                  </div>
                  <p className="text-gray-600 text-sm">Assignment: Algebra Homework</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="bg-blue-500 text-white p-3 rounded-t-xl">
                <h5 className="text-lg font-semibold">Quick Actions</h5>
              </div>
              <div className="flex flex-col mt-4 space-y-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center gap-2 transition">
                  <i className="fas fa-plus"></i> Create New Class
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center justify-center gap-2 transition">
                  <i className="fas fa-file"></i> Upload Assignment
                </button>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 flex items-center justify-center gap-2 transition">
                  <i className="fas fa-user-plus"></i> Add Student
                </button>
              </div>
            </div>
          </div>

          {/* Enrollment Chart */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="bg-blue-500 text-white p-3 rounded-t-xl">
              <h5 className="text-lg font-semibold">Enrollment Statistics</h5>
            </div>
            <div className="p-4">
              <canvas id="enrollmentChart"></canvas>
            </div>
          </div>
        </main>
      </div>
    </AuthenticatedLayout>
  );
}

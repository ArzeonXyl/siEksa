// resources/js/Pages/Dashboard.jsx
import React from 'react';

export default function DashboardClass() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome to Classroom Dashboard</h1>
          <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600">
            <i className="fas fa-plus"></i>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md hover:-translate-y-1 transition p-4">
            <div className="bg-blue-500 text-white p-3 rounded-t-xl">
              <h5 className="text-lg font-semibold">
                <i className="fas fa-chalkboard mr-2"></i>Total Classes
              </h5>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-3xl font-bold">12</h2>
              <p className="text-green-500 mt-2">
                <i className="fas fa-arrow-up mr-1"></i> 12% from last month
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:-translate-y-1 transition p-4">
            <div className="bg-blue-500 text-white p-3 rounded-t-xl">
              <h5 className="text-lg font-semibold">
                <i className="fas fa-users mr-2"></i>Total Students
              </h5>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-3xl font-bold">150</h2>
              <p className="text-green-500 mt-2">
                <i className="fas fa-arrow-up mr-1"></i> 15% from last month
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:-translate-y-1 transition p-4">
            <div className="bg-blue-500 text-white p-3 rounded-t-xl">
              <h5 className="text-lg font-semibold">
                <i className="fas fa-tasks mr-2"></i>Total Assignments
              </h5>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-3xl font-bold">45</h2>
              <p className="text-yellow-500 mt-2">
                <i className="fas fa-arrow-down mr-1"></i> 5% from last month
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                <i className="fas fa-plus mr-2"></i>Create New Class
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                <i className="fas fa-file mr-2"></i>Upload Assignment
              </button>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
                <i className="fas fa-user-plus mr-2"></i>Add Student
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
  );
}

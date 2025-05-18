// resources/js/Pages/StudentDashboard.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Head } from '@inertiajs/react';
import SidebarStudent from '../Components/SidebarStudent'; // import sidebarstudent// Tambahin ini di atas
import { Link } from '@inertiajs/react';
export default function StudentDashboard() {
  return (
    <>
      <Head title="Student Dashboard" />
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <SidebarStudent />

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Welcome back, Student!</h1>
            <Link
                href={route('student.formclassroom')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 inline-flex items-center gap-2"
            >
                <i className="fas fa-plus"></i> New Course
            </Link>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Ongoing Courses"
              value="4"
              icon="fa-book-open"
              trend="+12% from last month"
              trendColor="text-green-500"
              iconColor="text-blue-500"
            />
            <StatCard
              title="Upcoming Assignments"
              value="2"
              icon="fa-tasks"
              trend="-5% from last month"
              trendColor="text-yellow-500"
              iconColor="text-green-500"
            />
            <StatCard
              title="New Messages"
              value="5"
              icon="fa-envelope"
              trend="View all"
              trendColor="text-blue-500"
              iconColor="text-purple-500"
              isNotification
            />
          </div>

          {/* Schedule & Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Course Schedule</h2>
              <ScheduleItem title="Mathematics 101" days="Monday, Wednesday" progress="75%" />
              <ScheduleItem title="Science 202" days="Tuesday, Thursday" progress="60%" />
              <ScheduleItem title="English 303" days="Friday" progress="90%" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Recent Messages</h2>
              <MessageItem sender="Dr. Smith" course="Mathematics 101" time="2h ago" message="Please submit your assignment by tomorrow." />
              <MessageItem sender="Dr. Johnson" course="Science 202" time="4h ago" message="Your project has been approved." />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Reusable Components (tetap di sini atau pindah ke file lain juga bisa)
function StatCard({ title, value, icon, trend, trendColor, iconColor, isNotification }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-gray-500">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <i className={`fas ${icon} text-2xl ${iconColor}`}></i>
      </div>
      <p className={`${trendColor} mt-2`}>
        <i className={`fas ${isNotification ? 'fa-bell' : trend.includes('-') ? 'fa-arrow-down' : 'fa-arrow-up'}`} /> {trend}
      </p>
    </div>
  );
}

function ScheduleItem({ title, days, progress }) {
  return (
    <div className="bg-gray-50 p-4 rounded mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-500">{days}</p>
        </div>
        <span className="text-blue-500">{progress}</span>
      </div>
    </div>
  );
}

function MessageItem({ sender, course, time, message }) {
  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold">{sender}</h3>
          <p className="text-gray-500">{course}</p>
        </div>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
      <p className="mt-2">{message}</p>
    </div>
  );
}

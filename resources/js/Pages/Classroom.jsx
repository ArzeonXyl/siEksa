// src/pages/Classroom.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faBook, faCode, faDesktop
} from '@fortawesome/free-solid-svg-icons';
import SidebarStudent from '../components/SidebarStudent';
import { Link } from '@inertiajs/react';

const Classroom = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SidebarStudent />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Classes</h1>
        <Link
            href={route('student.formclassroom')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 inline-flex items-center gap-2"
        >
            <i className="fas fa-plus"></i> New Course
        </Link>

        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ClassCard
            title="Tarbiyatul Arabiyah"
            subtitle="Arabic Education"
            icon={faBook}
            iconColor="text-green-500"
            borderColor="border-green-500"
            progress="85%"
            meeting="Friday, 10:00 AM"
          />
          <ClassCard
            title="Programming Project"
            subtitle="Karya Inovasi"
            icon={faCode}
            iconColor="text-blue-500"
            borderColor="border-blue-500"
            progress="75%"
            meeting="Wednesday, 2:00 PM"
          />
          <ClassCard
            title="Dormitory IT Training"
            subtitle="Design"
            icon={faDesktop}
            iconColor="text-purple-500"
            borderColor="border-purple-500"
            progress="90%"
            meeting="Monday, 11:00 AM"
          />
        </div>

        {/* Recent Activities */}
        <Section title="Recent Activities">
          <Activity title="Tarbiyatul Arabiyah" content="New materials uploaded for this week's lesson." time="2 hours ago" />
          <Activity title="Programming Project" content="Project deadline extended by one week." time="5 hours ago" />
          <Activity title="Dormitory IT Training" content="New design templates added to the resource section." time="8 hours ago" />
        </Section>

        {/* Upcoming Events */}
        <Section title="Upcoming Events">
          <Event
            title="Tarbiyatul Arabiyah Exam"
            date="October 20, 2023"
            time="10:00 AM"
            location="Classroom A"
            daysLeft="5"
            color="text-green-500"
          />
          <Event
            title="Programming Project Presentation"
            date="October 25, 2023"
            time="2:00 PM"
            location="Auditorium"
            daysLeft="7"
            color="text-blue-500"
          />
          <Event
            title="Dormitory IT Training Workshop"
            date="October 30, 2023"
            time="9:00 AM"
            location="Lab IT"
            daysLeft="10"
            color="text-purple-500"
          />
        </Section>
      </main>
    </div>
  );
};

// Komponen lain tetep sama, bisa dipindah ke file lain juga kalau mau
const ClassCard = ({ title, subtitle, icon, iconColor, borderColor, progress, meeting }) => (
  <div className={`bg-white p-6 rounded-lg shadow border-l-4 ${borderColor}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <span className={iconColor}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Progress:</span>
        <span className={`${iconColor} font-bold`}>{progress}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Next Meeting:</span>
        <span className="font-bold">{meeting}</span>
      </div>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const Activity = ({ title, content, time }) => (
  <div className="border-b pb-4">
    <h4 className="font-bold">{title}</h4>
    <p className="text-gray-600">{content}</p>
    <p className="text-sm text-gray-500">Posted {time}</p>
  </div>
);

const Event = ({ title, date, time, location, daysLeft, color }) => (
  <div className="bg-gray-50 p-4 rounded">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-600">Date: {date}</p>
        <p className="text-gray-600">Time: {time}</p>
        <p className="text-gray-600">Location: {location}</p>
      </div>
      <span className={`${color} font-bold`}>{daysLeft} days left</span>
    </div>
  </div>
);

export default Classroom;

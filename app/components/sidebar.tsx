'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle automatic collapse on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile overlay when sidebar is open */}
      {!isCollapsed && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed bg-white h-screen transition-all duration-300 z-30
        ${isCollapsed ? 'w-0' : 'w-60 lg:sticky top-[4rem]'} border-r shadow-sm `}>
        {/* Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`${isCollapsed ? "p-3" : "p-3 left-[82%]"} hover:bg-gray-100 absolute
            left-[-12px] top-[0] bg-white rounded-lg border shadow-md z-50
            lg:hidden`}
        >
          {isCollapsed ? '→' : '←'}
        </button>

        {/* Navigation Links */}
        <nav className={`${isCollapsed? "hidden": "py-4 pr-4 space-y-2"}`}>
          <Link href="/dashboard" className="flex items-center space-x-3 p-4 nav-link">
          {!isCollapsed && 
            <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg><span>Dashboard</span></>}
          </Link>

          <Link href="#" className="flex items-center space-x-3 p-4 bg-blue-200 nav-link text-blue-500">
          {!isCollapsed && 
            <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg><span>Skill Test</span></>}
          </Link>

          <Link href="#" className="flex items-center space-x-3 p-4 nav-link">
          {!isCollapsed && 
            <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg><span>Internship</span></>}
          </Link>
        </nav>
      </div>
    </>
  );
}

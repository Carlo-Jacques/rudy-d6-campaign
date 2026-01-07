"use client";

import Link from "next/link";

export default function ActionWidgets() {
  return (
    <div className="relative -mt-20 z-10 mb-0 w-full" style={{ marginTop: "-120px" }}>
      {/* Gradient overlay from patriot red (bottom) to transparent (top) - spans full width */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to top, #B31942 35%, transparent 100%)',
        }}
      />
      {/* Content container - constrained width */}
      <div className="relative z-10 mx-auto max-w-7xl px-4" style={{ paddingLeft: '3.75vw', paddingRight: '3.75vw' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Register to vote */}
          <Link 
            href="#" 
            className="action-item group bg-[#14468c] text-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="icon-wrapper mb-4">
              <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h5 className="action-title text-lg font-bold uppercase mb-2">Register to vote</h5>
            <p className="text-sm text-white/90">Submit your application</p>
          </Link>

          {/* Attend Events */}
          <Link 
            href="#" 
            className="action-item group bg-[#0d2f5d] text-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="icon-wrapper mb-4">
              <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h5 className="action-title text-lg font-bold uppercase mb-2">Attend Events</h5>
            <p className="text-sm text-white/90">Find events near you</p>
          </Link>

          {/* Get Involved */}
          <Link 
            href="#" 
            className="action-item group bg-[#0d2f5d] text-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="icon-wrapper mb-4">
              <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <h5 className="action-title text-lg font-bold uppercase mb-2">Get Involved</h5>
            <p className="text-sm text-white/90">Become a volunteer</p>
          </Link>

          {/* Donate */}
          <Link 
            href="/donate" 
            className="action-item group bg-patriot-red text-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="icon-wrapper mb-4">
              <svg className="w-12 h-12 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h5 className="action-title text-lg font-bold uppercase mb-2">Donate Today</h5>
            <p className="text-sm text-white/90">Support our candidate</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

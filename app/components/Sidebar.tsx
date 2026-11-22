'use client'

import { useState } from 'react'

type SidebarProps = {
  lang: string
}

export default function Sidebar({ lang }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [institutionsOpen, setInstitutionsOpen] = useState(true)
  const [regionOpen, setRegionOpen] = useState(true)
  const [cityOpen, setCityOpen] = useState(true)

  const isAr = lang === 'ar'

  const openInstitutionMap = () => {
    const userAgent = navigator.userAgent || ''
    const platform = navigator.platform || ''

    const isIOS =
      /iPhone|iPad|iPod/i.test(userAgent) ||
      (platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    const query = encodeURIComponent('ISTA Had Soualem Morocco')

    const mapUrl = isIOS
      ? `https://maps.apple.com/?q=${query}`
      : `https://www.google.com/maps/search/?api=1&query=${query}`

    window.open(mapUrl, '_blank', 'noopener,noreferrer')
  }

  const closeMobile = () => setMobileOpen(false)

  const menu = (
    <div className="flex flex-col gap-2">

      {/* Main Menu */}
      <div className="px-3 mb-1">
        <p className="text-[10px] font-bold tracking-[0.18em] text-blue-200/70">
          {isAr ? 'القائمة الرئيسية' : 'MAIN MENU'}
        </p>
      </div>

      <a
        href="#home"
        onClick={closeMobile}
        className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-[#004B92] font-bold shadow-sm transition-all duration-200 hover:translate-x-1"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-xl">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
            <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span>{isAr ? 'الرئيسية' : 'Dashboard'}</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-[#159B65]" />
      </a>

      <a
        href="#courses"
        onClick={closeMobile}
        className="group flex items-center gap-3 px-4 py-3 rounded-xl text-blue-50 hover:bg-white/10 hover:text-white transition-all duration-200"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white group-hover:bg-white/20">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" strokeLinejoin="round"/>
            <path d="M8 7h8M8 11h8" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="font-medium">My Courses</span>
        <span className="ml-auto text-blue-200/60 text-xs">↗</span>
      </a>

      <a
        href="#polycopies"
        onClick={closeMobile}
        className="group flex items-center gap-3 px-4 py-3 rounded-xl text-blue-50 hover:bg-white/10 hover:text-white transition-all duration-200"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white group-hover:bg-white/20">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 14h10v7H7zM17 11h.01" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="font-medium">Polycopies</span>
        <span className="ml-auto text-blue-200/60 text-xs">↗</span>
      </a>

      {/* Institutions */}
      <div className="pt-5 mt-3 border-t border-white/15">

        <button
          type="button"
          onClick={() => setInstitutionsOpen(!institutionsOpen)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-blue-100 hover:bg-white/10 transition-colors"
        >
          <span className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#159B65]/20 text-[#65D6A3]">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 12h.01M15 12h.01" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-xs font-bold tracking-wider">
              {isAr ? 'المؤسسات' : 'INSTITUTIONS'}
            </span>
          </span>

          <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 transition-transform duration-300 ${institutionsOpen ? 'rotate-180' : ''}`} stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {institutionsOpen && (
          <div className="mt-2 space-y-2 animate-in fade-in duration-300">

            {/* Region */}
            <button
              type="button"
              onClick={() => setRegionOpen(!regionOpen)}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-blue-50 hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#65D6A3]" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span className="flex-1 text-left text-sm font-semibold">
                Casablanca-Settat
              </span>
              <svg viewBox="0 0 24 24" fill="none" className={`w-3.5 h-3.5 transition-transform ${regionOpen ? 'rotate-180' : ''}`} stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {regionOpen && (
              <div className="ml-4 pl-3 border-l border-white/20 space-y-2">

                {/* City */}
                <button
                  type="button"
                  onClick={() => setCityOpen(!cityOpen)}
                  className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-blue-200" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 21h18M5 21V5h9v16M14 10h5v11M8 9h3M8 13h3M8 17h3M17 14h.01M17 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="flex-1 text-left text-sm">
                    {isAr ? 'حد السوالم' : 'Had Soualem'}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" className={`w-3 h-3 transition-transform ${cityOpen ? 'rotate-180' : ''}`} stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {cityOpen && (
                  <div className="pl-3 border-l border-white/15">
                    <a
                      href="#courses"
                      onClick={closeMobile}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white text-[#004B92] shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50">
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
                          <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-xs font-bold truncate">
                          ISTA Had Soualem
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-[#159B65] font-semibold mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#159B65]"/>
                          {isAr ? 'الدروس متوفرة' : 'Courses available'}
                        </span>
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="pt-4 mt-3 border-t border-white/15">
        <p className="px-3 mb-2 text-[10px] font-bold tracking-[0.18em] text-blue-200/70">
          {isAr ? 'التفضيلات' : 'PREFERENCES'}
        </p>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-50 hover:bg-white/10 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9"/>
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeLinecap="round"/>
          </svg>
          <span className="text-sm">
            {isAr ? 'اللغة' : 'Language'}
          </span>
        </div>
      </div>

      {/* My Institution */}
      <div className="mt-4 rounded-xl border border-white/15 bg-[#1E5D98] p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#159B65]/20 text-[#65D6A3]">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" strokeLinejoin="round"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </span>
          <span className="text-white text-sm font-bold">
            {isAr ? 'مؤسستي' : 'My Institution'}
          </span>
        </div>

        <p className="text-blue-100 text-xs leading-relaxed mb-3">
          ISTA Had Soualem
          <br/>
          {isAr
            ? 'حد السوالم، الدار البيضاء سطات، المغرب'
            : 'Had Soualem, Casablanca-Settat, Morocco'}
        </p>

        <button
          type="button"
          onClick={openInstitutionMap}
          className="w-full flex items-center justify-center gap-2 bg-[#159B65] hover:bg-[#118354] text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          {isAr ? 'موقع المؤسسة' : 'Find on Maps'}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden w-full mb-5">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          className="w-full flex items-center justify-between bg-[#004B92] text-white rounded-xl px-4 py-3.5 shadow-lg hover:bg-[#003D78] transition-colors"
        >
          <span className="flex items-center gap-3 font-bold">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              </svg>
            </span>
            {isAr ? 'القائمة الرئيسية' : 'Navigation Menu'}
          </span>

          <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 transition-transform duration-300 ${mobileOpen ? 'rotate-180' : ''}`} stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {mobileOpen && (
          <div className="mt-3 rounded-2xl bg-[#004B92] border border-blue-800 p-3 shadow-xl animate-in slide-in-from-top-2 duration-300">
            {menu}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl bg-[#004B92] p-4 shadow-xl shadow-blue-950/15 border border-blue-800/50">

          {/* Brand */}
          <div className="flex items-center gap-3 px-3 py-4 mb-4 border-b border-white/15">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-md">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#004B92]" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-[#159B65] border-2 border-[#004B92]"/>
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-extrabold text-white tracking-tight">
                OFPPT Library
              </h2>
              <p className="text-[10px] text-blue-200 mt-0.5">
                {isAr ? 'منصتك التعليمية الرقمية' : 'Digital Learning Platform'}
              </p>
            </div>
          </div>

          {menu}

          <div className="mt-5 pt-3 border-t border-white/10 text-center">
            <p className="text-[9px] text-blue-200/50 tracking-widest">
              OFPPT DIGITAL LIBRARY
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

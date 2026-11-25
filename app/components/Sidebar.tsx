
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  institutionRegions,
  type Institution
} from '../data/institutions'

type SidebarProps = {
  lang: string
}

const defaultInstitution = institutionRegions
  .flatMap(region => region.cities)
  .flatMap(city => city.institutions)
  .find(institution => institution.id === 'ista-had-soualem') ?? null

function SidebarDiamondPattern() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 1000"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="sidebarBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0874C9" stopOpacity=".42" />
          <stop offset="100%" stopColor="#00366C" stopOpacity=".05" />
        </linearGradient>

        <linearGradient id="sidebarGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00B77B" stopOpacity=".35" />
          <stop offset="100%" stopColor="#00B77B" stopOpacity=".02" />
        </linearGradient>

        <linearGradient id="sidebarGray" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A7C6E5" stopOpacity=".20" />
          <stop offset="100%" stopColor="#A7C6E5" stopOpacity=".01" />
        </linearGradient>
      </defs>

      {/* Large overlapping geometric diamonds */}
      <g strokeWidth="1.5">
        <path
          d="M150 105 L310 225 L150 345 L-10 225 Z"
          fill="url(#sidebarBlue)"
          stroke="#2587D1"
          strokeOpacity=".25"
        />

        <path
          d="M150 310 L310 430 L150 550 L-10 430 Z"
          fill="url(#sidebarGreen)"
          stroke="#00C18A"
          strokeOpacity=".27"
        />

        <path
          d="M150 515 L310 635 L150 755 L-10 635 Z"
          fill="url(#sidebarGray)"
          stroke="#A8C9E8"
          strokeOpacity=".22"
        />

        <path
          d="M150 710 L310 830 L150 950 L-10 830 Z"
          fill="url(#sidebarBlue)"
          stroke="#1785D0"
          strokeOpacity=".24"
        />
      </g>

      {/* Diagonal geometric ribbons */}
      <g fill="none" strokeWidth="15" strokeOpacity=".12">
        <path
          d="M-90 460 L150 280 L390 460"
          stroke="#1685DC"
        />
        <path
          d="M-90 650 L150 470 L390 650"
          stroke="#00B77B"
        />
        <path
          d="M-90 850 L150 670 L390 850"
          stroke="#1685DC"
        />
      </g>

      {/* Fine intersecting green lines */}
      <g
        fill="none"
        stroke="#00C58A"
        strokeWidth="1.1"
        strokeOpacity=".38"
      >
        <path d="M-30 420 L330 690" />
        <path d="M-30 640 L330 910" />
        <path d="M-30 850 L330 1120" />
        <path d="M330 420 L-30 690" />
      </g>
    </svg>
  )
}

function OFPPTLogo() {
  return (
    <div className="flex flex-col items-center py-5 mb-5">
      <svg
        viewBox="0 0 190 95"
        className="w-44 h-[88px]"
        fill="none"
        aria-label="OFPPT Logo"
      >
        <path
          d="M15 35 L53 0 L91 35 L53 70 Z"
          stroke="#00B779"
          strokeWidth="12"
          strokeLinejoin="miter"
        />

        <path
          d="M53 35 L91 0 L129 35 L91 70 Z"
          stroke="#AEBCCB"
          strokeWidth="12"
          strokeLinejoin="miter"
        />

        <path
          d="M91 35 L129 0 L167 35 L129 70 Z"
          stroke="#0876ED"
          strokeWidth="12"
          strokeLinejoin="miter"
        />
      </svg>

      <h2 className="text-[29px] font-extrabold text-white tracking-tight leading-none">
        OFPPT
      </h2>

      <p className="text-[22px] text-blue-200 font-medium leading-tight mt-1">
        Library
      </p>
    </div>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" />
    </svg>
  )
}

function InstitutionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 2 2 7v2h20V7L12 2ZM4 11h3v8H4v-8Zm6 0h4v8h-4v-8Zm7 0h3v8h-3v-8ZM2 21h20v-2H2v2Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#00C58A]">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 13 8 13s8-7.5 8-13a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  )
}

export default function Sidebar({ lang }: SidebarProps) {
  const isAr = lang === 'ar'

  const [mobileOpen, setMobileOpen] = useState(false)

  // All tree menus start closed
  const [institutionsOpen, setInstitutionsOpen] = useState(false)
  const [openRegion, setOpenRegion] = useState<string | null>(null)
  const [openCity, setOpenCity] = useState<string | null>(null)

  const [selectedInstitution, setSelectedInstitution] =
    useState<Institution | null>(defaultInstitution)

  const closeMobile = () => setMobileOpen(false)

  const selectInstitution = (institution: Institution) => {
    setSelectedInstitution(institution)
    closeMobile()
  }

  const openInstitutionMap = () => {
    if (!selectedInstitution) return

    const userAgent = navigator.userAgent || ''
    const platform = navigator.platform || ''

    const isIOS =
      /iPhone|iPad|iPod/i.test(userAgent) ||
      (platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    const query = encodeURIComponent(selectedInstitution.mapsQuery)

    const mapUrl = isIOS
      ? `https://maps.apple.com/?q=${query}`
      : `https://www.google.com/maps/search/?api=1&query=${query}`

    window.open(mapUrl, '_blank', 'noopener,noreferrer')
  }

  const menu = (
    <div className="relative z-10 flex flex-col gap-1.5">

      {/* Home */}
      <a
        href="#home"
        onClick={closeMobile}
        className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-[#0878FF] to-[#0060DE] text-white font-bold shadow-lg shadow-blue-950/25 transition-all hover:brightness-110"
      >
        <span className="flex-1 text-start text-base">
          {isAr ? 'الرئيسية' : 'Home'}
        </span>

        <HomeIcon />

        <span className="text-xl font-bold ms-1">‹</span>
      </a>

      {/* My Institutions */}
      <div className="mt-2">

        <button
          type="button"
          aria-expanded={institutionsOpen}
          onClick={() => {
            setInstitutionsOpen(!institutionsOpen)
            setOpenRegion(null)
            setOpenCity(null)
          }}
          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-200 ${
            institutionsOpen
              ? 'bg-[#064477]/80 border-emerald-400/20'
              : 'bg-[#064477]/35 border-white/5 hover:bg-[#07518B]/60'
          }`}
        >
          <span className="flex-1 text-start text-base font-bold text-white">
            {isAr ? 'مؤسساتي' : 'My Institutions'}
          </span>

          <InstitutionIcon />

          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`w-5 h-5 text-white transition-transform duration-300 ${
              institutionsOpen ? 'rotate-180' : ''
            }`}
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {institutionsOpen && (
          <div className="mt-4 space-y-2 animate-in fade-in duration-300">

            {institutionRegions.map(region => {
              const visibleCities = region.cities.filter(
                city => city.institutions.length > 0
              )

              if (visibleCities.length === 0) return null

              const isRegionOpen = openRegion === region.id

              return (
                <div key={region.id}>

                  {/* Region */}
                  <button
                    type="button"
                    aria-expanded={isRegionOpen}
                    onClick={() => {
                      setOpenRegion(isRegionOpen ? null : region.id)
                      setOpenCity(null)
                    }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white hover:bg-white/10 transition-all"
                  >
                    <span className="flex-1 text-start text-sm font-semibold">
                      {isAr ? region.nameAr : region.nameFr}
                    </span>

                    <PinIcon />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`w-3.5 h-3.5 text-blue-200 transition-transform ${
                        isRegionOpen ? 'rotate-180' : ''
                      }`}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Cities */}
                  {isRegionOpen && (
                    <div className="ms-3 ps-3 border-s border-emerald-400/25 space-y-1">

                      {visibleCities.map(city => {
                        const isCityOpen = openCity === city.id

                        return (
                          <div key={city.id}>

                            <button
                              type="button"
                              aria-expanded={isCityOpen}
                              onClick={() => {
                                setOpenCity(isCityOpen ? null : city.id)
                              }}
                              className="w-full flex items-center gap-2 px-3 py-3 rounded-xl text-blue-50 hover:bg-white/10 transition-all"
                            >
                              <span className="flex-1 text-start text-sm">
                                {isAr ? city.nameAr : city.nameFr}
                              </span>

                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className={`w-3.5 h-3.5 transition-transform ${
                                  isCityOpen ? 'rotate-180' : ''
                                }`}
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>

                            {/* Institutions */}
                            {isCityOpen && (
                              <div className="ms-3 ps-3 border-s border-white/20 space-y-1">

                                {city.institutions.map(institution => {
                                  const isSelected =
                                    selectedInstitution?.id === institution.id

                                  return (
                                    <Link
                                      key={institution.id}
                                      href={
                                        institution.coursesAvailable
                                          ? '/#courses'
                                          : `/institutions/${institution.id}`
                                      }
                                      onClick={() => selectInstitution(institution)}
                                      className={`flex items-center gap-2 px-3 py-3 rounded-xl transition-all ${
                                        isSelected
                                          ? 'bg-white text-[#004B92] shadow-lg'
                                          : 'text-white hover:bg-white/10'
                                      }`}
                                    >
                                      <span className="shrink-0">
                                        <InstitutionIcon />
                                      </span>

                                      <span className="flex-1 min-w-0">
                                        <span className="block text-xs font-bold leading-relaxed">
                                          {institution.name}
                                        </span>

                                        <span className={`block text-[10px] mt-1 ${
                                          isSelected
                                            ? 'text-emerald-600'
                                            : 'text-blue-200'
                                        }`}>
                                          {institution.type}
                                          {' • '}
                                          {institution.coursesAvailable
                                            ? (isAr ? 'الدروس متوفرة' : 'Courses available')
                                            : (isAr ? 'قريباً' : 'Coming soon')}
                                        </span>
                                      </span>

                                      <span className="text-sm">›</span>
                                    </Link>
                                  )
                                })}

                              </div>
                            )}
                          </div>
                        )
                      })}

                    </div>
                  )}
                </div>
              )
            })}

          </div>
        )}
      </div>

      {/* My Courses */}
      <a
        href="#courses"
        onClick={closeMobile}
        className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white hover:bg-white/10 transition-all"
      >
        <span className="flex-1 text-start font-semibold">
          My Courses
        </span>

        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8">
          <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
          <path d="m3 12 9 5 9-5M3 16l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* PDF Printing */}
      <a
        href="#polycopies"
        onClick={closeMobile}
        className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white hover:bg-white/10 transition-all"
      >
        <span className="flex-1 text-start font-semibold">
          {isAr ? 'طلب طباعة PDF' : 'PDF Printing Request'}
        </span>

        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 14h10v7H7zM17 11h.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* Divider */}
      <div className="mx-3 my-3 border-t border-sky-400/50" />

      {/* More */}
      <button
        type="button"
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all"
      >
        <span className="flex-1 text-start font-semibold">
          {isAr ? 'المزيد' : 'More'}
        </span>

        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3h9l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
          <path d="M14 3v6h6M8 13h8M8 17h8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Selected Institution */}
      <div className="mt-6 pt-5 border-t border-sky-400/40">

        <div className="flex items-center gap-3 mb-3 px-3">
          <span className="flex-1 text-sm font-bold text-white">
            {isAr ? 'مؤسستي المختارة' : 'Selected Institution'}
          </span>
          <PinIcon />
        </div>

        {selectedInstitution ? (
          <div className="px-3 text-center">

            <p className="text-white text-sm font-bold mb-1">
              {selectedInstitution.name}
            </p>

            <p className="text-blue-200 text-xs mb-3">
              {selectedInstitution.city}, Morocco
            </p>

            <p className="text-blue-200 text-[10px] mb-4">
              {selectedInstitution.type}
            </p>

            <button
              type="button"
              onClick={openInstitutionMap}
              className="w-full flex items-center justify-center gap-2 bg-[#00A875] hover:bg-[#008F62] text-white text-xs font-bold py-3 px-3 rounded-xl transition-all"
            >
              <PinIcon />
              {isAr ? 'موقع المؤسسة' : 'Institution Location'}
            </button>

          </div>
        ) : (
          <p className="text-blue-200 text-xs text-center">
            {isAr ? 'اختر مؤسسة من القائمة' : 'Select an institution'}
          </p>
        )}
      </div>

      {/* Language */}
      <div className="mt-5 pt-4 border-t border-sky-400/40">
        <div className="flex items-center gap-3 px-4 py-3 text-white">
          <span className="flex-1 text-start text-sm">
            {isAr ? 'اللغة' : 'Language'}
          </span>

          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeLinecap="round" />
          </svg>
        </div>
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
          className="w-full flex items-center justify-between bg-[#003D75] text-white rounded-xl px-4 py-3.5 shadow-lg"
        >
          <span className="flex items-center gap-3 font-bold">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </span>

            {isAr ? 'القائمة الرئيسية' : 'Navigation Menu'}
          </span>

          <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 transition-transform ${mobileOpen ? 'rotate-180' : ''}`} stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {mobileOpen && (
          <div className="relative isolate overflow-hidden mt-3 rounded-2xl bg-gradient-to-b from-[#00396F] via-[#004B86] to-[#002B57] border border-blue-800 p-3 shadow-2xl">

            <SidebarDiamondPattern />

            <div className="relative z-10">
              <OFPPTLogo />
              {menu}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 xl:w-[300px] shrink-0">

        <div
          dir={isAr ? 'rtl' : 'ltr'}
          className="relative isolate overflow-hidden sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#00396F] via-[#00477F] to-[#002A55] p-4 shadow-2xl shadow-blue-950/30 border border-sky-900/50 scrollbar-thin scrollbar-thumb-blue-400/30"
        >

          <SidebarDiamondPattern />

          <div className="relative z-10">

            {/* Brand */}
            <OFPPTLogo />

            {/* Navigation */}
            {menu}

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-sky-400/40 text-center">
              <p className="text-[9px] text-blue-200/50 tracking-widest">
                OFPPT DIGITAL LIBRARY
              </p>
            </div>

          </div>
        </div>
      </aside>
    </>
  )
}

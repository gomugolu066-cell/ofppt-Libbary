
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  institutionRegions,
  institutionTypeLabels,
  institutionTypeOrder,
  type Institution,
  type InstitutionType
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
      viewBox="0 0 300 900"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="sidebarLineGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00C878" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#00D18B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00C878" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="sidebarLineBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <g fill="none" strokeWidth="1.5">
        <path d="M-150 0 L150 270 L450 0" stroke="url(#sidebarLineBlue)" />
        <path d="M-150 230 L150 500 L450 230" stroke="url(#sidebarLineGreen)" />
        <path d="M-150 470 L150 740 L450 470" stroke="url(#sidebarLineBlue)" />
        <path d="M-150 710 L150 980 L450 710" stroke="url(#sidebarLineGreen)" />

        <path d="M450 0 L150 270 L-150 0" stroke="#60A5FA" strokeOpacity="0.20" />
        <path d="M450 230 L150 500 L-150 230" stroke="#00D18B" strokeOpacity="0.22" />
        <path d="M450 470 L150 740 L-150 470" stroke="#94A3B8" strokeOpacity="0.24" />
        <path d="M450 710 L150 980 L-150 710" stroke="#60A5FA" strokeOpacity="0.20" />

        <path
          d="M150 350 L300 480 L150 610 L0 480 Z"
          fill="#00A878"
          fillOpacity="0.035"
          stroke="#00B88A"
          strokeOpacity="0.18"
        />

        <path
          d="M150 590 L300 720 L150 850 L0 720 Z"
          fill="#60A5FA"
          fillOpacity="0.035"
          stroke="#93C5FD"
          strokeOpacity="0.20"
        />
      </g>
    </svg>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
        open ? 'rotate-180' : ''
      }`}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InstitutionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Sidebar({ lang }: SidebarProps) {
  const isAr = lang === 'ar'

  const [mobileOpen, setMobileOpen] = useState(false)

  // My Courses tree
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [openCourseType, setOpenCourseType] = useState<InstitutionType | null>(null)
  const [openCourseRegion, setOpenCourseRegion] = useState<string | null>(null)
  const [openCourseCity, setOpenCourseCity] = useState<string | null>(null)

  // My Institutions tree
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

  const institutionName = (institution: Institution) => {
    if (isAr) {
      return institution.nameAr || institution.name
    }

    return institution.nameFr || institution.name
  }

  const cityName = (city: { nameAr: string; nameFr: string }) => {
    return isAr ? city.nameAr : city.nameFr
  }

  const regionName = (region: { nameAr: string; nameFr: string }) => {
    return isAr ? region.nameAr : region.nameFr
  }

  const institutionTypeName = (type: InstitutionType) => {
    return isAr
      ? institutionTypeLabels[type].ar
      : institutionTypeLabels[type].fr
  }

  const institutionLink = (institution: Institution) => {
    return institution.coursesAvailable
      ? '/#courses'
      : `/institutions/${institution.id}`
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
    <div className="flex flex-col gap-2">

      {/* Main Menu */}
      <div className="px-3 mb-1">
        <p className="text-[10px] font-bold tracking-[0.18em] text-blue-200/70">
          {isAr ? 'القائمة الرئيسية' : 'MAIN MENU'}
        </p>
      </div>

      {/* Home */}
      <a
        href="#home"
        onClick={closeMobile}
        className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-[#004B92] font-bold shadow-sm transition-all duration-200 hover:translate-x-1"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-xl">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span>{isAr ? 'الرئيسية' : 'Dashboard'}</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-[#159B65]" />
      </a>

      {/* My Courses */}
      <div>
        <button
          type="button"
          aria-expanded={coursesOpen}
          onClick={() => {
            setCoursesOpen(!coursesOpen)

            if (coursesOpen) {
              setOpenCourseType(null)
              setOpenCourseRegion(null)
              setOpenCourseCity(null)
            }
          }}
          className="w-full group flex items-center gap-3 px-4 py-3 rounded-xl text-blue-50 hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-white/10 text-white group-hover:bg-white/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
              <path
                d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
                strokeLinejoin="round"
              />
              <path d="M8 7h8M8 11h8" strokeLinecap="round" />
            </svg>
          </span>

          <span className="flex-1 text-start font-semibold">
            {isAr ? 'مقرراتي' : 'Mes cours'}
          </span>

          <Chevron open={coursesOpen} />
        </button>

        {coursesOpen && (
          <div className="mt-2 space-y-2">

            {institutionTypeOrder.map(type => {
              const typeRegions = institutionRegions
                .map(region => ({
                  ...region,
                  cities: region.cities
                    .map(city => ({
                      ...city,
                      institutions: city.institutions.filter(
                        institution => institution.type === type
                      )
                    }))
                    .filter(city => city.institutions.length > 0)
                }))
                .filter(region => region.cities.length > 0)

              const isTypeOpen = openCourseType === type

              return (
                <div key={type}>
                  <button
                    type="button"
                    aria-expanded={isTypeOpen}
                    onClick={() => {
                      setOpenCourseType(isTypeOpen ? null : type)
                      setOpenCourseRegion(null)
                      setOpenCourseCity(null)
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-50 hover:bg-white/10 transition-colors"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#159B65]/20 text-[#65D6A3] text-[10px] font-extrabold">
                      {type}
                    </span>

                    <span className="flex-1 text-start text-sm font-semibold">
                      {institutionTypeName(type)}
                    </span>

                    <span className="text-[10px] text-blue-200/70">
                      {typeRegions.reduce(
                        (total, region) =>
                          total +
                          region.cities.reduce(
                            (cityTotal, city) =>
                              cityTotal + city.institutions.length,
                            0
                          ),
                        0
                      )}
                    </span>

                    <Chevron open={isTypeOpen} />
                  </button>

                  {isTypeOpen && (
                    <div className="ms-3 ps-3 border-s border-white/20 space-y-2 mt-1">

                      {typeRegions.length > 0 ? (
                        typeRegions.map(region => {
                          const isRegionOpen =
                            openCourseRegion === `${type}-${region.id}`

                          return (
                            <div key={region.id}>
                              <button
                                type="button"
                                aria-expanded={isRegionOpen}
                                onClick={() => {
                                  setOpenCourseRegion(
                                    isRegionOpen ? null : `${type}-${region.id}`
                                  )
                                  setOpenCourseCity(null)
                                }}
                                className="w-full flex items-center gap-2 px-2 py-2.5 rounded-lg text-blue-50 hover:bg-white/10 transition-colors"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="w-4 h-4 shrink-0 text-[#65D6A3]"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                >
                                  <path
                                    d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
                                    strokeLinejoin="round"
                                  />
                                  <circle cx="12" cy="9" r="2.5" />
                                </svg>

                                <span className="flex-1 text-start text-xs font-semibold">
                                  {regionName(region)}
                                </span>

                                <span className="text-[10px] text-blue-200/70">
                                  {region.cities.length}
                                </span>

                                <Chevron open={isRegionOpen} />
                              </button>

                              {isRegionOpen && (
                                <div className="ms-3 ps-3 border-s border-white/15 space-y-1 mt-1">

                                  {region.cities.map(city => {
                                    const cityKey =
                                      `${type}-${region.id}-${city.id}`

                                    const isCityOpen =
                                      openCourseCity === cityKey

                                    return (
                                      <div key={city.id}>
                                        <button
                                          type="button"
                                          aria-expanded={isCityOpen}
                                          onClick={() =>
                                            setOpenCourseCity(
                                              isCityOpen ? null : cityKey
                                            )
                                          }
                                          className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="w-4 h-4 shrink-0 text-blue-200"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                          >
                                            <path
                                              d="M3 21h18M5 21V5h9v16M14 10h5v11M8 9h3M8 13h3M8 17h3M17 14h.01M17 17h.01"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>

                                          <span className="flex-1 text-start text-xs">
                                            {cityName(city)}
                                          </span>

                                          <span className="text-[10px] text-blue-200/70">
                                            {city.institutions.length}
                                          </span>

                                          <Chevron open={isCityOpen} />
                                        </button>

                                        {isCityOpen && (
                                          <div className="ms-3 ps-3 border-s border-white/15 space-y-1 mt-1">

                                            {city.institutions.map(institution => {
                                              const isSelected =
                                                selectedInstitution?.id ===
                                                institution.id

                                              return (
                                                <Link
                                                  key={institution.id}
                                                  href={institutionLink(institution)}
                                                  onClick={() =>
                                                    selectInstitution(institution)
                                                  }
                                                  className={`flex items-center gap-2 p-2.5 rounded-xl transition-all duration-200 ${
                                                    isSelected
                                                      ? 'bg-white text-[#004B92] shadow-md'
                                                      : 'text-blue-50 hover:bg-white/10'
                                                  }`}
                                                >
                                                  <span
                                                    className={`flex items-center justify-center w-7 h-7 shrink-0 rounded-lg ${
                                                      isSelected
                                                        ? 'bg-blue-50'
                                                        : 'bg-white/10'
                                                    }`}
                                                  >
                                                    <InstitutionIcon />
                                                  </span>

                                                  <span className="flex-1 min-w-0">
                                                    <span className="block text-[11px] font-bold leading-relaxed">
                                                      {institutionName(institution)}
                                                    </span>

                                                    <span
                                                      className={`flex items-center gap-1 text-[9px] font-semibold mt-1 ${
                                                        isSelected
                                                          ? 'text-[#159B65]'
                                                          : 'text-blue-200'
                                                      }`}
                                                    >
                                                      <span
                                                        className={`w-1.5 h-1.5 rounded-full ${
                                                          isSelected
                                                            ? 'bg-[#159B65]'
                                                            : 'bg-blue-300'
                                                        }`}
                                                      />
                                                      {institution.coursesAvailable
                                                        ? (isAr
                                                            ? 'الدروس متوفرة'
                                                            : 'Cours disponibles')
                                                        : (isAr
                                                            ? 'قريباً'
                                                            : 'Bientôt')}
                                                    </span>
                                                  </span>

                                                  <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className="w-3.5 h-3.5 shrink-0"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                  >
                                                    <path
                                                      d="m9 18 6-6-6-6"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </svg>
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
                        })
                      ) : (
                        <p className="px-3 py-3 text-[11px] leading-relaxed text-blue-200/70">
                          {isAr
                            ? 'سيتم إضافة المؤسسات التابعة لهذا النوع عند توفر بياناتها.'
                            : 'Les établissements de cette catégorie seront ajoutés lorsque leurs données seront disponibles.'}
                        </p>
                      )}

                    </div>
                  )}
                </div>
              )
            })}

          </div>
        )}
      </div>

      {/* PDF Printing */}
      <a
        href="#polycopies"
        onClick={closeMobile}
        className="group flex items-center gap-3 px-4 py-3 rounded-xl text-blue-50 hover:bg-white/10 hover:text-white transition-all duration-200"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white group-hover:bg-white/20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 14h10v7H7zM17 11h.01"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className="font-medium text-sm">
          {isAr ? 'طلب طباعة PDF' : 'Demande d’impression PDF'}
        </span>

        <span className="ml-auto text-blue-200/60 text-xs">↗</span>
      </a>

      {/* My Institutions */}
      <div className="pt-5 mt-3 border-t border-white/15">

        <button
          type="button"
          aria-expanded={institutionsOpen}
          onClick={() => {
            setInstitutionsOpen(!institutionsOpen)

            if (institutionsOpen) {
              setOpenRegion(null)
              setOpenCity(null)
            }
          }}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-blue-100 hover:bg-white/10 transition-colors"
        >
          <span className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#159B65]/20 text-[#65D6A3]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 12h.01M15 12h.01"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="text-xs font-bold tracking-wider">
              {isAr ? 'مؤسساتي' : 'Mes établissements'}
            </span>
          </span>

          <Chevron open={institutionsOpen} />
        </button>

        {institutionsOpen && (
          <div className="mt-2 space-y-2">

            {institutionRegions.map(region => {
              const visibleCities = region.cities.filter(
                city => city.institutions.length > 0
              )

              if (visibleCities.length === 0) return null

              const isRegionOpen = openRegion === region.id

              return (
                <div key={region.id}>
                  <button
                    type="button"
                    aria-expanded={isRegionOpen}
                    onClick={() => {
                      setOpenRegion(isRegionOpen ? null : region.id)
                      setOpenCity(null)
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-blue-50 hover:bg-white/10 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 shrink-0 text-[#65D6A3]"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>

                    <span className="flex-1 text-start text-sm font-semibold">
                      {regionName(region)}
                    </span>

                    <span className="text-[10px] text-blue-200/70">
                      {visibleCities.length}
                    </span>

                    <Chevron open={isRegionOpen} />
                  </button>

                  {isRegionOpen && (
                    <div className="ms-4 ps-3 border-s border-white/20 space-y-2 mt-1">

                      {visibleCities.map(city => {
                        const isCityOpen = openCity === city.id

                        return (
                          <div key={city.id}>
                            <button
                              type="button"
                              aria-expanded={isCityOpen}
                              onClick={() =>
                                setOpenCity(isCityOpen ? null : city.id)
                              }
                              className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-4 h-4 shrink-0 text-blue-200"
                                stroke="currentColor"
                                strokeWidth="1.8"
                              >
                                <path
                                  d="M3 21h18M5 21V5h9v16M14 10h5v11M8 9h3M8 13h3M8 17h3M17 14h.01M17 17h.01"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <span className="flex-1 text-start text-sm">
                                {cityName(city)}
                              </span>

                              <Chevron open={isCityOpen} />
                            </button>

                            {isCityOpen && (
                              <div className="ms-3 ps-3 border-s border-white/15 space-y-2 mt-1">

                                {city.institutions.map(institution => {
                                  const isSelected =
                                    selectedInstitution?.id === institution.id

                                  return (
                                    <Link
                                      key={institution.id}
                                      href={institutionLink(institution)}
                                      onClick={() =>
                                        selectInstitution(institution)
                                      }
                                      className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                                        isSelected
                                          ? 'bg-white text-[#004B92] shadow-md'
                                          : 'text-blue-50 hover:bg-white/10'
                                      }`}
                                    >
                                      <span
                                        className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-lg ${
                                          isSelected
                                            ? 'bg-blue-50'
                                            : 'bg-white/10'
                                        }`}
                                      >
                                        <InstitutionIcon />
                                      </span>

                                      <span className="flex-1 min-w-0">
                                        <span className="block text-xs font-bold leading-relaxed">
                                          {institutionName(institution)}
                                        </span>

                                        <span
                                          className={`flex items-center gap-1 text-[10px] font-semibold mt-1 ${
                                            isSelected
                                              ? 'text-[#159B65]'
                                              : 'text-blue-200'
                                          }`}
                                        >
                                          <span
                                            className={`w-1.5 h-1.5 rounded-full ${
                                              isSelected
                                                ? 'bg-[#159B65]'
                                                : 'bg-blue-300'
                                            }`}
                                          />
                                          {institution.type}
                                          <span>•</span>
                                          {institution.coursesAvailable
                                            ? (isAr
                                                ? 'الدروس متوفرة'
                                                : 'Cours disponibles')
                                            : (isAr
                                                ? 'قريباً'
                                                : 'Bientôt')}
                                        </span>
                                      </span>

                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-4 h-4 shrink-0"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      >
                                        <path
                                          d="m9 18 6-6-6-6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
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

      {/* Preferences */}
      <div className="pt-4 mt-3 border-t border-white/15">
        <p className="px-3 mb-2 text-[10px] font-bold tracking-[0.18em] text-blue-200/70">
          {isAr ? 'التفضيلات' : 'PREFERENCES'}
        </p>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-50 hover:bg-white/10 transition-colors">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18" strokeLinecap="round" />
          </svg>

          <span className="text-sm">
            {isAr ? 'اللغة' : 'Language'}
          </span>
        </div>
      </div>

      {/* Selected Institution */}
      <div className="mt-4 rounded-xl border border-white/15 bg-[#1E5D98]/80 p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#159B65]/20 text-[#65D6A3]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </span>

          <span className="text-white text-sm font-bold">
            {isAr ? 'مؤسستي المختارة' : 'Établissement sélectionné'}
          </span>
        </div>

        {selectedInstitution ? (
          <>
            <p className="text-white text-xs font-bold leading-relaxed mb-1">
              {institutionName(selectedInstitution)}
            </p>

            <p className="text-blue-100 text-xs leading-relaxed mb-3">
              {selectedInstitution.city}, Maroc
            </p>

            <span className="inline-flex items-center gap-1 text-[10px] text-[#A7F3D0] mb-3">
              {selectedInstitution.type}
              <span>•</span>
              {selectedInstitution.coursesAvailable
                ? (isAr ? 'الدروس متوفرة' : 'Cours disponibles')
                : (isAr ? 'المحتوى قيد الإعداد' : 'Contenu en préparation')}
            </span>

            <button
              type="button"
              onClick={openInstitutionMap}
              className="w-full flex items-center justify-center gap-2 bg-[#159B65] hover:bg-[#118354] text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.5" />
              </svg>

              {isAr ? 'موقع المؤسسة' : 'Voir sur la carte'}
            </button>
          </>
        ) : (
          <p className="text-blue-100 text-xs">
            {isAr ? 'اختر مؤسسة من القائمة' : 'Sélectionnez un établissement'}
          </p>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden w-full mb-5">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-sidebar"
          className="w-full flex items-center justify-between bg-[#003D75] text-white rounded-xl px-4 py-3 shadow-lg hover:bg-[#003568] transition-colors"
        >
          <span className="flex items-center gap-3 font-bold">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </span>

            {isAr ? 'القائمة الرئيسية' : 'Menu de navigation'}
          </span>

          <Chevron open={mobileOpen} />
        </button>
      </div>

      {/* Mobile Sliding Drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? 'visible opacity-100 pointer-events-auto'
            : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label={isAr ? 'إغلاق القائمة' : 'Fermer le menu'}
          tabIndex={mobileOpen ? 0 : -1}
          onClick={closeMobile}
          className="absolute inset-0 w-full h-full bg-black/55 backdrop-blur-[2px]"
        />

        <aside
          id="mobile-sidebar"
          dir={isAr ? 'rtl' : 'ltr'}
          aria-hidden={!mobileOpen}
          className={`absolute top-0 bottom-0 w-[min(82vw,300px)] overflow-x-hidden overflow-y-auto overscroll-contain bg-gradient-to-b from-[#00396F] via-[#00477F] to-[#002A55] p-3 shadow-2xl border-white/10 transition-transform duration-300 ease-out ${
            isAr ? 'right-0 border-l' : 'left-0 border-r'
          } ${
            mobileOpen
              ? 'translate-x-0'
              : isAr
                ? 'translate-x-full'
                : '-translate-x-full'
          }`}
        >
          <div className="relative isolate min-h-full">
            <SidebarDiamondPattern />

            <div className="relative z-10">

              {/* Mobile Brand Header */}
              <div className="flex items-center justify-between px-2 py-4 mb-4 border-b border-white/15">
                <div className="flex items-center justify-center flex-1 gap-3">
                  <svg viewBox="0 0 100 65" className="w-16 h-12 shrink-0" fill="none">
                    <path d="M30 5 5 30 30 55 55 30 30 5Z" stroke="#00B86B" strokeWidth="9" strokeLinejoin="miter" />
                    <path d="M50 5 25 30 50 55 75 30 50 5Z" stroke="#AEBBCC" strokeWidth="9" strokeLinejoin="miter" />
                    <path d="M70 5 45 30 70 55 95 30 70 5Z" stroke="#0875F5" strokeWidth="9" strokeLinejoin="miter" />
                  </svg>

                  <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">
                      OFPPT
                    </h2>
                    <p className="text-lg font-semibold text-blue-200">
                      Library
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label={isAr ? 'إغلاق القائمة' : 'Fermer la barre latérale'}
                  className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {menu}

              <div className="mt-5 pt-4 border-t border-white/15 text-center">
                <p className="text-[9px] text-blue-200/50 tracking-widest">
                  OFPPT DIGITAL LIBRARY
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="relative isolate sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto overflow-x-hidden rounded-2xl bg-gradient-to-b from-[#00396F] via-[#00477F] to-[#002A55] p-4 shadow-xl shadow-blue-950/15 border border-blue-800/50">
          <SidebarDiamondPattern />

          <div className="relative z-10">

            {/* Desktop Brand */}
            <div className="flex items-center gap-3 px-3 py-4 mb-4 border-b border-white/15">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-md">
                <svg viewBox="0 0 100 65" className="w-9 h-8" fill="none">
                  <path d="M30 5 5 30 30 55 55 30 30 5Z" stroke="#00B86B" strokeWidth="9" />
                  <path d="M50 5 25 30 50 55 75 30 50 5Z" stroke="#AEBBCC" strokeWidth="9" />
                  <path d="M70 5 45 30 70 55 95 30 70 5Z" stroke="#0875F5" strokeWidth="9" />
                </svg>

                <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-[#159B65] border-2 border-[#004B92]" />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-extrabold text-white tracking-tight">
                  OFPPT Library
                </h2>
                <p className="text-[10px] text-blue-200 mt-0.5">
                  {isAr ? 'منصتك التعليمية الرقمية' : 'Plateforme d’apprentissage numérique'}
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
        </div>
      </aside>
    </>
  )
}

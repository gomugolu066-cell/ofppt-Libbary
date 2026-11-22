'use client'

import { useState } from 'react'

type SidebarProps = {
  lang: string
}

export default function Sidebar({ lang }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

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

  const menu = (
    <div className="flex flex-col gap-2">
      <a
        href="#home"
        onClick={() => setMobileOpen(false)}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
      >
        <span className="text-xl">⌂</span>
        <span>{isAr ? 'الرئيسية' : 'Dashboard'}</span>
      </a>

      <a
        href="#courses"
        onClick={() => setMobileOpen(false)}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
      >
        <span className="text-xl">📚</span>
        <span>My Courses</span>
      </a>

      <div className="pt-5 mt-3 border-t border-gray-100">
        <p className="px-4 mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          {isAr ? 'مؤسستي' : 'MY INSTITUTION'}
        </p>

        <div
          id="institution"
          className="rounded-xl bg-blue-50 border border-blue-100 p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🎓</span>
            <span className="font-bold text-blue-900 text-sm">
              ISTA Had Soualem
            </span>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            {isAr
              ? 'حد السوالم، جهة الدار البيضاء سطات، المغرب'
              : 'Had Soualem, Casablanca-Settat, Morocco'}
          </p>

          <button
            type="button"
            onClick={openInstitutionMap}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors"
          >
            <span>📍</span>
            {isAr ? 'موقع المؤسسة' : 'Find on Maps'}
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="lg:hidden mb-5">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm"
        >
          <span className="font-semibold text-gray-800">
            ☰ {isAr ? 'القائمة' : 'Menu'}
          </span>
          <span className="text-gray-500">
            {mobileOpen ? '▲' : '▼'}
          </span>
        </button>

        {mobileOpen && (
          <div className="mt-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            {menu}
          </div>
        )}
      </div>

      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-6 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <div className="px-4 py-4 mb-3 border-b border-gray-100">
            <h2 className="text-xl font-bold text-blue-900">
              OFPPT Library
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              {isAr ? 'منصتك التعليمية' : 'Your learning platform'}
            </p>
          </div>

          {menu}
        </div>
      </aside>
    </>
  )
}

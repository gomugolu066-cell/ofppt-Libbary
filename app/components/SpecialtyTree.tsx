
'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'

import {
  Briefcase,
  Zap,
  Plug,
  Settings,
  Scissors,
  Factory,
  Rocket,
  Server,
  Hammer,
  Wrench,
  ChevronDown,
  ChevronUp,
  FileText,
} from 'lucide-react'

import Link from 'next/link'

import { curriculum } from '../data/curriculum'
import { institutionCurricula } from '../data/institution-curriculum'

type SpecialtyTreeProps = {
  lang: string
  institutionId?: string
}

export default function SpecialtyTree({
  lang,
  institutionId = 'ista-had-soualem',
}: SpecialtyTreeProps) {
  const isAr = lang === 'ar'

  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openBranch, setOpenBranch] = useState<string | null>(null)

  // حد سوالم تحتفظ ببياناتها القديمة
  const categories =
    institutionId === 'ista-had-soualem'
      ? curriculum
      : institutionCurricula[institutionId] || []

  const getIcon = (id: string, isAnimating: boolean) => {
    let MainIcon: LucideIcon = Briefcase

    if (id === 'genie_elec') MainIcon = Zap
    if (id === 'oqe') MainIcon = Plug
    if (id === 'pm') MainIcon = Settings
    if (id === 'cci') MainIcon = Scissors
    if (id === 'ei') MainIcon = Factory
    if (id === 'enp') MainIcon = Rocket
    if (id === 'id') MainIcon = Server
    if (id === 'mea') MainIcon = Hammer
    if (id === 'ofm') MainIcon = Wrench

    return (
      <div className="relative flex items-center justify-center w-8 h-8">
        {id === 'gestion' && isAnimating && (
          <div className="absolute text-gray-400 z-0 anim-paper">
            <FileText size={16} />
          </div>
        )}

        {id === 'oqe' && isAnimating && (
          <div className="absolute -top-1 -right-1 z-20 anim-spark">
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_yellow]" />
          </div>
        )}

        <div className={`relative z-10 transition-colors ${isAnimating ? 'text-blue-700' : ''}`}>
          <div
            className={
              isAnimating && id === 'ei'
                ? 'anim-glow'
                : isAnimating && id === 'ofm'
                  ? 'anim-spin'
                  : isAnimating && id === 'cci'
                    ? 'anim-snip'
                    : isAnimating && !['gestion', 'oqe', 'ei', 'ofm', 'cci'].includes(id)
                      ? 'anim-float'
                      : ''
            }
          >
            <MainIcon size={24} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {categories.length === 0 && (
        <div className="col-span-full rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <FileText size={28} />
          </div>

          <h3 className="text-lg font-bold text-gray-800">
            {isAr ? 'التخصصات قيد الإضافة' : 'Spécialités en cours d’ajout'}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {isAr
              ? 'سيتم إضافة التخصصات الخاصة بهذه المؤسسة لاحقاً.'
              : 'Les spécialités de cet établissement seront ajoutées prochainement.'}
          </p>
        </div>
      )}

      {categories.map((cat) => {
        const isCatOpen = openCategory === cat.id

        return (
          <div
            key={cat.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >

            <div
              onClick={() => {
                setOpenCategory(isCatOpen ? null : cat.id)
                setOpenBranch(null)
              }}
              className="group w-full flex items-center justify-between p-4 bg-white hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    isCatOpen
                      ? 'bg-blue-100 ring-2 ring-blue-300'
                      : 'bg-gray-50'
                  }`}
                >
                  {getIcon(cat.id, isCatOpen)}
                </div>

                <div className="text-start">
                  <h3
                    className={`text-lg font-bold transition-colors ${
                      isCatOpen ? 'text-blue-800' : 'text-gray-800'
                    }`}
                  >
                    {isAr ? cat.nameAr : cat.nameFr}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {isAr ? cat.nameFr : cat.nameAr}
                  </p>
                </div>
              </div>

              <div className="text-blue-500 bg-blue-50 p-2 rounded-full transition-transform duration-300 group-active:scale-90">
                {isCatOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </div>

            {isCatOpen && (
              <div className="p-4 border-t border-gray-100 bg-gray-50">

                {cat.branches.map((branch) => {
                  const isBranchOpen = openBranch === branch.id

                  const branchName = isAr
                    ? branch.nameAr
                    : branch.nameFr

                  const branchUrl =
                    `/modules/${encodeURIComponent(branch.id)}` +
                    `?institution=${encodeURIComponent(institutionId)}` +
                    `&name=${encodeURIComponent(branchName)}`

                  return (
                    <div
                      key={branch.id}
                      className="mb-2 border-b border-gray-200 last:border-0 pb-2 last:pb-0"
                    >
                      <div
                        onClick={() => {
                          setOpenBranch(isBranchOpen ? null : branch.id)
                        }}
                        className="w-full flex items-center justify-between py-2 text-start hover:text-blue-600 cursor-pointer"
                      >
                        <span className="font-semibold text-gray-700">
                          {branchName}
                        </span>

                        <span className="text-gray-400 text-xs">
                          {isBranchOpen ? '▲' : '▼'}
                        </span>
                      </div>

                      {isBranchOpen && (
                        <div className="flex flex-wrap gap-2 mt-2 ps-4">

                          {branch.modules.length > 0 ? (
                            branch.modules.map((mod) => (
                              <Link
                                key={mod}
                                href={
                                  `/modules/${encodeURIComponent(mod)}` +
                                  `?institution=${encodeURIComponent(institutionId)}` +
                                  `&name=${encodeURIComponent(branchName)}`
                                }
                                className="bg-white hover:bg-blue-600 hover:text-white text-blue-700 px-3 py-1 rounded-md text-sm font-mono border border-blue-100 shadow-sm transition-colors cursor-pointer"
                              >
                                {mod}
                              </Link>
                            ))
                          ) : (
                            <Link
                              href={branchUrl}
                              className="inline-flex items-center gap-2 bg-white hover:bg-blue-600 hover:text-white text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold border border-blue-100 shadow-sm transition-colors"
                            >
                              <FileText size={16} />

                              {isAr
                                ? 'عرض الدروس والملفات'
                                : 'Voir les cours et fichiers'}
                            </Link>
                          )}

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
  )
}

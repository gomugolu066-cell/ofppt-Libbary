
import { cookies } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
  institutionRegions,
} from '../../data/institutions'

import SpecialtyTree from '../../components/SpecialtyTree'
import Sidebar from '../../components/Sidebar'

type PageProps = {
  params: Promise<{
    id: string
  }>
}

function findInstitution(data: unknown, id: string): any {
  if (Array.isArray(data)) {
    for (const item of data) {
      const found = findInstitution(item, id)
      if (found) return found
    }
    return null
  }

  if (data && typeof data === 'object') {
    const item = data as Record<string, unknown>

    if (item.id === id && item.name) {
      return item
    }

    for (const value of Object.values(item)) {
      const found = findInstitution(value, id)
      if (found) return found
    }
  }

  return null
}

export default async function InstitutionPage({
  params,
}: PageProps) {
  const { id } = await params

  const institution = findInstitution(institutionRegions, id)

  if (!institution) {
    notFound()
  }

  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'ar'

  const institutionName =
    lang === 'fr'
      ? institution.nameFr || institution.name
      : institution.nameAr || institution.name

  return (
    <main
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50"
    >
      <Sidebar lang={lang} />

      <div className="min-h-screen p-5 md:p-8">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
          >
            {lang === 'ar' ? '← العودة للرئيسية' : '← Back to Home'}
          </Link>

          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-sm font-medium text-blue-600">
              OFPPT Library
            </p>

            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {institutionName}
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              {lang === 'ar'
                ? 'التخصصات والشعب المتوفرة في هذه المؤسسة'
                : 'Spécialités et filières disponibles dans cet établissement'}
            </p>
          </div>

          <SpecialtyTree
            lang={lang}
            institutionId={institution.id}
          />

        </div>
      </div>
    </main>
  )
}


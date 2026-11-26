
import { cookies } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { institutionRegions } from '@/app/data/institutions'
import SpecialtyTree from '@/app/components/SpecialtyTree'
import Sidebar from '@/app/components/Sidebar'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import OfpptLogo from '@/app/components/OfpptLogo'
import { ArrowRight, ArrowLeft, GraduationCap } from 'lucide-react'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function InstitutionPage({ params }: PageProps) {
  const { id } = await params

  const institution = institutionRegions
    .flatMap(region => region.cities)
    .flatMap(city => city.institutions)
    .find(item => item.id === id)

  if (!institution) {
    notFound()
  }

  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'ar'
  const isAr = lang === 'ar'

  const institutionName = isAr
    ? institution.nameAr || institution.name
    : institution.nameFr || institution.name

  return (
    <main className="min-h-screen p-6 relative bg-slate-50">
      <LanguageSwitcher currentLang={lang} />

      <div className="max-w-7xl mx-auto pt-8">
        <div className={`flex flex-col lg:items-start gap-6 ${
          isAr ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}>
          <Sidebar lang={lang} />

          <div className="flex-1 min-w-0 w-full">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
            >
              {isAr ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
              {isAr ? 'العودة إلى الصفحة الرئيسية' : 'Retour à l’accueil'}
            </Link>

            <header className="text-center mb-10 flex flex-col items-center">
              <div className="mb-4 flex justify-center w-full">
                <OfpptLogo />
              </div>

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <GraduationCap size={34} />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                {institutionName}
              </h1>

              <p className="text-gray-600 text-lg">
                {isAr
                  ? 'التخصصات والفروع المتاحة في هذه المؤسسة'
                  : 'Spécialités et branches de cet établissement'}
              </p>
            </header>

            <section>
              <SpecialtyTree
                lang={lang}
                institutionId={institution.id}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

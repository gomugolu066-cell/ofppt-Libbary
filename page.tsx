import { cookies } from 'next/headers'
import LanguageSwitcher from './components/LanguageSwitcher'
import SpecialtyTree from './components/SpecialtyTree'
import OfpptLogo from './components/OfpptLogo'

export default async function Home() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'ar'
  const isAr = lang === 'ar'

  return (
    <main className="min-h-screen p-6 relative">
      
      {/* الأزرار مثبتة في أعلى اليسار دائماً */}
      <LanguageSwitcher currentLang={lang} />

      <div className="max-w-6xl mx-auto pt-12">
        <header className="text-center mb-10 flex flex-col items-center">
          
          {/* الشعار صغير وفي المنتصف */}
          <div className="mb-6">
            <OfpptLogo className="w-28 h-auto drop-shadow-sm" />
          </div>

          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {isAr ? "منصة OFPPT الرقمية" : "Plateforme OFPPT Digitale"}
          </h1>
          <p className="text-gray-600 text-lg">
            {isAr 
              ? "اختر التخصص لعرض الفروع والوحدات الخاصة به" 
              : "Sélectionnez une spécialité pour voir ses branches et modules"}
          </p>
        </header>

        <SpecialtyTree lang={lang} />
        
      </div>
    </main>
  )
}

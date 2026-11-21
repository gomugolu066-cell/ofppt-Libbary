import { cookies } from 'next/headers'
import Link from 'next/link' // تمت إضافة هذا السطر لتفعيل الروابط
import LanguageSwitcher from './components/LanguageSwitcher'
import SpecialtyTree from './components/SpecialtyTree'
import OfpptLogo from './components/OfpptLogo'

export default async function Home() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'ar'
  const isAr = lang === 'ar'

  return (
    <main className="min-h-screen p-6 relative">
      <LanguageSwitcher currentLang={lang} />

      <div className="max-w-6xl mx-auto pt-8">
        <header className="text-center mb-10 flex flex-col items-center">
          
          {/* الشعار هنا في المنتصف، والمكون نفسه يحدد حجمه بـ 50 بكسل */}
          <div className="mb-4 flex justify-center w-full">
            <OfpptLogo />
          </div>

          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {isAr ? "OFPPT Digital Platform" : "Plateforme OFPPT Digitale"}
          </h1>
          <p className="text-gray-600 text-lg">
            {isAr 
              ? "Select a specialty to view its branches and modules" 
              : "Sélectionnez une spécialité pour voir ses branches et modules"}
          </p>
        </header>

        <SpecialtyTree lang={lang} />
        
        {/* قسم المناطق والتخصصات */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          <h2 className="font-semibold text-gray-500 mb-4">
            {isAr ? "المناطق التي نغطيها" : "Régions couvertes"} (ISTA & CMC)
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-6">
            <span>الدار البيضاء (Casablanca)</span> • 
            <span>الرباط (Rabat)</span> • 
            <span>مراكش (Marrakech)</span> • 
            <span>فاس (Fès)</span> • 
            <span>طنجة (Tanger)</span> • 
            <span>أكادير (Agadir)</span> • 
            <span>مكناس (Meknès)</span> • 
            <span>وجدة (Oujda)</span> • 
            <span>القنيطرة (Kénitra)</span> • 
            <span>تطوان (Tétouan)</span> • 
            <span>سلا (Salé)</span> • 
            <span>آسفي (Safi)</span> • 
            <span>الجديدة (El Jadida)</span> • 
            <span>بني ملال (Béni Mellal)</span> • 
            <span>الناظور (Nador)</span> • 
            <span>خريبكة (Khouribga)</span> • 
            <span>العيون (Laâyoune)</span> • 
            <span>المحمدية (Mohammedia)</span> • 
            <span>تازة (Taza)</span> • 
            <span>الحسيمة (Al Hoceima)</span>
          </div>

          <h2 className="font-semibold text-gray-500 mb-2 mt-6">
            {isAr ? "تخصصات متوفرة" : "Spécialités disponibles"}
          </h2>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-8">
            <span>Développement Digital</span> • 
            <span>Gestion des Entreprises</span> • 
            <span>Comptabilité et Finance</span> • 
            <span>Infographie</span> • 
            <span>Technique de Réseaux</span> • 
            <span>Électromécanique</span> • 
            <span>Froid et Génie Thermique</span> • 
            <span>Marketing Digital</span> • 
            <span>Ressources Humaines</span> • 
            <span>Logistique</span>
          </div>

          {/* رابط سياسة الخصوصية */}
          <div className="pt-6 border-t border-gray-100 flex justify-center gap-4">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 hover:underline transition-colors">
              {isAr ? "سياسة الخصوصية" : "Politique de Confidentialité"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

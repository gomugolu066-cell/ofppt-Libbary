'use client'

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const handleSwitch = (lang: string) => {
    document.cookie = `lang=${lang}; path=/`;
    window.location.reload(); // إعادة تحميل الصفحة بقوة لتحديث اللغة وتجنب أخطاء الكاش
  }

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-2">
      <div 
        onClick={() => handleSwitch('ar')} 
        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs cursor-pointer transition-all border ${currentLang === 'ar' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-gray-300 hover:border-blue-400'}`}
      >
        AR
      </div>
      <div 
        onClick={() => handleSwitch('fr')} 
        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs cursor-pointer transition-all border ${currentLang === 'fr' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-gray-300 hover:border-blue-400'}`}
      >
        FR
      </div>
    </div>
  )
}

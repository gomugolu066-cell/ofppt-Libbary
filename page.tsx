import { cookies } from 'next/headers'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, FileText, Download } from 'lucide-react'

export default async function ModulePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const decodedCode = decodeURIComponent(code)
  
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'ar'
  const isAr = lang === 'ar'

  return (
    <main className="min-h-screen p-6 bg-slate-50">
      <div className="max-w-4xl mx-auto pt-10">
        
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-semibold">
          {isAr ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {isAr ? "العودة للرئيسية" : "Retour à l'accueil"}
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center mb-8">
          <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isAr ? "وحدة تكوينية" : "Module de formation"}
          </h1>
          <p className="text-2xl font-mono text-blue-600 font-bold">{decodedCode}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="text-gray-400 mb-4 flex justify-center">
            <Download size={48} />
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            {isAr ? "الدرس غير متوفر بعد" : "Cours non encore disponible"}
          </h2>
          <p className="text-gray-500">
            {isAr 
              ? "لم يتم رفع ملف PDF الخاص بهذه الوحدة حتى الآن. يرجى العودة لاحقاً." 
              : "Le fichier PDF de ce module n'a pas encore été téléchargé. Veuillez revenir plus tard."}
          </p>
        </div>

      </div>
    </main>
  )
}

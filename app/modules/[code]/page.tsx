import { cookies } from 'next/headers'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, FileText, Download } from 'lucide-react'
import ModuleAdOverlay from '@/app/components/ModuleAdOverlay'
import PdfViewer from '@/app/components/PdfViewer' // <-- تمت إضافة هذا السطر

export default async function ModulePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const decodedCode = decodeURIComponent(code)

  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'ar'
  const isAr = lang === 'ar'

  const oqeOemFiles = [
    { title: "Présentation Pneumatique M204 OQE OEM", file: "/OQEOEM_Presentation_Pneumatique.pdf" },
    { title: "Manuel de cours (Entretien)", file: "/OQEOEM_cours_TEI.pdf" },
    { title: "Accessoires de transmission", file: "/OQEOEM_Accessoires.pdf" }
  ]

  const upperCode = decodedCode.toUpperCase().trim()
  const isTargetSpecialty = /OQOEM|OQE|OEM|GE|EI/i.test(upperCode)
  const currentFiles = isTargetSpecialty ? oqeOemFiles : null

  return (
    <main className="min-h-screen p-6 bg-slate-50">
      <ModuleAdOverlay />

      <div className="max-w-4xl mx-auto pt-10">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          {isAr ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {isAr ? "العودة للرئيسية" : "Retour à l'accueil"}
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center mb-6">
          <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isAr ? "وحدة تكوينية" : "Module de formation"}
          </h1>
          <span className="text-xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg inline-block mt-2">
            {decodedCode}
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center min-h-[300px]">
          {currentFiles ? (
            <div className="w-full">
              <Download size={48} className="text-blue-500 mb-6 mx-auto" />
              <h2 className="text-2xl font-bold text-gray-700 mb-6">
                {isAr ? "الملفات متوفرة للتحميل" : "Fichiers disponibles au téléchargement"}
              </h2>

              <div className="flex flex-col gap-3 max-w-2xl mx-auto">
                {currentFiles.map((item, index) => (
                  // 🔴 هنا التغيير الأهم: استبدلنا <a> بـ <PdfViewer>
                  <PdfViewer key={index} title={item.title} fileUrl={item.file} />
                ))}
              </div>
            </div>
          ) : (
            <>
              <Download size={48} className="text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                {isAr ? "المحتوى غير متوفر حالياً" : "Cours non encore disponible"}
              </h2>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                {isAr
                  ? "لم يتم رفع ملف PDF الخاص بهذه الوحدة بعد. يرجى العودة لاحقاً."
                  : "Le fichier PDF de ce module n'a pas encore été téléchargé. Veuillez revenir plus tard."}
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

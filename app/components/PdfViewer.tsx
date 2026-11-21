'use client'
import { useState } from 'react'
import { X, FileText } from 'lucide-react'

export default function PdfViewer({ title, fileUrl }: { title: string, fileUrl: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-blue-50 border border-blue-200 text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-between group text-left"
        dir="ltr"
      >
        <span className="flex items-center gap-2">
          <FileText size={20} className="group-hover:text-white shrink-0" />
          <span className="text-sm md:text-base">{title}</span>
        </span>
      </button>

      {/* النافذة المنبثقة التي تعرض الـ PDF داخل الموقع */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col p-4 md:p-8">
          <div className="flex justify-between items-center text-white mb-4">
            <h3 className="font-bold text-lg truncate">{title}</h3>
            <button onClick={() => setIsOpen(false)} className="bg-red-500 hover:bg-red-600 p-2 rounded-full transition">
              <X size={24} />
            </button>
          </div>
          <iframe
            src={fileUrl}
            className="w-full flex-1 bg-white rounded-lg shadow-2xl"
            title={title}
          />
        </div>
      )}
    </>
  )
}

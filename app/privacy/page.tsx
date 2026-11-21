import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen p-6 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 mt-10">
        
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowRight size={20} /> العودة للرئيسية / Retour
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-blue-900">سياسة الخصوصية (Politique de Confidentialité)</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2 text-gray-900">1. جمع المعلومات</h2>
            <p>نحن في منصة OFPPT الرقمية نحترم خصوصيتك. لا نقوم بجمع أي معلومات شخصية عنك عند تصفح الموقع، باستثناء المعلومات التي يقدمها متصفحك تلقائياً (مثل نوع الجهاز واللغة).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-gray-900">2. ملفات تعريف الارتباط (Cookies) وإعلانات Google</h2>
            <p>يستخدم هذا الموقع خدمات إعلانية مقدمة من شركة Google (Google AdSense). تستخدم شركة Google ملفات تعريف الارتباط (Cookies) لعرض إعلانات مبنية على زياراتك السابقة لهذا الموقع أو لمواقع أخرى على الإنترنت.</p>
            <p className="mt-2">استخدام Google لملفات تعريف الارتباط الإعلانية يمكّنها هي وشركاءها من عرض إعلانات لمستخدمي موقعك بناءً على زيارتهم لموقعك و/أو مواقع أخرى على الإنترنت.</p>
            <p className="mt-2">يمكن للمستخدمين إلغاء الاشتراك في الإعلانات المخصصة من خلال زيارة <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">إعدادات إعلانات Google</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-gray-900">3. الموافقة</h2>
            <p>باستخدامك لهذا الموقع، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على شروطها.</p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="text-sm text-gray-500">
            <h2 className="text-lg font-bold mb-2 text-gray-800">Politique de Confidentialité</h2>
            <p>Ce site utilise Google AdSense pour afficher des annonces. Google utilise des cookies pour diffuser des annonces basées sur les visites précédentes de l'utilisateur sur ce site ou d'autres sites.</p>
            <p className="mt-2">Les utilisateurs peuvent désactiver la publicité personnalisée en visitant les <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Paramètres des annonces Google</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

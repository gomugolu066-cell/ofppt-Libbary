"use client";

import { useState, useEffect } from 'react';

export default function ModuleAdOverlay() {
  const [showAd, setShowAd] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!showAd) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showAd]);

  if (!showAd) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-lg shadow-2xl w-11/12 max-w-md">
        
        {countdown === 0 && (
          <button 
            onClick={() => setShowAd(false)}
            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg hover:bg-red-600 transition cursor-pointer"
            aria-label="إغلاق الإعلان"
          >
            ✕
          </button>
        )}

        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">مساحة إعلانية</h3>
          <p className="text-gray-600 mb-6">هذا الإعلان يدعم استمرار المنصة مجاناً.</p>
          
          {/* هنا ستضع كود الإعلان الحقيقي لاحقاً (Google AdSense أو غيره) */}
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded border-2 border-dashed border-gray-400">
             <span className="text-gray-500 font-semibold">[مكان الإعلان]</span>
          </div>
        </div>

        {countdown > 0 && (
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>يمكنك إغلاق الإعلان بعد:</span>
              <span className="font-bold">{countdown} ثوانٍ</span>
            </div>
            {/* شريط التقدم */}
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

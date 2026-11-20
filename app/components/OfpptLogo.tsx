export default function OfpptLogo({ className = "w-[60px] h-auto" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 400" 
      className={className}
      aria-label="OFPPT Logo"
    >
      {/* الماسة الرمادية (في المنتصف - تظهر أولاً وتنبض) */}
      <path 
        className="anim-pulse-gray"
        fill="#A7A9AC" 
        fillRule="evenodd" 
        d="M 250 30 L 380 160 L 250 290 L 120 160 Z M 250 90 L 320 160 L 250 230 L 180 160 Z" 
      />

      {/* الماسة الخضراء (تخرج لليسار) */}
      <path 
        className="anim-slide-left"
        fill="#009A44" 
        fillRule="evenodd" 
        d="M 140 90 L 250 200 L 140 310 L 30 200 Z M 140 140 L 200 200 L 140 260 L 80 200 Z" 
      />

      {/* الماسة الزرقاء (تخرج لليمين) */}
      <path 
        className="anim-slide-right"
        fill="#005EB8" 
        fillRule="evenodd" 
        d="M 360 90 L 470 200 L 360 310 L 250 200 Z M 360 140 L 420 200 L 360 260 L 300 200 Z" 
      />

      {/* الكتابة OFPPT (تظهر في النهاية من الأسفل) */}
      <text 
        className="anim-fade-up"
        x="250" 
        y="380" 
        textAnchor="middle" 
        fontFamily="'Times New Roman', Times, serif" 
        fontSize="110" 
        fontWeight="bold" 
        fill="#004a98" 
        letterSpacing="2"
      >
        OFPPT
      </text>
    </svg>
  );
}

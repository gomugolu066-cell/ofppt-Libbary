export default function OfpptLogo() {
  return (
    <div style={{ width: '60px', height: 'auto', margin: '0 auto' }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 500 400" 
        style={{ width: '100%', height: 'auto', overflow: 'visible' }}
        aria-label="OFPPT Logo"
      >
        <defs>
          {/* حركة نزول الكتابة من خلف المعينات إلى الأسفل */}
          <style>
            {`
              @keyframes slideDownText {
                0% { transform: translateY(-100px); opacity: 0; }
                40% { transform: translateY(-100px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
              }
              .anim-text-down { animation: slideDownText 2.5s ease-out forwards; }
              
              @keyframes pulseGray {
                0%, 100% { transform: scale(1); opacity: 0.9; }
                50% { transform: scale(1.05); opacity: 1; }
              }
              .anim-pulse-gray { animation: pulseGray 2s ease-in-out infinite; }
              
              @keyframes slideLeftAnim {
                0% { transform: translateX(100px); opacity: 0; }
                30% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(-60px); opacity: 1; }
              }
              .anim-slide-left { animation: slideLeftAnim 2s ease-out forwards; }
              
              @keyframes slideRightAnim {
                0% { transform: translateX(-100px); opacity: 0; }
                30% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(60px); opacity: 1; }
              }
              .anim-slide-right { animation: slideRightAnim 2s ease-out forwards; }
            `}
          </style>
        </defs>

        {/* الماسة الرمادية */}
        <path 
          className="anim-pulse-gray"
          fill="#A7A9AC" 
          fillRule="evenodd" 
          d="M 250 30 L 380 160 L 250 290 L 120 160 Z M 250 90 L 320 160 L 250 230 L 180 160 Z" 
        />

        {/* الماسة الخضراء */}
        <path 
          className="anim-slide-left"
          fill="#009A44" 
          fillRule="evenodd" 
          d="M 140 90 L 250 200 L 140 310 L 30 200 Z M 140 140 L 200 200 L 140 260 L 80 200 Z" 
        />

        {/* الماسة الزرقاء */}
        <path 
          className="anim-slide-right"
          fill="#005EB8" 
          fillRule="evenodd" 
          d="M 360 90 L 470 200 L 360 310 L 250 200 Z M 360 140 L 420 200 L 360 260 L 300 200 Z" 
        />

        {/* الكتابة OFPPT - تنزل من الخلف إلى الأسفل */}
        <text 
          className="anim-text-down"
          x="250" 
          y="360" 
          textAnchor="middle" 
          fontFamily="'Times New Roman', Times, serif" 
          fontSize="110" 
          fontWeight="bold" 
          fill="#004a98" 
          letterSpacing="2"
          style={{ zIndex: -1 }}
        >
          OFPPT
        </text>
      </svg>
    </div>
  );
}

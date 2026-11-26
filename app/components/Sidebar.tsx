
      {/* Mobile Menu Button */}
      <div className="lg:hidden w-full mb-5">

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          className="w-full flex items-center justify-between bg-[#003D75] text-white rounded-xl px-4 py-3 shadow-lg"
        >
          <span className="flex items-center gap-3 font-bold">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
            {isAr ? 'القائمة الرئيسية' : 'Navigation Menu'}
          </span>
        </button>

        {/* Sliding Sidebar Drawer */}
        <div
          className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ease-in-out ${
            mobileOpen
              ? 'visible opacity-100 pointer-events-auto'
              : 'invisible opacity-0 pointer-events-none'
          }`}
        >

          {/* Dark Overlay */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobile}
            className={`absolute inset-0 w-full h-full bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 ${
              mobileOpen ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Sidebar */}
          <aside
            dir={isAr ? 'rtl' : 'ltr'}
            aria-hidden={!mobileOpen}
            className={`absolute top-0 bottom-0 w-[min(82vw,300px)] overflow-x-hidden overflow-y-auto overscroll-contain bg-[#00396F] shadow-2xl border-white/10 transition-transform duration-300 ease-in-out ${
              isAr
                ? 'right-0 border-l'
                : 'left-0 border-r'
            } ${
              mobileOpen
                ? 'translate-x-0'
                : isAr
                  ? 'translate-x-full'
                  : '-translate-x-full'
            }`}
          >

            <div className="relative isolate min-h-full bg-gradient-to-b from-[#00396F] via-[#00477F] to-[#002A55] p-3">

              {/* Geometric Diamond Background */}
              <SidebarDiamondPattern />

              <div className="relative z-10">

                {/* Brand Header */}
                <div className="flex items-center justify-between px-2 py-4 mb-4 border-b border-white/15">

                  <div className="flex flex-col items-center flex-1">
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">
                      OFPPT
                    </h2>
                    <p className="text-lg font-semibold text-blue-200">
                      Library
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeMobile}
                    aria-label="Close sidebar"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5">
                      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                    </svg>
                  </button>

                </div>

                {/* Sidebar Menu */}
                <div
                  onClick={(e) => {
                    const target = e.target as HTMLElement
                    if (target.closest('a')) closeMobile()
                  }}
                >
                  {menu}
                </div>

                {/* Footer */}
                <div className="mt-5 pt-4 border-t border-white/15 text-center">
                  <p className="text-[9px] text-blue-200/50 tracking-widest">
                    OFPPT DIGITAL LIBRARY
                  </p>
                </div>

              </div>
            </div>
          </aside>
        </div>
      </div>

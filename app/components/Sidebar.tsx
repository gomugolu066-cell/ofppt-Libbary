
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

        {mobileOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">

            {/* Dark overlay */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              className="absolute inset-0 w-full h-full bg-black/55 backdrop-blur-[2px]"
            />

            {/* Compact Sidebar Drawer */}
            <aside
              dir={isAr ? 'rtl' : 'ltr'}
              className={`absolute top-0 h-[100dvh] w-[min(82vw,300px)] overflow-y-auto overscroll-contain bg-gradient-to-b from-[#00396F] via-[#00477F] to-[#002A55] p-3 shadow-2xl border-white/10 ${
                isAr
                  ? 'right-0 border-l'
                  : 'left-0 border-r'
              }`}
            >

              <div className="relative isolate min-h-full">

                <SidebarDiamondPattern />

                <div className="relative z-10">

                  {/* Logo and close button */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <OFPPTLogo />
                    </div>

                    <button
                      type="button"
                      onClick={closeMobile}
                      aria-label="Close sidebar"
                      className="self-start mt-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5">
                        <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Sidebar Menu */}
                  {menu}

                  <div className="mt-5 pt-4 border-t border-white/15 text-center">
                    <p className="text-[9px] text-blue-200/50 tracking-widest">
                      OFPPT DIGITAL LIBRARY
                    </p>
                  </div>

                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

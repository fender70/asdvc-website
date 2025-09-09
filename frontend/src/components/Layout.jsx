import { Link, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import asdvcLogo from '../assets/asdvc_logo.jpg'

const Layout = ({ children }) => {
  const location = useLocation()
  const [isCommitteesOpen, setIsCommitteesOpen] = useState(false)
  const [isBoardsOpen, setIsBoardsOpen] = useState(false)
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false)
  const [isDvcOpen, setIsDvcOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if any dropdown is open
      if (isCommitteesOpen || isBoardsOpen || isDocumentsOpen || isDvcOpen || isMobileMenuOpen) {
        // Check if the click is outside the navigation area
        const navElement = document.querySelector('nav')
        const mobileMenuElement = document.querySelector('[data-mobile-menu]')
        const mobileMenuButton = event.target.closest('[aria-label="Toggle mobile menu"]')
        const isClickInsideNav = navElement && navElement.contains(event.target)
        const isClickInsideMobileMenu = mobileMenuElement && mobileMenuElement.contains(event.target)
        const isClickOnMobileButton = mobileMenuButton !== null
        
        if (!isClickInsideNav && !isClickInsideMobileMenu && !isClickOnMobileButton) {
          setIsCommitteesOpen(false)
          setIsBoardsOpen(false)
          setIsDocumentsOpen(false)
          setIsDvcOpen(false)
          setIsMobileMenuOpen(false)
        }
      }
    }

    // Add event listener with capture to ensure it runs before other click handlers
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [isCommitteesOpen, isBoardsOpen, isDocumentsOpen, isDvcOpen, isMobileMenuOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Join', href: '/join' },
    { name: 'Projects', href: '/projects-gallery' },
    { name: 'Events', href: '/events' },
  ]

  const committees = [
    { name: 'Legislative Affairs', href: '/committees/legislative-affairs' },
    { name: 'Public Relations', href: '/committees/public-relations' },
    { name: 'Rules', href: '/committees/rules' },
    { name: 'Election', href: '/committees/election' },
    { name: 'Building', href: '/committees/building' },
    { name: 'Civic Engagement', href: '/committees/civic-engagement' },
    { name: 'Budget Oversight', href: '/committees/budget-oversight' },
    { name: 'Activities', href: '/committees/activities' },
    { name: 'Technology', href: '/committees/technology' },
  ]

  const boards = [
    { name: '2025-2026', href: '/boards/2025-2026' },
    { name: '2024-2025', href: '/boards/2024-2025' },
  ]

  const documents = [
    { name: 'ASDVC Constitution', href: 'https://www.dvc.edu/life-dvc/student-life-and-clubs/student-government/asdvc-constitution', external: true },
    { name: 'ASDVC Bylaws', href: 'https://www.dvc.edu/life-dvc/student-life-and-clubs/student-government/diablo-valley-college-associated-students', external: true },
    { name: 'ASDVC Election Code', href: 'https://www.dvc.edu/life-dvc/student-life-and-clubs/student-government/asdvc-elections-code', external: true },
  ]

  const dvcLinks = [
    { name: 'DVC Homepage', href: 'https://www.dvc.edu', external: true },
    { name: 'DVCSync', href: 'https://dvc.campuslabs.com/engage/', external: true },
    { name: 'DVCInquirer', href: 'https://www.dvcinquirer.com', external: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-asdvc-gray-50 via-white to-asdvc-gray-100 relative">
      {/* Enhanced main background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-asdvc-gray-50/60"></div>
      {/* Enhanced gradient overlay for depth and visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-asdvc-forest/3 to-asdvc-forest/8 pointer-events-none"></div>
      {/* Additional subtle radial gradient for warmth */}
      <div className="absolute inset-0 bg-gradient-radial from-asdvc-gold/2 via-transparent to-transparent pointer-events-none"></div>
      {/* Header */}
      <header className="bg-gradient-to-r from-asdvc-forest to-asdvc-forest-light shadow-lg border-b border-asdvc-forest-dark relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-white ring-opacity-20">
                  <img 
                    src={asdvcLogo} 
                    alt="ASDVC Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-white text-xl font-bold">Associated Students</h1>
                  <p className="text-asdvc-gray-300 text-sm">of Diablo Valley College</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-3">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-2 text-base transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                  >
                    {item.name}
                    <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-2 py-2 text-base transition-all duration-300 ease-out ${
                      location.pathname === item.href
                        ? 'text-white font-bold border-b-2 border-asdvc-gold'
                        : 'text-white hover:font-bold hover:underline hover:scale-105 hover:text-asdvc-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Committees Dropdown */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => {
                    setIsCommitteesOpen(!isCommitteesOpen)
                    setIsBoardsOpen(false)
                    setIsDocumentsOpen(false)
                    setIsDvcOpen(false)
                  }}
                  aria-expanded={isCommitteesOpen}
                  className={`px-2 py-2 text-base transition-all duration-300 ease-out ${
                    location.pathname.startsWith('/committees')
                      ? 'text-white font-bold border-b-2 border-asdvc-gold'
                      : 'text-white hover:font-bold hover:underline hover:scale-105 hover:text-asdvc-gold'
                  }`}
                >
                  Committees
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCommitteesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 dropdown-enter-active">
                    <div className="py-2">
                      {committees.map((committee, index) => (
                        <Link
                          key={committee.name}
                          to={committee.href}
                          className={`block px-4 py-2 text-sm transition-all duration-200 hover:scale-105 ${
                            location.pathname === committee.href
                              ? 'bg-asdvc-forest text-white'
                              : 'text-asdvc-gray-800 hover:bg-asdvc-gray-100'
                          }`}
                          onClick={() => setIsCommitteesOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {committee.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Boards Dropdown */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => {
                    setIsBoardsOpen(!isBoardsOpen)
                    setIsCommitteesOpen(false)
                    setIsDocumentsOpen(false)
                    setIsDvcOpen(false)
                  }}
                  aria-expanded={isBoardsOpen}
                  className={`px-2 py-2 text-base transition-all duration-300 ease-out ${
                    location.pathname.startsWith('/boards')
                      ? 'text-white font-bold border-b-2 border-asdvc-gold'
                      : 'text-white hover:font-bold hover:underline hover:scale-105 hover:text-asdvc-gold'
                  }`}
                >
                  Boards
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isBoardsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 dropdown-enter-active">
                    <div className="py-2">
                      {boards.map((board, index) => (
                        <Link
                          key={board.name}
                          to={board.href}
                          className={`block px-4 py-2 text-sm transition-all duration-200 hover:scale-105 ${
                            location.pathname === board.href
                              ? 'bg-asdvc-forest text-white'
                              : 'text-asdvc-gray-800 hover:bg-asdvc-gray-100'
                          }`}
                          onClick={() => setIsBoardsOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {board.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Documents Dropdown */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => {
                    setIsDocumentsOpen(!isDocumentsOpen)
                    setIsCommitteesOpen(false)
                    setIsBoardsOpen(false)
                    setIsDvcOpen(false)
                  }}
                  aria-expanded={isDocumentsOpen}
                  className={`px-2 py-2 text-base transition-all duration-300 ease-out ${
                    location.pathname === '/governing-documents'
                      ? 'text-white font-bold border-b-2 border-asdvc-gold'
                      : 'text-white hover:font-bold hover:underline hover:scale-105 hover:text-asdvc-gold'
                  }`}
                >
                  Documents
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDocumentsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50 dropdown-enter-active">
                    <div className="py-2">
                      {documents.map((document, index) => (
                        document.external ? (
                          <a
                            key={document.name}
                            href={document.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm transition-all duration-200 hover:scale-105 text-asdvc-gray-800 hover:bg-asdvc-gray-100"
                            onClick={() => setIsDocumentsOpen(false)}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {document.name}
                            <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            key={document.name}
                            to={document.href}
                            className={`block px-4 py-2 text-sm transition-all duration-200 hover:scale-105 ${
                              location.pathname === document.href
                                ? 'bg-asdvc-forest text-white'
                                : 'text-asdvc-gray-800 hover:bg-asdvc-gray-100'
                            }`}
                            onClick={() => setIsDocumentsOpen(false)}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {document.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* DVC Dropdown */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => {
                    setIsDvcOpen(!isDvcOpen)
                    setIsCommitteesOpen(false)
                    setIsBoardsOpen(false)
                    setIsDocumentsOpen(false)
                  }}
                  aria-expanded={isDvcOpen}
                  className="px-2 py-2 text-base transition-all duration-300 ease-out text-white hover:font-bold hover:underline hover:scale-105 hover:text-asdvc-gold"
                >
                  DVC
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDvcOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 dropdown-enter-active">
                    <div className="py-2">
                      {dvcLinks.map((link, index) => (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm transition-all duration-200 hover:scale-105 text-asdvc-gray-800 hover:bg-asdvc-gray-100"
                          onClick={() => setIsDvcOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {link.name}
                          <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-asdvc-gold transition-colors duration-200"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-asdvc-forest-light" data-mobile-menu>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-base transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-white font-bold border-b-2 border-asdvc-gold'
                        : 'text-white hover:font-bold hover:underline hover:scale-105'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Committees Dropdown */}
              <div className="border-t border-asdvc-forest pt-2 mt-2">
                <button
                  onClick={() => {
                    setIsCommitteesOpen(!isCommitteesOpen)
                    setIsBoardsOpen(false)
                    setIsDocumentsOpen(false)
                    setIsDvcOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-base transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                >
                  Committees
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCommitteesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {committees.map((committee) => (
                      <Link
                        key={committee.name}
                        to={committee.href}
                        className={`block px-3 py-2 text-sm transition-all duration-200 ${
                          location.pathname === committee.href
                            ? 'text-white font-bold border-b border-asdvc-gold'
                            : 'text-white hover:font-bold hover:underline hover:scale-105'
                        }`}
                        onClick={() => {
                          setIsCommitteesOpen(false)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {committee.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Boards Dropdown */}
              <div className="border-t border-asdvc-forest pt-2 mt-2">
                <button
                  onClick={() => {
                    setIsBoardsOpen(!isBoardsOpen)
                    setIsCommitteesOpen(false)
                    setIsDocumentsOpen(false)
                    setIsDvcOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-base transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                >
                  Boards
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isBoardsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {boards.map((board) => (
                      <Link
                        key={board.name}
                        to={board.href}
                        className={`block px-3 py-2 text-sm transition-all duration-200 ${
                          location.pathname === board.href
                            ? 'text-white font-bold border-b border-asdvc-gold'
                            : 'text-white hover:font-bold hover:underline hover:scale-105'
                        }`}
                        onClick={() => {
                          setIsBoardsOpen(false)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {board.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Documents Dropdown */}
              <div className="border-t border-asdvc-forest pt-2 mt-2">
                <button
                  onClick={() => {
                    setIsDocumentsOpen(!isDocumentsOpen)
                    setIsCommitteesOpen(false)
                    setIsBoardsOpen(false)
                    setIsDvcOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-base transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                >
                  Documents
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDocumentsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {documents.map((document) => (
                      document.external ? (
                        <a
                          key={document.name}
                          href={document.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-2 text-sm transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                          onClick={() => {
                            setIsDocumentsOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          {document.name}
                          <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          key={document.name}
                          to={document.href}
                          className={`block px-3 py-2 text-sm transition-all duration-200 ${
                            location.pathname === document.href
                              ? 'text-white font-bold border-b border-asdvc-gold'
                              : 'text-white hover:font-bold hover:underline hover:scale-105'
                          }`}
                          onClick={() => {
                            setIsDocumentsOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          {document.name}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile DVC Dropdown */}
              <div className="border-t border-asdvc-forest pt-2 mt-2">
                <button
                  onClick={() => {
                    setIsDvcOpen(!isDvcOpen)
                    setIsCommitteesOpen(false)
                    setIsBoardsOpen(false)
                    setIsDocumentsOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-base transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                >
                  DVC
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDvcOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {dvcLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm transition-all duration-200 text-white hover:font-bold hover:underline hover:scale-105"
                        onClick={() => {
                          setIsDvcOpen(false)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {link.name}
                        <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-asdvc-forest to-asdvc-forest-dark text-white shadow-lg border-t border-asdvc-forest-light relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="flex items-center mb-4 hover:opacity-80 transition-opacity duration-200">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 shadow-md ring-1 ring-white ring-opacity-20">
                  <img 
                    src={asdvcLogo} 
                    alt="ASDVC Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">ASDVC</h3>
              </Link>
              <p className="text-sm text-asdvc-gray-300">
                Associated Students of Diablo Valley College - Your voice in student government.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://dvc.campuslabs.com/engage/" target="_blank" rel="noopener noreferrer" className="text-asdvc-gray-300 hover:text-asdvc-gold">Events</a></li>
                <li><Link to="/join" className="text-asdvc-gray-300 hover:text-asdvc-gold">Join</Link></li>
                <li><Link to="/governing-documents" className="text-asdvc-gray-300 hover:text-asdvc-gold">Documents</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-asdvc-gray-300">
                Diablo Valley College<br />
                Student Government Office
              </p>
            </div>
          </div>
          <div className="border-t border-asdvc-forest-light mt-8 pt-8 text-center text-sm text-asdvc-gray-300">
            <p>&copy; 2024 Associated Students of Diablo Valley College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

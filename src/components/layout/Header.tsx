'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Feldhub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#produkte" className="text-gray-600 hover:text-green-600 transition-colors">
              Produkte
            </Link>
            <Link href="#preise" className="text-gray-600 hover:text-green-600 transition-colors">
              Preise
            </Link>
            <Link href="#referenz" className="text-gray-600 hover:text-green-600 transition-colors">
              Referenz
            </Link>
            <Link href="#kontakt" className="text-gray-600 hover:text-green-600 transition-colors">
              Kontakt
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#kontakt"
              className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Demo anfragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="#produkte" className="text-gray-600 hover:text-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Produkte
              </Link>
              <Link href="#preise" className="text-gray-600 hover:text-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Preise
              </Link>
              <Link href="#referenz" className="text-gray-600 hover:text-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Referenz
              </Link>
              <Link href="#kontakt" className="text-gray-600 hover:text-green-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Kontakt
              </Link>
              <Link
                href="#kontakt"
                className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo anfragen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">Feldhub</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Digitale Betriebssysteme für Außendienst-Unternehmen. Maßgeschneidert. Modern. Made in Germany.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produkte</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#produkte" className="text-gray-400 hover:text-white transition-colors">
                  ForstManager
                </Link>
              </li>
              <li>
                <Link href="#produkte" className="text-gray-400 hover:text-white transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#preise" className="text-gray-400 hover:text-white transition-colors">
                  Preise
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Feldhub. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Ein Produkt von Tomasz Cuglewski
          </p>
        </div>
      </div>
    </footer>
  );
}

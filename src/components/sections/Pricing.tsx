import Link from 'next/link';

export function Pricing() {
  return (
    <section id="preise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keine versteckten Kosten. Sie zahlen nur, was Sie nutzen.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">Für kleine Betriebe</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">249€</span>
              <span className="text-gray-600">/Monat</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                'Bis 5 Mitarbeiter',
                'ForstManager Vollversion',
                'Mobile App (iOS & Android)',
                '5 GB Speicherplatz',
                'E-Mail Support',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link
              href="#kontakt"
              className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Demo anfragen
            </Link>
          </div>

          {/* Professional */}
          <div className="bg-green-600 rounded-2xl p-8 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full">
              Beliebt
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
            <p className="text-green-100 mb-6">Für wachsende Betriebe</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">449€</span>
              <span className="text-green-100">/Monat</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                'Bis 15 Mitarbeiter',
                'Alles aus Starter',
                'Kundenportal',
                'KI-Förderberatung (500 Anfragen)',
                '25 GB Speicherplatz',
                'Telefon-Support',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link
              href="#kontakt"
              className="block w-full text-center bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              Demo anfragen
            </Link>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">Für große Betriebe</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Individuell</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                'Unbegrenzt Mitarbeiter',
                'Alles aus Professional',
                'KI-Förderberatung unlimitiert',
                'Unbegrenzter Speicher',
                'Dedicated Support',
                'Custom Integrations',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link
              href="#kontakt"
              className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        {/* Setup Fee Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Einmalige Setup-Gebühr: <span className="font-semibold">ab 1.990€</span> — 
            Einrichtung, Datenmigration, Schulung inklusive.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Alle Preise zzgl. MwSt. Monatliche Abrechnung, jederzeit kündbar.
          </p>
        </div>
      </div>
    </section>
  );
}

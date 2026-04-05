export function Products() {
  return (
    <section id="produkte" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alles, was Ihr Betrieb braucht
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zentrale Verwaltung im Büro, mobile Erfassung im Feld — nahtlos verbunden.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ForstManager */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">ForstManager</h3>
                <p className="text-green-600 font-medium">Zentrale Verwaltung</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Die Kommandozentrale für Ihr Büro. Verwalten Sie Aufträge, Mitarbeiter, Kunden und Rechnungen 
              an einem Ort — mit intelligenter Unterstützung durch KI.
            </p>
            
            <ul className="space-y-3">
              {[
                'Auftrags- und Projektmanagement',
                'Mitarbeiter- und Zeiterfassung',
                'Kundenverwaltung mit Portal-Zugang',
                'Angebote und Rechnungen',
                'KI-gestützte Förderberatung',
                'GPS-Tracking und Flächenmanagement',
                'Dokumentenarchiv mit Suche',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile App */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Mobile App</h3>
                <p className="text-blue-600 font-medium">Für iOS & Android</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Die perfekte Begleitung für Ihre Mitarbeiter im Feld. Funktioniert auch ohne Netz — 
              im tiefsten Wald genauso wie auf der Baustelle.
            </p>
            
            <ul className="space-y-3">
              {[
                'Offline-First — funktioniert ohne Netz',
                'Tagesprotokolle digital erfassen',
                'Foto-Dokumentation mit GPS',
                'Arbeitszeiterfassung mit Pausen',
                'Auftragsübersicht und Details',
                'Automatische Synchronisation',
                'Biometrische Anmeldung (Face ID / Fingerprint)',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Kundenportal',
              description: 'Ihre Kunden sehen Projektstatus, Dokumente und Rechnungen in ihrem eigenen Portal.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: 'Auswertungen',
              description: 'Detaillierte Reports: Arbeitszeiten, Projektkosten, Mitarbeiterauslastung.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: 'DSGVO-konform',
              description: 'Deutsche Server, Verschlüsselung, Datenschutz nach höchsten Standards.',
            },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-gray-700">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

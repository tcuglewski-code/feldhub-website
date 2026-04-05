export function Reference() {
  return (
    <section id="referenz" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bereits im Einsatz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Erfahren Sie, wie Feldhub Betrieben wie Ihrem hilft.
          </p>
        </div>

        {/* Reference Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-3xl">🌲</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Koch Aufforstung GmbH</h3>
                    <p className="text-green-600">Forstdienstleistungen, Bayern</p>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  &ldquo;Mit Feldhub haben wir endlich alle Aufträge, Mitarbeiter und Protokolle an einem Ort. 
                  Die App funktioniert auch im tiefsten Wald — das war für uns entscheidend.&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-semibold">SK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Stefan Koch</p>
                    <p className="text-gray-600 text-sm">Geschäftsführer</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">40%</div>
                  <p className="text-gray-600 text-sm">Weniger Büroarbeit</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                  <p className="text-gray-600 text-sm">Digitale Protokolle</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">12</div>
                  <p className="text-gray-600 text-sm">Mitarbeiter vernetzt</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                  <p className="text-gray-600 text-sm">Kundenportal online</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Feldhub ist geeignet für:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🌲 Forstbetriebe',
              '🌿 Landschaftsbau',
              '🏗️ Tiefbau',
              '🚜 Agrarbetriebe',
              '🧹 Reinigung',
              '🔧 Handwerk',
            ].map((industry, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

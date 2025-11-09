import { Rocket, SolarPanel, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-100/70 rounded-full px-3 py-1 text-sm font-medium">
              <SolarPanel className="h-4 w-4" />
              Soluzioni di efficientamento energetico
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Energia smart per aziende e persone
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-7">
              Oktavia SRL progetta e realizza impianti fotovoltaici, comunità energetiche,
              e-mobility ed Energy Management Systems. Dalla consulenza alla messa in opera,
              fino al supporto finanziario per massimizzare incentivi e ROI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-emerald-700 transition"
              >
                <Rocket className="h-5 w-5" />
                Scopri le soluzioni
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-50 transition"
              >
                <Building2 className="h-5 w-5" />
                Parla con un consulente
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Sede a Firenze • Partner tecnologici di primo livello • Qualità certificata
            </p>
          </div>
          <div className="relative">
            <div className="relative mx-auto h-64 sm:h-80 md:h-96 w-full rounded-3xl bg-gradient-to-tr from-emerald-500 via-sky-500 to-indigo-500 p-[2px] shadow-xl">
              <div className="h-full w-full rounded-3xl bg-white p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <FeatureTile title="Fotovoltaico" subtitle="Business & Consumer" color="text-emerald-600" />
                  <FeatureTile title="CER" subtitle="Comunità Energetiche" color="text-sky-600" />
                  <FeatureTile title="E-Mobility" subtitle="Ricarica EV" color="text-indigo-600" />
                  <FeatureTile title="EMS" subtitle="Energy Management" color="text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureTile({ title, subtitle, color }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition bg-white/70">
      <p className={`text-sm font-medium ${color}`}>{title}</p>
      <p className="mt-1 text-gray-700 font-semibold text-lg">{subtitle}</p>
    </div>
  );
}

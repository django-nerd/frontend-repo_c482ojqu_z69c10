import { PanelsTopLeft, Leaf, BatteryCharging, Users, Building2, PiggyBank } from "lucide-react";

const services = [
  {
    icon: PanelsTopLeft,
    title: "Impianti Fotovoltaici",
    desc: "Progetti chiavi in mano per aziende, privati e condomini. Accesso a Transizione 5.0 e Nuova Sabatini.",
  },
  {
    icon: Users,
    title: "Comunità Energetiche (CER)",
    desc: "Consulenza e supporto dalla progettazione alla gestione, con fondi PNRR e incentivi GSE.",
  },
  {
    icon: BatteryCharging,
    title: "E-Mobility",
    desc: "Infrastrutture di ricarica per veicoli elettrici, dimensionate per casa, condominio e impresa.",
  },
  {
    icon: Leaf,
    title: "EMS - Energy Management",
    desc: "Monitoraggio e ottimizzazione dei consumi per siti industriali e multi-sito.",
  },
  {
    icon: PiggyBank,
    title: "Soluzioni finanziarie (Urania)",
    desc: "Microcredito, leasing, factoring e finanza agevolata per accelerare gli investimenti.",
  },
  {
    icon: Building2,
    title: "Per Business e Consumer",
    desc: "Percorsi dedicati per aziende e privati, incluse soluzioni per Gruppi di Autoconsumo Collettivo.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cosa facciamo</h2>
          <p className="mt-3 text-gray-600">
            Tecnologie, consulenza e finanza per l'efficienza energetica, con un approccio end‑to‑end.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition bg-gradient-to-b from-white to-gray-50">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

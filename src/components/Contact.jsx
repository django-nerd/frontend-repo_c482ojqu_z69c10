import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      // Demo-only: simulate a request latency
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Parliamo del tuo progetto</h2>
          <p className="mt-3 text-gray-600">
            Raccontaci obiettivi, consumi e tempistiche. Ti risponderemo entro 1 giorno lavorativo dalla sede di Firenze.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 text-sm">
            <li>• Business: impianti industriali, EMS, ricarica flotte, CER aziendali</li>
            <li>• Consumer: impianti residenziali, condomini, gruppi di autoconsumo</li>
            <li>• Finanza: incentivi GSE, Transizione 5.0, Nuova Sabatini, PNRR</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-b from-white to-gray-50 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Tipologia</label>
              <select className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600">
                <option>Business</option>
                <option>Consumer / Condominio</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Messaggio</label>
              <textarea rows="4" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
            </div>
          </div>
          <button
            disabled={status === "loading"}
            className="mt-5 w-full rounded-lg bg-emerald-600 text-white font-semibold py-3 hover:bg-emerald-700 transition disabled:opacity-60"
          >
            {status === "loading" ? "Invio..." : status === "success" ? "Richiesta inviata ✓" : "Richiedi consulenza"}
          </button>
          <p className="mt-2 text-xs text-gray-500">I tuoi dati non saranno mai condivisi con terze parti.</p>
        </form>
      </div>
    </section>
  );
}

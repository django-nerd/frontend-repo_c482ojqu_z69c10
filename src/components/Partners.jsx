const partners = [
  { name: "Fornitori Tier‑1", logo: null },
  { name: "Sistemi di ricarica EV", logo: null },
  { name: "Software EMS", logo: null },
  { name: "Finanza agevolata", logo: null },
];

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Partner e tecnologie</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="h-20 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 text-sm"
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

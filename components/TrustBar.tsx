const trustSignals = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Trusted Refurbished PCs",
    sub: "Every unit cleaned & checked",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "Ready from Day One",
    sub: "Plug in and start using immediately",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Beginner Friendly",
    sub: "No specs needed — just tell us what you need",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
    label: "Local Cape Town Support",
    sub: "We're in your city — not a random online seller",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
      </svg>
    ),
    label: "Great Value",
    sub: "Built for everyday use from R999",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    label: "WhatsApp Support",
    sub: "Message us anytime for help or questions",
  },
];

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="section-padding bg-[#050508]"
      aria-label="Trust signals"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Customers Choose Us
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Refurbished doesn&apos;t mean random.
          </h2>
          <p className="mt-2 text-white/55 max-w-lg mx-auto text-sm">
            It means cleaned, tested, optimized, and prepared for real use.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="card-dark rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-400"
                style={{ background: "rgba(27,110,243,0.12)" }}
              >
                {signal.icon}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{signal.label}</div>
                <div className="text-white/45 text-xs mt-1 leading-relaxed">{signal.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

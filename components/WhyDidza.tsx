const usps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Setup Over Specs",
    body: "Anyone can sell you a second-hand PC. We prepare it for what you actually need it to do — cleaned, tested, optimized and preinstalled before you get it.",
    label: "Our Edge",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Beginner-Friendly Buying",
    body: "You don't need to know specs. Just tell us what you need the PC for — schoolwork, CVs, business, gaming — and we guide you to the right choice.",
    label: "No Tech Talk",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Ready to Plug In & Use",
    body: "Take it home, plug it in, and start using it. Software set up. Desktop clean. Basics installed. No hours of configuration. No surprises.",
    label: "Day-One Ready",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Cape Town Seller",
    body: "We're based in Cape Town. We understand local budgets and local needs. You're not buying from a faceless online store — you're buying from someone in your city.",
    label: "Cape Town",
  },
];

export default function WhyDidza() {
  return (
    <section
      id="why"
      className="section-padding"
      style={{ background: "#0A0A0F" }}
      aria-label="Why DidzaPCs"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Why DidzaPCs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            We don&apos;t just sell PCs.
            <br />
            <span className="text-gradient">We prepare them for real life.</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Refurbished doesn&apos;t mean random. It means cleaned, checked, optimized and
            set up for whatever you need it for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="card-dark rounded-2xl p-7 flex gap-5 hover:border-blue-500/30 transition-colors duration-200"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-blue-400"
                style={{ background: "rgba(27,110,243,0.12)" }}
              >
                {usp.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-semibold text-lg">{usp.title}</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30"
                    style={{ background: "rgba(27,110,243,0.1)" }}
                  >
                    {usp.label}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{usp.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl p-6 text-center"
          style={{ background: "rgba(27,110,243,0.08)", border: "1px solid rgba(27,110,243,0.2)" }}
        >
          <p className="text-white/80 text-lg font-medium italic">
            &ldquo;A cheap PC with bad setup feels slow. A properly optimized PC feels usable. We optimize before you buy.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

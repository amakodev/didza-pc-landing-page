const pains = [
  {
    icon: "📱",
    hook: "Still applying for jobs from your phone?",
    body: "A proper keyboard and screen make CVs, emails and job applications so much easier. Stop struggling on a small screen.",
  },
  {
    icon: "📚",
    hook: "Your child needs more than a phone for schoolwork.",
    body: "Typing assignments, online learning, PDFs and research are all easier on a real computer. Give them a proper place to study at home.",
  },
  {
    icon: "☕",
    hook: "Internet café costs add up faster than you think.",
    body: "R20 here, R30 there — over a month that's real money. One affordable PC at home pays for itself quickly.",
  },
  {
    icon: "🏠",
    hook: "Running your small business from only your phone?",
    body: "Invoices, spreadsheets, WhatsApp Web, documents and records are much easier to manage on a proper screen.",
  },
  {
    icon: "🔍",
    hook: "Afraid of buying the wrong second-hand PC?",
    body: "We get it. That's why we clean, test, optimize and prep every PC before selling it — so you know exactly what you're getting.",
  },
];

export default function PainSection() {
  return (
    <section
      id="pain"
      className="section-padding bg-[#050508]"
      aria-label="Common problems we solve"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Sound Familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            You&apos;re not alone in this
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            Most people in Cape Town face the same problem — they need a computer but
            aren&apos;t sure where to start. We make it simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain) => (
            <article
              key={pain.hook}
              className="card-dark rounded-2xl p-6 hover:border-blue-500/30 transition-colors duration-200"
            >
              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                {pain.hook}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{pain.body}</p>
            </article>
          ))}

          <article className="card-dark rounded-2xl p-6 border-blue-500/30 flex flex-col justify-between"
            style={{ background: "rgba(27,110,243,0.08)", borderColor: "rgba(27,110,243,0.3)" }}
          >
            <div>
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Not sure what specs mean?
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Tell us what you need the PC <em>for</em> and we&apos;ll guide you to the
                right setup. No confusing tech talk.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

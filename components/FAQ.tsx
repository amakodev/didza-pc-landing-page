"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is 4GB RAM enough for basic use?",
    a: "Yes — for documents, browsing, email, CVs, schoolwork and YouTube, 4GB is sufficient when the PC is properly optimized. We tune every machine before selling it so it runs smoothly for everyday tasks. It's not meant for heavy gaming or advanced video editing, but it works well for daily basic use.",
  },
  {
    q: "Why is the price so low? Is something wrong with it?",
    a: "These are refurbished PCs, not brand-new machines. We clean, test, optimize and prepare them so they're useful for basic everyday work at an affordable price. Refurbished doesn't mean broken — it means professionally reconditioned. We'll always be honest about the condition of each unit.",
  },
  {
    q: "Can it play games?",
    a: "It depends on the game. Our starter PCs are mainly for basic everyday use. For gaming, we also offer budget gaming and SteamOS options suitable for lighter, casual, indie or retro games. We'll never oversell a machine's gaming capability — just ask and we'll guide you honestly.",
  },
  {
    q: "Does it come with a monitor, keyboard and mouse?",
    a: "It depends on the specific unit. Some are PC-only and some may include a full setup. We'll clearly show what's included before you commit. Just message us and we'll tell you exactly what comes with each available unit.",
  },
  {
    q: "Can my child use it for school?",
    a: "Yes — the starter PCs are well-suited for schoolwork: typing assignments, browsing, PDFs, online learning and basic documents. We can also set it up specifically for your child's needs before handover.",
  },
  {
    q: "Can I use it for my small business?",
    a: "Yes — for basic business admin like invoices, WhatsApp Web, email, documents, spreadsheets and record keeping, a properly set up basic PC makes a real difference. We can configure it for your business use case.",
  },
  {
    q: "I don't understand computer specs. How do I choose?",
    a: "You don't need to. Just tell us what you need the PC for — schoolwork, job applications, home use, business, gaming — and we'll guide you to the right setup. That's what we're here for.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: "#0A0A0F" }}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Questions people ask
          </h2>
          <p className="mt-3 text-white/55">
            Honest answers. No tech jargon. No pressure.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card-dark rounded-2xl overflow-hidden hover:border-blue-500/25 transition-colors"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-white font-medium leading-snug">{faq.q}</span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-blue-400 transition-transform duration-200"
                  style={{
                    background: "rgba(27,110,243,0.12)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 pb-5 text-white/65 text-sm leading-relaxed"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

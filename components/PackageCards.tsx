import config from "@/config";
import { whatsappUrl } from "@/lib/utils";

const packages = [
  {
    icon: "📚",
    title: "Schoolwork PC",
    hook: "Give your child a proper place to do schoolwork at home.",
    target: "Parents & Students",
    useCases: ["Typing assignments", "Browser & online research", "PDF reader", "Online learning platforms", "Email access"],
    msgKey: "schoolwork" as const,
    accent: "#1B6EF3",
    popular: false,
  },
  {
    icon: "💼",
    title: "Job Seeker PC",
    hook: "Stop struggling to apply for jobs from your phone.",
    target: "Job Seekers & Graduates",
    useCases: ["CV creation & editing", "Email & job sites", "Document tools", "Browser & PDF reader", "Online application portals"],
    msgKey: "jobSeeker" as const,
    accent: "#1B6EF3",
    popular: true,
  },
  {
    icon: "🏠",
    title: "Home Office PC",
    hook: "A simple home office setup without paying brand-new prices.",
    target: "Remote Workers & Freelancers",
    useCases: ["Productivity & document tools", "Email setup guidance", "Browser & video calls", "PDF & spreadsheets", "File organization"],
    msgKey: "homeOffice" as const,
    accent: "#1B6EF3",
    popular: false,
  },
  {
    icon: "🏪",
    title: "Small Business PC",
    hook: "Turn your admin chaos into a simple desktop setup.",
    target: "Home Businesses & Informal Traders",
    useCases: ["WhatsApp Web", "Invoicing & spreadsheets", "Email & records", "Document printing", "Basic file management"],
    msgKey: "smallBusiness" as const,
    accent: "#1B6EF3",
    popular: false,
  },
  {
    icon: "🎮",
    title: "Budget Gaming PC",
    hook: "Affordable casual gaming — not high-end, just fun.",
    target: "Casual & Retro Gamers",
    useCases: ["Indie & retro games", "SteamOS-compatible setup", "Controller-friendly", "Light casual gaming", "Cloud gaming ready"],
    msgKey: "gaming" as const,
    accent: "#7c3aed",
    popular: false,
    note: "Entry-level gaming. Not for AAA or heavy titles.",
  },
];

export default function PackageCards() {
  return (
    <section
      id="packages"
      className="section-padding bg-[#050508]"
      aria-label="PC Packages"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            PC Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What do you need it for?
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            Instead of confusing specs, we sell purpose-built setups.
            Choose what fits your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const waUrl = whatsappUrl(config.whatsappNumber, config.packageMessages[pkg.msgKey]);
            return (
              <article
                key={pkg.title}
                className="card-dark rounded-2xl p-6 flex flex-col hover:border-blue-500/30 transition-all duration-200 relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg,#1B6EF3,#1558c8)" }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-4xl mb-4">{pkg.icon}</div>
                <div className="mb-1">
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                    {pkg.target}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed italic">&ldquo;{pkg.hook}&rdquo;</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.useCases.map((use) => (
                    <li key={use} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                      {use}
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <p className="text-xs text-white/35 mb-4 italic">{pkg.note}</p>
                )}

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm justify-center"
                >
                  <WhatsAppIcon />
                  Message About This PC
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

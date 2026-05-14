import config from "@/config";
import { whatsappUrl } from "@/lib/utils";

const valueStack = [
  "Refurbished desktop PC",
  "Cleaned & dust-free",
  "Hardware tested",
  "Optimized for performance",
  "Windows setup included",
  "Basic software preinstalled",
  "Clean desktop layout",
  "Ready to use from day one",
  "Local Cape Town seller",
  "WhatsApp support",
];

export default function PricingAnchor() {
  const waUrl = whatsappUrl(config.whatsappNumber, config.packageMessages.general);

  return (
    <section
      id="pricing"
      className="section-padding"
      style={{ background: "#0A0A0F" }}
      aria-label="Pricing"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            A working computer at home
            <br />
            doesn&apos;t have to start at R5,000.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="card-dark rounded-2xl p-8"
              style={{ border: "1px solid rgba(27,110,243,0.3)", background: "rgba(27,110,243,0.06)" }}
            >
              <div className="mb-2 text-blue-400 text-sm font-semibold uppercase tracking-widest">
                Starting from
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-extrabold text-gradient">{config.startingPrice}</span>
                <span className="text-white/50 text-lg">while stock lasts</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                For less than many people spend replacing a phone screen, you can get a ready-to-use
                computer for schoolwork, job applications, documents, browsing and home use.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base justify-center w-full"
              >
                <WhatsAppIcon />
                Ask for Available Stock
              </a>
              <p className="mt-3 text-center text-xs text-white/35">
                Limited starter batch · Cape Town buyers · Stock changes quickly
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              What&apos;s included in every PC:
            </h3>
            <ul className="space-y-3">
              {valueStack.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/75">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(27,110,243,0.15)", color: "#60a5fa" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl text-sm text-white/50 italic"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <strong className="text-white/70 not-italic">Important:</strong> These are entry-level refurbished PCs. 
              Best for basic everyday use — not for heavy gaming or advanced video editing. 
              We&apos;ll always be honest with you about what each unit can do.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

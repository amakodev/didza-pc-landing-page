import Image from "next/image";
import config from "@/config";
import { whatsappUrl, messengerUrl } from "@/lib/utils";

export default function Footer() {
  const waUrl = whatsappUrl(config.whatsappNumber, config.packageMessages.general);
  const mesUrl = messengerUrl(config.facebookPageUsername);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/08 bg-[#050508] pt-12 pb-8"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src="/assets/DidzaPCs-logo.png"
              alt="DidzaPCs Logo"
              width={130}
              height={52}
              className="object-contain h-12 w-auto mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Affordable ready-to-use refurbished PCs in Cape Town from R999.
              Cleaned, tested, optimized and preinstalled for school, work, CVs and home use.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              PC Packages
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              {["Schoolwork PC", "Job Seeker PC", "Home Office PC", "Small Business PC", "Budget Gaming PC"].map((pkg) => (
                <li key={pkg}>
                  <a href="#packages" className="hover:text-white/80 transition-colors">{pkg}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(37,211,102,0.15)", color: "#25D366" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                WhatsApp Us
              </a>
              <a
                href={mesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,132,255,0.15)", color: "#0084ff" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.479 8.683V24l4.103-2.255A12.6 12.6 0 0012 22.222c6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
                  </svg>
                </span>
                Facebook Messenger
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(27,110,243,0.12)", color: "#60a5fa" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </span>
                Cape Town, South Africa
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/06 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} {config.businessName}. Cape Town, South Africa. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center text-xs text-white/25">
            {["#DidzaPCs", "#CapeTownPCs", "#RefurbishedPCs", "#AffordablePCs", "#ReadyToUsePCs"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

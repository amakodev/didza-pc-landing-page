import config from "@/config";
import { whatsappUrl, messengerUrl } from "@/lib/utils";

export default function FinalCTA() {
  const waUrl = whatsappUrl(config.whatsappNumber, config.packageMessages.general);
  const mesUrl = messengerUrl(config.facebookPageUsername);

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      aria-label="Final call to action"
      style={{ background: "#050508" }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(27,110,243,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          Limited Starter Stock — First Cape Town Batch
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
          Ready to get your{" "}
          <span className="text-gradient">affordable PC</span>?
        </h2>

        <p className="text-white/65 text-lg mb-4 leading-relaxed max-w-xl mx-auto">
          Don&apos;t buy a random second-hand PC. Get one that&apos;s cleaned, tested,
          optimized, preinstalled and ready to use from day one.
        </p>

        <p className="text-white/80 font-semibold text-base mb-8">
          Starter PCs from{" "}
          <span className="text-gradient text-xl">{config.startingPrice}</span>{" "}
          while stock lasts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4 w-full sm:w-auto justify-center text-lg font-bold"
          >
            <WhatsAppIcon />
            Message &ldquo;PC&rdquo; on WhatsApp
          </a>
          <a
            href={mesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-messenger text-base px-8 py-4 w-full sm:w-auto justify-center"
          >
            <MessengerIcon />
            Message on Facebook
          </a>
        </div>

        <p className="text-white/35 text-sm">
          No pressure. No confusing specs. Just honest guidance from a local Cape Town seller.
        </p>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.479 8.683V24l4.103-2.255A12.6 12.6 0 0012 22.222c6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
    </svg>
  );
}

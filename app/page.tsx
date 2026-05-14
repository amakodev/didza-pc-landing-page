import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import WhyDidza from "@/components/WhyDidza";
import PackageCards from "@/components/PackageCards";
import PricingAnchor from "@/components/PricingAnchor";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingCTABar from "@/components/FloatingCTABar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainSection />
        <WhyDidza />
        <PackageCards />
        <PricingAnchor />
        <TrustBar />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTABar />
    </>
  );
}

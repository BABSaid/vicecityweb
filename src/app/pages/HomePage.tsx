import { Header } from "@/app/components/Header";
import { HeroCenter } from "@/app/components/HeroCenter";
import { WhyViceCity } from "@/app/components/WhyViceCity";
import { SocialSection } from "@/app/components/SocialSection";
import { Footer } from "@/app/components/Footer";
import { CGUNotification } from "@/app/components/CGUNotification";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      {/* Background City Silhouette */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b4e] via-[#1a0a2e] to-[#0a0015]"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://i.imgur.com/vUTMHhU.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroCenter />
        <WhyViceCity />
        <SocialSection />
        <Footer />
      </div>

      {/* CGU Notification */}
      <CGUNotification />
    </div>
  );
}

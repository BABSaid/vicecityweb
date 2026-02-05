import { BookOpen, MessageCircle, Server } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

// Images pour les activités légales
const legalImages = [
  "https://i.imgur.com/EaJGvvo.png",
  "https://i.imgur.com/tdWftxW.png",
  "https://i.imgur.com/QzlO0BN.png",
  "https://i.imgur.com/BErs1yd.png"
];

// Images pour les activités illégales
const illegalImages = [
  "https://i.imgur.com/6Fnysgu.png",
  "https://i.imgur.com/99Ph886.png",
  "https://i.imgur.com/zsvCMQS.png",
  "https://i.imgur.com/tCBJOMd.png"
];

export default function ReglementPage() {
  return (
    <div className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      {/* Background with city silhouette */}
      <div className="fixed inset-0 z-0">
        {/* Gradient violet */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900"></div>
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://i.imgur.com/vUTMHhU.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
        </div>

        {/* City silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black/80 to-transparent">
          {/* Simple city skyline effect */}
          <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
            <div className="absolute bottom-0 left-0 w-32 h-40 bg-black"></div>
            <div className="absolute bottom-0 left-32 w-24 h-56 bg-black"></div>
            <div className="absolute bottom-0 left-56 w-28 h-48 bg-black"></div>
            <div className="absolute bottom-0 left-96 w-36 h-64 bg-black"></div>
            <div className="absolute bottom-0 right-96 w-32 h-52 bg-black"></div>
            <div className="absolute bottom-0 right-64 w-28 h-44 bg-black"></div>
            <div className="absolute bottom-0 right-32 w-24 h-60 bg-black"></div>
            <div className="absolute bottom-0 right-0 w-32 h-36 bg-black"></div>
          </div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/10 rotate-45 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-purple-500/10 rotate-45 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="px-4 py-12 max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-600/40 border border-purple-400/60 rounded-lg mb-4">
              <BookOpen className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200 font-bold text-sm uppercase tracking-wider">RÈGLEMENT</span>
            </div>
          </div>

          {/* Two cards: LÉGAL and ILLÉGAL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* LÉGAL Card */}
            <RuleCard 
              title="LÉGAL" 
              images={legalImages}
              titleColor="text-white"
              link="#legal"
            />

            {/* ILLÉGAL Card */}
            <RuleCard 
              title="ILLÉGAL" 
              images={illegalImages}
              titleColor="text-white"
              link="#illegal"
            />
          </div>

          {/* Two new cards: DISCORD and SERVEUR */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DISCORD Card */}
            <SimpleRuleCard 
              title="DISCORD" 
              iconImage="https://i.imgur.com/9ByvmAK.png"
              description="Règles de communication Discord"
              titleColor="text-indigo-400"
              link="#discord"
              gradientFrom="from-indigo-600"
              gradientTo="to-purple-600"
            />

            {/* SERVEUR Card */}
            <SimpleRuleCard 
              title="SERVEUR" 
              iconImage="https://i.imgur.com/opbYrBW.png"
              description="Règles générales du serveur"
              titleColor="text-cyan-400"
              link="#serveur"
              gradientFrom="from-cyan-600"
              gradientTo="to-blue-600"
            />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

interface RuleCardProps {
  title: string;
  images: string[];
  titleColor: string;
  link: string;
}

function RuleCard({ title, images, titleColor, link }: RuleCardProps) {
  return (
    <a 
      href={link}
      className="relative group block cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      {/* Main card container */}
      <div 
        className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-600/30 hover:border-purple-500/70 transition-all duration-300"
        style={{
          boxShadow: '0 10px 50px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Title */}
        <div className="text-center mb-8">
          <h2 
            className={`text-5xl md:text-6xl font-black ${titleColor} italic uppercase tracking-wider group-hover:scale-110 transition-transform duration-300`}
            style={{
              textShadow: '0 0 30px rgba(168, 85, 247, 0.6)',
              transform: 'skewY(-2deg)'
            }}
          >
            {title}
          </h2>
        </div>

        {/* Polaroid photos grid */}
        <div className="relative h-96 mb-8">
          {/* Photo 1 - Top Left */}
          <div 
            className="absolute top-0 left-8 transform -rotate-6 transition-transform duration-300 z-10"
            style={{ width: '180px' }}
          >
            <div className="bg-white p-2 pb-8 rounded shadow-2xl">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <ImageWithFallback 
                  src={images[0]}
                  alt="Activity 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Photo 2 - Top Right */}
          <div 
            className="absolute top-4 right-8 transform rotate-6 transition-transform duration-300 z-20"
            style={{ width: '180px' }}
          >
            <div className="bg-white p-2 pb-8 rounded shadow-2xl">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <ImageWithFallback 
                  src={images[1]}
                  alt="Activity 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Photo 3 - Bottom Left */}
          <div 
            className="absolute bottom-4 left-12 transform rotate-3 transition-transform duration-300 z-30"
            style={{ width: '180px' }}
          >
            <div className="bg-white p-2 pb-8 rounded shadow-2xl">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <ImageWithFallback 
                  src={images[2]}
                  alt="Activity 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Photo 4 - Bottom Right */}
          <div 
            className="absolute bottom-0 right-12 transform -rotate-12 transition-transform duration-300 z-40"
            style={{ width: '180px' }}
          >
            <div className="bg-white p-2 pb-8 rounded shadow-2xl">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <ImageWithFallback 
                  src={images[3]}
                  alt="Activity 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo Flashback FA style at bottom */}
        <div className="text-center pt-4">
          <div className="inline-block">
            <ImageWithFallback 
              src="https://i.imgur.com/KMmRIin.png"
              alt="Logo"
              className="w-16 h-16 object-contain opacity-60"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

interface SimpleRuleCardProps {
  title: string;
  iconImage: string;
  description: string;
  titleColor: string;
  link: string;
  gradientFrom: string;
  gradientTo: string;
}

function SimpleRuleCard({ title, iconImage, description, titleColor, link, gradientFrom, gradientTo }: SimpleRuleCardProps) {
  return (
    <a 
      href={link}
      className="relative group block cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      {/* Main card container */}
      <div 
        className="bg-black/80 backdrop-blur-sm rounded-2xl p-12 border-2 border-purple-600/30 hover:border-purple-500/70 transition-all duration-300 relative overflow-hidden"
        style={{
          boxShadow: '0 10px 50px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Gradient background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`flex justify-center mb-8 ${titleColor} group-hover:scale-110 transition-transform duration-300`}>
            <ImageWithFallback 
              src={iconImage}
              alt="Icon"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 
              className={`text-5xl md:text-6xl font-black ${titleColor} italic uppercase tracking-wider group-hover:scale-110 transition-transform duration-300`}
              style={{
                textShadow: '0 0 30px rgba(168, 85, 247, 0.6)',
                transform: 'skewY(-2deg)'
              }}
            >
              {title}
            </h2>
          </div>

          {/* Description */}
          <div className="text-center">
            <p 
              className="text-xl text-gray-300 font-semibold"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {description}
            </p>
          </div>

          {/* Logo at bottom */}
          <div className="text-center pt-12">
            <div className="inline-block">
              <ImageWithFallback 
                src="https://i.imgur.com/KMmRIin.png"
                alt="Logo"
                className="w-16 h-16 object-contain opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
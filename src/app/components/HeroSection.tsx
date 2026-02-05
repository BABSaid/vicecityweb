import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Palmtree, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1616824342645-8089e24058be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWFtaSUyMHZpY2UlMjBuZW9uJTIwY2l0eSUyMG5pZ2h0fGVufDF8fHx8MTc2OTkyNzYyNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Miami Vice City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-pink-900/60 to-[#0a0015]/90"></div>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
               backgroundSize: '50px 50px',
               animation: 'gridMove 20s linear infinite'
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo/Title */}
        <div className="mb-8 flex items-center justify-center gap-3 animate-pulse">
          <Palmtree className="w-12 h-12 text-cyan-400" />
          <h1 className="text-5xl md:text-7xl font-black tracking-wider"
              style={{
                textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff',
                background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
            VICECITY RP
          </h1>
          <Palmtree className="w-12 h-12 text-pink-400" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full border-2 border-cyan-400/50 bg-cyan-950/30 backdrop-blur-sm">
          <Zap className="w-5 h-5 text-yellow-300" />
          <span className="text-cyan-300 font-bold tracking-wide">NEXT-GEN US</span>
        </div>

        {/* Main Tagline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white"
            style={{
              textShadow: '0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)'
            }}>
          Vivez l'expérience RP ultime à Vice City
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Plongez dans l'univers électrisant de Vice City. Un serveur roleplay nouvelle génération 
          qui vous transporte dans l'atmosphère unique des années 80.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-10 py-4 text-xl font-bold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
            boxShadow: '0 0 20px #ff00ff, 0 0 40px #00ffff'
          }}>
          <span className="relative z-10">REJOINDRE MAINTENANT</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Decorative Lines */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-500"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500"></div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0015] to-transparent z-5"></div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }
      `}</style>
    </section>
  );
}

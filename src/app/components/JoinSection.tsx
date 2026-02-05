import { useState } from "react";
import { Copy, Check, Server, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function JoinSection() {
  const [copiedIP, setCopiedIP] = useState(false);
  const serverIP = "51.210.246.253:2000";
  const discordLink = "https://discord.gg/9wYw8GAQ7y";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopiedIP(true);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  return (
    <section id="join-section" className="py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1561505017-267b57e08a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwdHJlZXMlMjBzdW5zZXQlMjB0cm9waWNhbHxlbnwxfHx8fDE3Njk5Mjc2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tropical Sunset"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0015] via-[#1a0a2e]/80 to-[#0a0015]/50"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4"
              style={{
                background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
            REJOIGNEZ L'AVENTURE
          </h2>
          <p className="text-xl text-gray-300">
            Connectez-vous dès maintenant et commencez votre histoire à Vice City
          </p>
        </div>

        {/* Join Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Server IP Card */}
          <div className="relative p-8 rounded-2xl backdrop-blur-md border-2 border-pink-500/30 hover:border-pink-400/60 transition-all duration-300"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(139, 0, 139, 0.1))',
                 boxShadow: '0 8px 32px rgba(255, 0, 255, 0.2)'
               }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-pink-500/20">
                <Server className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">IP du Serveur</h3>
                <p className="text-sm text-gray-400">Lancez FiveM et connectez-vous</p>
              </div>
            </div>

            <div className="relative">
              <div className="p-4 rounded-lg bg-black/40 border border-pink-500/30 mb-4">
                <code className="text-pink-300 text-lg font-mono">{serverIP}</code>
              </div>

              <button
                onClick={copyIP}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: copiedIP 
                    ? 'linear-gradient(45deg, #10b981, #059669)' 
                    : 'linear-gradient(45deg, #ff00ff, #ff1493)',
                  boxShadow: copiedIP
                    ? '0 4px 20px rgba(16, 185, 129, 0.4)'
                    : '0 4px 20px rgba(255, 0, 255, 0.4)'
                }}>
                {copiedIP ? (
                  <>
                    <Check className="w-5 h-5" />
                    IP Copiée !
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copier l'IP
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Discord Card */}
          <div className="relative p-8 rounded-2xl backdrop-blur-md border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
               style={{
                 background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 139, 139, 0.1))',
                 boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)'
               }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-cyan-500/20">
                <MessageCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Discord</h3>
                <p className="text-sm text-gray-400">Rejoignez notre communauté</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Retrouvez toutes les informations, les annonces et discutez avec la communauté sur notre serveur Discord officiel.
            </p>

            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #00bfff)',
                boxShadow: '0 4px 20px rgba(0, 255, 255, 0.4)'
              }}>
              Rejoindre Discord
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-gray-300">Serveur en ligne • Prêt à jouer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

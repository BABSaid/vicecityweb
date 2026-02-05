import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function HeroCenter() {
  const discordLink = "https://discord.gg/9wYw8GAQ7y";

  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Discord Join Image Button */}
        <a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-all duration-300 transform hover:scale-105"
          style={{
            filter: 'drop-shadow(0 10px 40px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.2))'
          }}
        >
          <ImageWithFallback 
            src="https://i.imgur.com/9ByvmAK.png" 
            alt="Rejoindre Discord"
            className="max-w-xs w-full h-auto mx-auto"
          />
        </a>

        {/* Subtitle */}
        <p className="mt-8 text-gray-400 text-lg">
          Rejoignez notre communauté Discord et vivez l'expérience RP ultime
        </p>

        {/* Free Access Badge */}
        <div className="mt-12">
          <span className="inline-block px-6 py-2 border-2 border-purple-500/50 rounded-full text-purple-300 font-bold uppercase tracking-widest text-sm">
            Free-Access
          </span>
        </div>
      </div>
    </section>
  );
}
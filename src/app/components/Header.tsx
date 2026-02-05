import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { HelpModal } from "@/app/components/HelpModal";

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "ACCUEIL", href: "#" },
  { label: "RÈGLEMENT", href: "#reglement" },
  { label: "ENTREPRISES", href: "#entreprises" },
  { label: "CODE PÉNAL", href: "https://docs.google.com/document/d/1rc9v2DaD1qFQnOwY3g0WyYChcB2g-qWhfdFGmZO8OTE/edit?usp=sharing", external: true },
  { label: "NOS STREAMERS", href: "#streamers" }
];

interface HeaderProps {
  showHelpButton?: boolean;
}

export function Header({ showHelpButton = false }: HeaderProps) {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  return (
    <>
      <header className="w-full py-4 px-8 border-b border-purple-600/30 bg-purple-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src="https://i.imgur.com/j1P4W4G.png" 
              alt="ViceCity Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-black text-white tracking-wider">VICECITY RP</h1>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-pink-400">EN LIGNE</span>
                <span className="text-gray-400">•</span>
                <span className="text-cyan-400">NEXT-GEN US</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-bold text-white/80 hover:text-pink-400 transition-colors duration-200 uppercase tracking-wide"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
              >
                {item.label}
              </a>
            ))}
            
            {/* Help Button - Only show on streamers page */}
            {showHelpButton && (
              <button
                onClick={() => setIsHelpModalOpen(true)}
                className="w-8 h-8 bg-purple-600/50 hover:bg-purple-500 border border-purple-400/50 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                title="Aide"
              >
                <HelpCircle className="w-5 h-5 text-white" />
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Help Modal */}
      <HelpModal 
        isOpen={isHelpModalOpen} 
        onClose={() => setIsHelpModalOpen(false)} 
      />
    </>
  );
}
import React, { useState } from 'react';
import { Sparkles, Zap, Layers, PenTool, Video, UserCircle } from 'lucide-react';
import { motion } from 'motion/react';

type Tier = 'pme' | 'corp';

interface PricingData {
  pme: string;
  corp: string;
}

interface ServiceProps {
  title: string;
  description: string;
  pricing: PricingData;
  unit: string;
  type: string;
  tier: Tier;
  color: 'cyan' | 'purple' | 'blue';
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, pricing, unit, type, tier, color }) => {
  const colorClasses = {
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:text-cyan-300 bg-cyan-500/10',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:text-purple-300 bg-purple-500/10',
    blue: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:text-blue-300 bg-blue-500/10',
  };

  const [hoverBorder, hoverShadow, groupHoverText, bgGlow] = colorClasses[color].split(' ');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col justify-between p-5 md:p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl hover:bg-white/5 transition-all duration-500 overflow-hidden ${hoverBorder} ${hoverShadow}`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${bgGlow}`}></div>
      <div className="relative z-10">
        <h3 className={`text-base md:text-lg font-semibold text-white mb-2 leading-snug transition-colors ${groupHoverText}`}>{title}</h3>
        <p className="text-xs md:text-sm text-gray-400 font-light mb-6">{description}</p>
      </div>
      <div className="relative z-10 mt-auto pt-4 md:pt-6 border-t border-white/5">
        <div className="flex items-baseline gap-2 mb-2">
          <motion.span 
            key={tier}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            {pricing[tier]}
          </motion.span>
        </div>
        <div className="flex items-center justify-between text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">
          <span>{unit}</span>
          <span className="px-2 py-1 rounded-md bg-white/5 border border-white/5">{type}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [tier, setTier] = useState<Tier>('pme');

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e7eb] font-sans overflow-x-hidden selection:bg-cyan-500/30">
      {/* Background Animated Tech Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-cyan-900/20 blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] rounded-full bg-purple-900/10 blur-[100px] md:blur-[150px] animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[60%] w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full bg-blue-900/10 blur-[80px] md:blur-[100px] animate-float"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwbC00MCA0MG0wLTQwbDQwIDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs md:text-sm font-medium tracking-wider text-cyan-100 uppercase">Génération de Contenu IA</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-500 tracking-tight mb-6 leading-tight">
            L'Avenir de la Création. <br className="hidden md:block" />
            <span className="text-3xl md:text-6xl text-white/80 font-light">Tarification Stratégique.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 font-light leading-relaxed px-2">
            Des solutions sur-mesure combinant technologies de pointe et créativité humaine. Positionnement premium, rentabilité maximale et valeur perçue inégalée.
          </p>
        </motion.header>

        {/* Pricing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div className="relative flex p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-md md:max-w-none md:w-auto">
            <button 
              onClick={() => setTier('pme')} 
              className={`relative z-10 flex-1 md:flex-none flex justify-center items-center gap-2 px-4 md:px-8 py-3.5 text-xs md:text-base font-semibold rounded-xl transition-all duration-500 ${tier === 'pme' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              <Zap className={`w-4 h-4 md:w-5 md:h-5 ${tier === 'pme' ? 'text-cyan-400' : ''}`} />
              Startups & PME
            </button>
            <button 
              onClick={() => setTier('corp')} 
              className={`relative z-10 flex-1 md:flex-none flex justify-center items-center gap-2 px-4 md:px-8 py-3.5 text-xs md:text-base font-semibold rounded-xl transition-all duration-500 ${tier === 'corp' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              <Layers className={`w-4 h-4 md:w-5 md:h-5 ${tier === 'corp' ? 'text-cyan-400' : ''}`} />
              Corporate
            </button>
            {/* Animated Highlight */}
            <div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-md rounded-xl transition-transform duration-500 ease-out shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              style={{ transform: tier === 'pme' ? 'translateX(0)' : 'translateX(100%)' }}
            ></div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-16 md:space-y-20">
          
          {/* Categorie 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0">
                <PenTool className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Ingénierie Textuelle & Scripts</h2>
                <p className="text-gray-400 text-xs md:text-sm mt-1">La fondation de toute production IA.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              <ServiceCard 
                title="Rédaction SEO Assistée"
                description="Génération textuelle, ingénierie sémantique, fact-checking et relecture humaine."
                pricing={{ pme: "1 500 - 2 500", corp: "3 000 - 5 000" }}
                unit="DZD / article"
                type="Unité / Forfait"
                tier={tier}
                color="cyan"
              />
              <ServiceCard 
                title="Pack Éditorial Mensuel"
                description="Calendrier stratégique, 10 articles SEO optimisés, 20 posts réseaux sociaux."
                pricing={{ pme: "25 000 - 35 000", corp: "45 000 - 70 000" }}
                unit="DZD / mois"
                type="Mensuel"
                tier={tier}
                color="cyan"
              />
              <ServiceCard 
                title="Architecture (Prompts)"
                description="Création de System Prompts pour automatiser et verrouiller le ton de marque."
                pricing={{ pme: "5 000 - 8 000", corp: "15 000 - 25 000" }}
                unit="DZD / système"
                type="Code unique"
                tier={tier}
                color="cyan"
              />
              <ServiceCard 
                title="Scénarisation Vidéo IA"
                description="Écriture avec découpage technique rigoureux optimisés pour la génération visuelle."
                pricing={{ pme: "5 000 - 10 000", corp: "15 000 - 30 000" }}
                unit="DZD / script"
                type="À l'unité"
                tier={tier}
                color="cyan"
              />
            </div>
          </motion.div>

          {/* Categorie 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0">
                <Video className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Production Vidéo</h2>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Formats percutants pour réseaux et campagnes.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <ServiceCard 
                title="Short Social Media"
                description="Vidéo verticale (15-60s), montage dynamique, avatars ou text-to-video basique."
                pricing={{ pme: "10 000 - 15 000", corp: "20 000 - 35 000" }}
                unit="DZD / vidéo"
                type="Unité"
                tier={tier}
                color="purple"
              />
              <ServiceCard 
                title="Publicité Premium"
                description="Spot 1-2 min, rendu photoréaliste, voix off clonée, sound design pro."
                pricing={{ pme: "35 000 - 60 000", corp: "80 000 - 150 000" }}
                unit="DZD / spot"
                type="Unité"
                tier={tier}
                color="purple"
              />
              <ServiceCard 
                title="Vidéo Hybride"
                description="Incrustation IA dans rushs réels, tracking 3D, VFX avancés."
                pricing={{ pme: "50 000 - 80 000", corp: "120 000 - 200 000+" }}
                unit="DZD / projet"
                type="Sur devis"
                tier={tier}
                color="purple"
              />
            </div>
          </motion.div>

          {/* Categorie 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0">
                <UserCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Avatars Persistants</h2>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Influenceurs virtuels et agents autonomes.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              <ServiceCard 
                title="Création d'Avatar 2D/3D"
                description="Modélisation, rigging et entraînement sur l'image de marque."
                pricing={{ pme: "40 000 - 60 000", corp: "100 000 - 150 000" }}
                unit="DZD / avatar"
                type="Setup initial"
                tier={tier}
                color="blue"
              />
              <ServiceCard 
                title="Animation Mensuelle"
                description="Génération de 4 à 8 vidéos par mois avec l'avatar créé."
                pricing={{ pme: "30 000 - 50 000", corp: "70 000 - 120 000" }}
                unit="DZD / mois"
                type="Abonnement"
                tier={tier}
                color="blue"
              />
              <ServiceCard 
                title="Agent Conversationnel"
                description="Chatbot IA personnalisé, entraîné sur vos données d'entreprise."
                pricing={{ pme: "20 000 - 40 000", corp: "80 000 - 200 000" }}
                unit="DZD / agent"
                type="Déploiement"
                tier={tier}
                color="blue"
              />
              <ServiceCard 
                title="Clone Vocal"
                description="Clonage de voix professionnel avec droits d'utilisation commerciaux."
                pricing={{ pme: "15 000 - 25 000", corp: "40 000 - 80 000" }}
                unit="DZD / voix"
                type="Licence"
                tier={tier}
                color="blue"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

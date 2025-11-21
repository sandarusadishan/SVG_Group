import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Company {
  name: string;
  url: string;
  logo: string;
  description: string;
  invertLogo?: boolean;
  accentColor?: string;
}

const companies: Company[] = [
  {
    name: "SoftVision IT Group (Pvt) Ltd",
    url: "https://svg.lk",
    logo: "https://svg.lk/assets/logo-CetAuJiQ.png",
    description: "Cutting-edge software solutions",
    accentColor: "#3B82F6"
  },
  {
    name: "Soft Vision Technologies (Pvt) Ltd",
    url: "https://busy.lk/",
    logo: "https://busy.lk/images/soft-vision-logo.png", // Local path or correct URL
    description: "Business Management Solutions",
    accentColor: "#10B981"
  },
  {
    name: "BusyERP",
    url: "https://www.busyerp.lk/",
    logo: "https://www.busyerp.lk/wp-content/uploads/2019/02/Busy-Logo-02.png", // Local path or correct URL
    description: "Cloud-based ERP Systems",
    accentColor: "#8B5CF6"
  },
  {
    name: "Skyb Overseas Consultants (Pvt) Ltd",
    url: "https://skyb.lk/",
    logo: "https://skyb.lk/logosky2.jpg", // Local path or correct URL
    description: "Next-gen cloud infrastructure",
    accentColor: "#F59E0B"
  },
];

const CompanyShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 3);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/public/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Enhanced overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-blue-900/40"></div>

      {/* Animated particles background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl mb-6 font-sans"
            animate={{
              // You can change the text size in the className above (e.g., text-4xl, md:text-6xl)
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            OUR COMPANIES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A family of innovative brands driving technological advancement across diverse industries.
          </motion.p>
        </motion.div>

        {/* Creative Cards Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="relative group"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Animated Background Orb */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: company.accentColor }}
                animate={{
                  scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Main Card */}
              <motion.a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-white/5 backdrop-blur-2xl border border-white/15 hover:border-white/40 rounded-3xl p-8 transition-all duration-500 overflow-hidden cursor-pointer h-full"
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{
                  background: `linear-gradient(135deg, ${company.accentColor}10, transparent 30%)`
                }}
              >
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 60px ${company.accentColor}30`,
                  }}
                />

                <div className="flex flex-col items-center text-center space-y-8 h-full relative z-10">
                  {/* Enhanced Logo Container */}
                  <motion.div
                    className={`relative w-28 h-28 rounded-2xl flex items-center justify-center p-6 shadow-2xl transition-all duration-500 bg-white group-hover:bg-gray-50`}
                    whileHover={{
                      rotateY: 180,
                      transition: { duration: 0.6 }
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Front Side - Logo */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center rounded-2xl"
                      style={{ 
                        backfaceVisibility: "hidden",
                        backgroundColor: imageErrors[index] ? company.accentColor : 'transparent'
                      }}
                    >
                      {!imageErrors[index] ? (
                        <img
                          src={company.logo}
                          alt={company.name}
                          loading="lazy"
                          className="max-h-16 max-w-full object-contain transition-all duration-300"
                          onError={() => handleImageError(index)}
                        />
                      ) : (
                        <div className="text-white font-bold text-xl">
                          {getInitials(company.name)}
                        </div>
                      )}
                    </motion.div>
                    
                    {/* Back Side - Color Reveal */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center rounded-2xl"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        backgroundColor: company.accentColor,
                      }}
                    >
                      <div className="text-white font-bold text-lg text-center leading-tight">
                        {company.name.split(' ')[0]}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow justify-between space-y-4">
                    <motion.h3
                      className="text-xl font-bold text-white leading-tight"
                      whileHover={{ 
                        scale: 1.05,
                        color: company.accentColor
                      }}
                    >
                      {company.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-white/80 text-base leading-relaxed flex-grow"
                      whileHover={{ scale: 1.02 }}
                    >
                      {company.description}
                    </motion.p>
                  </div>

                  {/* Enhanced CTA */}
                  <motion.div
                    className="mt-auto pt-6 border-t border-white/10 w-full"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center space-x-3 text-white font-semibold">
                      <span className="text-sm tracking-wider">Explore More</span>
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: company.accentColor }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full"
                        style={{ backgroundColor: company.accentColor }}
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full"
                        style={{ backgroundColor: company.accentColor }}
                      />
                    </>
                  )}
                </AnimatePresence>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 text-white/60">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <span className="text-sm font-light">Innovation Through Collaboration</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyShowcase;
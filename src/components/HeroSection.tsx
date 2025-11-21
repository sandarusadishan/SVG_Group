import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import SectionDivider from "./SectionDivider";
import { Starfield } from "./Starfield";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/public/background1.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Enhanced Starfield Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1.2} />
          <pointLight intensity={2} position={[0, 0, -10]} color="#00aaff" />
          <pointLight intensity={1.5} position={[-10, -5, -5]} color="#d946ef" />
          <pointLight intensity={1.5} position={[10, 5, -5]} color="#ff6b6b" />
          <Starfield
            color="#ffffff"
            size={0.008}
            speed={3}
            mouseXMultiplier={0.2}
            mouseYMultiplier={0.2}
          />
        </Canvas>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, `calc(${Math.random() * 100}vh - 100px)`],
              x: [null, `calc(${Math.random() * 100}vw - 100px)`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
          className="space-y-8"
        >
          {/* Logo with Enhanced Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="flex justify-center mb-8"
            whileHover={{
              scale: 1.1,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative">
              <motion.img
                src="https://svg.lk/assets/logo-CetAuJiQ.png"
                alt="SoftVision Group"
                className="h-28 md:h-36 lg:h-44 object-contain drop-shadow-2xl"
              />
              {/* Logo Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* Title with Modern Font */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none"
          >
            <motion.span
              className=" text-slate-400 text-8xl font-black drop-shadow-2xl  inline-block  px-2 py-1 rounded-md"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              SoftVision Group
            </motion.span>
          </motion.h1>

          {/* Group Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="inline-block"
          >
           
          </motion.div>

          {/* Subtitle with Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 tracking-wide mx-auto whitespace-nowrap font-mono"
            >
              Pioneering Digital Innovation
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Transforming businesses through cutting-edge software solutions, 
            cloud infrastructure, and visionary technology partnerships.
          </motion.p>

          {/* Enhanced Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2.2, type: "spring" }}
            className="relative h-1 mx-auto max-w-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-white blur-sm"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
         
            
            
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <a
        href="#company-showcase"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group"
        aria-label="Scroll down"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.span
            className="text-white/60 text-sm font-light tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to Explore
          </motion.span>
          
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex justify-center items-start p-1 group-hover:border-cyan-400 transition-colors duration-300"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full"
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </a>

      <SectionDivider />
    </section>
  );
};

export default HeroSection;
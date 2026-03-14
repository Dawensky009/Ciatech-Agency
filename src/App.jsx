import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Zap, BarChart, Users, ArrowRight, Github, Twitter, 
  Linkedin, Mail, Check, MessageSquare, Globe, Cpu, ChevronDown,
  ExternalLink, Code, Layout, ArrowUp, Plus, Minus, MoveRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.left = `${e.clientX}px`;
        outlineRef.current.style.top = `${e.clientY}px`;
        outlineRef.current.style.transform = `translate(-50%, -50%)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" style={{ transform: 'translate(-50%, -50%)' }} />
      <div ref={outlineRef} className="cursor-outline hidden lg:block" />
    </>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-navy-950/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          CIATECH<span className="text-gold-500">_</span>
        </motion.div>
        
        <div className="hidden lg:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
          {['Expertise', 'Work', 'Pricing', 'Agency'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold-500 transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
          Start Project
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden pt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Bold Typography */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter text-white mb-8">
              DIGITAL <br />
              <span className="text-gold-500 italic">ARCHITECTS</span><br />
              OF HAITI.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10 border-l-2 border-gold-500/30 pl-6">
              Nou pa jis bati sit web. Nou bati ekosistèm nimerik k ap pwoteje ak grandi biznis ou an 2026. Microsoft Precision. Kind Man Soul.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-gold-500 text-black font-black py-5 px-10 rounded-full flex items-center group overflow-hidden relative">
                <span className="relative z-10">PRAN YON KONTAK</span>
                <MoveRight className="ml-2 group-hover:translate-x-2 transition-transform relative z-10" />
                <motion.div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></motion.div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Immersive Visuals */}
        <div className="lg:col-span-5 relative h-[500px] md:h-[700px]">
          <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
            <div className="w-full h-full rounded-[40px] overflow-hidden border border-white/5 rotate-3 scale-110">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                className="w-full h-full object-cover opacity-60"
                alt="Architecture"
              />
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 glass-card p-8 rounded-3xl w-72 z-20"
          >
            <div className="text-gold-500 font-black text-4xl mb-2">99.9%</div>
            <div className="text-white text-xs uppercase tracking-widest font-bold">System Reliability</div>
            <div className="mt-4 h-[1px] bg-white/10 w-full"></div>
            <div className="mt-4 flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-950 bg-gray-800 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-navy-950 bg-gold-500 flex items-center justify-center text-[8px] font-bold text-black">+24k</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] -mr-96 -mt-96 rounded-full"></div>
    </section>
  );
};

const Marquee = () => (
  <div className="py-20 border-y border-white/5 bg-navy-950 overflow-hidden whitespace-nowrap">
    <div className="animate-marquee">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-7xl md:text-9xl font-black text-transparent stroke-white stroke-1 opacity-10 mx-10 uppercase tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
          Ciatech Agency • Strategy • Code • Design •
        </span>
      ))}
    </div>
  </div>
);

const BentoExpertise = () => {
  const items = [
    { size: 'col-span-1 lg:col-span-8', title: 'Custom SaaS Architecture', desc: 'Soti nan baz done Microsoft pou rive nan UI entèlijan.', icon: <Cpu />, color: 'bg-gold-500/10' },
    { size: 'col-span-1 lg:col-span-4', title: 'Cyber Security', desc: 'Pwoteksyon elit.', icon: <Shield />, color: 'bg-white/5' },
    { size: 'col-span-1 lg:col-span-4', title: 'AI Automation', desc: 'Rann biznis ou pi entèlijan.', icon: <Zap />, color: 'bg-white/5' },
    { size: 'col-span-1 lg:col-span-8', title: 'Kind Man Strategy', desc: 'Nou pa jis kode, nou konprann valè imen ak biznis.', icon: <Users />, color: 'bg-white/5' },
  ];

  return (
    <section id="expertise" className="py-32 bg-navy-950 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Metriz Nou</h2>
          <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">Done, Sekirite <br /> & Elegans.</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`${item.size} ${item.color} border border-white/5 rounded-[40px] p-12 flex flex-col justify-between group cursor-pointer overflow-hidden relative`}
            >
              <div className="text-gold-500 transform group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(item.icon, { size: 48 })}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 font-light">{item.desc}</p>
              </div>
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={32} className="-rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => (
  <section id="work" className="py-32 bg-navy-950 border-t border-white/5">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">Pwojè ki fè <br /> diferans.</h3>
        <button className="text-[10px] font-black uppercase tracking-widest text-gold-500 flex items-center hover:translate-x-2 transition-transform">
          Gade tout travay nou yo <MoveRight className="ml-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {[1, 2].map((i) => (
          <motion.div key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] rounded-[48px] overflow-hidden mb-8 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
               <img 
                 src={i === 1 ? "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 alt="Work"
               />
            </div>
            <div className="flex justify-between items-start px-4">
               <div>
                 <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-2 block">0{i} / Development</span>
                 <h4 className="text-3xl font-bold text-white group-hover:text-gold-500 transition-colors">{i === 1 ? 'E-Commerce Engine' : 'Financial Dashboard'}</h4>
               </div>
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                 <ArrowRight className="-rotate-45" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy-950 pt-32 pb-10 border-t border-white/5 px-6 md:px-10">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        <div className="lg:col-span-6">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10">AN NOU <br /> KÒMANSE.</h2>
          <a href="mailto:hello@ciatech.agency" className="text-2xl md:text-4xl font-light text-gold-500 border-b border-gold-500/30 pb-4 hover:border-gold-500 transition-all">hello@ciatech.agency</a>
        </div>
        <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-6">Navigasyon</h5>
            <ul className="space-y-4 text-white text-sm font-bold">
              <li><a href="#" className="hover:text-gold-500">Mache</a></li>
              <li><a href="#" className="hover:text-gold-500">Ekip</a></li>
              <li><a href="#" className="hover:text-gold-500">Vizyon</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-6">Sosyal</h5>
            <ul className="space-y-4 text-white text-sm font-bold">
              <li><a href="#" className="hover:text-gold-500">Instagram</a></li>
              <li><a href="#" className="hover:text-gold-500">Twitter</a></li>
              <li><a href="#" className="hover:text-gold-500">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-700 font-bold uppercase tracking-[0.3em]">
        <p>© 2026 CIATECH AGENCY — Port-au-Prince, HT</p>
        <p className="mt-4 md:mt-0 italic">Designed with Excellence by Daky_400$/day</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-navy-950 selection:bg-gold-500 selection:text-black cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <BentoExpertise />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Shield, Zap, BarChart, Users, ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-10 bg-transparent absolute w-full z-10">
    <div className="text-2xl font-bold tracking-tighter text-white">CIATECH<span className="text-gold-500">.</span></div>
    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
      <a href="#services" className="hover:text-white transition-colors">Services</a>
      <a href="#team" className="hover:text-white transition-colors">Team</a>
      <a href="#contact" className="hover:text-white transition-colors">Contact</a>
    </div>
    <button className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-2 px-6 rounded-full transition-all text-sm uppercase">Launch Project</button>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-950">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        className="w-full h-full object-cover opacity-20" 
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950 to-navy-950"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none"
      >
        Elevating <span className="text-gold-500 italic">SaaS</span> Potential.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
      >
        CIATECH builds high-performance, scalable software solutions for the next generation of digital giants. We turn complex data into intuitive experiences.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <button className="bg-white text-black font-bold py-4 px-10 rounded-full flex items-center group hover:bg-gold-500 transition-all">
          Explore Solutions <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </button>
        <button className="border border-white/20 hover:border-white/50 text-white font-bold py-4 px-10 rounded-full transition-all">
          View Portfolio
        </button>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <Zap size={32} />, title: "Custom SaaS", desc: "Bespoke software tailored to your specific business architecture." },
    { icon: <Shield size={32} />, title: "Cyber Security", desc: "Advanced protection layers for your most critical data assets." },
    { icon: <BarChart size={32} />, title: "Data Analytics", desc: "Turn raw data into actionable insights with AI-driven analysis." },
    { icon: <Users size={32} />, title: "Product Design", desc: "Intuitive UI/UX that prioritizes user retention and delight." }
  ];

  return (
    <section id="services" className="py-24 px-10 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4">What we do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">Elite solutions for ambitious startups.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-all rounded-3xl group">
              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform inline-block">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{s.title}</h4>
              <p className="text-gray-400 font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Dawensky Thermildort", role: "Founder & Architect", img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Marcus Vane", role: "CTO", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Elena Rossi", role: "Head of Design", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "John Smith", role: "Security Lead", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  return (
    <section id="team" className="py-24 px-10 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4">The Staff</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">The Minds Behind CIATECH.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[3/4]">
              <img src={m.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={m.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white font-bold text-xl mb-1">{m.name}</p>
                <p className="text-gold-500 text-sm font-medium">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-10 bg-navy-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-10 md:mb-0">
        <div className="text-3xl font-bold tracking-tighter text-white mb-4">CIATECH<span className="text-gold-500">.</span></div>
        <p className="text-gray-500 max-w-sm">
          Redefining the digital landscape through elite software engineering and Kind Man principles.
        </p>
      </div>
      
      <div className="flex space-x-6 text-gray-400">
        <a href="#" className="hover:text-gold-500 transition-colors"><Twitter size={24} /></a>
        <a href="#" className="hover:text-gold-500 transition-colors"><Linkedin size={24} /></a>
        <a href="#" className="hover:text-gold-500 transition-colors"><Github size={24} /></a>
        <a href="#" className="hover:text-gold-500 transition-colors"><Mail size={24} /></a>
      </div>
    </div>
    <div className="mt-20 text-center text-gray-600 text-xs tracking-widest uppercase">
      © 2026 CIATECH Agency. All Rights Reserved. Built with Daky_400$/day.
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { 
  Shield, Zap, BarChart, Users, ArrowRight, Github, Twitter, 
  Linkedin, Mail, Check, MessageSquare, Globe, Cpu, ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-6 md:px-10 bg-transparent absolute w-full z-50">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-2xl font-bold tracking-tighter text-white"
    >
      CIATECH<span className="text-gold-500">.</span>
    </motion.div>
    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
      {['services', 'pricing', 'team', 'faq', 'contact'].map((item) => (
        <a key={item} href={`#${item}`} className="hover:text-white transition-colors">{item}</a>
      ))}
    </div>
    <motion.button 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-2 px-6 rounded-full transition-all text-sm uppercase"
    >
      Get Started
    </motion.button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        className="w-full h-full object-cover opacity-20" 
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950 to-navy-950"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
          Next Gen <span className="text-gold-500 italic">SaaS</span> <br /> Architecture.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          CIATECH engineers high-performance digital ecosystems. We combine Microsoft-certified precision with cutting-edge design to scale your vision.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black font-bold py-4 px-10 rounded-full flex items-center group hover:bg-gold-500 transition-all">
            Start Building <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="border border-white/20 hover:border-white/50 text-white font-bold py-4 px-10 rounded-full transition-all bg-white/5 backdrop-blur-sm">
            Watch Demo
          </button>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
    >
      <ChevronDown size={32} />
    </motion.div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <Zap size={32} />, title: "Custom SaaS", desc: "Bespoke software tailored to your specific business architecture." },
    { icon: <Shield size={32} />, title: "Cyber Security", desc: "Advanced protection layers for your most critical data assets." },
    { icon: <BarChart size={32} />, title: "Data Analytics", desc: "Turn raw data into actionable insights with AI-driven analysis." },
    { icon: <Cpu size={32} />, title: "AI Integration", desc: "Embed intelligent automation into your existing workflows." }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4">Core Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">Elite solutions for ambitious ventures.</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-all rounded-3xl group cursor-default"
            >
              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform inline-block">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{s.title}</h4>
              <p className="text-gray-400 font-light text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "999", features: ["Single Platform", "Basic Analytics", "Community Support", "Standard Security"] },
    { name: "Professional", price: "2499", features: ["Multi-Platform", "Advanced AI Insights", "24/7 Priority Support", "Enhanced Security"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Full Ecosystem", "Custom AI Models", "Dedicated Architect", "Military-Grade Security"] }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-10 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4">Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Scale Without Limits.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl border ${p.popular ? 'border-gold-500 bg-gold-500/5' : 'border-white/5 bg-white/5'} flex flex-col`}
            >
              <h4 className="text-white text-xl font-bold mb-2">{p.name}</h4>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{p.price === 'Custom' ? p.price : `$${p.price}`}</span>
                {p.price !== 'Custom' && <span className="text-gray-500">/project</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center text-gray-400 text-sm">
                    <Check size={16} className="text-gold-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold transition-all ${p.popular ? 'bg-gold-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Choose {p.name}
              </button>
            </motion.div>
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
    <section id="team" className="py-24 px-6 md:px-10 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4">The Staff</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Minds behind the code.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              <img src={m.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={m.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-lg">{m.name}</p>
                <p className="text-gold-500 text-xs font-medium uppercase tracking-wider">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How long does a typical SaaS build take?", a: "Depending on complexity, a standard build takes 4-8 weeks from architecture to deployment." },
    { q: "Do you offer post-launch support?", a: "Yes, we provide 24/7 technical maintenance and iterative updates for all our enterprise clients." },
    { q: "Can you integrate AI into my existing app?", a: "Absolutely. We specialize in retrofitting intelligent automation into legacy systems." }
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-10 bg-navy-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4 text-center">FAQ</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Common Questions.</h3>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group glass p-6 rounded-2xl border border-white/5 cursor-pointer">
              <summary className="flex justify-between items-center text-white font-bold list-none">
                {f.q} <ChevronDown className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 px-6 md:px-10 bg-navy-950">
    <div className="max-w-7xl mx-auto glass rounded-[40px] p-8 md:p-20 border border-white/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
      <div className="relative z-10 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4">Contact</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">Let's build <br /> the future.</h3>
          <p className="text-gray-400 mb-10 text-lg">Have a project in mind? Our team of experts is ready to transform your ideas into reality.</p>
          <div className="space-y-6">
            <div className="flex items-center text-white group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-gold-500 group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              <span>hello@ciatech.agency</span>
            </div>
            <div className="flex items-center text-white group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-gold-500 group-hover:text-black transition-all">
                <Globe size={20} />
              </div>
              <span>Port-au-Prince, Haiti</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/5">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="bg-navy-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold-500 outline-none" />
              <input type="email" placeholder="Email Address" className="bg-navy-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold-500 outline-none" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-navy-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold-500 outline-none" />
            <textarea placeholder="Your Message" rows="4" className="w-full bg-navy-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold-500 outline-none"></textarea>
            <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gold-500 transition-all uppercase tracking-widest text-sm">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 md:px-10 bg-navy-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20">
        <div className="mb-12 md:mb-0">
          <div className="text-3xl font-bold tracking-tighter text-white mb-6">CIATECH<span className="text-gold-500">.</span></div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Redefining the digital landscape through elite software engineering and Kind Man principles. Microsoft Certified Precision.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h5 className="text-white font-bold mb-6">Navigation</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-gold-500 transition-colors">Pricing</a></li>
              <li><a href="#team" className="hover:text-gold-500 transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Terms</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-white font-bold mb-6">Social</h5>
            <div className="flex space-x-4 text-gray-500">
              <a href="#" className="hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 text-center text-gray-600 text-[10px] tracking-[0.2em] uppercase">
        © 2026 CIATECH Agency. Designed with Excellence by Daky_400$/day.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-navy-950 selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


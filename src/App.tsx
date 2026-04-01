/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MessageSquare,
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter,
  Stethoscope,
  ShieldCheck,
  Users,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing to remove plaque and tartar, ensuring healthy gums and a bright smile.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Root Canal Treatment",
    description: "Expert endodontic care to save damaged teeth and eliminate pain with precision and comfort.",
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Dental Implants",
    description: "Permanent and natural-looking tooth replacements to restore your smile's function and aesthetics.",
    icon: <Award className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Tooth Extraction",
    description: "Safe and painless removal of problematic teeth, including wisdom teeth, using modern techniques.",
    icon: <Users className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Teeth Whitening",
    description: "Advanced whitening treatments to brighten your teeth by several shades in a single visit.",
    icon: <Star className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Braces & Aligners",
    description: "Orthodontic solutions including traditional braces and clear aligners for perfectly straight teeth.",
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aadil Hussain",
    rating: 5,
    text: "Dr. Shakil is very professional. I had a root canal treatment and it was completely painless. Highly recommended!",
    date: "2 months ago"
  },
  {
    name: "Mehak Jan",
    rating: 5,
    text: "Cleanest clinic in Magam. The staff is very friendly and the doctor explains everything clearly.",
    date: "1 month ago"
  },
  {
    name: "Sajad Ahmad",
    rating: 5,
    text: "Best dental implants. I can eat comfortably now. Thank you Dr. Shakil!",
    date: "3 weeks ago"
  },
  {
    name: "Irfan Dar",
    rating: 4,
    text: "Great experience for teeth whitening. The results were immediate. Very satisfied.",
    date: "4 months ago"
  }
];

const GALLERY_IMAGES = [
  "https://picsum.photos/seed/dental1/800/600",
  "https://picsum.photos/seed/dental2/800/600",
  "https://picsum.photos/seed/dental3/800/600",
  "https://picsum.photos/seed/dental4/800/600",
  "https://picsum.photos/seed/dental5/800/600",
  "https://picsum.photos/seed/dental6/800/600"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md md:bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[10000]">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)}
              className="flex items-center cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-blue-600' : 'text-blue-700'}`}>Dr. Shakil's Dental Care</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 cursor-pointer"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              onPointerDown={(e) => {
                // Prevent focus issues on some mobile browsers
                e.stopPropagation();
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none transition-colors cursor-pointer relative z-[10001] w-12 h-12"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[9998] overflow-y-auto pt-20">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setIsOpen(false);
                  const id = link.href.replace('#', '');
                  const element = document.getElementById(id);
                  if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-full text-left text-slate-800 hover:text-blue-600 hover:bg-blue-50 block px-6 py-5 rounded-2xl text-xl font-semibold transition-all cursor-pointer border-b border-slate-100 last:border-0"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  const element = document.getElementById('appointment');
                  if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-full text-center bg-blue-600 text-white block px-6 py-6 rounded-2xl text-xl font-bold shadow-xl active:scale-95 transition-transform cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
            
            <div className="pt-12 border-t border-slate-100">
              <p className="text-slate-500 text-sm mb-4 font-medium uppercase tracking-wider">Contact Us</p>
              <div className="space-y-4">
                <a href="tel:+919858737371" className="flex items-center text-slate-700 font-medium text-lg">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  +91 98587 37371
                </a>
                <a href="https://wa.me/919858737371" className="flex items-center text-slate-700 font-medium text-lg">
                  <MessageSquare className="w-5 h-5 mr-3 text-green-600" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden medical-gradient scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
              Expert Dental Care in Magam
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Your Smile, <br />
              <span className="text-blue-600 text-glow">Our Priority</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Experience world-class dental treatments with Dr. Shakil. We combine expertise, 
              technology, and care to give you the healthy, beautiful smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919858737371?text=Hello Doctor, I want to book an appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
              <a
                href="tel:+919858737371"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Patient"
                    className="w-12 h-12 rounded-full border-4 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-500 font-medium">Trusted by 2000+ Patients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Dental Clinic" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-400/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Experience</p>
                <p className="text-lg font-bold text-slate-900">10+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">About the Doctor</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Meet Dr. Shakil Ahmad</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Dr. Shakil is a highly experienced dental surgeon dedicated to providing 
              comprehensive dental care. With over a decade of practice, he has helped 
              thousands of patients achieve their dream smiles.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Specialist in Root Canal & Implants",
                "Patient-First Approach",
                "State-of-the-art Technology",
                "Hygienic & Modern Clinic Environment"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="italic text-slate-600">
                "Our mission is to provide high-quality dental care that is accessible 
                and affordable for everyone in Magam and surrounding areas."
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Shakil" 
                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">2k+</p>
                <p className="text-sm opacity-80">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Our Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Dental Solutions</h3>
          <p className="text-slate-600 text-lg">
            We offer a wide range of dental services using the latest technology 
            to ensure the best results for our patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <a href="#appointment" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Doctor, I want to book an appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919858737371?text=${text}`, '_blank');
  };

  return (
    <section id="appointment" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Visit Today</h2>
              <p className="text-blue-100 text-lg mb-10">
                Take the first step towards a healthier smile. Fill out the form 
                and we'll confirm your appointment via WhatsApp.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Call for Emergency</p>
                    <p className="text-xl font-bold">+91 98587 37371</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Working Hours</p>
                    <p className="text-xl font-bold">Mon - Sat: 10AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 lg:p-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Select Service</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Choose a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time</label>
                  <input
                    type="time"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-32 resize-none"
                    placeholder="Tell us about your dental concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">What Our Patients Say</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Gallery</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Inside Our Clinic</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg aspect-square"
            >
              <img src={img} alt="Clinic" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Our Location</h4>
                  <p className="text-slate-600">1st Floor, Madina Complex, Srinagar - Gulmarg Rd, Magam, Jammu and Kashmir 193401</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Phone Number</h4>
                  <p className="text-slate-600">+91 98587 37371</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">WhatsApp</h4>
                  <p className="text-slate-600">+91 98587 37371</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a href="tel:+919858737371" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">
                Call Now
              </a>
              <a href="https://wa.me/919858737371" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all">
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6133038686!2d74.5888!3d34.0888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCMDUnMTkuNyJOIDc0wrAzNScxOS43IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Dr. Shakil's Dental</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Providing expert dental care with a focus on patient comfort 
              and long-term oral health in Magam, Srinagar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#appointment" className="hover:text-blue-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Teeth Cleaning</li>
              <li>Root Canal Treatment</li>
              <li>Dental Implants</li>
              <li>Tooth Extraction</li>
              <li>Teeth Whitening</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>1st Floor, Madina Complex, Magam, Srinagar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>+91 98587 37371</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>WhatsApp: +91 98587 37371</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Dr. Shakil's Dental Care Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919858737371"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AppointmentForm />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

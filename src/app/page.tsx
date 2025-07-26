'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Set dynamic page title
    document.title = "VŠE PRO STAVBY.CZ - Váš Partner ve Stavebnictví";

    // Generate a simple SVG favicon with a gradient
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4F46E5" /><stop offset="100%" stop-color="#8B5CF6" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);

  }, []);

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#hero" className="text-3xl font-extrabold tracking-tight text-white">
            VŠE PRO STAVBY.CZ
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-indigo-200 transition duration-300">Služby</a></li>
              <li><a href="#projects" className="hover:text-indigo-200 transition duration-300">Projekty</a></li>
              <li><a href="#about" className="hover:text-indigo-200 transition duration-300">O nás</a></li>
              <li><a href="#contact" className="hover:text-indigo-200 transition duration-300">Kontakt</a></li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-indigo-700 py-4`}>
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#services" onClick={closeMenu} className="block text-white hover:text-indigo-200 transition duration-300 py-2">Služby</a></li>
            <li><a href="#projects" onClick={closeMenu} className="block text-white hover:text-indigo-200 transition duration-300 py-2">Projekty</a></li>
            <li><a href="#about" onClick={closeMenu} className="block text-white hover:text-indigo-200 transition duration-300 py-2">O nás</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block text-white hover:text-indigo-200 transition duration-300 py-2">Kontakt</a></li>
          </ul>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-gray-900 text-white flex items-center justify-center min-h-screen pt-20">
          <img
            src="/images/banner-homepage.jpg" // Placeholder, adjust if specific user image is known for hero
            alt="Moderní stavba"
            className="absolute inset-0 object-cover w-full h-full opacity-30"
          />
          <div className="relative z-10 text-center px-4 py-12 md:py-24 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Váš Spolehlivý Partner pro Všechny Typy Staveb
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-8 animate-fade-in-up delay-200">
              Od návrhu po realizaci, garantujeme kvalitu a spokojenost.
            </p>
            <a
              href="#contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 animate-fade-in-up delay-400"
            >
              Získat Nezávaznou Nabídku
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Naše Služby
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 border-t-4 border-indigo-500">
                <div className="text-indigo-600 mb-4">
                  <svg className="w-12 h-12 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 18h4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Výstavba a Rekonstrukce</h3>
                <p className="text-gray-600">Kompletní realizace nových staveb i citlivé rekonstrukce stávajících objektů s důrazem na detail.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 border-t-4 border-purple-500">
                <div className="text-purple-600 mb-4">
                  <svg className="w-12 h-12 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 5h18M3 9h18a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2v-7a2 2 0 012-2z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Projektová Dokumentace</h3>
                <p className="text-gray-600">Zpracování veškeré projektové dokumentace, od studií po realizační projekty.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 border-t-4 border-pink-500">
                <div className="text-pink-600 mb-4">
                  <svg className="w-12 h-12 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.282-8.455-3.545L5.205 9.205A12.004 12.004 0 0012 15c2.478 0 4.793-.726 6.793-1.972l.207-.123z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inženýrská Činnost</h3>
                <p className="text-gray-600">Komplexní zajištění inženýrských sítí a připojení pro váš stavební projekt.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 border-t-4 border-teal-500">
                <div className="text-teal-600 mb-4">
                  <svg className="w-12 h-12 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.597 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Poradenství a Konzultace</h3>
                <p className="text-gray-600">Odborné poradenství ve všech fázích stavebního procesu.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 border-t-4 border-orange-500">
                <div className="text-orange-600 mb-4">
                  <svg className="w-12 h-12 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M10 14h.01M14 14h.01M18 14h.01M6 18h.01M10 18h.01M14 18h.01M18 18h.01M4 6h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Správa Projektů</h3>
                <p className="text-gray-600">Efektivní řízení stavebních projektů a dohled nad dodržováním termínů a rozpočtů.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Naše Projekty
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="rounded-xl shadow-lg overflow-hidden group">
                <img src="/images/gallery-tanvald-reconstruction.jpg" alt="Rekonstrukce Tanvald" className="w-full h-80 object-cover group-hover:scale-105 transition duration-500 ease-in-out" />
                <div className="p-6 bg-indigo-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rekonstrukce Tanvald</h3>
                  <p className="text-gray-700">Rozsáhlá rekonstrukce historické budovy s důrazem na zachování původních prvků a modernizaci interiérů.</p>
                </div>
              </div>
              <div className="rounded-xl shadow-lg overflow-hidden group">
                <img src="/images/project-rdpo.jpg" alt="Projekt RDPO" className="w-full h-80 object-cover group-hover:scale-105 transition duration-500 ease-in-out" />
                <div className="p-6 bg-purple-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rodinný Dům RDPO</h3>
                  <p className="text-gray-700">Kompletní výstavba moderního rodinného domu na klíč, včetně energeticky úsporných řešení.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              O Nás
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Firma VŠE PRO STAVBY.CZ byla založena s cílem poskytovat komplexní a vysoce kvalitní služby v oblasti stavebnictví. S léty zkušeností a týmem odborníků jsme si vybudovali silnou reputaci založenou na spolehlivosti, inovaci a precizním provedení.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Specializujeme se na široké spektrum stavebních prací, od menších rekonstrukcí po rozsáhlé developerské projekty. Vždy se snažíme překonávat očekávání a dodávat projekty včas a v rámci rozpočtu.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Naše Hodnoty</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                    <li>Kvalita a preciznost ve všech fázích.</li>
                    <li>Profesionální přístup a komunikace.</li>
                    <li>Inovativní řešení a moderní technologie.</li>
                    <li>Spokojenost zákazníka je naší prioritou.</li>
                    <li>Držení termínů a rozpočtů.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-12">
              Kontaktujte Nás
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Máte dotaz nebo zájem o nezávaznou nabídku? Neváhejte nás kontaktovat!
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-indigo-400 mb-3">
                  <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 13a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v14z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">info@vseprostavby.cz</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-indigo-400 mb-3">
                  <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Telefon</h3>
                <p className="text-gray-300">+420 123 456 789</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-indigo-400 mb-3">
                  <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.727A8 8 0 016.343 5.273L12 21l-5.657-4.273z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Adresa</h3>
                <p className="text-gray-300">Stavební 123, 110 00 Praha, ČR</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
          <p className="text-center md:text-left mb-4 md:mb-0">&copy; 2024 VŠE PRO STAVBY.CZ. Všechna práva vyhrazena.</p>
          <p className="text-center md:text-right">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition duration-300">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

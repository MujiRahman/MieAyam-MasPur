import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-brand-bg lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center lg:-mt-20">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-brand-green-dark sm:text-5xl md:text-6xl font-poppins leading-tight">
              Mie Ayam Permata:
              <span className="block text-brand-mustard">Rasa Juara Langganan Komplek!</span>
            </h1>
            <p className="mt-4 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto lg:mx-0 md:text-xl">
              Menyajikan Mie Ayam Biasa & Yamin khas gerobakan dengan resep rahasia sejak 2013. Hangat, gurih, dan selalu siap memanjakan lidah warga Permata Bintaro sektor 9,.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
              <div className="rounded-full shadow">
                <a
                  href="https://wa.me/6283182171871?text=Halo%20Mas%20Pur,%20saya%20mau%20pesan%20Mie%20Ayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-brand-green-dark bg-brand-mustard hover:bg-brand-mustard-dark hover:text-white transition-all md:py-4 md:text-lg md:px-10"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan via WhatsApp
                </a>
              </div>
              <div className="mt-3 sm:mt-0">
                <a
                  href="https://wa.me/6283182171871?text=Halo%20Mas%20Pur,%20gerobak%20lagi%20posisi%20di%20mana%20ya?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-brand-green bg-brand-cream hover:bg-[#FDE68A] transition-all md:py-4 md:text-lg md:px-10"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Tanya Posisi Gerobak
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-xl sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-xl overflow-hidden aspect-square transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/hero_mie_ayam.png"
                alt="Mie Ayam Permata Gerobak"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green-dark/40 to-transparent mix-blend-multiply rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-mustard/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-green/10 blur-3xl"></div>
    </section>
  );
}

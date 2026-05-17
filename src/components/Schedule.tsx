import { Clock, Map, PhoneForwarded } from "lucide-react";

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 bg-brand-green text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-brand-mustard rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold font-poppins sm:text-4xl">
            Jadwal & Rute Keliling
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Tunggu ketukan mangkuk Permata di depan rumah Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-brand-green-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex items-start space-x-4 transform transition-transform hover:-translate-y-1">
            <div className="bg-brand-mustard p-3 rounded-full shrink-0">
              <Clock className="w-6 h-6 text-brand-green-dark" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-poppins mb-2">Jam Operasional</h3>
              <p className="text-green-50 text-lg">Setiap Hari</p>
              <p className="text-2xl font-bold text-brand-mustard mt-1">14.00 - 22.00 WIB</p>
              <p className="text-sm text-green-200 mt-2">*Terkadang habis lebih cepat</p>
            </div>
          </div>

          <div className="bg-brand-green-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex items-start space-x-4 transform transition-transform hover:-translate-y-1">
            <div className="bg-brand-mustard p-3 rounded-full shrink-0">
              <Map className="w-6 h-6 text-brand-green-dark" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-poppins mb-2">Rute Utama</h3>
              <p className="text-green-50 text-lg leading-relaxed">
                Mengelilingi seluruh blok di <span className="font-bold text-white">Komplek Permata Bintaro sektor 9,</span>.
              </p>
              <a
                href="https://wa.me/6283182171871?text=Halo%20Mas%20Pur,%20boleh%20share%20live%20location%20gerobaknya?"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-brand-mustard hover:text-[#FDE68A] group"
              >
                <PhoneForwarded className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Minta Live Location via WA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

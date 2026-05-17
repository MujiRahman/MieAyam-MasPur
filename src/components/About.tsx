import { Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-cream/30 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Heart className="w-32 h-32 text-brand-green-dark" />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold font-poppins text-brand-green-dark sm:text-4xl mb-6">
              Lebih dari Satu Dekade Menemani Sore Warga Permata Bintaro sektor 9,
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Sejak tahun 2013, suara khas ketukan mangkuk atau pantulan kentongan dari gerobak Mie Ayam Permata sudah menjadi penanda waktu sore bagi warga Komplek Permata Bintaro sektor 9,. Berawal dari niat sederhana untuk menyajikan hidangan hangat yang mengenyangkan, Permata telah mendorong gerobaknya menyusuri setiap blok perumahan tanpa lelah.
              </p>
              <p>
                Yang membuat pelanggan selalu rindu bukan hanya pada kenyalnya mie atau gurihnya bumbu ayam kecap, tetapi pada sosok Permata sendiri. Dengan senyum yang tak pernah lepas, sapaan yang sopan, dan ketekunan yang luar biasa dari jam 2 siang hingga 9 malam, setiap mangkuk mie ayam disajikan dengan sepenuh hati.
              </p>
              <p className="font-medium text-brand-green-dark">
                "Bagi Permata, warga Komplek Permata Bintaro sektor 9, bukan sekadar pembeli, melainkan keluarga yang sudah menemani perjalanan usahanya selama lebih dari 10 tahun."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Menu() {
  const menus = [
    {
      id: "biasa",
      name: "Mie Ayam Biasa",
      description: "Mie kenyal dengan kuah kaldu gurih, topping ayam kecap manis gurih, dan taburan daun bawang serta bawang goreng.",
      image: "/images/mie_ayam_biasa.png",
      price: "Rp 15.000"
    },
    {
      id: "yamin",
      name: "Mie Ayam Yamin",
      description: "Mie yang diaduk dengan kecap manis spesial, disajikan tanpa kuah (kering/nyemek), memberikan cita rasa manis gurih yang legit.",
      image: "/images/mie_ayam_yamin.png",
      price: "Rp 15.000"
    }
  ];

  return (
    <section id="menu" className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold font-poppins text-brand-green-dark sm:text-4xl">
            Menu Sederhana nan Menggoda
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dua pilihan legendaris yang selalu ludes setiap hari. Pilih sesuai selera Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {menus.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-brand-cream flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-poppins text-brand-green-dark">{item.name}</h3>
                  <span className="inline-block bg-brand-mustard text-brand-green-dark font-bold px-3 py-1 rounded-full text-sm">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 flex-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Satu-satunya mie ayam yang kuahnya paling sedap di komplek. Mas Pur juga selalu senyum, jadi ikutan seneng belinya.",
      name: "Ibu Ratna",
      role: "Warga Blok C"
    },
    {
      id: 2,
      quote: "Yaminnya juara! Bumbunya meresap sampai ke dalam mie. Sering banget nyegat gerobaknya pas sore-sore pulang kerja.",
      name: "Pak Budi",
      role: "Warga Blok A"
    },
    {
      id: 3,
      quote: "Udah langganan dari jaman saya masih SMA sampe sekarang udah kerja. Rasa nggak pernah berubah, tetep enak banget!",
      name: "Rizky",
      role: "Warga Blok D"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold font-poppins text-brand-green-dark sm:text-4xl">
            Kata Warga Permata Indah 2
          </h2>
          <div className="w-24 h-1 bg-brand-mustard mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-brand-bg rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
              <MessageSquareQuote className="w-10 h-10 text-brand-mustard mb-4 opacity-50" />
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{item.quote}"
              </p>
              <div>
                <p className="font-bold font-poppins text-brand-green-dark">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

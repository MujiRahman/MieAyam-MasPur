import { MessageCircle } from "lucide-react";

export default function StickyWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href="https://wa.me/6283182171871?text=Halo%20Mas%20Pur,%20saya%20mau%20pesan%20Mie%20Ayam"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110"
        aria-label="WhatsApp Mas Pur"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

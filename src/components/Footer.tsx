import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold font-poppins text-white mb-4">Mie Ayam Mas Pur</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Terima kasih kepada seluruh warga Komplek Permata Indah 2 yang sudah setia berlangganan sejak 2013.
        </p>
        <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
          <span>Dibuat dengan</span>
          <Heart className="w-4 h-4 text-brand-mustard fill-current" />
          <span>untuk warga komplek</span>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mie Ayam Mas Pur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

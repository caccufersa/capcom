import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappNumber = '5583998449446';
  const message = 'Olá! Gostaria de saber mais informações sobre o CAPCOM 2025.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3.5 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp size={24} />
      
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Dúvidas? Fale conosco
      </span>
    </a>
  );
}

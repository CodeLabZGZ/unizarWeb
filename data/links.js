import { FiSearch, FiCoffee, FiPaperclip, FiTrello } from "react-icons/fi"

export const sidebarLinks = [
  {
    icon: <FiSearch className="w-5 h-5 " />,
    text: "Search",
  },
  {
    icon: <FiCoffee className="w-5 h-5 " />,
    text: "Zonas para comer",
    url: "https://eina.unizar.es/cafeterias-comedores"
  },
  {
    icon: <FiTrello className="w-5 h-5 " />,
    text: "Oferta academica",
    url: "http://localhost:3000/careers"
  },
  {
    icon: <FiPaperclip className="w-5 h-5 " />,
    text: "Secretaria Virtual",
    url: "http://academico.unizar.es/secretaria-virtual",
  },
]

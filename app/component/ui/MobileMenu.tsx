// MobileMenu.tsx
"use client"
import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {FaTachometerAlt, FaUsers, FaCog, FaBars, FaTimes, FaHome} from "react-icons/fa"; // Hamburger ve Kapat ikonlarını ekledik

export default function MobileMenu() {
    // 1. Menünün açık/kapalı durumunu tutar
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menuLinks = [
        {name:"Home", href:"/", icon: <FaHome />},
        { name: "Dashboard", href: "/dashboard", icon: <FaTachometerAlt /> },
        { name: "Influencerlar", href: "/influencers", icon: <FaUsers /> },
        { name: "Ayarlar", href: "/settings", icon: <FaCog /> },
    ];

    // Menüyü kapatma işlevi, linke tıklandığında da çağrılmalı
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="@container">
            <div className="block @5xl:hidden">

                {/* 2. Hamburger Butonu */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 fixed bottom-15 right-4 z-50 text-blue-600 bg-white rounded-full shadow-lg"
                    aria-label="Menü Aç/Kapat"
                >
                    {isOpen ? <FaTimes size={20}/> : <FaBars size={20}/>}
                </button>

                {/* 3. Menü İçeriği (Tam Ekran Overlay) */}
                <nav
                    className={`fixed inset-0 z-40 bg-gradient-to-br from-blue-600 to-blue-700 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <ul className="flex flex-col pt-20"> {/* Butonun altından başlaması için pt-20 */}
                        {menuLinks.map((item) => (
                            <li className="pt-4 py-2 px-4" key={item.href}>
                                <Link
                                    className={`flex items-center gap-2 rounded-lg py-3 px-4 text-lg font-semibold transition-colors text-white ${pathname === item.href ? "bg-gray-700 " : "hover:bg-blue-800"}`}
                                    href={item.href}
                                    onClick={closeMenu} // Linke tıklandığında menüyü kapat
                                >
                                    {item.icon} {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
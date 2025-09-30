"use client"
import Link from "next/link";
import { FaTachometerAlt, FaUsers, FaCog } from "react-icons/fa";
import {usePathname} from "next/navigation";


export default function SideBar() {
    const menuLinks = [
        { name: "Dashboard", href: "/dashboard", icon: <FaTachometerAlt /> },
        { name: "Influencerlar", href: "/influencers", icon: <FaUsers /> },
        { name: "Ayarlar", href: "/settings", icon: <FaCog /> },
    ];
    const pathname = usePathname()

    return (
        <div className="@container">
            <aside className="bg-gradient-to-b from-blue-600 to-blue-700 fixed w-2/12 pt-12 h-full block @3xs:@max-5xl:hidden">
                <ul className="flex flex-col">
                    {menuLinks.map((item) => (
                        <li className="pt-4 py-2 px-4" key={item.href}>
                            <Link
                                className={`flex  items-center gap-2 rounded-lg py-2 px-4 font-semibold transition-colors text-white ${pathname === item.href ? "bg-white/20 shadow-lg " : "hover:bg-blue-500"}`}
                                href={item.href}>
                                {item.icon} {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}
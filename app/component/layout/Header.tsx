import Link from "next/link";
import {Button} from "@/components/ui/button";
import { FaUser } from "react-icons/fa";

export default function Header() {
    return (
        <header className="w-full fixed top-0 z-20 bg-white  bg-white/80 backdrop-blur-md border-b border-gray-200">
            <nav className="container mx-auto flex px-4 justify-between items-center">
                <h2 className="font-semibold py-2 text-lg"><Link href="/">Influencer DashBoard</Link></h2>
                <Button variant="outline" className="my-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                    <FaUser/>
                    Profile
                </Button>
            </nav>
        </header>
    )
}
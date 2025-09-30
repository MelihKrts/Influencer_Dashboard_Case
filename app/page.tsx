import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center w-full min-h-dvh">
            <Link href="/login">
                <Button className="cursor-pointer">Login</Button>
            </Link>
        </div>
    );
}

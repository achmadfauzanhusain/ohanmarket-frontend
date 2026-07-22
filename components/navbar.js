import Image from "next/image"
import Link from "next/link"

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto py-8">
                <Link href="/" className="sm:text-lg md:text-xl font-bold">OHANMARKET</Link>

                <Link href="/" className="hidden md:flex items-center gap-2">
                    <Image src="/originals.png" width={20} height={0} />
                    <p className="font-bold opacity-50">ORIGINALS</p>
                </Link>
                <ConnectButton />
            </div>
        </div>
    )
}

export default Navbar
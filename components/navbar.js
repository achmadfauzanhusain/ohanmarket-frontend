import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto py-8">
                <h1 className="sm:text-lg md:text-xl font-bold">OHANMARKET</h1>

                <Link href="/" className="hidden md:flex items-center gap-2">
                    <Image src="/originals.png" width={20} height={0} />
                    <p className="font-bold opacity-50">ORIGINALS</p>
                </Link>

                <button className="bg-[#6173F4] px-3 md:px-4 py-2 text-xs md:text-sm font-semibold rounded-md">Connect Wallet</button>
            </div>
        </div>
    )
}

export default Navbar
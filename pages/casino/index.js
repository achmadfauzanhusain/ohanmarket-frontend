import { Patrick_Hand } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400', // Patrick Hand cuma punya 1 weight: 400
  display: 'swap',
  variable: '--font-patrick-hand', // opsional, kalau mau pakai CSS variable
})

const Casino = () => {
    return (
        <div className="pb-10 md:pb-14">
        <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-16">
            <h1 className={`${patrickHand.className} text-2xl sm:text-3xl`}>OHAN ORIGINALS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
            {[
                { src: "/originals/snail.jpg", alt: "Snail", href: "/casino/snail" },
                { src: "/originals/pig.jpg", alt: "Pig", href: "/casino/pig" },
                { src: "/originals/dog.jpg", alt: "Dog", href: "/casino/dog" },
                { src: "/originals/goat.jpg", alt: "Goat", href: "/casino/goat" },
            ].map((item) => (
                <Link
                key={item.alt}
                href={item.href}
                className="group relative block overflow-hidden rounded-xl"
                >
                <Image
                    src={item.src}
                    width={300}
                    height={300}
                    alt={item.alt}
                    className="w-full h-auto rounded-xl transition-transform duration-300 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    </span>
                </div>
                </Link>
            ))}
            </div>
        </div>

        {/* footer */}
        <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-24 md:mt-32">
            <p className="text-xs opacity-75">ohanmarket.com owned and operated by fauzan husain, his plan to make high technology combine with <br /> traditionalism and embrace traditionalism. Make traditionalism back again!</p>

            <div className='mt-6'>
                <h2 className='font-bold'>Community</h2>
                <div className='flex gap-4 mt-2'>
                <Link href="https://instagram.com/_fauzanhusain">
                    <Image className='p-2 bg-white/20 rounded-md' src="/instagram.png" width={40} height={55} />
                </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Casino
import { Patrick_Hand } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400', // Patrick Hand cuma punya 1 weight: 400
  display: 'swap',
  variable: '--font-patrick-hand', // opsional, kalau mau pakai CSS variable
})

export default function Home() {
  return (
    <div className="pb-10 md:pb-14">
      <div className="mt-12 sm:mt-16 md:mt-24">
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl font-bold">The First <span className='bg-[#6173F4]'>Crypto</span> <br /><span className="text-[#FF6500]">Animal Racing</span> Platform</h1>
        <p className="text-center font-bold text-sm sm:text-lg md:text-xl mt-1 md:mt-2 opacity-50">Fun and Unique Way to Gamble</p>
        
        <div className="relative w-[95%] sm:w-[90%] h-24 lg:w-[80%] mx-auto mt-1">
          <div className="flex justify-between gap-2 px-4 sm:px-8 md:px-12 text-[10px] md:text-sm font-semibold">
            {/* text 1 */}
            <div className="flex items-center bg-white px-2 md:px-5 py-2 md:py-3 text-black rounded-sm translate-y-7">
              <p>We're make the next great casino - <br /> fauzanchenko</p>
            </div>

            {/* text 2 */}
            <div className="flex items-center bg-white px-2 md:px-5 py-2 md:py-3 text-black rounded-sm">
              <p>Our plan is to combine tradition <br /> with technology</p>
            </div>
          </div>
        </div>
      </div>

      {/* original */}
      <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-16 md:mt-18">
        <h1 className={`${patrickHand.className} text-2xl sm:text-3xl text-center`}>OHAN ORIGINALS</h1>

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
        <Link href="/casino" className="text-center block mt-10 md:mt-14 underline text-base font-bold md:text-xl">Go To Casino</Link>
      </div>

      {/* footer */}
      <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-18 md:mt-24">
          <p className="text-xs opacity-75">ohanmarket.com owned and operated by fauzanchenko, his plan to make high technology combine with <br /> traditionalism and embrace traditionalism. Make traditionalism back again!</p>

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
  );
}

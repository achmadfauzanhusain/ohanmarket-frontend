import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Name = () => {
    const router = useRouter()

    const { name } = router.query
    return (
        <div className="pb-10 md:pb-14">
            <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-4 md:mt-8">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <h1 className="text-lg font-bold uppercase">{name} race</h1>
                        <div className="text-xs mt-1 flex gap-2">
                            <p className="flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-pink-400"></span>
                                {name} <span className="font-bold">20%</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                                {name} <span className="font-bold">20%</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
                                {name} <span className="font-bold">20%</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                                {name} <span className="font-bold">20%</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-orange-400"></span>
                                {name} <span className="font-bold">20%</span>
                            </p>
                        </div>
                        <hr className="opacity-25 mt-3" />
                        <hr className="opacity-25 mt-1" />
                        <h2 className="text-sm font-semibold mt-2">Choose Your <span className="capitalize">{name}</span> :</h2>
                        <div className="mt-4 flex flex-col gap-2">
                            <div className="uppercase border border-pink-400 bg-pink-400 text-white px-4 py-2 rounded-sm font-bold">
                                {name}
                            </div>
                            <div className="uppercase border border-yellow-400 bg-yellow-400 text-white px-4 py-2 rounded-sm font-bold">
                                {name}
                            </div>
                            <div className="uppercase border border-red-400 bg-red-400 text-white px-4 py-2 rounded-sm font-bold">
                                {name}
                            </div>
                            <div className="uppercase border border-green-400 bg-green-400 text-white px-4 py-2 rounded-sm font-bold">
                                {name}
                            </div>
                            <div className="uppercase border border-orange-400 bg-orange-400 text-white px-4 py-2 rounded-sm font-bold">
                                {name}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white/10 rounded-2xl">

                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-18 md:mt-24">
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

export default Name
// import { useRouter } from 'next/router'
export default function Banner({ nama }) {
    // const { pathname } = useRouter()
    // const name = pathname.split('/').slice(1).join()
    return (
        <div className="carousel w-full">
            <div className="w-full bg-dark -z-10 h-[300px] lg:h-[400px] relative">
                <div className="container">
                    <div className="absolute flex flex-wrap items-center w-full h-[300px] lg:h-[400px]">
                        <div className="w-full lg:w-1/2 px-4">
                            <h5 className="font-bold text-white text-2xl lg:text-3xl uppercase">
                                {nama}
                            </h5>
                        </div>
                        <div className="absolute top-20 right-14 lg:right-40 rounded-full bg-primary w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]  -z-1 filter blur-3xl opacity-70 animate-pulse" />
                        <div className="absolute bottom-10 right-14 lg:right-40 rounded-full bg-pink-500 w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]  -z-1 filter blur-3xl opacity-70 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    )
}

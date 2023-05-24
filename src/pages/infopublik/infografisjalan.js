import AppLayout from '@/components/Layouts/AppLayout'
import Banner from '@/components/Layouts/Banner'
import Image from 'next/image'

export default function Struktur() {
    return (
        <AppLayout>
            <Banner nama="Infografis Jalan" />
            <section className="w-full pt-20 pb-28">
                <div className="flex flex-col items-center justify-center w-full px-6 lg:px-0">
                    <Image
                        src={require('assets/img/info.jpg')}
                        className="w-full lg:w-1/2"
                        blurDataURL="https://dummyimage.com/400x600/ababab/000000&text=blur"
                    />
                </div>
            </section>
        </AppLayout>
    )
}

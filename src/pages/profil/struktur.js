import AppLayout from '@/components/Layouts/AppLayout'
import Banner from '@/components/Layouts/Banner'
import Image from 'next/image'
import Head from 'next/head'

export default function Struktur() {
    return (
        <AppLayout>
            <Head>
                <title>Struktur organisasi | DPUPR Bantaeng</title>
            </Head>
            <Banner nama="Struktur Organisasi" />
            <section className="w-full pt-20 pb-28">
                <div className="flex flex-col items-center justify-center w-full px-4">
                    <Image
                        src={require('assets/img/struktur.jpg')}
                        className="w-max-full"
                        blurDataURL="https://dummyimage.com/400x600/ababab/000000&text=blur"
                    />
                </div>
            </section>
        </AppLayout>
    )
}

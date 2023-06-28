import AppLayout from '@/components/Layouts/AppLayout'
import Banner from '@/components/Layouts/Banner'
import Head from 'next/head'
import Image from 'next/image'

export default function VisiMisi() {
    return (
        <AppLayout>
            <Head>
                <title>Visi misi | DPUPR Bantaeng</title>
            </Head>
            <Banner nama="Visi Misi" />
            <section id="about" className="pt-20">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-6 lg:w-1/2 relative">
                            <Image
                                width={400}
                                height={400}
                                src={require('assets/img/bupati.jpg')}
                                className="max-w-full mx-auto bg-none lg:max-w-1/2 lg:max-h-auto rounded-full"
                                alt="Bupati"
                                blurDataURL="https://dummyimage.com/600x400/ababab/000000&text=blur"
                                priority
                            />
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <h4 className="font-bold text-xl uppercase lg:text2xl text-primary mb-2 lg:pt-10 text-center">
                                Visi
                            </h4>
                            <blockquote className="mx-w-xl">
                                <p className="text-slate-600 italic leading-relaxed uppercase font-semibold text-md text-center lg:text-lg">
                                    "TERWUJUDNYA MASYARAKAT BANTAENG YANG
                                    SEJAHTERA LAHIR DAN BATIN BEROREANTASI PADA
                                    KEMAJUAN , KEADILAN , KELESTARIAN , DAN
                                    KEUNGGULAN BERBASIS AGAMA DAN BUDAYA LOKAL"
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-20">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 lg:w-1/2 relative">
                            <div className="absolute -z-10 top-10 lg:right-36 md:scale-120 rounded-full w-40 h-40 lg:w-64 lg:h-64 bg-primary filter blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-5000" />
                            <Image
                                width={500}
                                height={500}
                                src={require('assets/img/bupatibt.png')}
                                className="max-w-full mx-auto bg-none lg:max-w-1/2 lg:max-h-auto"
                                alt="Bupati"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <h4 className="font-bold text-xl uppercase text-primary lg:text2xl mt-10 text-center mb-2">
                                Misi
                            </h4>
                            <ul className="list-decimal text-sm font-semibold space-y-2 lg:text-md text-slate-600 px-6 mb-4">
                                <li>
                                    Mewujudkan sumber daya manusia yang
                                    berkualitas.
                                </li>
                                <li>
                                    Meningkatkan akselerasi program pengentasan
                                    kemiskinan dan perluasan kesempatan kerja.
                                </li>
                                <li>
                                    Meningkatkan akses, pemerataan dan kualitas
                                    pelayanan kesehatan dan pelayanan sosial
                                    dasar lainnya
                                </li>
                                <li>
                                    Mengoptimalkan kualitas dan pemerataan
                                    pembangunan infrastruktur yang berbasis
                                    kelestarian lingkungan
                                </li>
                                <li>
                                    Mengoptimalkan pengembangan pertanian dan
                                    pemberdayaan ekonomi kerakyatan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

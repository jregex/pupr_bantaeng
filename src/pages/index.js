import AppLayout from '@/components/Layouts/AppLayout'
// import Section from '@/components/Layouts/Section'
import Button from '@/components/Button'
import Image from 'next/image'
import NewsCard from '@/components/NewsCard'
import GalleryModal from '@/components/GalleryModal'
import { motion } from 'framer-motion'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Script from 'next/script'
import axios from 'axios'
import YouTube from 'react-youtube'
import { parseISO, format } from 'date-fns'

export default function Home({ posts }) {
    const _onReady = e => {
        e.target.pauseVideo()
    }
    return (
        <AppLayout>
            <section id="home" className="pt-36 pb-4">
                <div className="container">
                    <div className="flex flex-wrap">
                        <motion.div
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="w-full self-center px-4 lg:w-1/2">
                            <h1 className="text-lg font-semibold text-primary md:text-xl">
                                Welcome to{' '}
                                <span className="block font-bold text-dark text-3xl mt-1 lg:text-4xl uppercase">
                                    DPUPR Bantaeng
                                </span>
                            </h1>
                            <h2 className="font-medium text-slate-700 text-md mb-4 lg:text-xl">
                                Dinas PU dan Penataan Ruang
                            </h2>

                            <Button type="button">Hubungi saya</Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -300 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                            className="w-full self-end px-2 lg:w-1/2">
                            <div className="mt-10 relative z-9 lg:mt-9 right-0 animate-pantul-slow">
                                <Image
                                    width={400}
                                    height={400}
                                    src={require('assets/img/kepala-dinas.png')}
                                    className="max-w-full mx-auto bg-none lg:max-w-1/2 rounded-full"
                                    alt="kepala dinas"
                                    blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                    priority
                                />
                                <div className="absolute -z-10 top-0 -left-2 lg:left-20 md:left-20 rounded-full w-40 h-40 animate-pantul-slow lg:w-48 lg:h-48 bg-primary filter blur-3xl opacity-90 mix-blend-multiply" />
                                <div className="absolute -z-10 top-0 -right-4 lg:right-20 md:right-20 w-40 h-40 animate-pantul-slow lg:w-48 lg:h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-90" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section
                className="pt-10 pb-16 bg-slate-100"
                id="portofolio"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine">
                <div className="container">
                    <div className="w-full flex flex-wrap items-center justify-center">
                        <motion.a
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 3.2 }}
                            href="#"
                            target="_blank"
                            className="max-w-[120px] mx-4 p-2 lg:mx-6 xl:mx-8 hover:scale-125  hover:transition hover:ease-in-out hover:rounded-lg hover:duration-500 hover:backdrop-blur-md hover:shadow-3xl flex flex-col text-center items-center">
                            <Image
                                width={400}
                                src={require('assets/img/icons/sianata2.svg')}
                                alt="Sianata"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                            <h3 className="font-bold text-sm text-slate-700 uppercase mt-2 mb-1 px-2">
                                New Sianata
                            </h3>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 3 }}
                            href="#"
                            target="_blank"
                            className="max-w-[120px] mx-4 p-2 lg:mx-6 xl:mx-8 hover:scale-125  hover:transition hover:ease-in-out hover:rounded-lg hover:duration-500 hover:backdrop-blur-md hover:shadow-3xl flex flex-col text-center items-center hover:backdrop-blur-sm">
                            <Image
                                width={400}
                                src={require('assets/img/icons/geolocation2.svg')}
                                alt="Geoportal"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                            <h3 className="font-bold text-sm text-slate-700 uppercase mt-2 mb-1 px-2">
                                Geoportal
                            </h3>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 2.8 }}
                            href="#"
                            target="_blank"
                            className="max-w-[120px] mx-4 p-2 lg:mx-6 xl:mx-8 hover:scale-125  hover:transition hover:ease-in-out hover:rounded-lg hover:duration-500 hover:backdrop-blur-md hover:shadow-3xl flex flex-col text-center items-center hover:backdrop-blur-sm">
                            <Image
                                width={400}
                                src={require('assets/img/icons/building.svg')}
                                alt="Infrastructure"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                            <h3 className="font-bold text-sm text-slate-700 uppercase mt-2 mb-1 px-2">
                                Infrastructure
                            </h3>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 2.6 }}
                            href="#"
                            target="_blank"
                            className="max-w-[120px] mx-4 p-2 lg:mx-6 xl:mx-8 hover:scale-125  hover:transition hover:ease-in-out hover:rounded-lg hover:duration-500 hover:backdrop-blur-md hover:shadow-3xl flex flex-col text-center items-center hover:backdrop-blur-sm">
                            <Image
                                width={400}
                                src={require('assets/img/icons/archive2.svg')}
                                alt="Archive"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                            <h3 className="font-bold text-sm text-slate-700 uppercase mt-2 mb-1 px-2">
                                Archive
                            </h3>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 2.4 }}
                            href="#"
                            target="_blank"
                            className="max-w-[120px] mx-4 p-2 lg:mx-6 xl:mx-8 hover:scale-125  hover:transition hover:ease-in-out hover:rounded-lg hover:duration-500 hover:backdrop-blur-md hover:shadow-3xl flex flex-col text-center items-center hover:backdrop-blur-sm">
                            <Image
                                width={400}
                                src={require('assets/img/icons/lpse2.svg')}
                                alt="LPSE"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                            <h3 className="font-bold text-sm text-slate-700 uppercase mt-2 mb-1 px-2">
                                LPSE
                            </h3>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 2.2 }}
                            href="#"
                            target="_blank"
                            className="max-w-[120px] mx-4 p-2 lg:mx-6 xl:mx-8 hover:scale-125  hover:transition hover:ease-in-out hover:rounded-lg hover:duration-500 hover:backdrop-blur-md hover:shadow-3xl flex flex-col text-center items-center hover:backdrop-blur-sm">
                            <Image
                                width={400}
                                src={require('assets/img/icons/sianata.svg')}
                                alt="Sianata"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                            <h3 className="font-bold text-sm text-slate-700 uppercase mt-2 mb-1 px-2">
                                Sianata
                            </h3>
                        </motion.a>
                    </div>
                </div>
            </section>
            <section id="about" className="py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 4.0 }}
                        className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2 relative">
                            <div className="absolute -z-10 left-2 lg:left-16 top-0 md:scale-120 rounded-full w-40 h-40 lg:w-64 lg:h-64 bg-pink-400 filter blur-3xl opacity-70 mix-blend-multiply animate-blob animation-delay-2000" />
                            <div className="absolute -z-10 bottom-0 right-4 lg:right-12 md:scale-120 rounded-full w-40 h-40 lg:w-64 lg:h-64 bg-primary filter blur-3xl opacity-70 mix-blend-multiply animate-blob animation-delay-5000" />
                            <Image
                                width={400}
                                height={400}
                                src={require('assets/img/bupatibt.png')}
                                className="max-w-full mx-auto bg-none lg:max-w-1/2 lg:max-h-auto"
                                alt="Bupati"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <h4 className="font-bold text-xl uppercase lg:text2xl text-primary mb-2 lg:pt-10">
                                Visi
                            </h4>
                            <blockquote className=" mb-3 mx-w-xl">
                                <p className="text-slate-600 italic leading-relaxed uppercase font-semibold text-sm lg:text-md">
                                    "TERWUJUDNYA MASYARAKAT BANTAENG YANG
                                    SEJAHTERA LAHIR DAN BATIN BEROREANTASI PADA
                                    KEMAJUAN , KEADILAN , KELESTARIAN , DAN
                                    KEUNGGULAN BERBASIS AGAMA DAN BUDAYA LOKAL"
                                </p>
                            </blockquote>
                            <h4 className="font-bold text-xl uppercase text-primary lg:text2xl mb-2">
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
                            {/* <div className="flex items-center mb-2">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary text-primary hover:bg-primary focus:bg-primary active:bg-primary hover:text-white active:text-white focus:text-white">
                                    <svg
                                        role="img"
                                        width={24}
                                        className="fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>YouTube</title>
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary text-primary hover:bg-primary focus:bg-primary active:bg-primary hover:text-white active:text-white focus:text-white">
                                    <svg
                                        width={24}
                                        role="img"
                                        className="fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Instagram</title>
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-primary text-primary hover:bg-primary focus:bg-primary active:bg-primary hover:text-white active:text-white focus:text-white">
                                    <svg
                                        role="img"
                                        width={24}
                                        className="fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Facebook</title>
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="article" className="pt-28 pb-32 bg-slate-100">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-10">
                            <h4 className="font-bold text-3xl text-primary mb-2">
                                Artikel
                            </h4>
                            <h2 className="font-semibold text-dark text-lg mb-2 sm:text-2xl lg:text-xl">
                                Artikel Terbaru
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="px-4 grid grid-cols-1 lg:grid-cols-4 gap-x-4">
                            {posts.map(item => {
                                const date = parseISO(item.created_at)
                                return (
                                    <NewsCard
                                        key={item.id}
                                        gambar={`https://ticketorder.site/storage/public/posts/${item.image}`}
                                        judul={item.title}
                                        desc={item.body}
                                        category={item.category.category}
                                        alamat="#"
                                        waktu={format(date, 'dd/MM/yyyy')}
                                        alt={item.slug}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="pt-36 pb-32 bg-gradient-radial from-cyan-900 via-slate-900 to-dark relative"
                id="gallery">
                <div className="absolute top-10 right-14 lg:right-30 rounded-full bg-primary w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]  -z-1 filter blur-3xl opacity-70 animate-pulse" />
                <div className="absolute bottom-14 left-14 lg:left-30 rounded-full bg-pink-400 w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] -z-1 filter blur-3xl opacity-60 animate-pulse" />
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-10">
                            <h4 className="font-bold text-3xl text-primary mb-2">
                                Gallery
                            </h4>
                            <h2 className="font-semibold text-slate-200 text-lg mb-2 sm:text-2xl lg:text-xl">
                                Foto Terbaru
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="px-4 grid grid-cols-1 lg:grid-cols-4 gap-x-4 z-10">
                            <GalleryModal />
                            <GalleryModal />
                            <GalleryModal />
                            <GalleryModal />
                            <GalleryModal />
                            <GalleryModal />
                            <GalleryModal />
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="iframe"
                className="pt-28 pb-16 bg-gray-200 hidden lg:block">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <div className="w-full h-72 rounded-lg bg-gradient-to-b overflow-hidden flex justify-center items-center from-primary/50 to-primary p-2">
                                <YouTube
                                    videoId="0vyOYb8tJ0g"
                                    opts={{
                                        height: '260',
                                        width: '550',
                                        playerVars: { autoplay: 1 },
                                    }}
                                    onReady={_onReady}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 p-4">
                            <h3 className="font-bold text-2xl text-primary">
                                Video
                            </h3>
                            <h4 className="text-md text-slate-600">
                                Bidang Bina Konstruksi Dinas Pekerjaan Umum dan
                                Penataan Ruang kabupaten Bantaeng
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-24 pb-32">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-10">
                            <h4 className="font-bold text-3xl text-primary mb-2">
                                Kontak
                            </h4>
                            <h2 className="font-semibold text-dark text-lg mb-2 sm:text-2xl lg:text-xl">
                                Hubungi kami
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <form className="w-full lg:w-1/2">
                            <div className="w-full px-4 mb-8">
                                <Label className="mb-2" htmlFor="nama">
                                    Nama
                                </Label>
                                <Input id="nama" className="focus:shadow-xl" />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <Label className="mb-2" htmlFor="email">
                                    Email
                                </Label>
                                <Input id="email" className="focus:shadow-xl" />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <Label className="mb-2" htmlFor="subjek">
                                    Subjek
                                </Label>
                                <Input
                                    id="subjek"
                                    className="focus:shadow-xl"
                                />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <Label className="mb-2" htmlFor="body">
                                    Komentar
                                </Label>
                                <textarea
                                    className="rounded-md shadow-md bg-slate-200 text-slate-600 border-none w-full h-40 focus:outline-none focul:ring-1 focus:border-primary focus:ring-primary focus:shadow-xl"
                                    id="body"
                                />
                            </div>
                            <div className="w-full px-4 mb-10">
                                <Button
                                    type="submit"
                                    className="text-xs w-full flex py-3 justify-center font-semibold">
                                    Kirim
                                </Button>
                            </div>
                        </form>
                        <div className="w-full lg:w-1/2 px-2 lg:px-10">
                            <Script
                                type="text/javascript"
                                src="https://widget.kominfo.go.id/gpr-widget-kominfo.min.js"
                            />
                            <div id="gpr-kominfo-widget-container" />
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export const getServerSideProps = async () => {
    const posts = await axios
        .get(`https://ticketorder.site/api/posts`)
        .then(res => {
            return res.data.data
        })
        .catch(err => console.log(err))

    return { props: { posts } }
}

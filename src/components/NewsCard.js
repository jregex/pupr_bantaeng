import Image from 'next/image'
import Link from 'next/link'

export default function NewsCard({ alamat, gambar, judul, desc, alt }) {
    const text2 = desc.replace(/<[^>]+>/g, '')
    return (
        <article className="overflow-hidden bg-white shadow-lg rounded-2xl shadow-lg mb-10 card">
            <figure>
                <Link href={alamat} legacyBehavior>
                    <a className="hover:opacity-70 hover:scale-125 transition ease-in-out duration:400">
                        <Image
                            src={
                                gambar
                                    ? gambar
                                    : require('assets/img/contoh.png')
                            }
                            width={1}
                            height={1}
                            layout="responsive"
                            objectFit="cover"
                            alt={alt}
                            className="w-full"
                            blurDataURL="https://dummyimage.com/600x400/ababab/000000&text=blur"
                        />
                    </a>
                </Link>
            </figure>
            <div className="py-8 px-4 card-body">
                <h2 className="card-title">
                    <Link href={alamat} legacyBehavior>
                        <a className="block font-semibold mb-2 text-xl text-dark hover:text-primary truncate">
                            {judul}
                        </a>
                    </Link>
                </h2>
                <p className="truncate break-all text-base text-slate-600 font-medium mb-6">
                    {text2}
                </p>
                <div className="card-actions justify-end">
                    <Link href={alamat} legacyBehavior>
                        <a className="inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-full font-bold text-sm text-dark tracking-widest hover:opacity-80 active:bg-sky-900 focus:outline-none focus:border-primary focus:ring ring-sky-300 disabled:opacity-25 transition shadow-md shadow-sky-300 hover:shadow-sm active:shadow focus:shadow ease-in-out duration-300">
                            Baca selengkapnya
                        </a>
                    </Link>
                </div>
            </div>
        </article>
    )
}

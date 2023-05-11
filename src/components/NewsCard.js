import Image from 'next/image'
import Link from 'next/link'

export default function NewsCard({ alamat, gambar, judul, desc, alt }) {
    return (
        <div className="overflow-hidden bg-white shadow-lg rounded-2xl shadow-lg mb-10">
            <Link href={alamat} legacyBehavior>
                <a className="hover:opacity-70">
                    <Image
                        src={gambar ? gambar : require('assets/img/contoh.png')}
                        alt={alt}
                        className="w-full"
                    />
                </a>
            </Link>
            <div className="py-8 px-4">
                <h2>
                    <Link href={alamat} legacyBehavior>
                        <a className="block font-semibold mb-2 text-xl text-dark hover:text-primary truncate">
                            {judul}
                        </a>
                    </Link>
                </h2>
                <p className="truncate text-base text-slate-600 font-medium mb-6">
                    {desc}
                </p>
                <div className="flex justify-end">
                    <Link href={alamat} legacyBehavior>
                        <a className="inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-full font-bold text-sm text-dark tracking-widest hover:opacity-80 active:bg-sky-900 focus:outline-none focus:border-primary focus:ring ring-sky-300 disabled:opacity-25 transition shadow-lg shadow-sky-400 hover:shadow-sm active:shadow focus:shadow ease-in-out duration-300">
                            Baca selengkapnya
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
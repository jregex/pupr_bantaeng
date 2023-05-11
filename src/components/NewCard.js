import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewCard({ gambar, alamat, judul, alt, desc }) {
    return (
        <div className="card card-compact w-full lg:w-1/3 xl:w-1/4 bg-white shadow-xl mb-5">
            <figure>
                <Image
                    src={gambar ? gambar : require('assets/img/contoh.png')}
                    alt={alt}
                    className="w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <Link href={alamat} legacyBehavior>
                        <a className="block font-semibold mb-3 text-xl text-dark hover:text-primary truncate">
                            {judul}
                        </a>
                    </Link>
                </h2>
                <p className="truncate">{desc}</p>
                <div className="card-actions justify-end">
                    <Link href={alamat} legacyBehavior>
                        <a className="inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-full font-bold text-sm text-slate-800 tracking-widest hover:opacity-80 active:bg-sky-900 focus:outline-none focus:border-primary focus:ring ring-sky-300 disabled:opacity-25 transition shadow-lg shadow-sky-400 hover:shadow-sm active:shadow focus:shadow ease-in-out duration-300">
                            Baca
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

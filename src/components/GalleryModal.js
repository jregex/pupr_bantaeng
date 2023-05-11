import Image from 'next/image'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function GalleryModal({ gambar }) {
    const [modal, setModal] = useState(false)
    function handleChange() {
        setModal(!modal)
    }
    return (
        <div className="mb-10">
            <a
                htmlFor="my-gallery"
                className="w-full cursor-pointer hover:scale-125 hover:transition hover:ease-in-out hover:duration-300"
                onClick={handleChange}>
                <Image
                    src={gambar ?? require('assets/img/contoh.png')}
                    className="w-full"
                />
            </a>
            <input
                type="checkbox"
                id="my-gallery"
                className="modal-toggle"
                checked={modal}
                onChange={handleChange}
            />
            <div className="modal w-screen h-screen bg-slate-900/90 flex items-center transition ease-in-out duration-500">
                <div className="modal-box relative rounded-none shadow-transparent bg-transparent">
                    <button
                        htmlFor="my-gallery"
                        className="btn btn-sm btn-circle btn-ghost bg-white hover:bg-primary absolute right-2 bottom-2"
                        onClick={handleChange}>
                        <FontAwesomeIcon
                            icon={faTimes}
                            style={{ fontSize: 30 }}
                            className="text-primay"
                        />
                    </button>
                    <Image
                        src={gambar ?? require('assets/img/contoh.png')}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}

import AppLayout from '@/components/Layouts/AppLayout'
import Banner from '@/components/Layouts/Banner'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default function Tupoksi() {
    return (
        <AppLayout>
            <Head>
                <title>Tupoksi</title>
            </Head>
            <Banner nama="Tugas pokok & fungsi" />
            <div className="w-full pt-10 pb-28">
                <p className="text-md container italic text-primary">
                    click icon pencil untuk melihat detail
                </p>
                <div className="container leading-relaxed flex justify-center antialiased px-2">
                    <table className="table table-zebra lg:w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>Jabatan</th>
                                <th>Tugas</th>
                                <th>Fungsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="text-center">
                                <td>1</td>
                                <td>Kepala Dinas</td>
                                <td>
                                    <button className="btn btn-dark rounded-full">
                                        <FontAwesomeIcon
                                            icon={faPencilAlt}
                                            className="hover:text-primary text-xl"
                                        />
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-dark rounded-full">
                                        <FontAwesomeIcon
                                            icon={faPencilAlt}
                                            className="hover:text-primary text-xl"
                                        />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

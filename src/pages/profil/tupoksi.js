import AppLayout from '@/components/Layouts/AppLayout'
import Banner from '@/components/Layouts/Banner'
import Head from 'next/head'
import { useState } from 'react'
import { tupoksi } from '@/lib/localData'

// export async function getStaticProps() {
//     const localData = await getLocalData()
//     return {
//         props: { localData },
//     }
// }
export default function Tupoksi() {
    const [data, setData] = useState(false)
    const [search, setSearch] = useState('')
    return (
        <AppLayout>
            <Head>
                <title>Tupoksi</title>
            </Head>
            <Banner nama="Tugas pokok & fungsi" />
            <div className="w-full pt-10 pb-28">
                <div className="container mb-5">
                    <input
                        className="rounded-md shadow-sm w-full text-slate-600 bg-slate-200 text-sm p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="input search ............."
                    />
                </div>
                <div className="container leading-relaxed antialiased px-2 space-y-5">
                    {tupoksi
                        .filter(item => {
                            return search.toLowerCase() === ''
                                ? item
                                : item.jabatan.toLowerCase().includes(search)
                        })
                        .map(item => (
                            <div
                                key={item.id}
                                className="collapse collapse-plus bg-slate-200 rounded-md"
                                onClick={() => {
                                    setData(!data)
                                }}>
                                <input
                                    type="checkbox"
                                    defaultChecked={data}
                                    name="my-accordion-3"
                                />
                                <div className="collapse-title text-xl font-medium">
                                    {item.jabatan}
                                </div>
                                <div className="collapse-content [input:checked~&]:bg-slate-800 [input:checked~&]:text-cyan-500">
                                    <hr className="text-pink-600 my-2" />
                                    <p className="mb-2 text-sm lg:text-md">
                                        {item.tugas}
                                    </p>
                                    <ul className="list-disc ml-5 text-sm lg:text-md">
                                        {item.fungsi.map((item2, index) => (
                                            <li key={index}>{item2}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </AppLayout>
    )
}

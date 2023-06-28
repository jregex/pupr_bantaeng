import AppLayout from '@/components/Layouts/AppLayout'
import Banner from '@/components/Layouts/Banner'
import Head from 'next/head'

export default function Sejarah() {
    return (
        <AppLayout>
            <Head>
                <title>Sejarah | DPUPR Bantaeng</title>
            </Head>
            <Banner nama="Sejarah" />
            <div className="w-full pt-10 pb-28">
                <div className="container text-sm font-base text-justify text-gray-600 space-y-5 leading-relaxed antialiased px-6">
                    <p className="mb-3 first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                        Peraturan Daerah Kabupaten Bantaeng Nomor 26 Tahun 2007
                        Tentang Pembentukan Organisasi, Kedudukan, Tugas Pokok
                        Dan Fungsi Dinas-Dinas Daerah Kabupaten Bantaeng , Pada
                        Tanggal 15 Desember 2007 Membentuk Opd Dengan Nama Opd
                        Dinas Pekerjaan Umum Dan Kimpraswil Dengan Tugas Pokok
                        Dan Fungsi
                    </p>
                    <ul className="list-decimal space-y-4 ml-4">
                        <li>
                            Dinas Pekerjaan Umum dan Kimpraswil merupakan unsur
                            pelaksana otonomi daerah;
                        </li>
                        <li>
                            Dinas Pekerjaan Umum dan Kimpraswil dipimpin oleh
                            seorang Kepala Dinas yang beradadi bawah dan
                            bertanggung jawab kepada Bupati melalui Sekretaris
                            Daerah
                        </li>
                    </ul>

                    <p>
                        Perubahan Nama OPD Dinas Pu Dan Kimpraswil Menjadi OPD
                        Dinas Pu Dan Penataan Ruang Diatur Pada “Peraturan
                        Bupati Bantaeng Nomor 54 Tahun 2017 Tentang Kedudukan,
                        Susunan Organisasi, Tugas Dan Fungsi Serta Tata Kerja
                        Dinas Pekerjaan Umum Dan Penataan Ruang Kabupaten
                        Bantaeng” Tanggal 12 November 2017, Dinas Pekerjaan Umum
                        dan Penataan Ruang sebagai instansi yang mempunyai tugas
                        melaksanakan penyelenggaraan pemerintah daerah di bidang
                        pekerjaan umum dan penataan ruang, ini mempunyai fungsi
                        sebagai berikut :
                    </p>
                    <p>
                        mampu memberikan pelayanan umum kepada masyarakat dalam
                        bidang-bidang pekerjaan umum, penataan ruang. Hanya saja
                        sampai dengan saat ini pelayanan tersebut baru dapat
                        dilaksanakan dalam batas yang minimal.{' '}
                    </p>
                    <ul className="list-decimal ml-6 leading-7">
                        <li>
                            Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten
                            Bantaeng dipimpin oleh Kepala Dinas yang
                            berkedudukan di bawah dan bertanggung jawab kepada
                            Bupati melalui Sekretaris Daerah.
                        </li>
                        <li>
                            Membantu Bupati dalam melaksanakan Urusan
                            Pemerintahan Bidang Pekerjaan Umum dan Penataan
                            Ruang serta Tugas Pembantuan yang menjadi kewenangan
                            Kabupaten Bantaeng.
                        </li>

                        <li>
                            Dinas Pekerjaan umum dan Penataan Ruang Kabupaten
                            Bantaeng dalam melaksanakan tugas sebagaimana
                            dimaksud menyelenggarakan fungsi:
                        </li>
                    </ul>
                    <ul className="list-disc ml-6 leading-7">
                        <li>
                            perumusan kebijakan bidang Pekerjaan umum dan
                            Penataan Ruang;
                        </li>
                        <li>
                            pelaksanaan kebijakan bidang Pekerjaan umum dan
                            Penataan Ruang;
                        </li>
                        <li>
                            pelaksanaan evaluasi dan pelaporan bidang Dinas
                            Pekerjaan umum dan Penataan Ruang
                        </li>
                        <li>
                            pelaksanaan fungsi lain yang diberikan oleh bupati
                            terkait dengan tugas dan fungsinya.
                        </li>
                    </ul>
                    <p>
                        Dari tugas dan fungsi tersebut, tersirat bahwa secara
                        garis besar dinas ini harus dapat atau mampu memberikan
                        pelayanan umum kepada masyarakat dalam bidang-bidang
                        pekerjaan umum, penataan ruang. Hanya saja sampai dengan
                        saat ini pelayanan tersebut baru dapat dilaksanakan
                        dalam batas yang minimal.
                    </p>
                </div>
            </div>
        </AppLayout>
    )
}

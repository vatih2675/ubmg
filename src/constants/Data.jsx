import Alumni from "../pages/Alumni";
import Aman from "../pages/Aman";
import Berita from "../pages/Berita";
import Bpm from "../pages/Bpm";
import Edufecta from "../pages/Edufecta";
import Eletter from "../pages/Eletter";
import Elibrary from "../pages/Elibrary";
import FakultasProdi from "../pages/FakultasProdi";
import AdministrasiBisnis from "../pages/fakultasprodi/prodi/AdministrasiBisnis";
import AdministrasiPemerintahanDaerah from "../pages/fakultasprodi/prodi/AdministrasiPemerintahanDaerah";
import AdministrasiRumahSakit from "../pages/fakultasprodi/prodi/AdministrasiRumahSakit";
import AkuntansiSektorPublik from "../pages/fakultasprodi/prodi/AkuntansiSektorPublik";
import AnalisKesehatan from "../pages/fakultasprodi/prodi/AnalisKesehatan";
import BisnisDigital from "../pages/fakultasprodi/prodi/BisnisDigital";
import Farmasi from "../pages/fakultasprodi/prodi/Farmasi";
import Gizi from "../pages/fakultasprodi/prodi/Gizi";
import HubunganInternasional from "../pages/fakultasprodi/prodi/HubunganInternasional";
import IlmuLingkungan from "../pages/fakultasprodi/prodi/IlmuLingkungan";
import KesehatanKeselamatanKerja from "../pages/fakultasprodi/prodi/KesehatanKeselamatanKerja";
import Manajemen from "../pages/fakultasprodi/prodi/Manajemen";
import ManajemenKontrakPemerintah from "../pages/fakultasprodi/prodi/ManajemenKontrakPemerintah";
import ManajemenS2 from "../pages/fakultasprodi/prodi/ManajemenS2";
import PendidikanKhusus from "../pages/fakultasprodi/prodi/PendidikanKhusus";
import PerpustakaanSainsInformasi from "../pages/fakultasprodi/prodi/PerpustakaanSainsInformasi";
import PromosiKesehatan from "../pages/fakultasprodi/prodi/PromosiKesehatan";
import TeknologiPendidikan from "../pages/fakultasprodi/prodi/TeknologiPendidikan";
import Fasilitas from "../pages/Fasilitas";
import HasilPenelitian from "../pages/HasilPenelitian";
import InformasiPerkuliahan from "../pages/InformasiPerkuliahan";
import InternationalOffice from "../pages/InternationalOffice";
import Jurnal from "../pages/Jurnal";
import Kemahasiswaan from "../pages/Kemahasiswaan";
import Laboratorium from "../pages/Laboratorium";
import Mbkm from "../pages/Mbkm";
import Nasional from "../pages/Nasional";
import PanduanPenelitian from "../pages/PanduanPenelitian";
import Pmb from "../pages/Pmb";
import PusatBahasa from "../pages/PusatBahasa";
import Sejarah from "../pages/Sejarah";
import StrukturOrganisasi from "../pages/StrukturOrganisasi";
import SuratEdaran from "../pages/SuratEdaran";

const Struktur = [
  {
    title: "BPH",
    description: "Badan Pelaksana Harian",
  },
  {
    title: "B. P. MUTU",
    description: "Badan Penjamin Mutu",
  },
  {
    title: "UPMA",
    description: "Unit Penjamin Mutu Akademik",
  },
  {
    title: "REKTOR",
    description: "Pimpinan Universitas",
  },
  {
    title: "WR 1",
    description: "Wakil Rektor 1 Bidang Akademik",
  },
  {
    title: "WR 2",
    description: "Wakil Rektor 2 Bidang Administrasi Umum & Keuangan",
  },
  {
    title: "WR 3",
    description: "Wakil Rektor 3 Bidang Kemahasiswaan",
  },
  {
    title: "BAAK",
    description: "Biro Administrasi Akademik & Kemahasiswaan",
  },
  {
    title: "BAU",
    description: "Biro Administrasi Umum",
  },
  {
    title: "BAK",
    description: "Biro Administrasi Keuangan",
  },
  {
    title: "PPSDM",
    description: "Pusat Pengembangan Sumber Daya Manusia",
  },
  {
    title: "LPPM",
    description: "Lembaga Penelitian & Pengabdian Masyarakat",
  },
  {
    title: "CCLC",
    description: "Center Of Cooperation Development and Languace (Pusat Pengembangan Kerjasama dan Bahasa)",
  },
  {
    title: "DEKAN",
    description: "Pimpinan Fakultas",
  },
  {
    title: "WD 1",
    description: "Wakil Dekan 1 Bidang Akademik",
  },
  {
    title: "WD 2",
    description: "Wakil Dekan 2 Bidang Administrasi Umum & Keuangan",
  },
  {
    title: "WD 3",
    description: "Wakil Dekan 3 Bidang Kemahasiswaan",
  },
  {
    title: "PS 1",
    description: "Program Studi S1 Farmasi",
  },
  {
    title: "PS 2",
    description: "Program Studi S1 Gizi",
  },
  {
    title: "PS 3",
    description: "Program Studi S1 Administrasi Rumah Sakit",
  },
  {
    title: "PS 4",
    description: "Program Studi D3 Analis Kesehatan",
  },
  {
    title: "PS 5",
    description: "Program Studi S1 Manajemen",
  },
  {
    title: "PS 6",
    description: "Program Studi S1 Administrasi Bisnis",
  },
  {
    title: "PS 7",
    description: "Program Studi D3 Administrasi Perkantoran",
  },
  {
    title: "PS 8",
    description: "Program Studi DIII Sekretaris",
  },
];

const dataFasilitas = [
  {
    judul: "Laboratorium",
    foto: "",
  },
  {
    judul: "Sport Center",
    foto: "",
  },
  {
    judul: "Perpustakaan",
    foto: "",
  },
  {
    judul: "Rektorat",
    foto: "",
  },
  {
    judul: "Business Center",
    foto: "",
  },
];

export const PenerimaanMahasiswaBaru = [
    {
        judul: "Pascasarjana Manajemen",
        foto: "pmb-4.jpg",
        bintang: 5
    },
    {
        judul: "Fakultas Sains, Teknologi & Ilmu Kesehatan",
        foto: "pmb-5.jpg",
        bintang: 5
    },
    {
        judul: "Fakultas Ekonomi & Bisnis",
        foto: "pmb-1.jpg",
        bintang: 5
    },
    {
        judul: "Fakultas Ilmu Pendidikan & Budaya",
        foto: "pmb-2.jpg",
        bintang: 5
    },
    {
        judul: "Fakultas Pemerintah & Sektor Publik",
        foto: "pmb-3.jpg",
        bintang: 5
    },
]

const MerdekaBelajarKampusMerdeka = [
    {
        judul: "Pelaksanaan MBKM - Rektor Unifa Tandatangani MoU",
        foto: "mbkm-1.jpg"
    },
    {
        judul: "20 Mahasiswa FEB UBM, Lolos MSIB MBKM",
        foto: "mbkm-2.jpg"
    },
    {
        judul: "FEB Rapat Finalisasi Kurikulum MBKM",
        foto: "mbkm-3.jpg"
    },
    {
        judul: "Hadiri Workshop Penyamaan Persepsi Program MBKM",
        foto: "mbkm-4.jpg"
    },
    {
        judul: "Monitoring Program MBKM dan Magang di Bolsel",
        foto: "mbkm-5.jpg"
    },
]

const dataFakultasProdi = [
    {
        judul: "Fakultas Ekonomi & Bisnis",
        prodi: [
            {
                judul: "Prodi S-1 Bisnis Digital",
                foto: "prodi-feb-1.jpg",
                element: <BisnisDigital />
            },
            {
                judul: "Prodi S-1 Manajemen",
                foto: "prodi-feb-2.jpg",
                element: <Manajemen />
            },
            {
                judul: "Prodi S-1 Administrasi Bisnis",
                foto: "prodi-feb-3.jpg",
                element: <AdministrasiBisnis />
            },
        ]
    },
    {
        judul: "Fakultas Sains, Teknologi & Ilmu Kesehatan",
        prodi: [
            {
                judul: "Prodi D-3 Analis Kesehatan",
                foto: "prodi-fstik-1.jpg",
                element: <AnalisKesehatan />
            },
            {
                judul: "Prodi S-1 Gizi",
                foto: "prodi-fstik-2.jpg",
                element: <Gizi />
            },
            {
                judul: "Prodi S-1 Farmasi",
                foto: "prodi-fstik-3.jpg",
                element: <Farmasi />
            },
            {
                judul: "Prodi S-1 Administrasi Rumah Sakit (ARS)",
                foto: "prodi-fstik-4.jpg",
                element: <AdministrasiRumahSakit />
            },
            {
                judul: "Prodi S-1 Keselamatan & Kesehatan Kerja",
                foto: "prodi-fstik-5.jpg",
                element: <KesehatanKeselamatanKerja />
            },
            {
                judul: "Prodi D-4 Promosi Kesehatan",
                foto: "prodi-fstik-6.jpg",
                element: <PromosiKesehatan />
            },
        ]
    },
    {
        judul: "Fakultas Pemerintahan & Sektor Publik",
        prodi: [
            {
                judul: "Prodi S-1 Hubungan Internasional",
                foto: "prodi-psp-1.jpg",
                element: <HubunganInternasional />
            },
            {
                judul: "Prodi D-4 Administrasi Pemerintahan Daerah",
                foto: "prodi-psp-2.jpg",
                element: <AdministrasiPemerintahanDaerah />
            },
            {
                judul: "Prodi D-4 Akuntansi Sektor Publik",
                foto: "prodi-psp-3.jpg",
                element: <AkuntansiSektorPublik />
            },
            {
                judul: "Prodi D-4 Manajemen Kontrak Pemerintah",
                foto: "prodi-psp-4.jpg",
                element: <ManajemenKontrakPemerintah />
            },
        ]
    },
    {
        judul: "Fakultas Ilmu Pendidikan & Budaya",
        prodi: [
            {
                judul: "Prodi S-1 Teknologi Pendidikan",
                foto: "prodi-ipb-1.jpg",
                element: <TeknologiPendidikan />
            },
            {
                judul: "Prodi S-1 Pendidikan Khusus",
                foto: "prodi-ipb-2.jpg",
                element: <PendidikanKhusus />
            },
            {
                judul: "Prodi S-1 Ilmu Lingkungan",
                foto: "prodi-ipb-3.jpg",
                element: <IlmuLingkungan />
            },
            {
                judul: "Prodi S-1 Perpustakaan & Sains Informasi",
                foto: "prodi-ipb-4.jpg",
                element: <PerpustakaanSainsInformasi />
            },
        ]
    },
    {
        judul: "Program Pascasarjana Manajemen",
        prodi: [
            {
                judul: "Peminatan Manajemen Bisnis",
                foto: "ps-manajemen.jpg",
                element: <ManajemenS2 />
            },
            {
                judul: "Peminatan Manajemen Pendidikan",
                foto: "ps-manajemen.jpg",
                element: <ManajemenS2 />
            },
            {
                judul: "Peminatan Manajemen Inovasi Daerah",
                foto: "ps-manajemen.jpg",
                element: <ManajemenS2 />
            },
            {
                judul: "Peminatan Manajemen Layanan Kesehatan",
                foto: "ps-manajemen.jpg",
                element: <ManajemenS2 />
            },
            {
                judul: "Peminatan Manajemen Sektor Publik / Pemerintahan",
                foto: "ps-manajemen.jpg",
                element: <ManajemenS2 />
            },
        ]
    },
]

export const Menu = [
    {
        title: "PROFIL",
        sub: [
            {
                title: "Sejarah",
                link: "sejarah",
                element: <Sejarah />
            },
            {
                title: "Struktur Organisasi",
                link: "struktur-organisasi",
                element: <StrukturOrganisasi struktur={Struktur} />
            },
            {
                title: "Fasilitas",
                link: "fasilitas",
                element: <Fasilitas fasilitas={dataFasilitas} />
            },
            {
                title: "BPM",
                link: "bpm",
                element: <Bpm />
            },
            {
                title: "PMB",
                link: "pmb",
                element: <Pmb pmb={PenerimaanMahasiswaBaru} />
            },
            {
                title: "MBKM",
                link: "mbkm",
                element: <Mbkm mbkm={MerdekaBelajarKampusMerdeka} />
            },
        ]
    },
    {
        title: "PENDIDIKAN",
        sub: [
            {
                title: "Fakultas & Prodi",
                link: "fakultas-dan-prodi",
                element: <FakultasProdi fakultasprodi={dataFakultasProdi} />
            },
            {
                title: "Informasi Perkuliahan",
                link: "informasi-perkuliahan",
                element: <InformasiPerkuliahan pmb={PenerimaanMahasiswaBaru} />
            },
            {
                title: "Laboratorium",
                link: "laboratorium",
                element: <Laboratorium />
            },
            {
                title: "Edufecta",
                link: "edufecta",
                element: <Edufecta />
            },
            {
                title: "Alumni",
                link: "alumni",
                element: <Alumni />
            },
            {
                title: "Kemahasiswaan",
                link: "kemahasiswaan",
                element: <Kemahasiswaan />
            },
            {
                title: "Pusat Bahasa",
                link: "pusat-bahasa",
                element: <PusatBahasa />
            },
        ]
    },
    {
        title: "PENELITIAN",
        sub: [
            {
                title: "Panduan",
                link: "panduan",
                element: <PanduanPenelitian />
            },
            {
                title: "Hasil Penelitian",
                link: "hasil-penelitian",
                element: <HasilPenelitian />
            },
            {
                title: "Jurnal",
                link: "jurnal",
                element: <Jurnal />
            },
            {
                title: "International",
                link: "international",
                element: <InternationalOffice />
            },
            {
                title: "Nasional",
                link: "nasional",
                element: <Nasional />
            },
        ]
    },
    {
        title: "E-CAMPUS",
        sub: [
            {
                title: "E-Letter",
                link: "e-letter",
                element: <Eletter />
            },
            {
                title: "E-Library",
                link: "e-library",
                element: <Elibrary />
            },
            {
                title: "Aman UBM",
                link: "aman-ubm",
                element: <Aman />
            },
        ]
    },
    {
        title: "PENGUMUMAN",
        sub: [
            {
                title: "Surat Edaran",
                link: "surat-edaran",
                element: <SuratEdaran />
            },
            {
                title: "Berita",
                link: "berita",
                element: <Berita />
            },
        ]
    },
]
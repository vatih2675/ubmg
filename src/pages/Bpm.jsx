import Head from "../components/Head";

export default function Bpm(){
    const title = "Badan Penjamin Mutu";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-5">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <div className="flex justify-center items-start gap-10 mb-5">
          <div className="min-w-4/12 bg-cyan-500 text-white duration-300 transition-all shadow-md cursor-default">
            <img
              src="images/profil/ketua-bpm.jpg"
              alt="Ketua BPM"
              className="w-full"
            />
            <div className="w-full p-5 text-center">
              <h1 className="font-bold">Dr. Ikram Muhammad, M.Si</h1>
              <h3>Kepala BPM Universitas Bina Mandiri Gorontalo</h3>
            </div>
          </div>
          <div className="w-8/12">
            <h1 className="font-bold text-xl mb-2">Tentang Kami</h1>
            <p className="text-justify mb-5">
              Pembentukan Badan Penjaminan Mutu Univeristas (BPMU) merupakan
              amanah dari Undang-Undang. Undang-Undang No. 20 Tahun 2003 tentang
              Sistem Pendidikan Nasional Pasal 5 ayat (1) menyebutkan bahwa
              Setiap Warga Negara mempunyai hak yang sama untuk memperoleh
              pendidikan yang bermutu. Selanjutnya pada Pasal 35 ayat (3)
              menyebutkan bahwa Pengembangan Standar nasional Pendidikan serta
              pemantauan dan pelaporan pencapaiannya secara nasional
              dilaksanakan oleh suatu badan standarisasi, dan pengendalian
              pendidikan. Sedangkan Pasal 51 ayat (3) menjelaskan bahwa
              Pengelola Satuan Pendidikan Tinggi dilaksanakan berdasarkan
              prinsip otonomi, akuntabilitas, jaminan mutu, dan evaluasi yang
              transparan.
            </p>
            <p className="text-justify mb-5">
              Pasal 52 ayat (1) UU No. 12 Tahun 2012 tentang Pendidikan Tinggi
              menyebutkan bahwa Penjaminan Mutu Perguruan Tinggi merupakan
              kegiatan sistematik untuk meningkatkan mutu pendidikan tinggi
              secara berencana dan berkelanjutan. Selanjutnya Pasal 53 huruf a
              UU Pendidikan Tinggi menyebutkan bahwa sistem penjaminan mutu
              internal yang dikembangkan oleh Perguruan Tinggi. Sistem
              Penjaminan Mutu Internal sebagaimana pada pasal 1 ayat 3
              Permenristekdikti No. 62 Tahun 2016 tentang Sistem Penjaminan mutu
              merupakan kegiatan sistemik penjaminan mutu pendidikan oleh setiap
              perguruan tinggi secara otonom untuk mengendalikan dan
              meningkatkan penyelenggaraan pendidikan tinggi secara berencana
              dan berkelanjutan.
            </p>
            <p className="text-justify mb-5">
              Dalam konteks tersebut, Badan Penjaminan Mutu UBM Gorontalo
              merupakan lembaga yang diberikan wewenang, tugas dan tanggungjawab
              untuk melakukan pengendalian dan peningkatan penyelenggaraan
              pendidikan tinggi di UBM Gorontalo secara berencana dan
              berkelanjutan dalam mewujudkan tata kelola universitas yang baik
              (good university governance).
            </p>
          </div>
        </div>
        <h1 className="font-bold text-xl mb-2">Visi BPM</h1>
        <p className="text-justify mb-5">
          Terwujudnya Tata Kelola Akademik dan Non Akademik yang Bermutu Unggul
          Nasional 2025 dan Internasional 2040.
        </p>
        <h1 className="font-bold text-xl mb-2">Misi BPM</h1>
        <ul className="list-decimal ms-5 mb-5">
          <li className="mb-3">
            Mewujudkan standarisasi mutu kegiatan akademik dan non akademik di
            seluruh unit kerja UMBG
          </li>
          <li className="mb-3">
            Mewujudkan Kendali dan Audit Mutu yang profesional dan
            berkelanjutan.
          </li>
          <li className="">
            Mewujudkan perolehan Akreditasi Terbaik Program Studi dan Institusi
            Universitas.
          </li>
        </ul>
        <h1 className="font-bold text-xl mb-2">Sasaran BPM</h1>
        <ul className="list-decimal ms-5 mb-5">
          <li className="mb-3">
            <span className="font-bold">2019-2020</span> Terwujudnya pemenuhan
            kebijakan mutu, dokumen mutu dan manual prosedur mutu di bidang
            akademik dan non akademik secara menyeluruh di UBMG
          </li>
          <li className="mb-3">
            <span className="font-bold">2020-2021</span> Terwujudnya budaya mutu
            dengan mengoptimalkan sistem monitoring dan evaluasi program dan
            kegiatan unit yang berbasis kinerja, serta audit internal dan
            eksternal dalam mendukung budaya mutu.
          </li>
          <li className="mb-3">
            <span className="font-bold">2021-2022</span> Tercapainya peringkat
            Akreditasi program Studi minimal B untuk seluruh Program Studi dan
            Institusi.
          </li>
          <li className="mb-3">
            <span className="font-bold">2022-2023</span> Terwujudnya tata kelola
            universitas yang baik (good university governance)
          </li>
          <li className="">
            <span className="font-bold">2023-2024</span> Terwujudnya sistem
            penjaminan mutu kesiapan penjaminan mutu berstandar internasional.
          </li>
        </ul>
        <h1 className="font-bold text-xl mb-2">Tugas Pokok dan Fungsi BPM</h1>
        <p className="text-justify mb-5">
          BPMU merupakan suatu badan yang dibentuk oleh Rektor UBM yang memiliki
          fungsi sebagai badan yang membantu Rektor dalam melakukan perencanaan,
          pelaksanaan, pengendalian, evaluasi dan monitoring serta pendorong
          peningkatan mutu tata kelola akademik dan non akademik di lingkungan
          Universitas.
        </p>
        <p className="text-justify mb-2">
          Untuk fungsi tersebut, maka BPMU diberikan tugas :
        </p>
        <ul className="list-decimal ms-5 mb-5">
          <li className="mb-3">
            Mengevaluasi keadaan penjaminan mutu di Universitas.
          </li>
          <li className="mb-3">
            Menyusun kebijakan mutu di lingkungan universitas.
          </li>
          <li className="mb-3">
            Membuat Rencana Strategis penjaminan mutu Universitas 2019-2024.
          </li>
          <li className="mb-3">
            Membentuk organisasi pelaksana sistem penjaminan mutu internal di
            Program Studi dan Unit kerja.
          </li>
          <li className="mb-3">
            Membangun koordinasi dan pengendalian penyediaan Kebijakan, Standar,
            Dokumen dan manual Prosedur.
          </li>
          <li className="mb-3">
            Melakukan monitoring, evaluasi dan audit mutu dalam menciptakan
            budaya mutu.
          </li>
          <li className="mb-3">
            Merekomendasikan perbaikan dan peningkatan mutu kegiatan akademik
            dan non akademik kepada Unit Kerja terkait.
          </li>
          <li className="mb-3">
            Meningkatkan status akreditasi Program Studi menjadi Terbaik (A),
            dengan nilai minimal B.
          </li>
          <li className="">
            Melaporkan kinerja penjaminan mutu unit kerja dan universitas di
            bidang akademik dan non akademik kepada Rektor.
          </li>
        </ul>
        <h1 className="font-bold text-xl text-center mb-2">
          Struktur Organisasi dan Tupoksi Pengelola BPM
        </h1>
        <img
          src="images/strukturbpm.drawio.svg"
          alt="Struktur BPM"
          className="w-6/12 mx-auto mb-10"
        />
        <h1 className="font-bold text-xl text-center mb-2">
          Pathway Pencapaian Good University Governance Tahap I
        </h1>
        <img
          src="images/strukturpathway.drawio.svg"
          alt="Pathway Pencapaian BPM"
          className="w-6/12 mx-auto"
        />
      </section>
    </main>
  );
}

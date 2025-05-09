import { NavLink } from "react-router-dom";

export default function Home({pimpinan, testimonial}){
  return (
    <main>
      <section className="relative w-full h-100 bg-gradient-to-r from-cyan-300/70 to-cyan-500/30 flex justify-center items-center overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src="images/logo-border-white.png" alt="UBMG" className="w-40" />
          <h1 className="uppercase text-4xl font-bold text-white text-shadow-md">
            UNIVERSITAS BINA MANDIRI GORONTALO
          </h1>
          <p className="text-white text-xl font-bold text-shadow-md">
            UNIVERSITAS PROGRESIF DAN BERKINERJA BAIK DI GORONTALO
          </p>
          <p className="text-white text-lg italic mb-5 text-shadow-md">
            Unggul, Profesional dan Mengglobal
          </p>
          <p className="text-white">
            Memiliki 19 Program Studi dan 1 Program Magister Manajemen
          </p>
          <p className="text-white">Yang Populer di Dunia Kerja</p>
        </div>
        <img
          src="images/ubmg.jpg"
          alt="UMBG"
          className="absolute left-0 right-0 w-full object-center -z-1"
        />
      </section>
      <section className="p-10 cursor-default">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>PENJABARAN</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <h1 className="text-center text-4xl font-bold my-5">VISI MISI</h1>
        <p className="w-10/12 text-center mx-auto mb-5">
          “Membangun Sumber Daya Insani yang Berkarakter, Mandiri, dan Berbudi
          Pekerti Luhur melalui Pengelolaan Pendidikan Tinggi yang Profesional
          dan Berdaya Saing”
        </p>
        <div className="flex justify-center items-start gap-5">
          <div className="w-3/12 bg-cyan-50 p-5 text-center text-cyan-500 cursor-pointer hover:text-white hover:bg-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <i className="bi-mortarboard-fill text-6xl"></i>
            <p className="font-bold text-xl mb-3 mt-5">Lulusan</p>
            <p className="">
              Lulusan Universitas Bina Mandiri disiapkan sesuai kebutuhan
              lapangan kerja skala Nasional maupun Internasional
            </p>
          </div>
          <div className="w-3/12 bg-cyan-50 p-5 text-center text-cyan-500 cursor-pointer hover:text-white hover:bg-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <i className="bi-globe text-6xl"></i>
            <p className="font-bold text-xl mb-3 mt-5">Penelitian</p>
            <p className="">
              Universitas Bina Mandiri menjadikan Riset dan Penelitian sebagai
              salah satu agenda pengabdian masyarakat
            </p>
          </div>
          <div className="w-3/12 bg-cyan-50 p-5 text-center text-cyan-500 cursor-pointer hover:text-white hover:bg-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <i className="bi-house-fill text-6xl"></i>
            <p className="font-bold text-xl mb-3 mt-5">Kerjasama</p>
            <p className="">
              UBM Gencar Dalam Membangun Kerjasama Industri Untuk Memaksimalkan
              Pendidikan dan Penyerapan Lulusan
            </p>
          </div>
          <div className="w-3/12 bg-cyan-50 p-5 text-center text-cyan-500 cursor-pointer hover:text-white hover:bg-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <i className="bi-book-fill text-6xl"></i>
            <p className="font-bold text-xl mb-3 mt-5">Pendidikan</p>
            <p className="">
              Pendidikan Di UBM Menghasilkan Lulusan Cerdas, Mandiri, Berbudi
              Pekerti Luhur, Menguasai Science & Teknologi
            </p>
          </div>
        </div>
      </section>
      <section className="p-10 cursor-pointer bg-gray-50">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2 mb-5">
          <i className="bi-filter-left rotate-180"></i>
          <p>TENTANG UBM</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <div className="flex justify-center items-start gap-10">
          <img
            src="images/ubmg.jpg"
            alt="UBMG"
            className="w-6/12 h-110 object-cover object-center shadow-md"
          />
          <div className="w-6/12">
            <h1 className="text-4xl font-bold my-5">
              Universitas Bina Mandiri
            </h1>
            <p className="text-justify mb-5">
              Yayasan Bina Mandiri Gorontalo menyelenggarakan beberapa Perguruan
              Tinggi antara lain, Sekolah Tinggi Ilmu Manajemen (STIM) Boalemo,
              Sekolah Tinggi Ilmu Kesehatan (STIKES) Bina Mandiri Gorontalo dan
              Sekolah Tinggi Ilmu Manajemen dan Bisnis Gorontalo.
            </p>
            <p className="text-justify mb-5">
              Namun Pada Tanggal 18 Oktober 2019 berdasarkan SK KEMENRISTEK
              DIKTI No. 1013/KPT/I/2019 seluruh Perguruan Tinggi dibawah naungan
              Yayasan Bina Mandiri Gorontalo digabung dan berubah bentuk menjadi
              Universitas Bina Mandiri Gorontalo.
            </p>
            <div className="flex justify-center items-center mb-10">
              <div className="w-full">
                <p>
                  <i className="bi-arrow-right text-cyan-500"></i> Visi YBGM
                </p>
                <p>
                  <i className="bi-arrow-right text-cyan-500"></i> Tujuan YBGM
                </p>
              </div>
              <div className="w-full">
                <p>
                  <i className="bi-arrow-right text-cyan-500"></i> Misi YBGM
                </p>
                <p>
                  <i className="bi-arrow-right text-cyan-500"></i> Sasaran YBGM
                </p>
              </div>
            </div>
            <NavLink
              to={"sejarah"}
              className="py-4 px-10 text-white bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:shadow-md"
            >
              Selengkapnya
            </NavLink>
          </div>
        </div>
      </section>
      <section className="p-10 cursor-default">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>YAYASAN BINA MANDIRI</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <h1 className="text-center text-4xl font-bold mb-5">Pimpinan UBMG</h1>
        <div className="flex justify-center items-start gap-5">
          {pimpinan.map((pim, index) => (
            <div
              key={index}
              className="w-3/12 bg-cyan-50 text-center text-cyan-500 cursor-pointer hover:text-white hover:bg-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="w-full aspect-square bg-gray-100 flex justify-center items-center">
                {pim.foto == "" ? (
                  <i className="bi-person-fill text-9xl"></i>
                ) : (
                  <img
                    src={"images/profil/" + pim.foto}
                    alt={pim.nama}
                    className="w-full object-cover object-center"
                  />
                )}
              </div>
              <div className="p-5">
                <p className="font-bold text-xl">{pim.jabatan}</p>
                <p className="">{pim.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-10 cursor-default">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>TESTIMONIAL</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <h1 className="text-center text-4xl font-bold mb-5">
          Our Students Say!
        </h1>
        <div className="flex justify-center items-start gap-5">
          {testimonial.map((tes, index) => (
            <div
              key={index}
              className="w-3/12 bg-cyan-50 text-center text-cyan-500 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="p-5 bg-white">
                {tes.foto == "" ? (
                  <i className="bi-person-fill text-5xl rounded-full overflow-hidden border-4 border-cyan-500 flex justify-center items-center w-20 h-20 mx-auto"></i>
                ) : (
                  <img
                    src={"images/profil/" + tes.foto}
                    alt={tes.nama}
                    className="object-cover object-center rounded-full overflow-hidden border-4 border-cyan-500 flex justify-center items-center w-20 h-20 mx-auto"
                  />
                )}
                <p className="font-bold text-xl">{tes.nama}</p>
                <p className="">{tes.jabatan}</p>
                <p className="">{tes.instansi}</p>
              </div>
              <div className="p-5 bg-cyan-500 text-white">
                <p className="">{tes.komentar}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
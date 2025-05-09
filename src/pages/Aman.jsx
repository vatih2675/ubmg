import Head from "../components/Head";

export default function Aman() {
  const title = "AMAN UBM";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <p className="text-center font-bold text-2xl">
          LAYANAN ASPIRASI PENGADUAN AMAN-UBM
        </p>
        <p className="text-center mb-5">
          Sampaikan Keluhan Anda Langsung Kepada Satuan Tugas AMAN-UBM
        </p>
        <div className="flex justify-center items-start gap-10">
          <div className="w-7/12 border border-gray-300 shadow-md cursor-default">
            <h1 className="w-full p-3 bg-gray-200 text-center text-xl font-bold">
              Sampaikan Laporan Anda Disini
            </h1>
            <div className="w-full flex flex-col gap-4 p-4 border-y border-gray-300">
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label for="klasifikasi" className="ms-2 block w-full">Klasifikasi Laporan <span className="text-red-500">*</span></label>
                <select name="klasifikasi" id="klasifikasi" className="w-full border border-gray-200 p-2 focus:ring-0 focus:outline-none focus:shadow-md">
                  <option value="">- Pilih Klasifikasi -</option>
                  <option value="Pengaduan">Pengaduan</option>
                  <option value="Aspirasi">Aspirasi</option>
                  <option value="Permintaan Informasi">Permintaan Informasi</option>
                </select>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label for="kategori" className="ms-2 block w-full">Kategori Laporan <span className="text-red-500">*</span></label>
                <select name="kategori" id="kategori" className="w-full border border-gray-200 p-2 focus:ring-0 focus:outline-none focus:shadow-md">
                  <option value="">- Pilih Kategori -</option>
                  <option value="Bullying">Bullying</option>
                  <option value="Kekerasan / Penganiayaan">Kekerasan / Penganiayaan</option>
                  <option value="Kekerasan Seksual">Kekerasan Seksual</option>
                  <option value="Gratifikasi / Suap">Gratifikasi / Suap</option>
                  <option value="Permintaan Informasi">Permintaan Informasi</option>
                  <option value="Aspirasi">Aspirasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label for="kategori" className="ms-2 block w-full">Judul <span className="text-red-500">*</span></label>
                <input type="text" name="kategori" id="kategori" className="w-full border border-gray-200 p-2 focus:ring-0 focus:outline-none focus:shadow-md" placeholder="Judul" />
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label for="kategori" className="ms-2 block w-full">Isi Laporan <span className="text-red-500">*</span></label>
                <textarea rows={10} name="kategori" id="kategori" className="w-full border border-gray-200 p-2 focus:ring-0 focus:outline-none focus:shadow-md" placeholder="Isi laporan ..." />
              </div>
              <button type="button" className="py-3 px-5 bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-md cursor-pointer transition-all duration-300"><i className="bi-send me-2"></i>Kirim Laporan</button>
            </div>
          </div>
          <div className="w-5/12 flex flex-col justify-center items-center gap-5 cursor-default">
            <div className="w-full bg-cyan-500 border border-gray-200 flex justify-center items-center">
              <div className="w-4/12 flex flex-col justify-center items-center text-white">
                <span>Diajukan</span>
                <span className="p-2 bg-red-500 rounded-full text-xs">99+</span>
              </div>
              <div className="w-8/12 p-4 bg-white text-sm">
                <h1 className="font-bold mb-2">Menulis Laporan</h1>
                <p className="text-justify">Setelah menulis laporan maka perlu waktu sekitar 3-4 hari untuk masuk kedalam tahap verifikasi laporan.</p>
              </div>
            </div>
            <div className="w-full bg-cyan-500 border border-gray-200 flex justify-center items-center">
              <div className="w-4/12 flex flex-col justify-center items-center text-white">
                <span>Verifikasi</span>
                <span className="p-2 bg-red-500 rounded-full text-xs">99+</span>
              </div>
              <div className="w-8/12 p-4 bg-white text-sm">
                <h1 className="font-bold mb-2">Verifikasi Laporan</h1>
                <p className="text-justify">Verifikasi laporan dilakukan untuk mengklasifikasikan laporan untuk diteruskan ke tim validasi selama 3-4 hari pada jam kerja.</p>
              </div>
            </div>
            <div className="w-full bg-cyan-500 border border-gray-200 flex justify-center items-center">
              <div className="w-4/12 flex flex-col justify-center items-center text-white">
                <span>Validasi</span>
                <span className="p-2 bg-red-500 rounded-full text-xs">99+</span>
              </div>
              <div className="w-8/12 p-4 bg-white text-sm">
                <h1 className="font-bold mb-2">Validasi Laporan</h1>
                <p className="text-justify">Validasi laporan dilakukan selama 4-5 hari di jam kerja untuk menindak lanjuti isi laporan dan menyiapkan final decission.</p>
              </div>
            </div>
            <div className="w-full bg-cyan-500 border border-gray-200 flex justify-center items-center">
              <div className="w-4/12 flex flex-col justify-center items-center text-white">
                <span>Putusan</span>
                <span className="p-2 bg-red-500 rounded-full text-xs">99+</span>
              </div>
              <div className="w-8/12 p-4 bg-white text-sm">
                <h1 className="font-bold mb-2">Final Decission</h1>
                <p className="text-justify">Keputusan akhir didasarkan pada bukti dan hasil penyelidikan langsung dilapangan oleh tim Satgas UBM Aman.</p>
              </div>
            </div>
            <div className="w-full bg-cyan-500 p-5 flex flex-col justify-center items-center text-white">
              <span className="text-xl">Jumlah Laporan</span>
              <span className="py-2 px-5 bg-red-500 rounded-full text-5xl font-bold ">10.000</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Head from "../components/Head";

export default function Berita() {
  const title = "Berita";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <p className="text-center mb-5 font-bold">Temukan Berita dan Informasi Kegiatan, Pengabdian, Penelitian dan Kerjasama UBM</p>
        <div className="w-10/12 mx-auto flex justify-center items-center">
          <input type="search" name="search" id="search" className="w-full p-2 border border-gray-200 focus:ring-0 focus:outline-none" placeholder="Cari..." />
          <button type="button" className="py-2 px-5 bg-cyan-500 hover:bg-cyan-400 text-white cursor-pointer hover:shadow-md transition-all duration-300">Cari</button>
        </div>
      </section>
    </main>
  );
}

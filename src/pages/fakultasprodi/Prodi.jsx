export default function Prodi({title, prodi, changeProdi}){
  function openLink(link){
    window.open(link)
  }
  return (
    <section className="p-12 w-full">
      <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-2">
        <i className="bi-filter-left rotate-180"></i>
        <p>{title}</p>
        <i className="bi-filter-right rotate-180"></i>
      </h6>
      <p className="text-center mb-5 font-bold">{prodi.judul}</p>
      <div className="w-10/12 mx-auto flex justify-center items-start gap-10 mb-10">
        <img src={"images/galeri/"+prodi.foto} alt={prodi.judul} className="min-w-4/12" />
        {prodi.element}
      </div>
      <div className="w-full flex justify-center items-center gap-5">
        <span onClick={() => changeProdi(null)} className="py-2 px-4 bg-cyan-500 text-white hover:bg-cyan-400 cursor-pointer transition-all duration-300 hover:shadow-md">Kembali</span>
        <span onClick={() => openLink("https://pmb.ubm.educampus.id/")} className="py-2 px-4 bg-cyan-800 text-white hover:bg-cyan-700 cursor-pointer transition-all duration-300 hover:shadow-md">Daftar Sekarang</span>
      </div>
    </section>
  );
}
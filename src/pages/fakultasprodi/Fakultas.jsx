export default function Fakultas({ title, fakultas, changeFakultas, changeProdi}) {
  return (
    <section className="p-12 w-full text-center">
      <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-2">
        <i className="bi-filter-left rotate-180"></i>
        <p>{title}</p>
        <i className="bi-filter-right rotate-180"></i>
      </h6>
      <p className="text-center mb-5 font-bold">
        Berikut Adalah Detail Informasi Program Studi dari {title}
      </p>
      <div className="flex justify-center items-start gap-5 flex-wrap mb-5">
        {fakultas.prodi.map((pm, index) => (
          <div
            key={index}
            onClick={() => changeProdi(index)}
            className="w-3/12 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer text-white text-center"
          >
            <img src={"images/galeri/"+pm.foto} alt={pm.judul} className="w-full" />
            <div className="p-5 bg-cyan-500">
              <h1 className="text-xl font-bold">{pm.judul}</h1>
            </div>
          </div>
        ))}
      </div>
      <span onClick={() => changeFakultas(null)} className="mx-auto inline-block py-2 px-4 bg-cyan-500 text-white hover:bg-cyan-400 transition-all duration-300 cursor-pointer">
        Kembali
      </span>
    </section>
  );
}
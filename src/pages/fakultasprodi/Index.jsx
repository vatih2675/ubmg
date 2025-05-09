export default function Index({title, fakultasprodi, changeFakultas}){
  return (
    <section className="p-12 w-full">
      <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-2">
        <i className="bi-filter-left rotate-180"></i>
        <p>{title}</p>
        <i className="bi-filter-right rotate-180"></i>
      </h6>
      <p className="text-center mb-5 font-bold">
        Universitas Bina Mandiri Memiliki 5 Fakultas dan 17 Program Studi Yang
        Terakreditasi
      </p>
      <div className="flex justify-center items-start gap-5 flex-wrap">
        {fakultasprodi.map((pm, index) => (
          <div
            key={index}
            onClick={() => changeFakultas(index)}
            className="w-3/12 h-30 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer px-5 flex justify-center items-center bg-cyan-500 text-white text-center"
          >
            <h1 className="text-xl font-bold">{pm.judul}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
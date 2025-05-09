import Head from "../components/Head";

export default function Pmb({pmb}){
    const title = "Penerimaan Mahasiswa Baru";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-5">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <div className="flex justify-center items-start gap-5 flex-wrap">
          {pmb.map((pm, index) => (
            <div
              key={index}
              className="w-3/12 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={"images/galeri/" + pm.foto}
                alt={pm.judul}
                className="w-full"
              />
              <div className="p-5 bg-cyan-500 text-white text-center">
                <h1 className="text-xl font-bold">{pm.judul}</h1>
                <div className="flex justify-center items-center gap-1">
                  {(() => {
                    const biStar = [];
                    for (let i = 1; i <= pm.bintang; i++) {
                      biStar.push(<i key={i} className="bi-star-fill"></i>);
                    }
                    return biStar;
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

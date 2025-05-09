import Head from "../components/Head";

export default function Fasilitas({fasilitas}){
    const title = "Fasilitas";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <div className="flex justify-center flex-wrap items-start gap-5 mt-5">
          {fasilitas.map((fas, index) => (
            <div
              key={index}
              className="w-3/12 cursor-pointer text-cyan-500 hover:text-white bg-cyan-50 hover:bg-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="w-full bg-gray-100 flex justify-center items-center">
                {fas.foto != "" ? (
                  <img
                    src={"images/galeri/" + fas.foto}
                    alt={fas.judul}
                    className="w-full object-cover object-center"
                  />
                ) : (
                  <i className="bi-buildings text-9xl"></i>
                )}
              </div>
              <div className="p-5 text-center font-bold">{fas.judul}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import Head from "../components/Head";

export default function StrukturOrganisasi({struktur}){
    const title = "Struktur Organisasi";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <h1 className="text-cyan-500 font-bold text-2xl text-center">
          UNIVERSITAS BINA MANDIRI GORONTALO
        </h1>
        <img
          src="images/strukturorganisasi.drawio.svg"
          alt="Struktur Organisasi"
          className="w-9/12 mx-auto my-5"
        />
        <div className="w-9/12 mx-auto">
          <p className="font-bold">Keterangan :</p>
          <table className="w-full">
            <tbody>
              {struktur.map((strk, index) => (
                <tr key={index}>
                  <td className="w-[15%]">{strk.title}</td>
                  <td className="w-[2%]">:</td>
                  <td>{strk.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

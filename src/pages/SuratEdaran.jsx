import Head from "../components/Head";

export default function SuratEdaran() {
  const title = "Surat Edaran";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <p className="text-center mb-5 font-bold">Surat Edaran UMBG</p>
      </section>
    </main>
  );
}

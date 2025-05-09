import Head from "../components/Head";

export default function Edufecta() {
  const title = "Edufecta";
  const link = "https://edufecta.com";
  function openLink(){
    window.open(link)
  }
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full">
        <h6 className="text-cyan-500 flex justify-center items-end gap-2 uppercase mb-2">
          <i className="bi-filter-left rotate-180"></i>
          <p>{title}</p>
          <i className="bi-filter-right rotate-180"></i>
        </h6>
        <p className="text-center mb-5">Halaman Akan dialihkan ke <span onClick={openLink} className="hover:text-cyan-500 font-bold transition-all duration-300 cursor-pointer">{link}</span></p>
      </section>
      {openLink()}
    </main>
  );
}

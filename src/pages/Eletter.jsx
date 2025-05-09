import Head from "../components/Head";

export default function Eletter() {
  const title = "E-Letter";
  return (
    <main>
      <Head title={title} />
      <section className="p-12 w-full flex justify-center items-center gap-10">
        <div className="w-6/12">
          <img src="images/logo.png" alt="" className="w-100 mx-auto" />
        </div>
        <div className="w-6/12 shadow-md p-10 rounded-xl border border-gray-100">
          <h1 className="text-center text-cyan-500 text-3xl font-bold mb-10">Login Aplikasi</h1>
          <div className="w-full rounded-lg py-2 px-3 border border-gray-200 flex flex-col justify-center items-start mb-3">
            <label for="email" className="text-xs text-gray-500 block w-full">Email</label>
            <input type="email" name="email" id="email" className="w-full focus:ring-0 focus:outline-none" />
          </div>
          <div className="w-full rounded-lg py-2 px-3 border border-gray-200 flex flex-col justify-center items-start mb-3">
            <label for="password" className="text-xs text-gray-500 block w-full">Password</label>
            <input type="password" name="password" id="password" className="w-full focus:ring-0 focus:outline-none" />
          </div>
          <div className="flex justify-between items-start mb-3">
            <div className="flex flex-col gap-1">
              <span className="cursor-pointer hover:text-cyan-500 transition-all duration-300">Register Now</span>
              <span className="cursor-pointer hover:text-cyan-500 transition-all duration-300">Forgot password?</span>
            </div>
            <button type="button" className="bg-cyan-500 hover:bg-cyan-400 hover:shadow-md rounded-lg cursor-pointer py-2 px-5 text-white transition-all duration-300">Login</button>
          </div>
        </div>
      </section>
    </main>
  );
}

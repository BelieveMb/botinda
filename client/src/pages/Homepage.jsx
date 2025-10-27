import react from "react";
// import logo from "../assets/logo-main.png"
import { MainButton } from "../components/smallComponents/mainButton";

export default function Homepage() {

  return (
    <section className="w-full layoutMain ">
      <aside className="w-80 lg:w-xl flex flex-col justify-center items-center">
        <div className="my-40 flex flex-col justify-center items-center">
          <div className="border border-red-400 w-40 lg:w-80 h-44 lg:h-60">img</div>
          {/* <img source={logo} alt="logo Botinda," width="8" className="border border-red-500" /> */}
          <h1 class="text-2xl lg:text-3xl font-semibold tracking-tight text-balance text-white sm:text-7xl text-center">Je géres tes commandes pendant que tu dors.</h1>

        </div>
        <MainButton title="👉 Commencez gratuitement" />
      </aside>

      <div className="my-8 lg:my-6">
        <p>© BoTinda 2025 | Contact | CGU</p>
      </div>

    </section>
  );
}
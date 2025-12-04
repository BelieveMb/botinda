import react from "react";
import { MainButton } from "../components/smallComponents/mainButton";

export default function Homepage() {





  return (
    <section className="w-full layoutMain ">
      <aside className="w-full lg:w-xl flex flex-col justify-center items-center">
        <div className="my-40 flex flex-col justify-center items-center">
          <img src="../../public/logo-main.png" alt="logo Botinda,"  className="h-64 w-64 -mb-20 lg:h-96 lg:w-80 lg:-mb-32" />
          <h1 class="text-xl lg:text-xl font-semibold tracking-tight text-balance text-white sm:text-7xl text-center lg:w-56">Je géres tes commandes pendant que tu dors.</h1>

        </div>
        <MainButton title="👉 Commencez gratuitement" />
      </aside>

      <div className="my-8 lg:my-6 text-center">
        <p>© BoTinda 2025 | Contact | CGU</p>
      </div>

    </section>
  );
}
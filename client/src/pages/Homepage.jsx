import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../components/smallComponents/mainButton";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <section className="w-full layoutMain bg-[#002D6B] text-white py-10 px-4 lg:px-8">
      {/* Conteneur principal */}
      <aside className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-8">
        
        {/* Logo image */}
        <div className="my-10 flex flex-col justify-between items-center">
          <img
            src="/assets/logoBotinda.png" // ⚠️ Assure-toi que ce chemin est correct
            alt="Logo BoTinda AI – To Tinda, To Track, To Gérer"
            className="w-80 lg:w-80 h-auto object-contain rounded-lg shadow-lg mb-20"
            loading="lazy" // Optimisation performance
          />
          
          <h1 className="text-xl lg:text-3xl font-semibold tracking-tight text-balance sm:text-7xl text-center px-4 leading-tight mb-30">
            Je gère tes commandes pendant que tu dors.
          </h1>
        </div>

        {/* Bouton CTA */}
        <MainButton title="👉 Commencez gratuitement" onClick={() => navigate('/Login')} />

      </aside>

      {/* Footer */}
      <div className="my-16 lg:my-6 text-center text-sm text-gray-300">
        <p>© BoTinda 2025 | Contact | CGU</p>
      </div>

    </section>

  );
}
// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButton from '../components/smallComponents/AuthButton';
import PhoneInput from '../components/smallComponents/PhoneInput';


const Login = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();   

  const handleLoginWithPhone = async () => {
    // Ici tu appellerais Supabase pour envoyer le code SMS
    console.log('Envoi code à:', phone);
    navigate('/dashboard');
    // navigate('/verify-code');
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-start lg:justify-between pb-20 px-6 ">
      {/* Header */}
      <div className="my-8 flex items-start justify-between gap-8  w-full ">
        <img src="../assets/logoBotinda.png" alt="BoTinda AI" onClick={() => navigate('/')} className="w-36 h-auto object-contain rounded-lg shadow-lg" />
        <p className="text-12 text-blue-900 mt-1">
          Pas de compte ? <span className="text-primary cursor-pointer font-bold " onClick={() => navigate('/signup')}>S'inscrire</span>
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-16 my-20">
        <h1 className="text-3xl font-poppins font-bold text-primary mb-4">Connexion</h1>
        <p className="text-gray-600 mb-6">Connectez-vous avec</p>

        {/* Social Buttons */}
        <div className="flex justify-between gap-4">
          <AuthButton provider="google">Google</AuthButton>
          <AuthButton provider="apple">Apple ID</AuthButton>
        </div>

        <div className="my-4 text-center text-gray-400">— Ou continuez avec votre numéro —</div>

        {/* Phone Input */}
        <PhoneInput value={phone} onChange={setPhone} placeholder="+243 8xx xxx xxx" />

        {/* Continue Button */}
        <button
          onClick={handleLoginWithPhone}
          disabled={!phone}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium transition ${
            phone ? 'bg-primary hover:bg-blue-800' : 'bg-gray-400 border-blue-500 border cursor-not-allowed'
          }`}
        >
          Continue
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-8">
          This site is protected by -reCAPTCHA and the Google Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
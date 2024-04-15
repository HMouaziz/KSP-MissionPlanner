import image from "../../assets/images/Apollo_11_2.png";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import ksp from "../../assets/images/ksp-logo.png";
import rp1 from "../../assets/images/RP-1 Logo.png";

export const LandingPage = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col justify-center items-center">
      <header className="text-center p-4">
        <img src={logo} alt="Mission Planner logo" className="w-[35rem] mt-10" />
        <p className="text-gray-600 mt-6">
          Plan your space missions with ease.
        </p>
      </header>
      <div className="p-4">
        <button className="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
          <NavLink to="/register">Get Started</NavLink>
        </button>
      </div>

      <div className="mx-32 my-16">
        <img
          src={image}
          alt="App Screenshot"
          className="rounded-lg shadow-xl"
        />
      </div>
      {/*<div className="text-center p-4">*/}
      {/*  <h2 className="text-2xl font-semibold text-gray-800 mt-5">*/}
      {/*    Why Use Mission Planner?*/}
      {/*  </h2>*/}
      {/*  <p className="text-gray-600 mt-2">*/}
      {/*    Our tool helps you calculate trajectories, fuel requirements, and*/}
      {/*    more, ensuring successful missions.*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className="flex flex-col items-center justify-center gap-12 mb-8">
        <p className="text-2xl font-semibold text-gray-800 mt-5">Specially built for:</p>
        <div className="flex flex-row items-center justify-center gap-12">
          <a
            href="https://github.com/KSP-RO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rp1} alt="" className="w-44" />
          </a>
          <a
            href="https://www.kerbalspaceprogram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ksp} alt="" className="w-64" />
          </a>
        </div>
      </div>
      <footer className="text-center text-gray-600 mt-4">
        © {new Date().getFullYear()} Mission Planner. Licensed under the GNU
        General Public License v3.0.
      </footer>
    </div>
  );
};

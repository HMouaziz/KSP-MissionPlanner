import image from '../../assets/images/Apollo_11_2.png'
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
export const LandingPage = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col justify-center items-center">
      <header className="text-center p-4">
        <h1 className="text-4xl font-bold text-gray-900 m-1">
          <img src={logo} alt="Mission Planner logo" className='w-[30rem]'/>
        </h1>
        <p className="text-gray-600 mt-2">
          Plan your space missions with ease.
        </p>
      </header>
      <div className="p-4">
        <button className="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
          <NavLink to='/register'>
            Get Started
          </NavLink>
        </button>
      </div>
      <div className="m-8">
        <img src={image} alt="App Screenshot" className="rounded-lg shadow-xl"/>
      </div>
      <div className="text-center p-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Use KSP Mission Planner?
        </h2>
        <p className="text-gray-600 mt-2">
          Our tool helps you calculate trajectories, fuel requirements, and
          more, ensuring successful missions.
        </p>
      </div>
      <footer className="text-center text-gray-600 mt-4">
        © {new Date().getFullYear()} Mission Planner. All rights reserved.
      </footer>
    </div>
  );
};

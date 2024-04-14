import { Button } from "@/components/ui/button.jsx";
import image from "../../assets/images/f1-turbopump.jpg";

function TurboEncabulator() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <header className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mt-8">
          Transkinetic Pulse Propulsor
        </h1>
        <p className="text-gray-600 mt-2">
          Introducing the future of interstellar propulsion. Enhance your
          spacecraft with our advanced modulation!
        </p>
      </header>
      <div className="m-4">
        <img
          src={image}
          alt="Rocket Engine Turboencabulator"
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Transkinetic Pulse Propulsor?
        </h2>
        <p className="text-gray-600 mt-2">
          Our Transkinetic Pulse Propulsor uses state-of-the-art sporadic
          pre-famulation of ferrocore elements to achieve unprecedented thrust
          modulation.
        </p>
        <p className="text-gray-600 mt-2">
          Features include panendermic semi-boloid stator slots, synchronous
          capacitance flanges, and full phase detractors.
        </p>
      </div>
      <div className="p-4">
        <Button>
          <a
            href="https://en.wikipedia.org/wiki/Turbo_encabulator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </Button>
      </div>
      <footer className="text-center text-gray-600 mx-24 my-4 ">
        <p className="text-sm text-gray-500 italic my-8">
          The information provided herein is intended solely for the
          enlightenment, education, and amusement of the interocitor-endowed
          personnel of advanced perspicacity.
          {"\n"}
          This documentation is confidential and proprietary to the Infundibulum
          Consortium and is disseminated under the auspices of the Prevaricatron
          Exemption Clause. It pertains to the theoretical construct known as
          the Transkinetic Pulse Propulsor, which is a notional derivative of
          the classic Turboencabulator paradigm.
        </p>
        <p className="text-sm text-gray-500 italic my-8">
          Please be advised that any attempt to construct, simulate, or
          otherwise manifest a practical application of the principles described
          herein without the express quantum oversight of certified pan-galactic
          engineers will result in immediate revocation of your thermoplastic
          intermodulation credentials and a compulsory attendance at the next
          scheduled seminar on orbital class discombobulation dynamics.
          Furthermore, it is worth noting that despite the nominally pacific
          intent of this theoretical framework, any resemblance to actual
          missiles, either guided, misguided, or ridge-guided, living or
          defunct, is purely coincidental and unintentionally intentional.
        </p>
        <p className="text-sm text-gray-500 italic my-8">
          Any deployment, proliferation, or misapprehension of this memetic
          technology shall be considered an act of involuntarily voluntary
          compliance with the known laws of hypothetical thermodynamical
          jurisprudence.
        </p>
        <p className="text-sm text-gray-500 italic my-8">
          In conclusion, should you not have the requisite understanding of the
          Modular Gradient Field Theory and its applications in trans-spacial
          propulsion, or if you are currently lacking in a sense of humor,
          kindly refrain from engaging with this material in any capacity beyond
          theoretical contemplation.
        </p>
        © {new Date().getFullYear()} Mission Planner. Licensed under the GNU
        General Public License v3.0.
      </footer>
    </div>
  );
}

export default TurboEncabulator;

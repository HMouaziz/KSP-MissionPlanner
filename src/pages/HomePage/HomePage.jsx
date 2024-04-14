import { Button } from "@/components/ui/button.jsx";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="w-screen h-32 flex items-center justify-center">
      <Button>
        <NavLink to="/missions">Go To Missions</NavLink>
      </Button>
    </div>
  );
};

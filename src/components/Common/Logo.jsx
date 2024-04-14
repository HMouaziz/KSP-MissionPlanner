import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
export const Logo = () => {
  return (
    <Link to="/" className="text-lg font-bold flex items-center w-64 pr-4">
      <img src={logo} alt='Mission Planner'/>
    </Link>
  );
};
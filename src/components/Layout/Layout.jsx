import {Navbar} from "@/components/Navbar/Navbar.jsx";
import {Sidebar} from "@/components/Sidebar/Sidebar.jsx";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  );
};

import { Navbar } from "@/components/Navbar/Navbar.jsx";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

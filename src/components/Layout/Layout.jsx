import { Navbar } from "@/components/Navigation/Navbar/Navbar.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

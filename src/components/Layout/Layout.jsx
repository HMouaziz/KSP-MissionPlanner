import { Navbar } from "@/components/Navbar/Navbar.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

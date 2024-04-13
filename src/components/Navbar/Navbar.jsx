import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {Logo} from "@/components/Navbar/Logo.jsx";
import {FeaturesMenu} from "@/components/Navbar/FeaturesMenu.jsx";
import {ToolsMenu} from "@/components/Navbar/ToolsMenu.jsx";
import {UserDropdown} from "@/components/Navbar/UserDropdown.jsx";
import {NavTest} from "@/components/Navbar/NavTest.jsx";

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-4 py-0 bg-zinc-600 shadow">
      <Logo />
      <NavigationMenu as="header" className="bg-zinc-600 text-white flex justify-between items-center p-4">
        <NavigationMenuList className="flex gap-4">
          <NavTest />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

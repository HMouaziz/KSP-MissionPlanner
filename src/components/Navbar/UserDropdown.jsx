import { NavigationMenuItem } from "@/components/ui/navigation-menu.jsx";
import { UserMenu } from "@/components/Navbar/UserMenu.jsx";

export const UserDropdown = () => {
  return (
    <NavigationMenuItem>
      <UserMenu />
    </NavigationMenuItem>
  );
};

import {
  NavigationMenu, NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.jsx";
import { Logo } from "@/components/Common/Logo.jsx";
import { UserDropdown } from "@/components/Navigation/Navbar/UserDropdown.jsx";
import { SearchButton } from "@/components/Common/SearchButton.jsx";
import { useAuth } from "@/hooks/useAuth.js";
import {Button} from "@/components/ui/button.jsx";
import {ModeToggle} from "@/components/ModeToggle/ModeToggle.jsx";
import {PublicNav} from "@/components/Navigation/Navbar/PublicNav.jsx";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  const { token } = useAuth();

  if (token) {
    return (
      <header className="bg-background flex justify-between items-center px-4 py-0 shadow sticky top-0">
        <Logo />
        <SearchButton />
        <NavigationMenu
          as="header"
          className="text-white flex justify-between items-center p-0"
        >
          <NavigationMenuList className="flex gap-4">
            {/*<QuickActionMenu />*/}
            <UserDropdown />
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    );
  } else {
    return (
      <header className="bg-background flex justify-between items-center px-4 py-2 shadow sticky top-0">
        <NavigationMenu as="header">
          <NavigationMenuList className="flex gap-3">
            <NavigationMenuItem>
              <Logo />
            </NavigationMenuItem>
            <PublicNav/>
            <NavigationMenuItem>
              <Button variant="link">
                <a href="https://github.com/HMouaziz/KSP-MissionPlanner-Client" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu as="header">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="primary">
                <NavLink to='/register'>Sign Up</NavLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="primary" className='text-amber-500'>
                <NavLink to='/login'>Login</NavLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle/>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    );
  }
};

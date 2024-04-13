import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu.jsx";

export const UserDropdown = () => {

  function handleLogout() {
    console.log("Logging out...");
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>User</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          <li><NavigationMenuLink href="/profile">Profile</NavigationMenuLink></li>
          <li><NavigationMenuLink href="/settings">Settings</NavigationMenuLink></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
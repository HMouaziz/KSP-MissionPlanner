import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu.jsx";

export const FeaturesMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Features</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          <li><NavigationMenuLink href="/missions">Missions</NavigationMenuLink></li>
          <li><NavigationMenuLink href="/crafts">Crafts (Coming Soon)</NavigationMenuLink></li>
          <li><NavigationMenuLink href="/launch-complexes">Launch Complexes (Coming Soon)</NavigationMenuLink></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
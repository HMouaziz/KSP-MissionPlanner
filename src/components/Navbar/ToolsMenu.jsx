import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu.jsx";

export const ToolsMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          <li><NavigationMenuLink href="/tool1">Tool 1</NavigationMenuLink></li>
          <li><NavigationMenuLink href="/tool2">Tool 2</NavigationMenuLink></li>
          <li><NavigationMenuLink href="/tool3">Tool 3</NavigationMenuLink></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
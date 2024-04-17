import { cn } from "@/lib/utils.js";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu.jsx";
import {Link, useNavigate} from "react-router-dom";

const tools = [
  {
    title: "DeltaV Route Planner",
    href: "/tools/deltaV-route-planner",
    description:
      "Efficiently calculate propulsion requirements for any space journey, customizable with detailed orbital and transfer paths.",
  },
  {
    title: "Eclipse-Time Calculator",
    href: "/tools/eclipse-time-calculator",
    description:
      "Precisely predict the shadow periods of satellites to optimize solar power generation.",
  },
  {
    title: "Resonant Orbit Calculator",
    href: "/tools/resonant-orbit-calculator",
    description:
      "Quickly compute and optimize resonant orbital parameters for satellite deployments and celestial alignments.",
  },
  {
    title: "Interplanetary Trajectory Planner",
    href: "/tools/interplanetary-trajectory-planner",
    description:
      "Design complex space missions with multi-gravity assist routes to navigate through the solar system efficiently.",
  },
];

export function PublicNav() {
  const nav = useNavigate()

  const handleToolsClick = () => {
    nav('/tools')
  }

  return (
    <>
      <NavigationMenuItem>
      <NavigationMenuTrigger>Features</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/public"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  Features
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Explore our comprehensive suite of space exploration
                  tools.
                  From detailed mission planning and mission
                  archives to extensive craft and launch complex
                  repositories, each feature is designed to optimize and
                  streamline the complexities of space mission management.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href="/missions" title="Missions">
            Advanced tools for meticulous mission planning, ensuring precise
            strategy formulation and execution in space exploration.
          </ListItem>
          <ListItem href="/crafts" title="Crafts">
            Explore and manage a detailed repository of spacecraft, each
            meticulously documented for assignment to future missions.
          </ListItem>
          <ListItem href="/launch" title="Launch Complexes">
            Organize and oversee launch complexes, ensuring they are
            optimized and ready for the diverse needs of various spacecraft
            launches.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
      <NavigationMenuItem onClick={handleToolsClick}>
        <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {tools.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
}

const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";

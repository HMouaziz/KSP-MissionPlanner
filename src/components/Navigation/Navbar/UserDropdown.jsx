import { NavigationMenuItem } from "@/components/ui/navigation-menu.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Avatar } from "@/components/ui/avatar.jsx";
import avatar from "../../../../public/favicon.svg";
import {
  Calculator,
  DraftingCompass,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  PlaneTakeoff,
  PocketKnife,
  Settings,
  User,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

export const UserDropdown = () => {
  const { clearToken } = useAuth();
  const navigate = useNavigate();

  const handleProfile = () => navigate("/profile")

  const handleSettings = () => navigate("/settings")

  const handleShortcuts = () => {}

  const handleMissions = () => navigate("/missions")

  const handleTools = () => navigate("/tools")

  const handleEclipseTime = () => navigate("/tools/eclipse-time-calculator")

  const handleResonantOrbit = () => navigate("/tools/resonant-orbit-calculator")

  const handleGitHub = () => window.open('https://github.com/HMouaziz/KSP-MissionPlanner-Client/', '_blank');

  const handleSupport = () => window.open('https://github.com/HMouaziz/KSP-MissionPlanner-Client/issues', '_blank');

  const handleLogout = () => {
    clearToken();
    navigate("/", { replace: true });
  };

  return (
    <NavigationMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="p-1.5 cursor-pointer">
            <img src={avatar} alt="U" />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleProfile} className='cursor-pointer'>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettings} className='cursor-pointer'>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShortcuts} className='cursor-pointer'>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleMissions} className='cursor-pointer'>
              <PlaneTakeoff className="mr-2 h-4 w-4" />
              <span>Missions</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger onClick={handleTools} className='cursor-pointer'>
                <PocketKnife className="mr-2 h-4 w-4" />
                <span>Tools</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={handleEclipseTime} className='cursor-pointer'>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Eclipse-Time Calculator</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleResonantOrbit} className='cursor-pointer'>
                    <DraftingCompass className="mr-2 h-4 w-4" />
                    <span>Resonant Orbit Calculator</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleGitHub} className='cursor-pointer'>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSupport} className='cursor-pointer'>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className='cursor-pointer'>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NavigationMenuItem>
  );
};

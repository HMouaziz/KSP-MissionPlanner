import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Button } from "@/components/ui/button.jsx";
import { MoreHorizontal } from "lucide-react";
import { DeleteModal } from "@/components/DeleteModal/DeleteModal.jsx";
import {useNavigate} from "react-router-dom";

export const MissionDropdownMenu = ({ id }) => {
  const nav = useNavigate()

  const handleNavigate = (event) => {
    event.stopPropagation();
    nav(`/missions/${id}`);
  };

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Button variant="ghost" onClick={handleNavigate}>View Mission</Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DeleteModal id={id} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

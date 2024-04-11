import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { ChevronDown, ChevronUp, Equal } from "lucide-react";
import { useMissions } from "@/hooks/useMissions.js";

export const PrioritySelector = ({ mission }) => {
  const { updateMission } = useMissions();

  const { id } = mission;
  const { priority } = mission;

  const high = <ChevronUp className="text-rose-800"> High </ChevronUp>;
  const normal = <Equal className="text-amber-500"> Normal </Equal>;
  const low = <ChevronDown className="text-cyan-600"> Low </ChevronDown>;

  let priorityElement;
  switch (priority) {
    case "high":
      priorityElement = high;
      break;
    case "normal":
      priorityElement = normal;
      break;
    case "low":
      priorityElement = low;
      break;
    default:
      priorityElement = normal;
  }

  const handlePriorityChange = (newPriority) => {
    updateMission({ id: id, missionData: { ...mission, priority: newPriority } });
  };
  if (!mission) return "Loading...";
  return (
    <Select value={priority} onValueChange={handlePriorityChange}>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder={priorityElement}>
          {priorityElement}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="high">{high}</SelectItem>
          <SelectItem value="normal">{normal}</SelectItem>
          <SelectItem value="low">{low}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select.jsx";
import {useState} from "react";

export const StatusSelector = ({status}) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const formattedStatus = currentStatus.replace(/_/g, " ").replace(/(^\w|\s\w)/g, (m) =>
    m.toUpperCase(),
  );
  const handleSelectChange = (value) => {
    setCurrentStatus(value);
  };

  return (
    <div className='flex flex-row items-center justify-evenly gap-4 '>
      <p>Status:</p>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder={formattedStatus}>{formattedStatus}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="planned">Planned</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="on_hold">On Hold</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

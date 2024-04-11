import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select.jsx";

import { useState, useEffect } from 'react';
import {useMissions} from "@/hooks/useMissions.js";

export const StatusSelector = ({ mission }) => {
  const { updateMission } = useMissions();

  const [currentStatus, setCurrentStatus] = useState(mission?.status || 'planned');

  useEffect(() => {
    setCurrentStatus(mission?.status || 'planned');
  }, [mission]);

  const getStatusElement = (status) => {
    switch (status) {
      case 'planned':
        return <span className="text-blue-500">Planned</span>;
      case 'in_progress':
        return <span className="text-yellow-500">In Progress</span>;
      case 'completed':
        return <span className="text-green-500">Completed</span>;
      case 'on_hold':
        return <span className="text-orange-500">On Hold</span>;
      case 'failed':
        return <span className="text-red-500">Failed</span>;
      case 'cancelled':
        return <span className="text-gray-500">Cancelled</span>;
      default:
        return <span className="text-gray-500">Unknown</span>;
    }
  };

  const handleStatusChange = (newStatus) => {
    updateMission({ ...mission, status: newStatus });
    setCurrentStatus(newStatus);
  };

  if (!mission) return "Loading...";

  const statusElement = getStatusElement(currentStatus);

  return (
    <div className='flex flex-row items-center justify-evenly gap-4'>
      <p>Status:</p>
      <Select value={currentStatus} onValueChange={handleStatusChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder={statusElement}>
            {statusElement}
          </SelectValue>
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
};

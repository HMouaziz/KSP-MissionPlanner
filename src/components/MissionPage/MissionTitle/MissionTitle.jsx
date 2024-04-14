import {useEffect, useState} from "react";
import { Input } from "@/components/ui/input.jsx";
import {useMissions} from "@/hooks/useMissions.js";

export const MissionTitle = ({ mission }) => {
  const [value, setValue] = useState(mission?.name || '');
  const { updateMission } = useMissions();
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    setValue(mission?.name || '');
  }, [mission]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateMission({ ...mission, name: value });
      setEditing(false);
    } else if (event.key === 'Escape') {
      setValue(mission.name);
      setEditing(false);
    }
  };

  const handleBlur = () => {
    updateMission({ ...mission, name: value });
    setEditing(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div onClick={() => setEditing(true)} className="cursor-text w-[70%] pt-2">
      {isEditing ? (
        <Input
          autoFocus
          type="text"
          className="w-full border border-gray-300 rounded-sm cursor-text p-2 text-2xl font-semibold leading-none tracking-tight"
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <div
          className="w-full cursor-text p-2 text-2xl font-semibold leading-none tracking-tight">{value}</div>
      )}
    </div>
  );
};
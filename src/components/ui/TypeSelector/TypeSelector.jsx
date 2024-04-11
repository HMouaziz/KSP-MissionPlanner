import { useEffect, useState } from "react";
import { useMissions } from "@/hooks/useMissions.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { useTypes } from "@/hooks/useTypes.js";

export const TypeSelector = ({ mission }) => {
  const [currentTypeId, setCurrentTypeId] = useState(mission?.typeId || null);
  const { updateMission } = useMissions();
  const { types } = useTypes();
  const { data: typeList } = types;

  useEffect(() => {
    setCurrentTypeId(mission?.typeId || null);
  }, [mission]);

  const handleTypeChange = (newTypeId) => {
    updateMission({ ...mission, typeId: newTypeId });
    setCurrentTypeId(newTypeId);
  };

  if (!mission || !types) return "Loading...";

  const currentType = typeList.find(type => type.id === currentTypeId);

  return (
    <div className='flex flex-row items-center justify-evenly gap-4'>
      <p>Type:</p>
      <Select value={currentTypeId} onValueChange={handleTypeChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder={currentType ? currentType.name : 'Select Type'}>
            {currentType ? currentType.name : 'Select Type'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {typeList.map((type) => (
              <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
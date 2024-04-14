import {useEffect, useState} from "react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {useObjectives} from "@/hooks/useObjectives.js";

export const TypeSelector = ( {objective} ) => {
  const [currentTypeName, setCurrentTypeName] = useState(objective?.type || null);
  const {updateObjective} = useObjectives()
  const typeList = [
    { name: 'Altitude' },
    { name: 'Flyby' },
    { name: 'OrbitDuration' },
    { name: 'PowerGeneration' },
    { name: 'Speed' },
    { name: 'CrewRequirement' },
    { name: 'Other' },
  ];

  useEffect(() => {
    setCurrentTypeName(objective?.type || '');
  }, [objective]);

  const handleTypeChange = (newTypeName) => {
    updateObjective({ ...objective, type: newTypeName });
    setCurrentTypeName(newTypeName);
  }

  if (!objective || !typeList) return "Loading...";

  const currentType = typeList.find(type => type.name === currentTypeName);

  return (
    <div className='flex flex-row items-center justify-evenly gap-4'>
      <Select value={currentTypeName} onValueChange={handleTypeChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder={currentType ? currentType.name : 'Select Type'}>
            {currentType ? currentType.name : 'Select Type'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {typeList.map((type) => (
              <SelectItem key={type.name} value={type.name}>{type.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
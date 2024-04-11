import {useState, useEffect} from 'react';
import {Input} from "@/components/ui/input.jsx";
import {useMissions} from "@/hooks/useMissions.js";


export const BudgetInput = ({mission}) => {
  const { updateMission } = useMissions();
  const [value, setValue] = useState(mission?.budget || '');
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    setValue(mission?.budget || '');
  }, [mission]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateMission({ ...mission, budget: value });
      setEditing(false);
    } else if (event.key === 'Escape') {
      setValue(mission.budget);
      setEditing(false);
    }
  };

  const handleBlur = () => {
    updateMission({ ...mission, budget: Number(value) });
    setEditing(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div onClick={() => setEditing(true)} className="cursor-text w-[70%] pt-2 flex items-center">
      <label className="mr-2 flex-shrink-0">Budget:</label>
      {isEditing ? (
        <Input
          autoFocus
          type="number"
          className="flex-grow border border-gray-300 rounded-sm p-2 text-lg leading-none"
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <div className="flex-grow p-2 text-lg leading-none">{value ? `$${value}` : 'Not set'}</div>
      )}
    </div>
  );
};
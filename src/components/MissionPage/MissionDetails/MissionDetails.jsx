import { useState } from "react";
import { Textarea } from "@/components/ui/textarea.jsx";

export const MissionDetails = () => {
  const description = 'Sample Description Data';
  const [value, setValue] = useState(description);
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    } else if (event.key === 'Escape') {
      setValue(description);
      setEditing(false);
    }
  };

  const handleBlur = () => {
    setEditing(false);
  };
  return (
    <div onClick={() => setEditing(true)} className="cursor-text w-[70%] pt-2">
      {isEditing ? (
        <Textarea
          className="w-full whitespace-pre-wrap min-h-20 border border-gray-300 rounded-sm cursor-text p-2"
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onChange={e => setValue(e.target.value)}
          value={value}
        />
      ) : (
        <div className="w-full whitespace-pre-wrap min-h-20 border border-gray-300 rounded-sm cursor-text p-2">{value}</div>
      )}
    </div>
  );
};
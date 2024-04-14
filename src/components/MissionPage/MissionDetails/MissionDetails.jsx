import {useEffect, useRef, useState} from "react";
import { Textarea } from "@/components/ui/textarea.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {useMissions} from "@/hooks/useMissions.js";

export const MissionDetails = ({mission}) => {
  const [value, setValue] = useState(mission?.description || '');
  const { updateMission } = useMissions();
  const [isEditing, setEditing] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    setValue(mission?.description || '');
  }, [mission]);

  useEffect(() => {
    if (isEditing) {
      textareaRef.current?.focus();
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      return
    } else if (event.key === 'Enter') {
      updateMission({ ...mission, description: value });
      setEditing(false);
    } else if (event.key === 'Escape') {
      setValue(mission.description);
      setEditing(false);
    }
  };

  const handleBlur = () => {
    updateMission({ ...mission, description: value });
    setEditing(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div onClick={() => setEditing(true)} className="cursor-text w-[70%] pt-2">
      <Badge variant='secondary'>Description</Badge>
      {isEditing ? (
        <Textarea
          ref={textareaRef}
          autoFocus
          className="w-full whitespace-pre-wrap min-h-20 border border-gray-300 rounded-sm cursor-text p-2"
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <div className="w-full whitespace-pre-wrap min-h-20 border border-gray-300 rounded-sm cursor-text p-2">{value}</div>
      )}
    </div>
  );
};
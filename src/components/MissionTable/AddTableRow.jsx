import { TableCell, TableRow } from "@/components/ui/table.jsx";
import { Button } from "@/components/ui/button.jsx";
import { CornerDownLeft, Plus } from "lucide-react";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input.jsx";
import {useMissions} from "@/hooks/useMissions.js";

const Constants = {
  ENTER_KEY: "Enter",
  PLACEHOLDER_TEXT: "Enter mission name...",
  ADD_MISSION: "Add Mission",
  CANCEL: "Cancel",
  SAVE: "Save"
};

export const AddTableRow = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef();
  const {addMission} = useMissions()

  const switchMode = () => setIsEditMode(prevState => !prevState);

  const handleSave = () => {
    const missionData = {
      name: inputRef.current.value,
      description: null,
      budget: null,
      status: 'planned',
      priority: 'normal',
      typeId: 1
    }
    addMission(missionData)
    switchMode()
  };

  const handleKeyDown = (event) => {
    if (event.key === Constants.ENTER_KEY) {
      handleSave();
    }
  };

  return (
    <TableRow>
      <TableCell>
        {isEditMode ? (
          <Input
            ref={inputRef}
            type="text"
            onKeyDown={handleKeyDown}
            placeholder={Constants.PLACEHOLDER_TEXT}
          />
        ) : (
          <Button variant="ghost" className="p-0" onClick={switchMode}>
            <Plus/> <p className="p-2">{Constants.ADD_MISSION}</p>
          </Button>
        )}
      </TableCell>
      <TableCell>
        {isEditMode && (
          <div className='text-right'>
            <Button variant="secondary" onClick={switchMode} className='m-2'>
              <p>{Constants.CANCEL}</p>
            </Button>
            <Button onClick={handleSave}>
              <p className="p-1">{Constants.SAVE}</p> <CornerDownLeft className="pt-1"/>
            </Button>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};
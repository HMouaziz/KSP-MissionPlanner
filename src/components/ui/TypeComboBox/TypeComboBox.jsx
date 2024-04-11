import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query.js";
import { Button } from "@/components/ui/button.jsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.jsx";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer.jsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.jsx";
import {useTypes} from "@/hooks/useTypes.js";
import {useMissions} from "@/hooks/useMissions.js";
import {useEffect} from "react";

export function TypeComboBox( {mission} ) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedType, setSelectedType] = React.useState(null);

  const { updateMission } = useMissions();

  useEffect(() => {
    setSelectedType(mission?.type || 'defaultType');
  }, [mission]);

  const handleTypeChange = (newType) => {
    updateMission({ ...mission, type: newType });
    setSelectedType(newType);
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <div className='flex flex-row items-center justify-evenly gap-4 '>
        <p>Type: </p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
              {selectedType ? <>{selectedType.label}</> : <>Add Type</>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <StatusList setOpen={setOpen} setSelectedStatus={setSelectedType} handleTypeChange={handleTypeChange} />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedType ? <>{selectedType.label}</> : <>Add Type</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedType} handleTypeChange={handleTypeChange} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({ setOpen, setSelectedStatus, handleTypeChange }) {
  const { types } = useTypes();
  const { data } = types;
  const typeList = data.map(type => ({value: type.id, label: type.name}));

  return (
    <Command>
      <CommandInput placeholder="Filter tags..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {typeList.map((type) => (
            <CommandItem
              key={type.value}
              value={type.value}
              onSelect={() => {
                handleTypeChange(type);
              }}
            >
              {type.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


import {Badge} from "@/components/ui/badge.jsx";
import {PrioritySelector} from "@/components/ui/PrioritySelector/PrioritySelector.jsx";
import {TagComboBox} from "@/components/ui/TagComboBox/TagComboBox.jsx";
export const MissionHeader = (  ) => {

  const id = '123fd57'
  return (
    <header className='h-16 w-full flex items-center'>
      <div className='flex flex-row gap-4 p-3'>
        <Badge>{id}</Badge>
        <PrioritySelector/>
        <TagComboBox/>
      </div>
      {/* add favourite button */}
    </header>
  );
};

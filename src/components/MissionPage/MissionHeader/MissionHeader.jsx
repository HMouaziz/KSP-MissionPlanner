import {Badge} from "@/components/ui/badge.jsx";
import {PrioritySelector} from "@/components/Common/PrioritySelector.jsx";
import {TagComboBox} from "@/components/Common/TagComboBox.jsx";
export const MissionHeader = ( {mission} ) => {

  if(!mission) return "Loading..."

  return (
    <header className='h-16 w-[80%] flex items-center'>
      <div className='flex flex-row  gap-4 p-3 '>
        <Badge variant='outline'>{mission.id}</Badge>
        <PrioritySelector mission={mission} />
        <TagComboBox/>
      </div>
      {/* add favourite button */}
    </header>
  );
};

import {Badge} from "@/components/ui/badge.jsx";
import {PrioritySelector} from "@/components/PrioritySelector/PrioritySelector.jsx";
import {TagComboBox} from "@/components/TagComboBox/TagComboBox.jsx";
export const MissionHeader = ( {id} ) => {
  return (
    <header>
      <div>
        <Badge>{id}</Badge>
        <PrioritySelector/>
        <TagComboBox/>
      </div>
      {/* add favourite button */}
    </header>
  );
};

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { StatusSelector } from "@/components/ui/StatusSelector/StatusSelector.jsx";
import { TypeComboBox } from "@/components/ui/TypeComboBox/TypeComboBox.jsx";
import { BudgetInput } from "@/components/ui/BudgetInput/BudgetInput.jsx";
import { DateRangePicker } from "@/components/ui/DateRangePicker/DateRangePicker.jsx";

export const MissionInfo = ({ mission }) => {

  if (!mission) return "Loading...";
  return (
    <Card className="border-none shadow-none w-[80%]">
      <CardHeader>
        <CardTitle>{mission.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-evenly ">
          <TypeComboBox mission={mission}/>
          <StatusSelector mission={mission} />
        </div>
        <div className="flex flex-row items-center justify-evenly ">
          <BudgetInput mission={mission}/>
          <DateRangePicker /> {/* not implemented */}
        </div>
      </CardContent>
    </Card>
  );
};

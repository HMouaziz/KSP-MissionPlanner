import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { StatusSelector } from "@/components/ui/StatusSelector/StatusSelector.jsx";
import { BudgetInput } from "@/components/ui/BudgetInput/BudgetInput.jsx";
import { DateRangePicker } from "@/components/ui/DateRangePicker/DateRangePicker.jsx";
import {MissionTitle} from "@/components/MissionPage/MissionTitle/MissionTitle.jsx";
import {TypeSelector} from "@/components/ui/TypeSelector/TypeSelector.jsx";

export const MissionInfo = ({ mission }) => {
  if (!mission) return "Loading...";
  return (
    <Card className="border-none shadow-none w-[80%]">
      <CardHeader>
        <CardTitle>{<MissionTitle mission={mission}/>}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-evenly ">
          <TypeSelector mission={mission}/>
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

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {StatusSelector} from "@/components/ui/StatusSelector/StatusSelector.jsx";
import {TypeComboBox} from "@/components/ui/TypeComboBox/TypeComboBox.jsx";
import {BudgetInput} from "@/components/ui/BudgetInput/BudgetInput.jsx";
import {DateRangePicker} from "@/components/ui/DateRangePicker/DateRangePicker.jsx";

export const MissionInfo = () => {
  const name = "Apollo 13";
  const status = "planned";

  return (
    <Card className='border-none shadow-none w-full'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-evenly ">
          <TypeComboBox />
          <StatusSelector status={status}/>
        </div>
        <div className="flex flex-row items-center justify-evenly ">
          <BudgetInput />
          <DateRangePicker />
        </div>
      </CardContent>
    </Card>
  );
};

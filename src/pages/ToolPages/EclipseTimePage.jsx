import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {EclipseTimeForm} from "@/components/Forms/EclipseTimeForm.jsx";
import {useState} from "react";
import ComingSoonSmall from "@/components/Common/ComingSoonSmall.jsx";

export const EclipseTimePage = () => {
  const [formattedTime, setFormattedTime] = useState('Fill the form above to calculate.');

  const handleTimeCalculated = (time) => {
    setFormattedTime(time);
  };

  return (
    <div className="w-full flex items-center justify-center p-32">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Eclipse-Time Calculator</CardTitle>
          <CardDescription>Precisely predict the shadow periods of satellites to optimize solar power generation.</CardDescription>
        </CardHeader>
        <CardContent className='flex '>
          <EclipseTimeForm onTimeCalculated={handleTimeCalculated} />
          <ComingSoonSmall targetDate='2024-05-19T00:00:00' />
        </CardContent>
        <CardFooter>
          <p>Maximum transit time: {formattedTime}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

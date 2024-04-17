import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {EclipseTimeForm} from "@/components/Forms/EclipseTimeForm.jsx";
import {useState} from "react";

export const EclipseTimePage = () => {
  const [formattedTime, setFormattedTime] = useState('Calculating...');

  const handleTimeCalculated = (time) => {
    setFormattedTime(time);
  };

  return (
    <div className="w-full flex items-center justify-center p-32">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <EclipseTimeForm onTimeCalculated={handleTimeCalculated} />
        </CardContent>
        <CardFooter>
          <p>{formattedTime}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

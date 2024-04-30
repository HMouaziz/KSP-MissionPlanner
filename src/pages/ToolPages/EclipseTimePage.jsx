import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { EclipseTimeForm } from "@/components/Forms/EclipseTimeForm.jsx";
import { useEffect, useState } from "react";
import { eclipseService } from "@/services/eclipseService.js";
import {formatDuration} from "@/utils/formatDuration.js";
import {EclipseCanvas} from "@/components/R3F/Eclipse/EclipseCanvas.jsx";

export const EclipseTimePage = () => {
  const [formData, setFormData] = useState({
    apoapsis: "250",
    periapsis: "250",
    inclination: 0,
    bodyId: 3,
  });
  const [visualisationData, setVisualisationData] = useState({
    eccentricity: 0,
    inclination: 0,
    semi_major_axis: 6371250,
    semi_minor_axis: 6371250
  })
  const [calculationResult, setCalculationResult] = useState(null);

  const handleFormSubmit = (newFormData) => {
    setFormData(newFormData);
  };

  useEffect(() => {
    const calculate = async () => {
      try {
        console.log(formData)
        const response = await eclipseService.calculate({ ...formData });
        console.log(response)
        setVisualisationData(response?.visualization)
        setCalculationResult(response?.result);
      } catch (error) {
        console.error("Failed to calculate eclipse time:", error);
      }
    };
    calculate();
  }, [formData]);

  return (
    <div className="w-full flex items-center justify-center p-32">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Eclipse-Time Calculator</CardTitle>
          <CardDescription>
            Precisely predict the shadow periods of satellites to optimize solar
            power generation.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <EclipseTimeForm onSubmit={handleFormSubmit} />
          <EclipseCanvas/>
        </CardContent>
        <CardFooter>
          <p>Maximum transit time: {formatDuration(calculationResult) || ''}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

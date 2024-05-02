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
    longitudeOfAscendingNode: 0,
    argumentOfPeriapsis: 0,
    bodyId: 3,
  });
  const [visualisationData, setVisualisationData] = useState({
    solarDistance: 149598261150,
    soi: 924649202,
    centralMass: 5.972e24,
    celestialBodySize: 6371000,
    celestialBodyColor: "lightblue",

    semiMajorAxis: 6371250,
    semiMinorAxis: 6371250,
    inclination: 0,
    longitudeOfAscendingNode: 0,
    argumentOfPeriapsis: 0,
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
          <EclipseCanvas data={visualisationData}/>
        </CardContent>
        <CardFooter>
          <p>Maximum transit time: {formatDuration(calculationResult) || ''}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

import {Calculator, DraftingCompass} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button.jsx";
import {NavLink} from "react-router-dom";

export const ToolsPage = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Eclipse Time Calculator</CardTitle>
          <Calculator className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          Precisely predict the shadow periods of satellites to optimize solar power generation.
        </CardContent>
        <CardFooter className='flex justify-center '>
          <NavLink to='/tools/eclipse-time-calculator'><Button className='bg-amber-500'> Calculate </Button></NavLink>
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Resonant Orbit Calculator</CardTitle>
          <Calculator className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          Quickly compute and optimize resonant orbital parameters for satellite deployments and celestial alignments.
        </CardContent>
        <CardFooter className='flex justify-center '>
          <Button className='bg-amber-500'> Calculate </Button>
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">DeltaV Route Planner</CardTitle>
          <DraftingCompass className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          Efficiently calculate propulsion requirements for any space journey, customizable with detailed orbital and transfer paths.
        </CardContent>
        <CardFooter className='flex justify-center '>
          <Button className='bg-amber-500'> Calculate </Button>
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Interplanetary Trajectory Planner</CardTitle>
          <DraftingCompass className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          Design complex space missions with multi-gravity assist routes to navigate through the solar system efficiently.
        </CardContent>
        <CardFooter className='flex justify-center '>
          <Button className='bg-amber-500'> Calculate </Button>
        </CardFooter>
      </Card>
    </div>
    </main>
  );
};

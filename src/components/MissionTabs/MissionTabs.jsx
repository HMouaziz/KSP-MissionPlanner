import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {MissionDetails} from "@/components/MissionDetails/MissionDetails.jsx";
import {MissionObjectives} from "@/components/MissionObjectives/MissionObjectives.jsx";
import {MissionStages} from "@/components/MissionStages/MissionStages.jsx";

export function MissionTabs() {
  return (
    <Tabs defaultValue="details" className="w-full flex flex-col items-center ">
      <TabsList className="grid w-[80%] grid-cols-3">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="objectives">Objectives</TabsTrigger>
        <TabsTrigger value="stages">Stages</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className='w-full flex flex-col items-center'>
        <MissionDetails />
      </TabsContent>
      <TabsContent value="objectives" className='w-full flex flex-col items-center'>
        <MissionObjectives />
      </TabsContent>
      <TabsContent value="stages" className='w-full flex flex-col items-center'>
        <MissionStages />
      </TabsContent>
    </Tabs>
  )
}

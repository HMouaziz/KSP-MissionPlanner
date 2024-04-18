import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.jsx"
import {MissionDetails} from "@/components/MissionPage/MissionDetails/MissionDetails.jsx";
import MissionObjectives from "@/components/MissionPage/MissionObjectives/MissionObjectives.jsx";
import ComingSoonSmall from "@/components/Common/ComingSoonSmall.jsx";

export function MissionTabs( {mission} ) {
  return (
    <Tabs defaultValue="details" className="w-full flex flex-col items-center ">
      <TabsList className="grid w-[80%] grid-cols-3">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="objectives">Objectives</TabsTrigger>
        <TabsTrigger value="stages">Stages</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className='w-full flex flex-col items-center'>
        <MissionDetails mission={mission} />
      </TabsContent>
      <TabsContent value="objectives" className='w-full flex flex-col items-center'>
        <MissionObjectives />
      </TabsContent>
      <TabsContent value="stages" className='w-full flex flex-col items-center'>
        <ComingSoonSmall targetDate='2024-05-19T00:00:00'/>
      </TabsContent>
    </Tabs>
  )
}

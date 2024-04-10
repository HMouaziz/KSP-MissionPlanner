import {MissionHeader} from "@/components/MissionHeader/MissionHeader.jsx";
import {MissionInfo} from "@/components/MissionInfo/MissionInfo.jsx";
import {MissionTabs} from "@/components/MissionTabs/MissionTabs.jsx";

export const MissionPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <MissionHeader />
      <MissionInfo />
      <MissionTabs />
    </div>
  );
};

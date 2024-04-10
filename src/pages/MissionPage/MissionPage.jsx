import {MissionHeader} from "@/components/MissionPage/MissionHeader/MissionHeader.jsx";
import {MissionInfo} from "@/components/MissionPage/MissionInfo/MissionInfo.jsx";
import {MissionTabs} from "@/components/MissionPage/MissionTabs/MissionTabs.jsx";

export const MissionPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <MissionHeader />
      <MissionInfo />
      <MissionTabs />
    </div>
  );
};

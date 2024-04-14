import { MissionHeader } from "@/components/MissionPage/MissionHeader/MissionHeader.jsx";
import { MissionInfo } from "@/components/MissionPage/MissionInfo/MissionInfo.jsx";
import { MissionTabs } from "@/components/MissionPage/MissionTabs/MissionTabs.jsx";
import { useParams } from "react-router-dom";
import { useMissions } from "@/hooks/useMissions.js";
import getMissionById from "@/utils/getMissionById.js";

export const MissionPage = () => {
  const { id } = useParams();
  const { missions } = useMissions();
  const { data, isLoading, Error: error } = missions;

  if (isLoading) return "loading..";

  const mission = getMissionById(data, Number(id));

  if (error) return `An error has occurred: ${error}`;

  return (
    <div className="flex flex-col items-center justify-center">
      <MissionHeader mission={mission} />
      <MissionInfo mission={mission} />
      <MissionTabs mission={mission} />
    </div>
  );
};

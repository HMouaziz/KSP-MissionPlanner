import { DataTable } from "./DataTable.jsx";
import { useParams } from "react-router-dom";
import { DeleteObjectiveModal } from "@/components/DeleteModal/DeleteObjectiveModal.jsx";
import { useObjective } from "@/hooks/useObjective.js";
import {TypeSelector} from "@/components/MissionPage/MissionObjectives/TypeSelector.jsx";

export default function MissionObjectives() {
  const { id } = useParams();
  const objectives = useObjective(id);
  const { data: objectiveList } = objectives;

  const columns = [
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => {
        console.log(row.original)
        return <TypeSelector objective={row.original}/>
      },
    },
    {
      accessorKey: "data",
      header: "Data",
    },
    {
      id: "delete",
      cell: ({ row }) => {
        const id = row.original.id;
        return <DeleteObjectiveModal id={id} />;
      },
    },
  ];

  if (!objectiveList) return "Loading...";
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={objectiveList} />
    </div>
  );
}

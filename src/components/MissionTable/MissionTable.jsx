import { DataTable } from "../DataTable/DataTable.jsx";
import { ArrowUpDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import {useMissions} from "@/hooks/useMissions.js";
import {MissionDropdownMenu} from "@/components/MissionDropdownMenu/MissionDropdownMenu.jsx";


export default function MissionTable() {
    const { missions } = useMissions()
  const { data, isLoading, error} = missions

  const columns = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.original.id
        return (
          <MissionDropdownMenu id={id} />
        )
      },
    },
  ]

  if (isLoading) return "Loading...";
  if (error) return `An error has occurred: ${error}`;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}

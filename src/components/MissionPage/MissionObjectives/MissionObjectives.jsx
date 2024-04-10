import { DataTable } from "./DataTable.jsx";
import { ArrowUpDown} from "lucide-react"
import { Button } from "@/components/ui/button.jsx"
import {MissionDropdownMenu} from "@/components/ui/MissionDropdownMenu/MissionDropdownMenu.jsx";


export default function MissionObjectives() {

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

  // if (isLoading) return "Loading...";
  // if (error) return `An error has occurred: ${error}`;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={[]} />
    </div>
  );
}

import { DataTable } from "../DataTable/DataTable.jsx";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import MissionModal from "@/components/MissionModal/MissionModal.jsx";
import {DeleteModal} from "@/components/DeleteModal/DeleteModal.jsx";
import {useMissions} from "@/hooks/useMissions.js";


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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <MissionModal mission_id={id}/>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DeleteModal id={id} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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

import { DataTable } from "../DataTable/DataTable.jsx";
import { useQuery } from "@tanstack/react-query";
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
import axios from "axios";
import MissionModal from "@/components/MissionModal/MissionModal.jsx";
import {DeleteModal} from "@/components/DeleteModal/DeleteModal.jsx";


export default function MissionTable() {
  const {
    isLoading,
    error,
    data,
  } = useQuery({
    queryKey: ["missions"],
    queryFn: async () => {
      const response = await axios
        .get(`http://localhost:5050/api/missions`)
        .then((res) => res.data);
      return response.data;
    },
  });

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
      accessorKey: "launch_date",
      header: () => <div className="text-right">Launch Date</div>,
      cell: ({ row }) => {
        const date = new Date(row.getValue("launch_date"))
        const formatted = new Intl.DateTimeFormat('en-GB').format(date);
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "start_date",
      header: () => <div className="text-right">Start Date</div>,
      cell: ({ row }) => {
        const date = new Date(row.getValue("start_date"))
        const formatted = new Intl.DateTimeFormat('en-GB').format(date);
        return <div className="text-right font-medium">{formatted}</div>
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
              <DropdownMenuItem
              >
                <MissionModal />
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

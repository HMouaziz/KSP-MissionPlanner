import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import {useMission} from "@/hooks/useMission.js";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
const MissionModal = ({ mission_id }) => {
  const { data, isLoading, error } = useMission(mission_id)

  if (isLoading) return "Loading...";
  if (error) return `An error has occurred: ${error}`;


  const {id, name, description, budget, start_date, launch_date} = data

  return (
    <Dialog>
      <DialogTrigger onClick={event => event.stopPropagation()}>
        View Mission</DialogTrigger>
      <DialogContent className="sm:max-w-[95%] sm:max-h-[90%]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <div className='flex-col justify-center'>
            <div>{id}</div>
            <Card>
              <CardHeader>
              </CardHeader>
              <CardContent>
                <Textarea />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>

            <div>{description}</div>
            <div>{budget}</div>
            <div>{start_date}</div>
            <div>{launch_date}</div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MissionModal;

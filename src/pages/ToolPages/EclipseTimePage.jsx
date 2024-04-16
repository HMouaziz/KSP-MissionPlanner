import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {EclipseTimeForm} from "@/components/Forms/EclipseTimeForm.jsx";

export const EclipseTimePage = () => {

  return (
    <div className='w-full flex items-center justify-center p-32'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <EclipseTimeForm />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

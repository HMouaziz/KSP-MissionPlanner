import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { ModeToggle } from "@/components/ModeToggle/ModeToggle.jsx";

export const SecuritySettings = () => {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Ah! a black hat!</CardTitle>
          <CardDescription>
            Auth Auth Auth
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ModeToggle />
        </CardContent>
      </Card>
    </div>
  );
};

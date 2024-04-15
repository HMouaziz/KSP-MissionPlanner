import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { ModeToggle } from "@/components/ModeToggle/ModeToggle.jsx";

export const ShortcutSettings = () => {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Shortcuts Yay!</CardTitle>
          <CardDescription>
            Shortcuts Shortcuts Shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ModeToggle />
        </CardContent>
      </Card>
    </div>
  );
};

import {useParams} from "react-router-dom";
import {GeneralSettings} from "@/components/Settings/GeneralSettings.jsx";
import {SecuritySettings} from "@/components/Settings/SecuritySettings.jsx";
import {ShortcutSettings} from "@/components/Settings/ShortcutSettings.jsx";

export function SettingsContent() {
  let { section } = useParams();

  switch(section) {
    case "general":
      return <GeneralSettings />;
    case "security":
      return <SecuritySettings />;
    case "shortcuts":
      return <ShortcutSettings />;
    default:
      return <GeneralSettings />;
  }
}
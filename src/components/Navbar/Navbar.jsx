import avatar from '../../assets/images/avatar.png'
import {Button} from "@/components/ui/button.jsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";

export const Navbar = () => {
  return (
    <header className="flex justify-end items-center px-4 py-6 bg-gray-700 shadow">

      <nav className=" space-x-4 flex flex-row ">
        <Button className="shadow bg-gray-700" variant="outline">
          Nav menu
        </Button>
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>RO</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

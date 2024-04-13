import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
export const Sidebar = () => {
  const shortcuts = [
    <Link key={0} to='/missions'>M</Link>,
    <Link key={1} to='/crafts'>C</Link>
  ];
  return (
    <aside className='w-16 bg-zinc-700 flex flex-col items-center gap-3 p-3' style={{height: 'calc(100vh - 72px)'}}>
      {shortcuts.map((shortcut, index) => (
        <Button key={index} variant='secondary'>{shortcut}</Button>
      ))}
    </aside>
  );
};
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx"
import { ChevronUp, Equal, ChevronDown } from 'lucide-react';

export const PrioritySelector = () => {

  const high = <ChevronUp className='text-rose-800'> High </ChevronUp>
  const normal = <Equal className='text-amber-500'> Normal </Equal>
  const low = <ChevronDown className='text-cyan-600'> Low </ChevronDown>

  return (
    <Select>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder={<Equal className='text-amber-500'/>} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="high">{high}</SelectItem>
          <SelectItem value="normal">{normal}</SelectItem>
          <SelectItem value="low">{low}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
};

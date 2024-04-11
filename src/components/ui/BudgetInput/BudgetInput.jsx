import {Input} from "@/components/ui/input.jsx";

export const BudgetInput = () => {

  return (
    <div className='flex flex-row items-center justify-evenly gap-4'>
      <p>Budget: </p>
      <Input type="number" />
    </div>
  );
};

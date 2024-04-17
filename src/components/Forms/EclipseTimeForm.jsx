import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import { eclipseService } from '@/services/eclipseService.js'
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getCelestialValues } from '@/utils/getCelestialValues.js'
import {useEffect, useState} from "react";


const FormSchema = z.object({
  body: z
    .string()
})

export const EclipseTimeForm = () => {
  const [bodies, setBodies] = useState([]);
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  useEffect(() => {
    async function fetchData() {
      const processedData = getCelestialValues([], ['name', 'orbiting', 'bodyType']);
      setBodies(processedData);
    }
    fetchData();
  }, []);


  async function onSubmit(data) {
    const selectedBody = bodies.find(body => body.name === data.body);
    const bodyId = selectedBody ? selectedBody.id : null;
    const response = await eclipseService.calculate({ ...data, body: bodyId })
    console.log(response);
  }

  const renderBodies = () => {
    return bodies.map(body => (
      <SelectItem key={body.id} value={body.name} className={body.bodyType === "Planet" ? "font-bold" : ""}>
        {body.name}
      </SelectItem>
    ));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="body"
          render={({field}) => (
            <FormItem>
              <FormLabel>Eclipse Time Calculator</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Celestial body for calculation"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {renderBodies(bodies)}
                </SelectContent>
              </Select>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

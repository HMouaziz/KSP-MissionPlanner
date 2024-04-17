import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { eclipseService } from '@/services/eclipseService.js';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Imported Input component
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCelestialValues } from '@/utils/getCelestialValues.js';
import { useEffect, useState } from "react";
import {formatDuration} from "@/utils/formatDuration.js";

const FormSchema = z.object({
  body: z.string(),
  apoapsis: z.string().transform((val) => Number(val)),
  periapsis: z.string().transform((val) => Number(val))
});

export const EclipseTimeForm = ( {onTimeCalculated} ) => {
  const [bodies, setBodies] = useState([]);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      body: '',         // Default value for the 'body' select
      apoapsis: '',     // Default value for 'apoapsis' input
      periapsis: ''     // Default value for 'periapsis' input
    }
  });

  useEffect(() => {
    async function fetchData() {
      const processedData = getCelestialValues([], ['name', 'orbiting', 'bodyType']);
      setBodies(processedData);
    }
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    const selectedBody = bodies.find(body => body.name === data.body);
    const bodyId = selectedBody ? selectedBody.id : null;
    try {
      console.log(data)
      const response = await eclipseService.calculate({ ...data, body: bodyId });
      console.log(response.data)
      const formattedTime = formatDuration(response.data);
      onTimeCalculated(formattedTime);
    } catch (error) {
      console.error('Failed to calculate eclipse time:', error);
      onTimeCalculated('Error calculating time');
    }
  };

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
                  {renderBodies()}
                </SelectContent>
              </Select>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apoapsis"
          render={({field, fieldState}) => (
            <FormItem>
              <FormLabel>Apoapsis (km)</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="Enter Apoapsis in km"/>
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="periapsis"
          render={({field, fieldState}) => (
            <FormItem>
              <FormLabel>Periapsis (km)</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="Enter Periapsis in km"/>
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

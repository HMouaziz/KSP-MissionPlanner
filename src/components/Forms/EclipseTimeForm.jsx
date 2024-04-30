import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Imported Input component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCelestialValues } from "@/utils/getCelestialValues.js";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider.jsx";

const FormSchema = z.object({
  body: z.string(),
  apoapsis: z.string().transform((val) => Number(val)),
  periapsis: z.string().transform((val) => Number(val)),
  inclination: z.number(),
});

export const EclipseTimeForm = ({ onSubmit }) => {
  const [bodies, setBodies] = useState([]);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      body: "",
      apoapsis: "",
      periapsis: "",
      inclination: 0,
    },
  });

  useEffect(() => {
    async function fetchData() {
      const processedData = getCelestialValues(
        [],
        ["name", "orbiting", "bodyType"],
      );
      setBodies(processedData);
    }

    fetchData();
  }, []);

  const handleSubmit = async (data) => {
    const { body, ...rest } = data;
    const selectedBody = bodies.find((b) => b.name === body);
    const bodyId = selectedBody ? selectedBody.id : null;

    onSubmit({ ...rest, bodyId });
  };

  const renderBodies = () => {
    return bodies.map((body) => (
      <SelectItem
        key={body.id}
        value={body.name}
        className={body.bodyType === "Planet" ? "font-bold" : ""}
      >
        {body.name}
      </SelectItem>
    ));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celestial Body</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Celestial body for calculation" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>{renderBodies()}</SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apoapsis"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Apoapsis (km)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  placeholder="Enter Apoapsis in km"
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="periapsis"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Periapsis (km)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  placeholder="Enter Periapsis in km"
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inclination"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="flex justify-between pb-1">
                <p>Inclination (deg)</p> <p>{field.value}&deg;</p>
              </FormLabel>
              <FormControl>
                <Slider
                  defaultValue={field.inclination}
                  min={0}
                  max={180}
                  step={1}
                  value={[field.value]}
                  onValueChange={(values) => field.onChange(values[0])}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-amber-500">
          Submit
        </Button>
      </form>
    </Form>
  );
};

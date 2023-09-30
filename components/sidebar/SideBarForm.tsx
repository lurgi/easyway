import { Form } from "../ui/form";
import { Button } from "../ui/button";

import CardInput from "./CardInput";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import placesStore from "@/lib/placesStore";
import directionStore from "@/lib/directionSotre";
import { upDownDivid } from "@/lib/utils";

const formSchema = z.object({
  departures: z.string().min(2).max(50),
  arrivals: z.string().min(2).max(50),
});

const SideBarForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { departures, arrivals } = placesStore((state) => state);
  const { setDirection, setDirectionLoad, setUpDownDirection } = directionStore(
    (state) => state
  );
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    setDirectionLoad(false);
    try {
      const res = await axios.post("/api/direction", {
        departures,
        arrivals,
      });

      setDirection(res.data.route.traoptimal[0].path);
      const [upDirections, downDirections] = await upDownDivid(
        res.data.route.traoptimal[0].path
      );
      setUpDownDirection({ upDirections, downDirections });
    } catch (err: any) {
      // ERROR HANDLING
      console.log(err);
    }
    setDirectionLoad(true);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <CardInput form={form} isDeparture={true} />
        <CardInput form={form} isDeparture={false} />
        <div className="w-full flex justify-center pb-5">
          <Button className="font-semibold" type="submit">
            길찾기
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SideBarForm;

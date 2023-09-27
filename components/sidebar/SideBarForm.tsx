import { Form } from "../ui/form";
import { Button } from "../ui/button";

import CardInput from "./CardInput";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  departures: z.string().min(2).max(50),
  arrivals: z.string().min(2).max(50),
});

const SideBarForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      console.log(value);
    } catch (err: any) {
      console.log(err);
    }
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
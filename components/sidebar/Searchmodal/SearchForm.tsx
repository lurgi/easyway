import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { AddressesType } from "../Searchmodal";

import useStore from "@/lib/modalStore";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  address: z.string().min(2, {
    message: "주소를 입력해주세요.",
  }),
});

interface SearchFormAttrs {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setAddresses: Dispatch<SetStateAction<AddressesType[] | undefined>>;
}

const SearchForm = ({ setIsLoading, setAddresses }: SearchFormAttrs) => {
  const { mode } = useStore((state) => state);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });
  const onSubmit = async ({ address }: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/search_address", {
        address: address,
      });
      setAddresses(res.data);
    } catch (err: any) {
      console.log(err);
    }
    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg flex justify-between">
                {mode === "departures" ? "출발지" : "도착지"} 주소 검색
              </FormLabel>
              <FormControl>
                <div className="flex">
                  <Input
                    placeholder="도로명 혹은 지번 주소를 입력하세요."
                    {...field}
                  />
                  <Button className="ml-2" type="submit">
                    🔍
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchForm;

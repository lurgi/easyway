import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import useStore from "@/lib/modalStore";
import { UseFormReturn } from "react-hook-form";

interface CardInputAttrs {
  form: UseFormReturn<
    {
      departures: string;
      arrivals: string;
    },
    any,
    undefined
  >;
  isDeparture: boolean;
}

const CardInput = ({ form, isDeparture }: CardInputAttrs) => {
  const { modeChange, openModal } = useStore((state) => state);
  const onSearchModal = (value: "departures" | "arrivals") => {
    openModal();
    modeChange(value);
  };
  return (
    <>
      <CardHeader>
        <CardTitle>{isDeparture ? "출발지" : "도착지"}</CardTitle>
        <CardDescription>
          {isDeparture ? "Departures" : "Arrivals"}
        </CardDescription>
      </CardHeader>
      <CardContent
        onClick={() => onSearchModal(isDeparture ? "departures" : "arrivals")}
      >
        <FormField
          control={form.control}
          name="departures"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  readOnly
                  className="focus-visible:ring-0 focus-visible:border-1px focus-visible:ring-offset-0"
                  placeholder="도로명 혹은 지번 주소를 입력하세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </>
  );
};

export default CardInput;

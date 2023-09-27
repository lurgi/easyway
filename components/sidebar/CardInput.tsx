import placesStore from "@/lib/placesStore";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { UseFormReturn } from "react-hook-form";
import modalOpenStore from "@/lib/modalStore";
import { useEffect } from "react";

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
  const { modeChange, openModal } = modalOpenStore((state) => state);
  const { departures, arrivals } = placesStore((state) => state);
  const onSearchModal = (value: "departures" | "arrivals") => {
    openModal();
    modeChange(value);
  };
  useEffect(() => {
    if (isDeparture && departures)
      form.setValue("departures", departures?.jibunAddress!);
    if (!isDeparture && arrivals)
      form.setValue("arrivals", arrivals?.jibunAddress!);
  }, [departures, arrivals, form, isDeparture]);
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
          name={isDeparture ? "departures" : "arrivals"}
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

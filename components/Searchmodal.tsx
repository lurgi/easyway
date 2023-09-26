"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import useStore from "@/lib/store";

import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

const formSchema = z.object({
  address: z.string().min(2, {
    message: "주소를 입력해주세요.",
  }),
});

type Address = {
  types: string[];
  longName: string;
  shortName: string;
  code: string;
};

interface AddressesType {
  addressElements: Address[];
  distance: number;
  englishAddress: string;
  jibunAddress: string;
  roadAddress: string;
  x: string;
  y: string;
}

const SearchModal = () => {
  const { closeModal, mode, modeChange } = useStore((state) => state);
  const clickClose = () => {
    closeModal();
    modeChange(undefined);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });
  const [addresses, setAddresses] = useState<AddressesType[]>([]);
  const onSubmit = async ({ address }: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/search_address", {
        address: address,
      });
      setAddresses(res.data);
      console.log(addresses);
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-screen h-screen z-50 absolute flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg border-2 w-screen md:w-[600px] relative">
          <Button
            variant={"ghost"}
            className="rounded-full aspect-square p-2 absolute right-8 top-6"
            onClick={clickClose}
          >
            <AiOutlineClose size={15} />
          </Button>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg flex justify-between">
                      {mode === "departures" ? "출발지" : "도착지"} 주소 검색{" "}
                    </FormLabel>
                    <FormControl>
                      <div className="flex">
                        <Input
                          placeholder="도로명 혹은 주소를 입력하세요."
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
              <div>
                {addresses.length === 0
                  ? "도로명 주소 혹은 지번 주소를 정확하게 입력해주세요"
                  : addresses.map((address, index) => (
                      <div className="" key={index}>
                        {address.jibunAddress}
                      </div>
                    ))}
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden md:flex w-screen h-screen z-40 absolute bg-gray-100 opacity-50 backdrop-blur-sm"></div>
    </>
  );
};

export default SearchModal;

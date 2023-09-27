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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import useStore from "@/lib/store";

import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";
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
  const [isLoading, setIsLoading] = useState(false);
  const clickClose = () => {
    modeChange(undefined);
    closeModal();
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });
  const [addresses, setAddresses] = useState<AddressesType[] | undefined>();
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
              <div>
                <Card>
                  <CardContent className="py-3 px-4 h-48">
                    {isLoading ? (
                      <div className="flex justify-center">
                        <AiOutlineLoading3Quarters className="animate-spin" />
                      </div>
                    ) : addresses ? (
                      addresses.length === 0 ? (
                        <CardDescription>
                          <p>검색 결과가 없습니다.</p>
                          <p>
                            도로명 주소 혹은 지번 주소를 정확하게 입력해주세요
                          </p>
                        </CardDescription>
                      ) : (
                        addresses.map((address, index) => (
                          <div className="" key={index}>
                            {address.jibunAddress}
                          </div>
                        ))
                      )
                    ) : (
                      <CardDescription>검색어를 입력해주세요</CardDescription>
                    )}
                  </CardContent>
                </Card>
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

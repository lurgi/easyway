"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { Button } from "./ui/button";
import { useState } from "react";
import SearchModal from "./Searchmodal";
import useStore from "@/lib/store";

const formSchema = z.object({
  departures: z.string().min(2).max(50),
  arrivals: z.string().min(2).max(50),
});

const SideBar = () => {
  const { isModalOpen, modeChange, openModal } = useStore((state) => state);
  const onSearchModal = (value: "departures" | "arrivals") => {
    openModal();
    modeChange(value);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      console.log(value);
      // const address = await axios.post("/api/search_address", {});
      // console.log(address);
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="hidden md:flex w-[520px] flex-col h-full">
      <div className="h-[80%] p-4">
        <div className="mb-4">
          <Card>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-1"
              >
                <CardHeader>
                  <CardTitle>출발지</CardTitle>
                  <CardDescription>Departures</CardDescription>
                </CardHeader>
                <CardContent onClick={() => onSearchModal("departures")}>
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
                <CardHeader>
                  <CardTitle>도착지</CardTitle>
                  <CardDescription>Arrivals</CardDescription>
                </CardHeader>
                <CardContent onClick={() => onSearchModal("arrivals")}>
                  <FormField
                    control={form.control}
                    name="arrivals"
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
                <div className="w-full flex justify-center pb-5">
                  <Button className="font-semibold" type="submit">
                    길찾기
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
      <footer>여기엔 설정과 옵션들</footer>
      {isModalOpen ? <SearchModal></SearchModal> : null}
    </div>
  );
};

export default SideBar;

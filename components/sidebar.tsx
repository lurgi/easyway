"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const SideBar = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div className="hidden md:flex w-3/12 flex-col h-full">
      <div className="h-[80%] p-4">
        <div className="mb-4">
          <Card>
            <CardHeader>
              <CardTitle>출발지</CardTitle>
              <CardDescription>Departures</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>도착지</CardTitle>
              <CardDescription>Arrivals</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <footer>여기엔 설정과 옵션들</footer>
    </div>
  );
};

export default SideBar;

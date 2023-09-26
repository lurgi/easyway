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

import { AiOutlineClose } from "react-icons/ai";

const formSchema = z.object({
  address: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const SearchModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <>
      <div className="w-screen h-screen z-50 absolute flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg border-2 w-screen md:w-[400px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg flex justify-between">
                      주소 검색{" "}
                      <Button
                        variant={"ghost"}
                        className="rounded-full aspect-square p-2"
                      >
                        <AiOutlineClose size={15} />
                      </Button>
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
              <div>이곳에 받은 주소 뿌리기</div>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden md:flex w-screen h-screen z-40 absolute bg-gray-100 opacity-50 backdrop-blur-sm"></div>
    </>
  );
};

export default SearchModal;

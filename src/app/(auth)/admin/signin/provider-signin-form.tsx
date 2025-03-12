"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui-extension/password-input";
import { adminSignIn, adminSignUp } from "./actions";
import { ISignIn, signInFormSchema } from "./validation";
import { useState } from "react";
import { set } from "zod";
import { LoaderCircle } from "lucide-react";
import { CustomSpinner } from "@/components/common/spinner";



export default function ProviderSignInForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<ISignIn>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: ISignIn) {
    setLoading(true);
    // const res = await adminSignIn(values);
    const res = await adminSignUp(values);
    if (res.success) {
      if(res.redirectPath) {
        window.location.href = res.redirectPath;
      }
      toast.success(res.message);
      setLoading(false);
    } else {
      toast.error(res.message);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-lg mx-auto w-full p-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="yourname@mailserver.com"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="•••••••••" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
         {loading ? <CustomSpinner className="h-4 w-4" /> : "Sign In"} 
        </Button>
      </form>
    </Form>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2 } from "lucide-react";
import SignInForm from "./signin-form";

export default function SignIn() {
  return (
    <div className="h-screen w-full">
      <div className="flex h-full">
        <div className="flex-1 hidden h-full bg-muted p-10  dark:border-r lg:flex">
          <div className="flex items-center text-lg font-medium">Group 8 HRM</div>
        </div>
        <div className="flex-1 h-full relative">
          <div className=" absolute top-20 flex justify-between  w-full px-10 md:px-20">
          <Button variant={"secondary"}>
              <a href="../" className="flex items-center justify-center gap-2"><ArrowLeft/> Back</a>
            </Button>
            <Button variant={"outline"}>
              <a href="/admin/signin" className="flex items-center justify-center gap-2"> <Building2 />Manager</a>
            </Button>
          </div>
          <div className="flex flex-col h-full items-center justify-center space-y-4 ">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Employee Sign In
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to sign in to your account.
              </p>
            </div>
           <SignInForm />
            <div className="text-center text-sm mt-4">
              <span className="text-muted-foreground">
                Don&#39;t have an account?{" "}
              </span>
              <Link
                href="#"
                className="text-blue-600 hover:underline"
              >
                Contact Manager
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

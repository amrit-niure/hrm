"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogOut() {
const router = useRouter();
  return (
    <Button
      onClick={async () => {
       "use server"
       await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login"); // redirect to login page
          },
        },
      });
      }}
    >
      Log Out
    </Button>
  );
}

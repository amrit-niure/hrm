"use client";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/use-logout";

export default function LogOut() {
  const { logout, isPending } = useLogout();

  return (
    <Button
      onClick={() => {
        logout();
      }}
      disabled={isPending}
    >
      Log Out
    </Button>
  );
}

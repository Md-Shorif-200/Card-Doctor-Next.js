import {
  BookCheckIcon,
  UserCircle2Icon,
  LogOutIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";

export default function UserMenu({ session }) {
  const { data, status } = session;
  const router = useRouter();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut({ redirect: false });
        router.push("/");

        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
        });
      }
    });
  };

  if (status !== "authenticated") {
    return (
      <Link href="/sign-in" className="text-sm font-medium primary_btn">
        Sign In
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage
              src={data.user.image}
              alt="Profile image"
              className="border border-gray-300 rounded-full"
            />
            <AvatarFallback >
               <FaUser></FaUser>
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-foreground">
            {data.user.name}
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            {data.user.email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {/*  My Bookings Link */}
          <DropdownMenuItem asChild>
            <Link href="/my-bookings" className="flex items-center gap-2 w-full">
              <BookCheckIcon size={16} className="opacity-70" />
              <span>My Bookings</span>
            </Link>
          </DropdownMenuItem>

          {/*  Profile Link */}
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center gap-2 w-full">
              <UserCircle2Icon size={16} className="opacity-70" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/*  Logout Button */}
        <DropdownMenuItem onClick={handleLogOut}>
          <LogOutIcon size={16} className="opacity-70" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

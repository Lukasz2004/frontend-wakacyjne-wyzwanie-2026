'use client';

import { User } from "@/src/types/User";
import { MOCK_USERS } from "@/src/components/UserProfilesList";
import {useParams, useRouter} from "next/navigation";
import {
  Dialog,
  DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { UserProfileDetails } from "@/src/components/UserProfileDetails";
import {Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle} from "@/components/ui/empty";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default function UserModal() {
  const { id } = useParams<{ id: string; }>();
  const router = useRouter();
  const user: User | undefined = MOCK_USERS.find((user) => user.id === id);


  const onOpenChange = () => {
    router.back();
  }

  return (
    <Dialog open defaultOpen onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User profile</DialogTitle>
        </DialogHeader>

        {user
          ? <UserProfileDetails user={user} />
          : (
                <Empty className="h-full max-w-md mx-auto">
                  <EmptyHeader>
                    <EmptyTitle className="text-4xl font-extrabold">404</EmptyTitle>
                    <EmptyDescription className="max-w-xs text-pretty leading-tight">
                      Ups, nie mogliśmy znaleźć tego użytkownika
                    </EmptyDescription>
                  </EmptyHeader>

                  <EmptyContent>
                    <Link href="/" className={buttonVariants({
                      variant: 'secondary'
                    })}>Strona główna</Link>
                  </EmptyContent>
                </Empty>
                )}
      </DialogContent>
    </Dialog>
  );
}
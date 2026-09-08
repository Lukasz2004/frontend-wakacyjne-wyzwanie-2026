import { User } from "@/src/types/User";
import Image from "next/image";
import PizzaIcon from "@/src/components/PizzaIcon";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface UserProfileDetailsProps {
  user: User;
}

export function UserProfileDetails({ user }: UserProfileDetailsProps) {
  const { name, role, likesPizza, avatarUrl, description } = user;

  return (
      <Card className="@container relative max-w-full h-full flex flex-col min-h-64 overflow-hidden">
          <div className="relative w-full h-32 @lg:h-48 shrink-0">
              <div className="absolute inset-0 z-0 bg-blue-300" />

              <div className="rounded-full size-16 @lg:size-24 absolute bg-card z-10 bottom-0 left-4 translate-y-1/2 border overflow-hidden shadow-md">
                  <Image
                      src={avatarUrl}
                      alt={`${name} avatar`}
                      className="w-full h-full object-cover"
                      fill
                      loading="eager"
                  />
              </div>
          </div>

          <CardHeader className="grid grid-cols-2 p-4 pt-12 @lg:pt-16 pb-2 space-y-0">
              {likesPizza && (
                  <div className="ml-auto row-span-2 col-start-2 size-10 grid place-items-center rounded-full">
                      <PizzaIcon />
                  </div>
              )}

              <CardTitle className="row-start-1 col-start-1 text-xl @md:text-2xl">
                  {name}
              </CardTitle>

              <CardDescription className="row-start-2 col-start-1 text-muted-foreground">
                  {role}
              </CardDescription>
          </CardHeader>

          <CardContent className="p-4 pt-0">
              <p className="text-muted-foreground @lg:max-w-md">
                  {description}
              </p>
          </CardContent>

      </Card>
  );
}
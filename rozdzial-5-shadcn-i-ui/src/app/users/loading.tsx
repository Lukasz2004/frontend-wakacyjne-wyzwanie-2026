import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-12">
            {Array(3).fill(0).map((_, key) => (
                <Card key={key} className="@container relative mx-auto max-w-none w-full pt-4">
                  <Skeleton className="size-24 rounded-full mx-auto @md:ml-6" />
                  <CardHeader className="grid-cols-1! text-center @md:text-left @md:grid-cols-[1fr_auto]">
                      <div className="absolute right-3 top-3 @md:static">
                          <Skeleton className="size-10 rounded-full" />
                      </div>

                      <div className="flex flex-col gap-2 items-center @md:items-start">
                          <Skeleton className="h-7 w-3/4 max-w-[200px]" />
                          <Skeleton className="h-5 w-1/2 max-w-[120px]" />
                      </div>

                </CardHeader>

                <CardFooter>
                    <Skeleton className="h-11 w-full @md:w-[140px] rounded-md" />
                </CardFooter>

            </Card>
          ))}
      </div>
  );
}
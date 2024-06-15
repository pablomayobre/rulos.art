import type { ReactNode } from "react";
import type { ActionData, ImageData } from "./hero";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { cn } from "~/utils/tailwind";

export default function RecommendedCard({
  image,
  title,
  action,
  children,
}: {
  image: ImageData;
  title: ReactNode;
  action: ActionData;
  children?: ReactNode;
}) {
  return (
    <Card className="flex flex-col items-start border border-solid border-white/50 bg-white/40 backdrop-blur-lg backdrop-saturate-150 sm:flex-row-reverse">
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        className={cn(
          "max-h-10vh grow-1 m-1 aspect-video w-full shrink-0 justify-self-center rounded-sm border object-cover sm:aspect-square sm:max-h-none sm:max-w-[min(40%,20vh)]",
          image.className,
        )}
      />
      <div className="flex h-full flex-col">
        <CardHeader className="pb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent className="h-full grow pb-4">
          <p>{children}</p>
        </CardContent>
        <CardFooter className="justify-start">
          <Button asChild variant="ghost" size="tight">
            <a href={action.href}>{action.text}</a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

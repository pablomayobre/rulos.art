import { ReactNode } from "react";
import { Card3DContainer, Card3DBody } from "./ui/3d-card";
import { cn } from "~/utils/tailwind";

export function Gallery({ children }: { children: ReactNode }) {
  return (
    <div className="grid w-full grid-cols-2 gap-6 pb-8 pt-3 sm:grid-cols-3 lg:grid-cols-6">
      {children}
    </div>
  );
}

export function GalleryItem({
  src,
  width,
  height,
  href,
  alt,
  className,
}: {
  src: string;
  width: string | number;
  height: string | number;
  alt: string;
  className?: string;
  href: string;
}) {
  return (
    <a href={href}>
      <Card3DContainer containerClassName="py-0 hover:drop-shadow-xl drop-shadow-md">
        <Card3DBody className="group/card relative aspect-[9/11] h-auto w-full overflow-hidden rounded-md border border-solid border-white/50 bg-white/50 p-[8%] backdrop-blur-lg backdrop-saturate-150 hover:scale-110">
          <img
            src={src}
            height={width}
            width={height}
            className={cn(
              "aspect-square w-full rounded-sm object-cover object-top transition-all group-hover/card:aspect-[9/11] group-hover/card:scale-125",
              className,
            )}
            alt={alt}
          />
        </Card3DBody>
      </Card3DContainer>
    </a>
  );
}

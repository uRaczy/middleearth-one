import Map from "@/assets/mapome-slim.svg";
import { cn } from "@/lib/utils";

export const MiddleEarth = () => {
  return (
    <Map
      className={cn(
        "bg-amber-950 dark:bg-gray-800",
        "stroke-lime-600 dark:stroke-gray-300",
        "dark:fill-gray-200",
        'dark:outline-amber-50"',
      )}
    />
  );
};

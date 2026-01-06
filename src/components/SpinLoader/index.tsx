import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

interface SpinLoaderProps {
  containerClasses?: string;
}

const SpinLoader = ({ containerClasses = "" }: SpinLoaderProps) => {
  return (
    <div className="items-center justify-center flex">
      <Spinner className={cn("w-10 h-10", containerClasses)} />
    </div>
  );
};

export default SpinLoader;

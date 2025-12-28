import { Spinner } from "../ui/spinner";

interface SpinLoaderProps {
  containerClasses?: string;
}

const SpinLoader = ({ containerClasses = "" }: SpinLoaderProps) => {
  return <Spinner className={`${containerClasses} w-10 h-10`} />;
};

export default SpinLoader;

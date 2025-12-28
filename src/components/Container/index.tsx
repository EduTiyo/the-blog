interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="text-slate-900 bg-slate-50 min-h-screen dark:bg-slate-900 dark:text-slate-50">
      <div className="max-w-5xl px-8 mx-auto">{children}</div>
    </div>
  );
};

export default Container;

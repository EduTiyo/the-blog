import { Skeleton } from "../ui/skeleton";

const PostSkeleton = () => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Skeleton className="w-full h-40 sm:h-80" />
        <div className="flex flex-col gap-4 sm:justify-center">
          <Skeleton className="w-40 h-2" />

          <Skeleton className="w-full h-6" />

          {Array.from({ length: 5 }).map((_, idx) => {
            return <Skeleton className="w-full h-2" key={idx} />;
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        {Array.from({ length: 6 }).map((_, idx) => {
          return (
            <div key={idx}>
              <Skeleton className="w-full h-40 sm:h-80" />
              <div className="flex flex-col gap-4 sm:justify-center">
                <Skeleton className="w-40 h-2 mt-4" />

                <Skeleton className="w-full h-6" />

                {Array.from({ length: 5 }).map((_, idx) => {
                  return <Skeleton className="w-full h-2" key={idx} />;
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PostSkeleton;

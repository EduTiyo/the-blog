import PostsList from "@/components/PostsList";
import { Suspense } from "react";
import FeaturedPost from "@/components/FeaturedPost";
import PostSkeleton from "@/components/PostSkeleton";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<PostSkeleton />}>
        <FeaturedPost />
        <PostsList />
      </Suspense>
    </>
  );
}

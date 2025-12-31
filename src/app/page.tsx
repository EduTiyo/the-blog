import PostsList from "@/components/PostsList";
import { Suspense } from "react";
import FeaturedPost from "@/components/FeaturedPost";
import PostSkeleton from "@/components/PostSkeleton";

export default async function Home() {
  return (
    <>
      <FeaturedPost />

      <Suspense fallback={<PostSkeleton />}>
        <PostsList />
      </Suspense>
    </>
  );
}

import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Container from "@/components/Container";
import { Suspense } from "react";
import Header from "@/components/Header";
import FeaturedPost from "@/components/FeaturedPost";

export default async function Home() {
  return (
    <Container>
      <Header />

      <FeaturedPost />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className="text-6xl font-bold text-center py-8">
        <p>FOOTER</p>
      </footer>
    </Container>
  );
}

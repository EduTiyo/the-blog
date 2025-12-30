import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Container from "@/components/Container";
import { Suspense } from "react";
import Header from "@/components/Header";
import PostHeading from "@/components/PostHeading";
import PostCoverImage from "@/components/PostCoverImage";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          imageProps={{
            alt: "Título do post",
            src: "/images/bryen_8.png",
            width: 1200,
            height: 720,
            priority: true,
          }}
          linkProps={{ href: "#" }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-muted-foreground block text-xs/tight"
            dateTime="2025-29-12"
          >
            29/12/2025 20:22
          </time>
          <PostHeading url="#">Sit, alias nemo ab</PostHeading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, alias
            nemo ab, vel aspernatur molestias fugit blanditiis quas natus at, a
            deleniti soluta odit maxime laudantium aliquid nam unde mollitia.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className="text-6xl font-bold text-center py-8">
        <p>FOOTER</p>
      </footer>
    </Container>
  );
}

import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Container from "@/components/Container";
import { Suspense } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl " href="#">
          <Image
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            className="w-full h-full object-cover group-hover:scale-105 transition"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-muted-foreground block text-xs/tight"
            dateTime="2025-29-12"
          >
            29/12/2025 20:22
          </time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl/tight">
            Lorem ipsum dolor sit amet.
          </h1>
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

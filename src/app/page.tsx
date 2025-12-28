import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Container from "@/components/Container";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">HEADER</h1>
      </header>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero,
        voluptatibus ad minus id laudantium magni optio et impedit itaque iure
        deleniti exercitationem magnam possimus provident mollitia tempore
        dolorum facilis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corporis vero, voluptatibus ad minus id laudantium magni optio et
        impedit itaque iure deleniti exercitationem magnam possimus provident
        mollitia tempore dolorum facilis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corporis vero, voluptatibus ad minus id laudantium
        magni optio et impedit itaque iure deleniti exercitationem magnam
        possimus provident mollitia tempore dolorum facilis? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Corporis vero, voluptatibus ad
        minus id laudantium magni optio et impedit itaque iure deleniti
        exercitationem magnam possimus provident mollitia tempore dolorum
        facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis vero, voluptatibus ad minus id laudantium magni optio et
        impedit itaque iure deleniti exercitationem magnam possimus provident
        mollitia tempore dolorum facilis?
      </p>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className="text-6xl font-bold text-center py-8">
        <p>FOOTER</p>
      </footer>
    </Container>
  );
}

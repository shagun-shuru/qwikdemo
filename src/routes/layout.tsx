import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import { routeLoader$ } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="container">
          <Slot />
        </section>
      </main>
      <footer>
        <p>Copyright 2023 Qwik.</p>
      </footer>
    </>
  );
});

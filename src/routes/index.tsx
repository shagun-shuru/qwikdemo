import {
  component$,
  Resource,
  useResource$,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/card/card";
import { QGreetings } from "~/integrations/react/greeting";

interface Blog {
  id: string;
  title: string;
  body: string;
}

// export const useFetchedBlogs = routeLoader$(async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return data;
// });

export default component$(() => {
  const name = useSignal("John");

  const blogsData = useResource$(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  });

  const person = useStore({
    name: "William",
    age: 30,
  });

  return (
    <>
      <div>
        <h1>Hi 👋 welcome to qwik</h1>
        <p>Hello, {name.value}</p>
        <p>
          Hello, {person.name} - {person.age}
        </p>

        <button onClick$={() => (name.value = "Doe")}>Click me</button>
        <button onClick$={() => (person.name = "Wordsworth")}>
          Click me one more time
        </button>

        <QGreetings />
        <h2>Fetched Blogs</h2>

        <Resource
          value={blogsData}
          onPending={() => <div>Loading...</div>}
          onResolved={(blogsData: any) => (
            <div class="blogs">
              {blogsData.slice(0, 10).map((blog: Blog) => (
                <Card key={blog.id}>
                  <h2 q:slot="title">{blog.title}</h2>
                  <p q:slot="content">{blog.body}</p>
                  <Link q:slot="footer" href={"/blog/" + blog.id}>
                    <button>Read more</button>
                  </Link>
                </Card>
              ))}
            </div>
          )}
          onRejected={(error) => <div>Error: {error.message}</div>}
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

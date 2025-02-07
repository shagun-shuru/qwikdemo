import { component$, Resource, useResource$ } from "@builder.io/qwik";
import {
  RequestHandler,
  useLocation,
  useNavigate,
} from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  body: string;
}

export const onRequest: RequestHandler = async ({ params, redirect }) => {
  const id = params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

  // If the response is not OK, redirect to the homepage
  if (!res.ok) {
    throw redirect(302, "/");
  }
};

export default component$(() => {
  const location = useLocation();
  const id = location.params.id;

  const navigate = useNavigate();
  const blogDetails = useResource$(async ({}) => {
    console.log("fetching blog details");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );

    const data = await response.json();
    return data;
  });
  return (
    <div class="blog">
      <Resource
        value={blogDetails}
        onPending={() => <div>Loading...</div>}
        onResolved={(blogData: BlogData) => (
          <div>
            <h2>{blogData?.title}</h2>
            <p>{blogData?.body}</p>
          </div>
        )}
      />
    </div>
  );
});

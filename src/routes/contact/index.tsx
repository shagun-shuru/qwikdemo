import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(ContactStyles);

  const formVisible = useSignal(false);
  const formState = useStore({ name: "", message: "" });

  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        architecto cum inventore tempore molestiae repudiandae. Sequi possimus,
        itaque, corrupti quam maiores, a nihil odio excepturi error cupiditate
        assumenda. Facilis, vitae.
      </p>

      <button onClick$={() => (formVisible.value = true)}>Contact me</button>

      {formVisible.value && (
        <form
          preventdefault:submit
          onSubmit$={(e) => {
            e.preventDefault();
            console.log({ name: formState.name, message: formState.message });
            formState.name = "";
            formState.message = "";
          }}
        >
          <label>
            <span>Your name:</span>
            <input
              value={formState.name}
              type="text"
              onInput$={(e) =>
                (formState.name = (e.target as HTMLInputElement).value)
              }
            />
          </label>
          <label></label>
          <span>Your message:</span>
          <textarea
            value={formState.message}
            onInput$={(e) =>
              (formState.message = (e.target as HTMLInputElement).value)
            }
          ></textarea>
          <button>Send</button>
          <p>{formState.name}</p>
          <p>{formState.message}</p>
        </form>
      )}
    </article>
  );
});

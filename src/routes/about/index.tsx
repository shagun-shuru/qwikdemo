import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";
import Modal from "~/components/modal/modal";

export default component$(() => {
  console.log("Hello About");
  useStyles$(AboutStyles);

  const modalVisible = useSignal(false);

  const closeModal = $(() => {
    modalVisible.value = false;
  });

  return (
    <article>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        architecto cum inventore tempore molestiae repudiandae. Sequi possimus,
        itaque, corrupti quam maiores, a nihil odio excepturi error cupiditate
        assumenda. Facilis, vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        architecto cum inventore tempore molestiae repudiandae. Sequi possimus,
        itaque, corrupti quam maiores, a nihil odio excepturi error cupiditate
        assumenda. Facilis, vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        architecto cum inventore tempore molestiae repudiandae. Sequi possimus,
        itaque, corrupti quam maiores, a nihil odio excepturi error cupiditate
        assumenda. Facilis, vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        architecto cum inventore tempore molestiae repudiandae. Sequi possimus,
        itaque, corrupti quam maiores, a nihil odio excepturi error cupiditate
        assumenda. Facilis, vitae.
      </p>
      <button onClick$={() => (modalVisible.value = true)}>Open Modal</button>
      {modalVisible.value && (
        <Modal size="sm" frosted={true} close={closeModal}>
          {" "}
          <div q:slot="content">
            <h2>Hello World</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              aliquid?
            </p>
          </div>
          <div q:slot="footer">
            <p>Footer Content</p>
            <button>Sign up now!</button>
          </div>
        </Modal>
      )}
    </article>
  );
});

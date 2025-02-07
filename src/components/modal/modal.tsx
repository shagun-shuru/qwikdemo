import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";
import type { PropFunction } from "@builder.io/qwik";

interface ModalProps {
  size: "sm" | "md" | "lg";
  frosted?: boolean;
  close: PropFunction<() => void>;
}

export default component$((props: ModalProps) => {
  useStylesScoped$(ModalStyles);
  return (
    <div class={`modal ${props.size} ${props.frosted && "frosted"}`}>
      <div class="modal-content">
        <span class="close" onClick$={props.close}>
          close
        </span>
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer class="footer-content">
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});

import { component$ } from "@builder.io/qwik";
import { QGreetings } from "~/integrations/react/greeting";

export default component$(() => {
  return (
    <main>
      <p>Hello from Qwik</p>
      <QGreetings />
    </main>
  );
});

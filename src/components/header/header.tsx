import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./header.css?inline";
import { Link } from "@builder.io/qwik-city";
import ImgMarioBlock from "./mario_block.jpeg?jsx";

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <nav>
        {/* <img src={`ImgMarioBlock`} alt="Qwik Logo" /> */}
        <h1>Qwik Demo</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>{" "}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

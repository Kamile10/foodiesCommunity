/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>

      <li>
        <Link href="/meals">Let's go to the meals Page!</Link>
      </li>
      <li>
        <Link href="/community">Let's go to the community Page!</Link>
      </li>
      <li>
        <Link href="/meals/share">Let's go and share some meals!</Link>
      </li>
    </main>
  );
}

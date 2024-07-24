import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header>
        <h1>
          Delicious meals, creatd{""}
          <span>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorites Recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

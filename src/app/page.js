import Head from 'next/head';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Page</title>
        <meta name="description" content="A simple recipe page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Recipes</h1>

        <div className={styles.recipeContainer}>
          <RecipeCard 
            title="Spaghetti Bolognese" 
            description="A classic Italian pasta dish with rich meat sauce." 
          />
          <RecipeCard 
            title="Chicken Curry" 
            description="A flavorful dish with tender chicken in a spicy sauce." 
          />
        </div>
      </main>
    </div>
  );
}

function RecipeCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.button}>View Recipe</button>
    </div>
  );
}
import Head from 'next/head';
import ImageGallery from '../components/ImageGallery';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Hover Animation</title>
        <meta name="description" content="Next.js Image Hover Animation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to StarX Code</h1>
        <ImageGallery />
      </main>
    </div>
  );
};

export default HomePage;
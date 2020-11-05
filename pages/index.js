import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { getButtonClicksCount } from '../lib/filedb';

export async function getStaticProps(context) {
  const staticButtonClicks = getButtonClicksCount();

  return {
    props: { staticButtonClicks }, // will be passed to the page component as props
  };
}

export default function Home({ staticButtonClicks }) {
  const [clicks, setClicks] = useState(staticButtonClicks);

  async function onButtonClick() {
    await fetch('/api/click', {
      method: 'POST',
    });

    const updatedClicks = await fetch('/api/clicks').then((r) => r.json());

    setClicks(updatedClicks);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello Next.js 10! 🎉</h1>
      <div className={styles.logo}>
        <Image
          src='/logo.png'
          alt='Picture of the author'
          layout='responsive'
          width={800}
          height={479}
        />
      </div>
      <div>
        <b>Button clicks (STATIC): {staticButtonClicks}</b>
      </div>
      <div>
        <b>Button clicks (DYNAMIC): {clicks}</b>
      </div>
      <div>
        <button onClick={onButtonClick}>Click to increment count.</button>
      </div>
      <div>
        <h3>Links</h3>
        <ul>
          <li>
            <Link href='/posts'>Posts Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

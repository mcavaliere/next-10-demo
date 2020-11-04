import Head from 'next/head';
import Link from 'next/link';
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
  const [clicks, setClicks] = useState(0);

  async function onButtonClick() {
    await fetch('/api/click', {
      method: 'POST',
    });

    const updatedClicks = await fetch('/api/clicks').then((r) => r.json());

    setClicks(updatedClicks);
  }

  return (
    <div>
      <div>
        <b>Button clicks (STATIC): {staticButtonClicks}</b>
      </div>
      <div>
        <b>Button clicks (DYNAMIC): {clicks}</b>
      </div>
      <div>
        <button onClick={onButtonClick}>Click to increment count.</button>
      </div>
    </div>
  );
}

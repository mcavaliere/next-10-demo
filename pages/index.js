import Head from 'next/head';
import Link from 'next/link';
import { request } from '../lib/datocms';
import styles from '../styles/Home.module.css';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogPosts(first: $limit) {
    title
  }
}`;

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home() {
  return (
    <div>
      <Link href='posts'>Posts</Link>
      <div>data: {JSON.stringify(data, null, 2)}</div>
    </div>
  );
}

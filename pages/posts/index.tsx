import Link from 'next/link';

export async function getStaticProps() {
  const posts = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((r) => r.json());

  return {
    props: {
      posts,
    },
  };
}

export default ({ posts }) => (
  <div>
    <h1>Posts page</h1>

    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <h2>
              <Link href={`/posts/${p.id}`}>{p.title}</Link>
            </h2>
            {p.body}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

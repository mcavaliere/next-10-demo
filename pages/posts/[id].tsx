import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({});

  useEffect(async () => {
    if (!id) {
      return;
    }
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((r) => r.json());

    setPost(post);
  });

  return (
    <div>
      <h1>{post.title}</h1>

      {post.body}
    </div>
  );
};

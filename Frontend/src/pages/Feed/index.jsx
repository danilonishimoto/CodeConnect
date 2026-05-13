import { AppLayout } from "../../layouts/App";
import { CardPost } from "../../components/CardPost";
import { posts } from "./data";
import styles from "./feed.module.css";
import { useEffect, useState } from "react";

export const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/blog-posts')
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }, [])

  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.slug} post={post} />
      ))}
    </main>
  );
};

import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  return <pre>You are viewing the blog with slug {router.query.slug}</pre>;
};

export default Blog;

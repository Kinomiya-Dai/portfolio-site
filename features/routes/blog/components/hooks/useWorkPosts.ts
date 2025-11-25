import { getBlogPosts } from "app/blog/utils"
import { useMemo } from "react";

export const useBlogPosts = () => {
  const allBlogs = getBlogPosts();

  //ソート
  const sortedBlogs = useMemo(() => {
    return [...allBlogs].sort(
      (a, b) =>
        new Date(a.metadata.publishedAt).getTime() -
        new Date(b.metadata.publishedAt).getTime()
    );
  }, [allBlogs]);

  return { allBlogs, sortedBlogs }
}
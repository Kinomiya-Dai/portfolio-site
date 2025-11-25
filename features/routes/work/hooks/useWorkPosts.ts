import { getWorkPosts } from "app/work/utils"
import { useMemo } from "react";

export const useWorkPosts = () => {
  const allWorks = getWorkPosts();

  //ソート
  const sortedWorks = useMemo(() => {
    return [...allWorks].sort(
      (a,b) =>
        new Date(a.metadata.publishedAt).getTime() -
        new Date(b.metadata.publishedAt).getTime()
    );
  }, [allWorks]);

  return { allWorks,sortedWorks}
}
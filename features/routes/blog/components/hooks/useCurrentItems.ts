import { useMemo } from 'react';

type sortedBlogs = {
  metadata: Metadata
  slug: string
  content: string
}

type Metadata = {
  num: string
  title: string
  publishedAt: string
  summary: string
  image?: string
}


export const useCurrentItems = (items: sortedBlogs[], startIndex: number, itemsPerPage: number): sortedBlogs[] => {
  return useMemo(() => {
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, startIndex, itemsPerPage]);
};
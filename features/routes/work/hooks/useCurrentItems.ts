import { useMemo } from 'react';

type sortedWorks = {
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


export const useCurrentItems = (items: sortedWorks[], startIndex: number, itemsPerPage: number): sortedWorks[] => {
  return useMemo(() => {
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, startIndex, itemsPerPage]);
};
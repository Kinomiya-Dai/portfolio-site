"use client";

import Link from "next/link"

import dynamic from "next/dynamic";

// ssr: false でサーバーではレンダリングされない
const Splide = dynamic(() => import("@splidejs/react-splide").then(mod => mod.Splide), {
  ssr: false,
});

const SplideSlide = dynamic(
  () => import("@splidejs/react-splide").then(mod => mod.SplideSlide),
  { ssr: false }
);

type BlogListProps = {
  allBlogs: AllBlogs[]
}

type AllBlogs = {
  metadata: Metadata;
  slug: string;
  content: string;
}

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

const DisplayPostsList = ({ allBlogs }: BlogListProps) => {
  return (
    <div className="min-w-full flex justify-center overflow-x-hidden overflow-y-visible py-8">
      <div className="max-w-6xl">
        <Splide className="list-slide"
          aria-label="blogs-list"
          options={{
            mediaQuery: 'min',
            gap: "1rem",
            perPage: 4,
            type: 'loop',
            pagination: true, // ドットナビゲーションを表示
            arrows: true,     // 左右矢印
            breakpoints: {
              600: {
                perPage: 2,
              },
              1025: {
                perPage: 4,
                gap: 32,
              }
            },
          }}
        >
          {allBlogs
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            )
            .map((post) => (
              <>
                <SplideSlide key={post.slug} >
                  <Link
                    className="flex flex-col space-y-1 mb-4"
                    href={`/blog/${post.slug}`}
                  >
                    <article className="border border-transparent rounded-[5px] overflow-hidden  shadow-xl/30 shadow-pf-text">
                      <div className="h-40">
                        <img className="w-full h-full" src="/images/blog/cool_dragon04.png" alt="" />
                      </div>
                      <div className="relative h-40 flex flex-col md:flex-row space-x-0 p-8 text-pf-text bg-pf-bg">
                        <p className="font-bold dark:text-neutral-100 tracking-tight">
                          {post.metadata.title}
                        </p>
                        <p className="absolute bottom-4 right-4 dark:text-neutral-400 tabular-nums">
                          {post.metadata.publishedAt}
                        </p>
                      </div>
                    </article>
                  </Link>
                </SplideSlide>
                <SplideSlide key={post.slug + "1"}>
                  <Link
                    className="flex flex-col space-y-1 mb-4"
                    href={`/blog/${post.slug}`}
                  >
                    <article className="border border-transparent rounded-[5px] overflow-hidden  shadow-xl/30 shadow-pf-text">
                      <div className="h-40">
                        <img className="w-full h-full" src="/images/blog/cool_dragon04.png" alt="" />
                      </div>
                      <div className="relative h-40 flex flex-col md:flex-row space-x-0 p-8 text-pf-text bg-pf-bg">
                        <p className="font-extrabold dark:text-neutral-100 tracking-normal">
                          {post.metadata.title}
                        </p>
                        <p className="absolute bottom-4 right-4 dark:text-neutral-400 tabular-nums">
                          {post.metadata.publishedAt}
                        </p>
                      </div>
                    </article>
                  </Link>
                </SplideSlide>
              </>
            ))}
        </Splide>
      </div>
    </div>
  )
}
export default DisplayPostsList
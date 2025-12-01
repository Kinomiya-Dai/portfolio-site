import { UndrawDevAvatarIcon } from "features/common/components/svgs";
import dynamic from 'next/dynamic';

import Link from 'next/link';
import SkillList from '../features/common/components/skillList';
import { getWorkPosts } from '../features/routes/work/utils/utils';
import { getBlogPosts } from "../features/routes/blog/utils/utils";
import Loading from "features/common/components/loading";
import { DisplayMv } from "features/routes/top/components/displayMv";

const DisplayBlogs = dynamic(() => import('../features/routes/blog/components/displayPosts'), { loading: () => <Loading /> });
const DisplayWorks = dynamic(() => import('../features/routes/work/components/displayPosts'), { loading: () => <Loading /> });


export default function Page() {
  const blogs = getBlogPosts();
  const works = getWorkPosts();
  return (
    <>
      <DisplayMv />
      <section className='py-14 flex flex-col items-center gap-14'>
        <h2 className='text-4xl font-bold'>About me</h2>
        <div className='flex justify-center gap-[7px]'>
          <div>
            <UndrawDevAvatarIcon className='w-[150px] h-[150px]' />
          </div>
          <div className='w-3/5 flex flex-col'>
            <div className='mb-8'>
              <p className='mb-4'>はじめまして。平成11年生まれ26歳エンジニアのダイと申します。<br />
                社会人歴（IT業界）2年目となりました。
              </p>
              <p className='mb-4'>もっとスキルアップしたい！
                がっつり開発に携わりたいという思いを燃料に、
                日々 成長のため努力しています。</p>
              <p>現在は、pythonデータ分析実践試験の資格取得に向けて学習中です。</p>
            </div>
            <div className='flex justify-end'>
              <Link href="./about">
                <button
                  className="
                              relative cursor-pointer text-center align-middle
                              shadow-2xl rounded-full
                              font-bold leading-normal tracking-widest
                              px-8 py-6 ml-auto
                              text-pf-text dark:text-pf-text-dark
                              transition-transform duration-300 ease-in-out
                              hover:scale-105 hover:shadow-xl
                              active:scale-95 active:shadow-xl
                            "
                >
                  view more
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className='py-14 flex flex-col items-center gap-14'>
        <h2 className='text-4xl font-bold'>Blog</h2>
        <div className='w-full'>
          <DisplayBlogs allBlogs={blogs} />
          <div className='flex justify-center w-full pt-6'>
            <Link href="./blog">
              <p className='text-2xl font-light border-b cursor-pointer'>View All Blogs</p>
            </Link>
          </div>
        </div>

      </section>
      <section className='py-14 flex flex-col items-center gap-14 mb-16'>
        <h2 className='text-4xl font-bold mb-10'>Works</h2>
        <div className='h-[506px] w-full'>
          <DisplayWorks allWorks={works} />
        </div>
        <div className='flex'>
          <Link href="./work">
            <p className='text-2xl font-light border-b cursor-pointer'>View All Works</p>
          </Link>
        </div>
      </section>
      <section className='py-14 flex flex-col items-center gap-14'>
        <SkillList />
      </section>
    </>
  )
}

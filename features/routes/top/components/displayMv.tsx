import { cx } from "app/utils/classnames";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Mylogo from '../../../common/components/svgs/undraw-man-light'
``
export function DisplayMv() {
  return (
    <>
      <section className='min-h-screen flex flex-col justify-around'>
        <div className={cx("flex items-center justify-center", "h-full min-h-full min-w-3xs md:min-w-2xl lg:min-w-4xl")}>
          <div>
            <p className='mb-2'>はじめまして、私は</p>
            <h1 className='text-5xl mb-3 font-bold'>Kinomiya Dai (木乃宮 ダイ)</h1>
            <p className='text-2xl mb-8'>Front / Back end Engineer</p>
            <p className='mb-3'>Webアプリの設計と実装に取り組んでいます。<br />UI から API まで、使いやすさと拡張性を意識した開発。<br />チームとのコミュニケーションを大切にし、<br />円滑に協力し合える環境づくりを心がけています。</p>
            <div className='flex gap-6'>
              <Link href="https://github.com/Kinomiya-Dai">
                <FaGithub className='w-8 h-8 cursor-pointer' />
              </Link>
              <SiZenn className='w-8 h-8 cursor-pointer' />
            </div>
          </div>
          <div>
            <Mylogo />
          </div>
        </div>
        <div>
          <div className="scroll-down-animate">
            <span></span>
          </div>
        </div>
      </section>
    </>
  )

}
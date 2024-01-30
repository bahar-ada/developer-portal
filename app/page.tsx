import Link from 'next/link';
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { TbPentagon } from "react-icons/tb";
import MainPageCarusel from '@/components/carusel/MainPageCarusel';
import { RiMovie2Line } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";
import photo1 from "../public/images/1.jpg"

import photo3 from "../public/images/3.jpg"
import photo4 from "../public/images/4.jpg"
import photo12 from "../public/images/12.jpg"
import photo13 from "../public/images/13.jpg"
import photo14 from "../public/images/14.jpg"
import photo15 from "../public/images/15.jpg"
import photo5 from "../public/images/5.png"
import photo9 from "../public/images/9.png"
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex h-full flex-col p-6">
      {/* <MainPageCarusel caruselImages={[photo5.src, photo12.src, photo4.src, photo15.src]} /> */}
      <div className='my-4 flex justify-center bg-cyan-800 rounded p-5'>

        <Image alt={"firstImage"} height={460} width={480} src={photo9.src} className='rounded'/>
      </div>
      <div className="my-4 flex justify-center grow flex-col gap-4 md:flex-row">
        <div className=" flex flex-col justify-center justify-items-center items-center gap-4 rounded-lg bg-stone-200 px-6 py-10 md:w-2/5 md:px-20">

          <FaGit className="size-32 w-20 h-20 md:w-10 md:h-10" />

          <p className={`dir-rtl text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>گیت {' '}</strong>
            سرویس میزبانی وب برای پروژه هایی که ازاین سرویس سورس کنترل استفاده میکنند

          </p>
          <Link
            href="https://scm.msc.ir" target='_blank' rel='noopener noreferrer'
            className="flex items-center gap-5  rounded-lg bg-red-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-900 md:text-base"
          >

            <span>گیت</span> <FaGithub className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex flex-col justify-center justify-items-center items-center gap-4 rounded-lg bg-stone-200 px-6 py-10 md:w-2/5 md:px-20">

          <TbPentagon className="size-32 w-20 h-20 md:w-10 md:h-10" />

          <p className={`dir-rtl text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>نکسوس {' '}</strong>
            سرویس میزبانی کتابخانه ها و وابستگی های لازم برای برنامه نویسی و توسعه نرم افزار

          </p>
          <Link
            href="https://art.msc.ir" target='_blank' rel='noopener noreferrer'
            className="flex items-center gap-5  rounded-lg bg-red-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-900 md:text-base"
          >
            <span>نکسوس</span> <GoDatabase className=" animate-bounce w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex flex-col justify-center justify-items-center items-center gap-4 rounded-lg bg-stone-200 px-6 py-10 md:w-2/5 md:px-20">

          <RiMovie2Line className="size-32 w-20 h-20 md:w-10 md:h-10" />

          <p className={`dir-rtl text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>فیلمهای آموزشی {' '}</strong>
            راهنمای تصویری استفاده از امکانات محیط توسعه

          </p>
          <Link
            href="/courses"
            className="flex items-center gap-5  rounded-lg bg-red-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-900 md:text-base"
          >
            <span>آموزش</span> <BiSolidMoviePlay className=" animate-bounce w-5 md:w-6" />
          </Link>
        </div>

      </div>
    </main>
  );
}

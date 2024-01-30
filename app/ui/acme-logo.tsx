import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FaCode } from "react-icons/fa6";


export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <Link  href="/" className={`flex flex-row items-center leading-none text-white`}>

        <FaCode className="h-8 w-8 mx-5 rotate-[15deg]" />
        <p className="text-[28px]">پرتال جامع توسعه دهندگان</p>
      </Link>
    </div>
  );
}

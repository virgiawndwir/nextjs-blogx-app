'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from './navbar.module.css';
import NextLogo from '../../../public/nextjs-240.svg';
import Button from "../ui/Button/Button";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = e => {
    window.scrollY > 1 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <nav className={`${navBg ? 'bg-neutral-50 shadow-md' : 'bg-neutral-50'} fixed z-20 w-full top-0 start-0`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={'40'}
            height={'40'}
            src={NextLogo}
            className=""
            alt="Next JS Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            NBlogx
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button
            href={'/contact'}
            type="button"
            title='Contact Us Now!'
            className={`${styles.btnSubscribe} text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium shadow-md text-sm px-4 py-2 text-center`}
          >
            Contact Us
          </Button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link href="#" className={`${styles.navLink} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>
                Scary Stories
              </Link>
            </li>
            <li>
              <Link href="#" className={`${styles.navLink} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>
                Fantasy
              </Link>
            </li>
            <li>
              <Link href="#" className={`${styles.navLink} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>
                Horror
              </Link>
            </li>
            <li>
              <Link href="#" className={`${styles.navLink} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>
                History
              </Link>
            </li>
            <li>
              <Link href="#" className={`${styles.navLink} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>
                Fun
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

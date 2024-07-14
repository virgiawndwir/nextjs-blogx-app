import React from "react";
import Container from "../Container/Container";
import Link from "next/link";

const Breadcrumbs = ({ id }) => {
  return (
    <Container className={'p-6 sm:p-6 md:p-12 lg:p-12 xl:p-16 pt-24 sm:pt-24 md:pt-24 lg:pt-32 xl:pt-32 pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0'}>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <Link
              href="/"
              class="inline-flex items-center font-medium text-[#242424] underline hover:text-blue-600 text-xs sm:text-sm md:text-base lg:text-base xl:text-base"
            >
              <svg
                class="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-gray-500 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href="/posts"
                class="ms-1 font-medium text-[#242424] underline hover:text-blue-600 md:ms-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-base"
              >
                Posts
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-gray-500 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ms-1 font-medium text-gray-500 md:ms-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-base">
                { id }
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </Container>
  );
};

export default Breadcrumbs;

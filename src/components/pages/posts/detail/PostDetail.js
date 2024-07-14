"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/ui/Container/Container";
import styles from "./detail.module.css";
import Image from "next/image";
import PostImage from "../../../../../public/post-image.png";
import NextLogo from "../../../../../public/nextjs-240.svg";

const PostDetail = ({ post }) => {
  return (
    <Container className="px-6 sm:px-6 md:px-12 lg:px-12 xl:px-12 mt-6">
      <div className="upstairs fixed -right-24 sm:-right-24 md:-right-10 lg:right-24 xl:right-24 top-56 sm:top-56 md:top-40 lg:top-40 xl:top-40"></div>
      <div className={`${styles.cardBox} mx-auto`}>
        <div className="grid sm:grid md:grid lg:grid-cols-12 xl:grid-cols-12 gap-12 mb-6">
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-9 xl:col-span-9">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-5">
              {post.title}
            </h1>
            <p className="text-[#242424] mb-4 text-justify text-xs sm:text-sm md:text-md lg:text-base xl:text-base">
              {post.body}
            </p>
          </div>
          <div className="hidden sm:hidden md:hidden lg:block xl:block lg:col-span-3 xl:col-span-3 px-4">
            <Image src={NextLogo} className="lg:w-5/6 xl:w-4/6" alt="Next JS logo" />
          </div>
        </div>

        <div className="flex sm:flex md:hidden lg:hidden xl:hidden gap-2 float-end mb-3">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              class="bg-purple-100 text-purple-800 font-semibold px-2.5 py-1 rounded-full text-xs sm:text-sm md:text-md lg:text-md xl:text-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <Image className="w-full  mx-auto" src={PostImage} alt="Post Image" />

        <div className={`pt-2 pb-4`}>
          <div className={`flex items-center pt-4 gap-3`}>
            <div className="flex gap-3">
              <div className="flex items-center">
                <span title={`${post.views} views`}>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/fluency-systems-regular/18/585858/visible--v1.png"
                    alt="visible--v1"
                  />
                </span>
                <span
                  title={`${post.views} views`}
                  className="ms-2 font-bold text-[#242424] text-xs sm:text-sm md:text-md lg:text-md xl:text-md"
                >
                  {post.views}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span title={`${post.reactions.likes} likes`}>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/material-outlined/18/585858/like--v1.png"
                    alt="like--v1"
                  />
                </span>
                <span
                  title={`${post.reactions.likes} likes`}
                  className="font-bold text-[#242424] text-xs sm:text-sm md:text-md lg:text-md xl:text-md"
                >
                  {post.reactions.likes}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span title={`${post.reactions.dislikes} dislikes`}>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/material-outlined/18/585858/dislike.png"
                    alt="dislike"
                  />
                </span>
                <span className="font-bold text-[#242424] text-xs sm:text-sm md:text-md lg:text-md xl:text-md">
                  {post.reactions.dislikes}
                </span>
              </div>
            </div>
            <div className="hidden sm:hidden md:flex lg:flex xl:flex gap-2 ms-auto">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  class="bg-purple-100 text-purple-800 font-semibold px-2.5 py-1 rounded-full text-xs sm:text-sm md:text-md lg:text-md xl:text-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostDetail;

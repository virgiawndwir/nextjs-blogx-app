'use client'

import PostsComponent from "@/components/pages/posts/PostsComponent";
import Image from "next/image";
import { useEffect, useState } from "react";
import BagGif from "../../../public/techny.gif"

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/posts?limit=6&skip=${(page-1)*6}`)
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts);
        setTotalPosts(data.total);
      } else {
        throw new Error(json.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPosts()
  }, [page]);
  return (
    <div className="p-8 sm:p-12 md:p-10 lg:p-20 xl:p-20 mt-20 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-12">
      <div className="spotlight-text flex flex-col gap-3 pb-10">
        <h6 className="text-center font-bold">Our blogs</h6>
        <h1 className="text-center text-3xl sm:text-3xl md:text-3xl lg:text-6xl font-bold sm:font-bold md:font-bold lg:font-light xl:font-light mb-2">Updates Info & News</h1>
        <p className="text-center text-gray-500">The latest news to drive business strategy.</p>
        <div className="upstairs fixed -right-24 sm:-right-24 md:-right-10 lg:right-24 xl:right-24 top-56 sm:top-56 md:top-40 lg:top-40 xl:top-40"></div>
        <Image src={BagGif} className="fixed -left-8 top-20 opacity-40 -z-10" draggable={false} width={200} height={200} alt="FS"/>
      </div>
      
      <PostsComponent totalPosts={totalPosts} isLoading={isLoading} posts={posts} page={page} setPage={setPage}/>
    </div>
  );
};

export default Posts;
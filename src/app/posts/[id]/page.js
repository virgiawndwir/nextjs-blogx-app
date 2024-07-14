"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/ui/Container/Container";
import NoInternet from "@/components/pages/no-internet/Index";
import PostDetail from "@/components/pages/posts/detail/PostDetail";
import PostsLoader from "@/components/ui/Loader/PostsLoader";
import PostComments from "@/components/pages/posts/detail/PostComments";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import { usePathname } from "next/navigation";
import DetailLoader from "@/components/ui/Loader/DetailLoader";

const Detail = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalComments, setTotalComments] = useState(0);
  const [loadedComments, setLoadedComments] = useState(3);
  const pathname = usePathname();

  const getPostDetail = async (postId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPostComments = async (postId, limit, skip = 0) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/posts/${postId}/comments?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      setComments(data.comments);
      setTotalComments(data.total);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getPostDetail(id);
      getPostComments(id, loadedComments);
    }
  }, [id]);

  const loadMoreComments = () => {
    const remainingComments = totalComments - loadedComments;
    const nextLoad = Math.min(remainingComments, 3);
    getPostComments(id, loadedComments + nextLoad);
    setLoadedComments(prev => prev + nextLoad);
  };

  if (isLoading) {
    return (
      <Container className="pt-5">
        <div className="flex justify-center pt-15">
          <DetailLoader />
        </div>
      </Container>
    );
  }

  if (!post) {
    return <NoInternet />;
  }

  console.log(comments);
  return (
    <>
      <Breadcrumbs id={id} />
      <PostDetail post={post} />
      <PostComments
        isLoading={isLoading}
        comments={comments}
        totalComments={totalComments} 
        loadedComments={loadedComments}
        loadMoreComments={loadMoreComments}
      />
    </>
  );
};

export default Detail;

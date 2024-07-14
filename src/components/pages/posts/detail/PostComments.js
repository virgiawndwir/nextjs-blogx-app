import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import PostsLoader from "@/components/ui/Loader/PostsLoader";
import React, { useState } from "react";

const PostComments = ({
  isLoading,
  comments,
  totalComments,
  loadedComments,
  loadMoreComments,
}) => {
  const getInitials = (fullName) => {
    const names = fullName.split(" ");
    const initials = names.map((name) => name[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <Container className="px-6 sm:px-6 md:px-12 lg:px-12 xl:px-12 mt-6">
      <h2 className="font-semibold border-b border-b-gray-500 pb-5 mb-12 text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">{totalComments} Comments</h2>
      {isLoading ? (
        <div className="flex justify-center">
          <PostsLoader />
        </div>
      ) : (
        <div>
          {comments.length === 0 ? (
            <p>No comments found</p>
          ) : (
            <div className="mb-6">
              {comments.map((comment, index) => (
                <div key={index} className="relative mb-6">
                  <div className="absolute top-3 left-1 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="font-bold text-xs sm:text-sm md:text-md lg:text-base xl:text-base">
                        {getInitials(comment.user.fullName)}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg border border-neutral-400 pl-8 pt-5">
                    <h6 className="font-bold mb-5 text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl">
                      <strong>{comment.user.fullName}</strong> |{" "}
                      <i>@{comment.user.username}</i>
                    </h6>
                    <p className="text-[#242424] text-xs sm:text-sm md:text-md lg:text-base xl:text-base">{comment.body}</p>
                  </div>
                </div>
              ))}
              {loadedComments < totalComments && (
                <Button
                  onClick={loadMoreComments}
                  className="px-4 py-2 border border-[#242424] bg-white text-[#242424] hover:bg-gray-300 w-full rounded-none"
                >
                  Load more...
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default PostComments;

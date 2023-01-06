import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/Features/PostsSlice";
import Post from "../Components/Post";
import { Skeleton } from "antd";
import Api from "../Api/Api";

export default function Main() {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const isLoading = posts.isLoading;
  console.log(isLoading);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className="flex flex-col gap-5 p-3 ">
      {isLoading &&
        [...Array(5)].map(() => {
          return (
            <div className="flex flex-col gap-2">
              <Skeleton.Image active />
              <Skeleton active paragraph={{ rows: 4 }} />
            </div>
          );
        })}
      {posts?.items.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

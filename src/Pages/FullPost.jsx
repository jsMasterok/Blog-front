import Api from "../Api/Api";
import React, { useEffect, useState } from "react";
import { Image, Typography, Skeleton, Button } from "antd";
import { useParams } from "react-router-dom";
import { EyeFilled } from "@ant-design/icons";
const { Text, Link, Title } = Typography;

export default function FullPost() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Api.get(`/posts/${id}`)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const post = data.data;
  console.log(post);
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-2">
          <Skeleton.Image active />
          <Skeleton active paragraph={{ rows: 10 }} />
        </div>
      ) : (
        <div className="w-full max-w-full  flex flex-col gap-2 font-sans box bottom-0">
          <Title level={1} className="text-center font-sans">
            {post.title}
          </Title>
          {/* <h1 className="text-center text-3xl font-bold ">Post Title</h1> */}
          {post.imageUrl ? (
            <Image
              width={"100%"}
              className="rounded-md object-contain"
              src={post.imageUrl}
            />
          ) : (
            <div className="flex justify-center items-center flex-col gap-2">
              <Image
                width={"150px"}
                height={"150px"}
                src="https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg"
              />
              <Text code className="font-sans text-lg font-semibold">
                Post without image :(
              </Text>
            </div>
          )}
          <div className="flex items-center justify-between w-full">
            <Text default mark className="text-mono text-base font-bold">
              {new Date(post.createdAt).toLocaleDateString()}
            </Text>
            <div className="w-fit flex items-center gap-1">
              <EyeFilled size={30} />
              <span>{post.viewsCount}</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-2 flex-wrap">
            {post?.tags.map((item, index) => {
              return (
                <Button className="font-mono font-bold" key={index}>
                  {item}
                </Button>
              );
            })}
          </div>
          <Text strong className="font-sans max-w-full">
            {post.text}
          </Text>
        </div>
      )}
    </>
  );
}

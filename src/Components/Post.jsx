import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Image, Avatar, Modal, Space, Typography } from "antd";
const { Text } = Typography;

export default function Post({ post, ...props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const user = post.user;
  const buttonText = `readMore.()`;

  return (
    <div className="flex flex-col p-2 rounded-md transition-shadow  font-sans hover:shadow-md shadow-slate-500 decoration-transparent text-black">
      <div
        className="w-full flex items-center justify-between cursor-pointer my-2 gap-2 transition-colors px-1 py-2 hover:bg-gray-100 rounded-sm bg-opacity-50 hover:shadow-lg shadow-black"
        onClick={showModal}
      >
        <Avatar size={"large"} gap src={user.avatar}>
          {user.fullName}
        </Avatar>
        <span className="text-lg font-semibold">{user.fullName}</span>
      </div>
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

      <h2 className="font-semibold text-2xl">{post.title}</h2>
      <p className="text-base font-medium line-clamp-4">{post.text}</p>
      <div className="w-full flex items-center gap-2 flex-wrap mb-2">
        {post?.tags.map((tag) => {
          return (
            <Button size="small" key={tag.id}>
              {tag}
            </Button>
          );
        })}
      </div>
      <Link to={`/post/${post._id}`} className="">
        <Button
          type="primary"
          className="w-fit font-mono text-base mt-2 font-bold"
        >
          {buttonText}
        </Button>
      </Link>
      <Modal
        className="font-sans"
        title="User Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space
          direction="vertical"
          align="center"
          size={"middle"}
          className="w-full"
        >
          <Avatar shape="square" size={128} src={user.avatar}>
            {user.fullName}
          </Avatar>
          <span className="capitalize text-2xl font-semibold ">
            {user.fullName}
          </span>
          <span className=" text-xl font-medium ">{user.email}</span>
        </Space>
        {/* <Space /> */}
      </Modal>
    </div>
  );
}

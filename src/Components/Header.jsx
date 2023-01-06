import React, { useState } from "react";
import { Button, Drawer, Space,Text } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Header() {
  const logoText = `<IT-blog/>`;
  const loginText = `() => Login`;
  const registerText = `() => Register`;

  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(true);
  };
  const onClose = () => {
    setOpenMenu(false);
  };

  return (
    <div className="w-full flex items-center justify-between px-3 py-1 box-border">
      <Link to={'/'}>
        <Button type="primary" size="large" className="font-mono font-bold ">
          {logoText}
        </Button>
      </Link>
      <Button type="primary" size="large" onClick={showMenu}>
        <MenuOutlined />
      </Button>
      <Drawer
        title={logoText}
        placement="right"
        onClose={onClose}
        open={openMenu}
        className={"font-sans max-w-full overflow-hidden"}
      >
        <Space direction="vertical" size={"middle"} className="w-full">
          <Button block className="font-mono text-lg font-semibold h-11">
            {loginText}
          </Button>
          <Button
            block
            className="font-mono text-lg font-semibold h-11"
            type="primary"
          >
            {registerText}
          </Button>
        </Space>
      </Drawer>
    </div>
  );
}

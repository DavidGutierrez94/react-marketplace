import React, { useState } from 'react';
import { Menu } from 'antd';
import Emoji from 'a11y-react-emoji';
import { UserOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const Header = () => {
    const [current, setCurrent] =useState("");
    const handleClick = () => {
        //TODO
    };
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail">
          Home <Emoji symbol="😀" label="grinding face"/>
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<UserOutlined />}
          title="Register">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>

  
    );
  }
  
  export default Header;
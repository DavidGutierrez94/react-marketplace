import React, { useState } from 'react';
import { Menu } from 'antd';
import Emoji from 'a11y-react-emoji';
import {Link} from 'react-router-dom';

const { SubMenu,Item } = Menu;
const Header = () => {
    const [current, setCurrent] =useState("home");
    const handleClick = (e) => {
    
        setCurrent(e.key);
    };
    return (
    
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"  className="p-3">
            <Item key="home">
                <h5><Emoji symbol="💡" label="Light Bulb"/>Creeando-Marketplace</h5>
                <Link to="/"/>
            </Item>
            <Item key="login" className="float-right">
                <Emoji symbol="👩‍🚀" label="Women astronaut"/> Ingresar
                <Link to="/login"/>
            </Item>
            <Item key="register" className="float-right">
                <Emoji symbol="👶" label="Baby"/> Registro
                <Link to="/register"/>
            </Item>
        </Menu>
        
    );
  }
  
  export default Header;
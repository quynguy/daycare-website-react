import React from 'react';
import { Menu } from 'antd';

const AppHeader = () => {
  return (
    <div className="container-fluid">
        <div className="header">
            <div className="logo">
                <span class="material-symbols-outlined"> dictionary</span>
                <a href="http://www.google.com">Polyglot Pages Preschool</a>
            </div>
            <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="1">About</Menu.Item>
                <Menu.Item key="1">Programs</Menu.Item>
                <Menu.Item key="1">Enrollment</Menu.Item>
                <Menu.Item key="1">FAQs</Menu.Item>
                <Menu.Item key="1">Contact Us</Menu.Item>
            </Menu>
        </div>
    </div>
  );
};

export default AppHeader;
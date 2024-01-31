import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

const AppHeader = () => {
  return (
    <div className="container-fluid">
        <div className="header">
            <div className="logo">
                <a href="http://www.google.com">Polyglot Pages Preschool</a>
            </div>
            <Anchor targetOffset="65">
              <Link href="#home" title="Home" />
              <Link href="#about" title="About Us" />
              <Link href="#programs" title="Programs" />
              <Link href="#enrollment" title="Enrollment" />
              <Link href="#faq" title="FAQs"  />
              <Link href="#contact" title="Contact Us" />
            </Anchor>
        </div>
    </div>
  );
};

export default AppHeader;
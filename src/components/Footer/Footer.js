import React from "react";
import { Space } from 'antd';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bar">
        <Space size="large" align="center">
          <a
            href="https://github.com/DomenicoBarb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../images/white-github.png")}
              alt="Github"
              className="logo"
              title="My GitHub profile"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/domenico-a-barberi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../images/white-linked-in.png")}
              alt="LinkedIn"
              className="logo"
              title="My LinkedIn profile"
            />
          </a>
        </Space>
      </div>
    </footer>
  );
}

export default Footer;

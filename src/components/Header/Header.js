import React from "react";
import { Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

function Header() {
  const isTiny = useMediaQuery({ maxWidth: 300 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1000 });

  return (
    <header className="navbar">
      <div className={`navbar-container ${isMobile || isTablet ? 'center' : ''}`}>
        <Title
          className="navbar-title"
          style={{
            color: '#FFF',
            fontWeight: 'bolder',
            marginTop: isTiny ? '25px' : (isMobile || isTablet ? 20 : '16px'),
            fontSize: isTiny ? '1.2rem' : (isMobile ? '1.5rem' : '2rem'),
          }}
          level={2}
        >
          Domenico Barberi
        </Title>
      </div>
    </header>
  );
}

export default Header;

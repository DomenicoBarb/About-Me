import React from "react";
import { Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1000 });

  return (
    <header className="navbar">
      <div>
        <Title
          style={{
            color: '#FFF',
			fontWeight: 'bolder',
            textAlign: isMobile || isTablet ? 'center' : 'left',
            marginLeft: isMobile || isTablet ? 0 : '25px',
			marginTop: isMobile ? 15 : '15px',
          }}
          level={2}
          title="You found an Easter egg! Are there other ones? 🤔"
        >
          Domenico Barberi
        </Title>
      </div>
    </header>
  );
}

export default Header;

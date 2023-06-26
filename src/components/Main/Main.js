import React from 'react';
import { Typography, Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import portraitImage from '../../images/logo512.webp';
import '../../App.css';

const { Title, Paragraph } = Typography;

export default function Main() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ maxWidth: 1000 });

    return (
        <div className="about-page">
            <Row gutter={16} justify={isMobile || isTablet ? 'center' : 'start'} align="top" className="holder-container">
                {isMobile || isTablet ? (
                    <Row align="middle" justify="center" xs={24} lg={24} style={{ marginBottom: '20px' }}>
                        <img
                            src={portraitImage}
                            alt="Portrait"
                            title="Not a picture of me but I do have a moustache"
                            className="portrait-image"
                            style={{ width: '70%', marginTop: '122px' }}
                        />
                    </Row>
                ) : (
                    <Col xs={24} lg={6}>
                        <div style={{ height: '100%', display: 'flex', alignItems: 'flex-start' }}>
                            <img
                                src={portraitImage}
                                alt="Portrait"
                                title="Not a picture of me but I do have a moustache"
                                className="portrait-image"
                                style={{ width: '90%', marginLeft: '40px', marginTop: '140px' }}
                            />
                        </div>
                    </Col>
                )}
                <Col xs={24} lg={isMobile ? 24 : isTablet ? 24 : 18}>
                    <Title
                        level={1}
                        className="page-header"
                        style={{
                            color: '#FFF',
                            paddingTop: isMobile || isTablet ? '0px' : '75px',
                            fontWeight: '450',
                            textAlign: isMobile || isTablet ? 'center' : 'center',
                            marginLeft: isMobile || isTablet ? '0px' : '0px',
                        }}
                    >
                        About Me!
                    </Title>
                    <div className="bio-formatting">
                        <Paragraph className="bio-text-formatting">
                            This is a test page to experiment with Ant Design and React. I am a Full-Stack Web Developer with a passion for learning new technologies and solving problems. I have another project that used Ant Design called Recall Rumble! It was the final project in my coding bootcamp that I was lucky enough to lead! It is a cool concentration-like card game where the player matches cards for a score. The fewer turns it takes, the better!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            Here is more placeholder text to test how the page renders, currently it seems like it requires a lot of text to fill the page. I could play around with CSS props to fix that!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            This is a test page to experiment with Ant Design and React. I am a Full-Stack Web Developer with a passion for learning new technologies and solving problems. I have another project that used Ant Design called Recall Rumble! It was the final project in my coding bootcamp that I was lucky enough to lead! It is a cool concentration-like card game where the player matches cards for a score. The fewer turns it takes, the better!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            Here is more placeholder text to test how the page renders, currently it seems like it requires a lot of text to fill the page. I could play around with CSS props to fix that!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            This is a test page to experiment with Ant Design and React. I am a Full-Stack Web Developer with a passion for learning new technologies and solving problems. I have another project that used Ant Design called Recall Rumble! It was the final project in my coding bootcamp that I was lucky enough to lead! It is a cool concentration-like card game where the player matches cards for a score. The fewer turns it takes, the better!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            Here is more placeholder text to test how the page renders, currently it seems like it requires a lot of text to fill the page. I could play around with CSS props to fix that!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            This is a test page to experiment with Ant Design and React. I am a Full-Stack Web Developer with a passion for learning new technologies and solving problems. I have another project that used Ant Design called Recall Rumble! It was the final project in my coding bootcamp that I was lucky enough to lead! It is a cool concentration-like card game where the player matches cards for a score. The fewer turns it takes, the better!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            Here is more placeholder text to test how the page renders, currently it seems like it requires a lot of text to fill the page. I could play around with CSS props to fix that!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            This is a test page to experiment with Ant Design and React. I am a Full-Stack Web Developer with a passion for learning new technologies and solving problems. I have another project that used Ant Design called Recall Rumble! It was the final project in my coding bootcamp that I was lucky enough to lead! It is a cool concentration-like card game where the player matches cards for a score. The fewer turns it takes, the better!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            Here is more placeholder text to test how the page renders, currently it seems like it requires a lot of text to fill the page. I could play around with CSS props to fix that!
                        </Paragraph>
                        {/* Rest of the bio-text */}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

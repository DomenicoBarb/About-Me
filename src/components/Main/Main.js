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
                            This is a test page to experiment with Ant Design and React. I am a Full-Stack Web Developer (MERN) with a passion for learning new technologies and solving problems.
                            I have another project that used Ant Design called Recall Rumble!
                            It was the final project in my coding bootcamp that I was lucky enough to lead!
                            It is a cool concentration-like card game where the player matches cards for a score.
                            The fewer turns it takes, the better! There is a link in the footer to my portforlio where you can find a link to the game!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            I made a page using Vue.js (Link in the footer) and here on this page I recreated it using React! I am also excited to learn more about Ant Design and how to use it to make beautiful pages! 
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                           Here I am using Ant Design's Paragraph tags (which only seem to exist within Ant Designs React version and NOT in their Vue version). On the Vue.js version I ended up using the Typography tag instead.
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            I am also using Ant Design's Row and Col tags to make this page responsive! I am using the useMediaQuery hook from react-responsive to make the page responsive.
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                            I would highly reccomend using Ant Design for your next project! It is a great library with a lot of components that are easy to use and look great! It is really intuitive and makes creating a repsonsive page a breeze! If you are familiar with Bootstrap, you will feel right at home with Ant Design!
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                           Ant design also has some pretty cool components built in that can speed up the dev process. For example they have built-in dropdown menus, loading bars, buttons and much more.
                        </Paragraph>
                        <Paragraph className="bio-text-formatting">
                           The animated background is just using a linear gradient within css that is animated with some background-positioning keyframing.
                           I am also using a simple animation on the text to make it fade in and another animation on the portrait and text to add a drop shadow.
                        </Paragraph>
                        {/* Rest of the bio-text */}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

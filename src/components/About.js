import React from 'react';
import { Row, Col } from 'antd';

const items = [
    {
        key: '1',
        icon: <span className="material-symbols-outlined">school</span>,
        title: 'Experiential Learning',
        content: 'Polyglot Pages provides hands-on learning experiences that engage children in active exploration, fostering a deeper understanding of language and culture.',
    },
    {
        key: '2',
        icon: <span className="material-symbols-outlined">face_4</span>,
        title: 'Qualified Educators',
        content: 'Polyglot Pages provides hands-on learning experiences that engage children in active exploration, fostering a deeper understanding of language and culture.',
    },
    {
        key: '3',
        icon: <span className="material-symbols-outlined">cast_for_education</span>,
        title: 'Parent Involvement',
        content: 'Polyglot Pages provides hands-on learning experiences that engage children in active exploration, fostering a deeper understanding of language and culture.',
    }
];

const About = () => {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>At Polyglot Pages Preschool, we nurture young learners in a diverse and inclusive environment, fostering a love for languages and a passion for lifelong learning.</p>
                </div>
                <div className="contentHolder">
                    <p>We're committed to fostering a rich multilingual environment where children flourish. With dedicated educators and an engaging curriculum, we empower young learners to embrace language diversity and global perspectives. Join us as we inspire a lifelong love for learning and cross-cultural understanding.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => (
                        <Col span={8} key={item.key}>
                            <div className="content">
                                <div className="icon"> {item.icon} </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default About;

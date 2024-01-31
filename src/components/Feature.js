import React from 'react'
import { Row, Col } from 'antd';
import image1 from '/root/SEI/projects/daycare-landing-page/src/assets/images/bilingual.jpg';
import image2 from '/root/SEI/projects/daycare-landing-page/src/assets/images/cultural-enrichment.webp';
import image3 from '../assets/images/language-immersion-classes.jpg';
import image4 from '../assets/images/multicultural-events.jpg';
import image5 from '../assets/images/language-clubs.jpg';
import image6 from '/root/SEI/projects/daycare-landing-page/src/assets/images/outdoor-exploration.jpg';

import { Card } from 'antd';
const { Meta } = Card;


const Feature = () => {
  return (
    <div id="programs" className="block featureBlock bgGray">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>Our Programs</h2>
                <p>We provide these programs to empower children with the skills and knowledge needed to thrive in an interconnected world, celebrating diversity and promoting empathy through language and cultural immersion.</p>
            </div>
            <Row gutter={[16, 16]}>
                <Col span={8}> 
                    <Card hoverable cover= {<img alt="Bilingual Storytime" src={image1} />}
                    >
                        <Meta title="Bilingual Storytime" />
                    </Card>
                </Col>

                <Col span={8}> 
                    <Card hoverable cover= {<img alt="Cultural Enrichment Activities" src={image2} />}
                    >
                        <Meta title="Cultural Enrichment Activities" />
                    </Card>
                </Col>

                <Col span={8}> 
                    <Card hoverable cover= {<img alt="Language Immersion Classes" src={image3} />}
                    >
                        <Meta title="Language Immersion Classes" />
                    </Card>
                </Col>

                <Col span={8}> 
                    <Card hoverable cover= {<img alt="Outdoor Exploration and Nature Learning" src={image6} />}
                    >
                        <Meta title="Outdoor Exploration and Nature Learning" />
                    </Card>
                </Col>

                <Col span={8}> 
                    <Card hoverable cover= {<img alt="After-School Language Clubs" src={image5} />}
                    >
                        <Meta title="After-School Language Clubs" />
                    </Card>
                </Col>

                <Col span={8}> 
                    <Card hoverable cover= {<img alt="Multicultural Events" src={image4} />}
                    >
                        <Meta title="Multicultural Events" />
                    </Card>
                </Col>

            


            </Row>
        </div>
    </div>
  );   
};

export default Feature;
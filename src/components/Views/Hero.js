import React from 'react'
import { Carousel, Button } from 'antd';
import logoimg from '/root/SEI/projects/daycare-landing-page/src/assets/images/bg-hero.jpg';
import image1 from '/root/SEI/projects/daycare-landing-page/src/assets/images/bg-hero1.jpg';
import image2 from '/root/SEI/projects/daycare-landing-page/src/assets/images/easy-customize.webp';
import image3 from '/root/SEI/projects/daycare-landing-page/src/assets/images/modern-design.jpg';

const items = [
  {
    key: '1',
    title: 'Multilingual Education',
    image: image1,
    content: 'Polyglot Pages Preschool offers a unique and enriching environment where children are exposed to multiple languages from a young age. Research has shown that early exposure to multiple languages can enhance cognitive development, improve problem-solving skills, and foster cultural understanding. By choosing Polyglot Pages, parents are giving their children the opportunity to become fluent in more than one language, setting them up for success in our increasingly globalized world.',
  },
  {
    key: '2',
    title: 'Holistic Approach to Learning',
    image: image2,
    content: 'Unlike traditional preschools, Polyglot Pages takes a holistic approach to education, focusing on the development of the whole child - mind, body, and spirit. In addition to academic learning, the curriculum includes activities that promote social-emotional skills, physical fitness, creativity, and critical thinking. Parents can feel confident knowing that their child is receiving a well-rounded education that prepares them for success in school and in life.',
  },
  {
    key: '3',
    title: 'Inclusive Community',
    image: image3,
    content: 'Polyglot Pages is committed to creating a diverse and inclusive community where every child feels valued and respected. The preschool celebrates diversity and actively promotes cultural awareness and acceptance. Parents can rest assured knowing that their child will be surrounded by classmates and teachers from different backgrounds, fostering a sense of empathy, tolerance, and appreciation for others. ',
  }
]

const Hero = () => {
  return (
    <div id="home" className='heroBlock'>
      <div className="heroContainer">
        <Carousel>
          {items.map(item => {
            return (
              <div key={item.key} className="container-fluid">
                <div className="content">
                  <div className="textContainer">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className="btnHolder">
                      <Button type="primary" size="large">Programs</Button>
                      <Button size="large">Curriculum</Button>
                    </div>
                  </div>
                  {/* <div className="imageContainer">
                    <img src={item.image} alt={item.title} />
                  </div> */}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  )
}



export default Hero;
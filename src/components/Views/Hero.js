import React from 'react'
import { Carousel, Button } from 'antd';

const items = [
  {
    key: '1',
    title: 'Multilingual Education',
    content: 'Polyglot Pages Preschool offers a unique and enriching environment where children are exposed to multiple languages from a young age. Research has shown that early exposure to multiple languages can enhance cognitive development, improve problem-solving skills, and foster cultural understanding. By choosing Polyglot Pages, parents are giving their children the opportunity to become fluent in more than one language, setting them up for success in our increasingly globalized world.',
  },
  {
    key: '2',
    title: 'Holistic Approach to Learning',
    content: 'Unlike traditional preschools, Polyglot Pages takes a holistic approach to education, focusing on the development of the whole child - mind, body, and spirit. In addition to academic learning, the curriculum includes activities that promote social-emotional skills, physical fitness, creativity, and critical thinking. Parents can feel confident knowing that their child is receiving a well-rounded education that prepares them for success in school and in life.',
  },
  {
    key: '3',
    title: 'Diverse and Inclusive Community',
    content: 'Polyglot Pages is committed to creating a diverse and inclusive community where every child feels valued and respected. The preschool celebrates diversity and actively promotes cultural awareness and acceptance. Parents can rest assured knowing that their child will be surrounded by classmates and teachers from different backgrounds, fostering a sense of empathy, tolerance, and appreciation for others. Additionally, Polyglot Pages offers resources and support for families of all backgrounds, ensuring that every parent feels welcome and included in their childs education journey.',
  }
]

const Hero = () => {
  return (
    <div className='heroBlock'>
      <Carousel>
        {items.map(item => {
          return (
            <div className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="binHolder">
                  <Button type="primary" size="large">Programs</Button>
                  <Button size="large"> Curriculum</Button>
                </div>
              </div>
            </div>
          );
        })}
    </Carousel>
    </div>
  )
}

export default Hero;
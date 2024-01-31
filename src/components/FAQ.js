import React from 'react'

import { Collapse, Button } from 'antd'
const { Panel } = Collapse;

const FAQ = () => {
  return (
    <div id="faq" className="block faqBlock">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of the most frequently asked questions</p>
            </div>

                <div className="faqcontents">
                <Collapse defaultActiveKey={['1']}>
                <Panel header="What languages are spoken and taught at Polyglot Preschool?" key="1">
                    <p>At Polyglot Preschool, we offer a diverse range of languages, including but not limited to English, Spanish, French, Mandarin, and Arabic. Our curriculum is designed to immerse children in multiple languages, fostering bilingualism and cultural understanding.</p>
                </Panel>
                <Panel header="How do you ensure language proficiency development in children?" key="1">
                    <p>We employ qualified educators who are fluent or proficient in the languages we teach. Through immersive language activities, storytelling, music, and play-based learning, we create an environment where children naturally acquire language skills while having fun.</p>
                </Panel>
                <Panel header="What is the teacher-to-student ratio in your classrooms?" key="1">
                    <p>We maintain small class sizes to ensure personalized attention and effective language instruction. Our teacher-to-student ratio typically ranges from 1:6 to 1:8, allowing our educators to engage with each child individually and support their language development.</p>
                </Panel>
                <Panel header="What opportunities are available for parent involvement in language learning?" key="1">
                    <p>We encourage parents to be actively involved in their child's language development by providing resources, workshops, and events that support language learning at home. Additionally, we offer parent-teacher conferences and communication channels to discuss language progress and strategies for reinforcement.</p>
                </Panel>
                <Panel header="How do you assess children's language proficiency and progress?" key="1">
                    <p>We use a combination of informal observations, language assessments, and developmental milestones to track each child's language acquisition journey. Our educators regularly monitor progress and adjust teaching strategies to meet individual needs.</p>
                </Panel>
                <Panel header="What resources do you provide to support language learning at home?" key="1">
                    <p>We offer a variety of resources, including bilingual books, language-learning apps, and recommended activities that parents can incorporate into their daily routines. Our educators also provide tips and strategies for creating a language-rich environment at home.</p>
                </Panel>
                </Collapse>
                </div>
                <div className="quickSupport">
                    <h3>Require further assistance?</h3>
                    <p>Don't hesitate to reach out to us. Our staff will be happy to assist.</p> 
                    <Button type="primary" size="large"> Call Us </Button>
                </div>
        </div>
    </div>
  )
}

export default FAQ
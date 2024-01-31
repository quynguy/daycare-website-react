import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;

const Contact = () => {
  return (
    <div id="contact" className="block contactBlock">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us with any questions or concerns. Our team will be happy to assist.</p>
            </div>
            <Form name="normal_login" className="login-form"
            initialValues={{
                remember: true,
            }}
            
            >
            <Form.Item 
            name="Full Name" 
            rules={[{ required: true, message: 'Please input your Full Name'}]}
            >
            <Input placeholder="Full Name" />

            </Form.Item>
            <Form.Item name="Email" 
            rules={[{ required: true, message: 'Please input your Email!'}]}
            >
           <Input type="Email" placeholder="Email"/>
            </Form.Item>

            <Form.Item 
            name="Phone Number" 
            >
            <Input placeholder="Phone Number" />
            </Form.Item>

            <Form.Item 
            name="Subject" 
            >
            <Input placeholder="Subject" />
            </Form.Item>

            <Form.Item 
            name="Message" 
            >
            <TextArea placeholder="Message" />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                {
                    validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
                ]}
            >
                <Checkbox className="check">
                I have read the terms and conditions
                </Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
    </div>
  );
};

export default Contact;
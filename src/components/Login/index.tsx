import { Button, Col, Form, Input, Row, message } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const Login = () => {

  const auth = useAuth();
  const history = useHistory();

  async function onFinish(value: {email: string, password: string}) {

    
    try {
      await auth.authenticate(value.email, value.password);

      history.push('/profile')

    } catch (error) {
      message.error('Invalid email or password')
    }
  }

  return (
    <Row
      justify='center'
      align='middle'
      style={{
        height: '100vh'
    }}
    >
      <Col span={12}>

        <Form
          name='loginForm'
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          onFinish={onFinish}
        >

          <Form.Item
            label='Email'
            name='email'
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset:8, span: 16}}>
            <Button type='primary' htmlType='submit' >
              Sign in  
            </Button>
          </Form.Item>

        </Form>

      </Col>
    </Row>

  )
}
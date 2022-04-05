import { Helmet } from 'react-helmet'
import { Button, Card, Form, Input } from 'antd'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <div className='bg-blue-700 min-h-screen'>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="py-8">
                <Card title='Socialite' className='max-w-md mx-auto rounded'>
                    <Form layout='vertical'>

                        <Form.Item className='mb-4' name='email' label='Email'>
                            <Input className='rounded' type='email' size='large' placeholder='Please enter your email here' />
                        </Form.Item>

                        <Form.Item className='mb-4' name='name' label='Name'>
                            <Input className='rounded' type='text' size='large' placeholder='Please enter your name here' />
                        </Form.Item>

                        <Form.Item className='mb-4' name='password' label='Password'>
                            <Input.Password className='rounded' size='large' placeholder='Please enter your password here' />
                        </Form.Item>

                        <Form.Item className='mb-4' name='password_confirmation' label='Confirm Password'>
                            <Input.Password className='rounded' size='large' placeholder='Please re-enter your password' />
                        </Form.Item>

                        <Form.Item>
                            <Button className='rounded' size='large' block  type='primary' htmlType='submit'>
                                Create Account
                            </Button>
                            <p className='mt-2 text-center'>
                                <span>Already have an account? Log in </span>
                                <Link className='link' to='/login'>here</Link>.
                            </p>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
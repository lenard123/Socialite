import { Helmet } from 'react-helmet'
import { Button, Card, Form, Input } from 'antd'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className='bg-blue-700 min-h-screen'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="py-8">
                <Card title='Socialite' className='max-w-md mx-auto rounded'>
                    <Form layout='vertical'>

                        <Form.Item className='mb-4' name='email' label='Email'>
                            <Input className='rounded' type='email' size='large' placeholder='Please enter your email here' />
                        </Form.Item>

                        <Form.Item className='mb-4' name='password' label='Password'>
                            <Input.Password className='rounded' size='large' placeholder='Please enter your password here' />
                        </Form.Item>

                        <Form.Item>
                            <Button className='rounded' size='large' block  type='primary' htmlType='submit'>
                                Sign in
                            </Button>
                            <p className='mt-2 text-center'>
                                <span>Don't have an account? Sign up </span>
                                <Link className='link' to='/register'>here</Link>.
                            </p>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
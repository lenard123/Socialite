import { Helmet } from 'react-helmet'
import { Button, Card, Form, Input } from 'antd'
import { Link, Navigate } from 'react-router-dom'
import rules from './validationRules'
import useLogin from './useLogin'

export default function LoginPage() {

    const { mutate, isLoading, validationErrors, isSuccess } = useLogin()

    const handleSubmit = (formData) => {
        if (isLoading) return;
        mutate(formData)
    }

    return (
        <div className='bg-blue-700 min-h-screen'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="py-8">
                <Card title='Socialite' className='max-w-md mx-auto rounded'>
                    <Form onFinish={handleSubmit} layout='vertical'>

                        <Form.Item 
                            rules={rules.email} 
                            className='mb-4' 
                            name='email' 
                            label='Email'
                            {...validationErrors.email}>
                            <Input className='rounded' type='email' size='large' placeholder='Please enter your email here' />
                        </Form.Item>

                        <Form.Item 
                            rules={rules.password} 
                            className='mb-4' 
                            name='password' 
                            label='Password'
                            {...validationErrors.password}>
                            <Input.Password className='rounded' size='large' placeholder='Please enter your password here' />
                        </Form.Item>

                        <Form.Item>
                            <Button loading={isLoading} className='rounded' size='large' block  type='primary' htmlType='submit'>
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
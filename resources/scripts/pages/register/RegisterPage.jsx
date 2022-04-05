import { Helmet } from 'react-helmet'
import { Button, Card, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import useRegister from '@/scripts/queries/useRegister'
import validationRules  from './validationRules'
import { useState, useEffect } from 'react'

export default function RegisterPage() {

    const [validationErrors, setValidationErrors] = useState({})
    const { mutate, error, status, isError, isLoading } = useRegister()

    useEffect(() => {
        if (isError) {
            setValidationErrors(error.validationErrors)
        }
    }, [status])

    const handleSubmit = (data) => {
        if (isLoading) return
        setValidationErrors({})
        mutate(data)
    }

    return (
        <div className='bg-blue-700 min-h-screen'>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="py-8">
                <Card title='Socialite' className='max-w-md mx-auto rounded'>
                    <Form onFinish={handleSubmit} layout='vertical'>

                        <Form.Item 
                            rules={validationRules.email} 
                            className='mb-4' 
                            name='email' 
                            label='Email'
                            {...validationErrors.email}
                            >
                            <Input  className='rounded' type='email' size='large' placeholder='Please enter your email here' />
                        </Form.Item>

                        <Form.Item 
                            rules={validationRules.name} 
                            className='mb-4' 
                            name='name' 
                            label='Name'
                            {...validationErrors.name}
                            >
                            <Input className='rounded' type='text' size='large' placeholder='Please enter your name here' />
                        </Form.Item>

                        <Form.Item 
                            rules={validationRules.password} 
                            className='mb-4' 
                            name='password' 
                            label='Password'
                            {...validationErrors.password}
                            >
                            <Input.Password className='rounded' size='large' placeholder='Please enter your password here' />
                        </Form.Item>

                        <Form.Item 
                            rules={validationRules.password_confirmation} 
                            className='mb-4' 
                            name='password_confirmation' 
                            label='Confirm Password'
                            {...validationErrors.password_confirmation}
                            >
                            <Input.Password className='rounded' size='large' placeholder='Please re-enter your password' />
                        </Form.Item>

                        <Form.Item>
                            <Button loading={isLoading} className='rounded' size='large' block  type='primary' htmlType='submit'>
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
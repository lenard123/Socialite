import WritePost from '@/scripts/components/WritePost'
import { Helmet } from 'react-helmet'

export default function HomePage() {
    return (
        <div className='sm:p-4'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='max-w-5xl mx-auto w-full grid grid-cols-3 lg:grid-cols-5'>

                <WritePost className='col-span-3' />

                <div className='p-8 bg-green-500 col-span-2 hidden lg:block'>
                    a
                </div>

            </div>
        </div>
    )
}
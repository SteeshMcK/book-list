import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // moves user back one in the user's history
            // router.go(-1)
            router.push('/')
        }, 3000)
        console.log('useEffect ran')
    }, [])
    return ( 
        <div className='not-found'>
            <h1>Uh oh!</h1>
            <h2>That page cannot be found.</h2>
            <p>Please go back to the <Link href='/'><a>Homepage.</a></Link></p>
        </div>

     );
}
 
export default NotFound;
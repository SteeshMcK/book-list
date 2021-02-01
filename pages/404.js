import Link from 'next/link'

const NotFound = () => {
    return ( 
        <div className='not-found'>
            <h1>Uh oh!</h1>
            <h2>That page cannot be found.</h2>
            <p>Please go back to the <Link href='/'><a>Homepage.</a></Link></p>
        </div>

     );
}
 
export default NotFound;
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src ='/books.jfif' width={277} height={182} />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/books'><a>Book Listing</a></Link>
        </nav>
      );
}
 
export default Navbar;
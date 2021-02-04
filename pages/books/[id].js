import Books from "."

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    
    const paths = data.map(book => {
        return {
            params: { id: book.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const post = await res.json()

    return { props: { book: post } }
}

const Details = ({ book }) => {
    return ( 
        <div>
            <h1>Details Page</h1>
            <div>
                <h2>{ book.name }</h2>
                <p>{ book. email }</p>
                <p>{ book.phone }</p>
                <p>{ book.address.city }</p>
            </div>
        </div>
     );
}
 
export default Details;
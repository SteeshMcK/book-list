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

// line 19 syntax is per next.js documentation hence the
//difference from the getStaticProps function in index.js
export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()

    return { props: { book: data } }
}

const Details = ({ book }) => {
    return ( 
        <div>
            <h1>{ book.name }</h1>
            <p>{ book. email }</p>
            <p>{ book.website }</p>
            <p>{ book.address.city }</p>
        </div>
     );
}
 
export default Details;
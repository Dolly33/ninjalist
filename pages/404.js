import Link from 'next/link'

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h1>Ooops....</h1>
            <h2>This page cannot be found</h2>
            <p>Go back home to the <Link href="/"><a>homepage</a></Link></p>
        </div>
     );
}
 
export default Notfound;
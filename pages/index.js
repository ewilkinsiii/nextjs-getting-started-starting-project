import Link from 'next/link'

const HomePage = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="/about">About Me </Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs </Link>
                </li>
                <li>
                    <Link href="/clients">Clients </Link>
                </li>
                <li>
                    <Link href="/portfolios">Portfolio </Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
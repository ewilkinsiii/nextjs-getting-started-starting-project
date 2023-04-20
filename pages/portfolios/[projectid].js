import { useRouter } from 'next/router';
const PortfolioProjectPage = () => {
    const router = useRouter();

    console.log(router.pathname); // just returns the path inferred by NextJS portfolio/[projectid]
    console.log(router.query); //  gives you access to the complete value that is encoded by the URL
    // sends a request to some backend server
    // to fetch the piece of data with an id of router.query.projectid
    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
}

export default PortfolioProjectPage;
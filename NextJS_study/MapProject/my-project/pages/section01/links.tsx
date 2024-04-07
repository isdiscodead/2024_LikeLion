import { GetServerSideProps } from 'next';
import Link from 'next/link';

const links = () => {
    return (
        <main>
            <h1>Links</h1>
            <div style={{ height: '200vh'}} />
            <Link href='/section1/getStaticProps' style={{ color: 'red' }}>
                /getStaticProps
            </Link>
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props:{
        }
    }
}

export default links
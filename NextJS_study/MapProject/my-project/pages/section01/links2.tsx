import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const links = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/section01/getStaticProps');
    }, [router]);

    return (
        <main>
            <h1>Links</h1>
            <div style={{ height: '200vh'}} />
            <button onClick={() => {
                router.push('/section01/getStaticProps');
            }}>
                /getStaticProps
            </button>
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
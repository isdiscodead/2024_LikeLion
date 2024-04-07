import type { NextPage } from "next";

interface Props {
    data: number;
}

const Example: NextPage<Props> = ({ data }) => {
    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: {data}</p>
        </main>
    );
};

export default Example;

// 여기서 data 가져옴, getStaticProps()는 Next에서 제공하는 기본 함수
export async function getStaticProps() {
    const delayInSeconds = 2;
    const data = await new Promise((resolve) => 
        setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    );

    return {
        props: { data },
        // revalidate: 5
    };
};
import type { GetServerSideProps, NextPage } from "next";

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
export const getServerSideProps: GetServerSideProps = async({ res }) => {
    // revalidate 처리 방법
    res.setHeader(
		'Cache-Control', // Cache Control 헤더 설정
		// Max-Age가 지나고 stale-while-revalidate초 이전에 새로고침할 경우 revalidate
		// stale-while-revalidate 초가 지날 경우 캐시된 문서 사용 불가능하게 됨 -> 서버에 재요청
		'public, s-maxage=5, stale-while-revalidate=10' 
	);

    const delayInSeconds = 2;
    const data = await new Promise((resolve) => 
        setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    );

    return {
        props: { data },
    };
};
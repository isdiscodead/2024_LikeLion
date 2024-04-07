import type { NextPage } from "next";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import('../../components/section01/NoSSR'), {
    ssr: false,
});

const Example: NextPage = () => {
    const [data, setData] = useState(0);

    useEffect(() => {
        const delayInSeconds = 2;
        new Promise<number>((resolve) =>
            setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
        ).then((result) => setData(result));
    }, []);

    return (
        <main>
            <h1>Client-Side Data Fetching</h1>
            <p>값: {data}</p>
        </main>
    );
}

export default Example;
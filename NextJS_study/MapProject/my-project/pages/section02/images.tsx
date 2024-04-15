/* eslint-disable @next/next/no-img-element */
import {GetStaticProps, NextPage} from 'next';
import Image from 'next/image';

const Images: NextPage = () => {
    return (
        <main>
            <section style={{ height: '50vh' }}>long long content</section>

            <hr style={{ margin: '32px 0'}} />
            <h1>img tag</h1>

            <figure>
                <img 
                    src="https://lecture-1.vercel.app/example.jpg"
                    alt="example"
                    width={500}
                    height={100}
                    // loading = "lazy"
                />
                <figcaption>example img</figcaption>
            </figure>

            {/* 
            <hr style={{ margin: '32px 0'}} />
            <h1>next/image - static </h1>

            <figure>
                <Image 
                    src={example}
                    alt="v13 image"
                    width={500}
                    height={100}
                    placeholder='blur'
                />
                <figcaption>v13 image</figcaption>
            </figure> 
            */}

            <hr style={{ margin: '32px 0'}} />
            <h1>next/image - non-static</h1>

            <figure>
                <Image 
                    src="https://lecture-1.vercel.app/example.jpg"
                    alt="v13 image"
                    width={500}
                    height={100}
                    placeholder='blur'
                />
                <figcaption>v13 image</figcaption>
            </figure>

            <hr style={{ margin: '32px 0'}} />
            <h1>next/image - non-static</h1>

            <figure style={{ position: 'relative', width: '500px', height: '100px' }}>
                <Image 
                    src="https://lecture-1.vercel.app/example.jpg"
                    alt="v13 image"
                    fill
                    placeholder='blur'
                />
                <figcaption>v13 image</figcaption>
            </figure>
        </main>
    );
}

export default Images;
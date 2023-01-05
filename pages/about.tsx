import Head from 'next/head';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>List Ninjas | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>

            <div>
                <h1>About Component</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, laudantium ex sequi doloremque
                    accusantium odit similique quia nisi, cumque, iusto aperiam fuga minima! Deserunt praesentium iure
                    repudiandae, asperiores odit eaque corporis ex dolorem culpa tempora ut ducimus obcaecati sint
                    corrupti? Cupiditate explicabo fuga omnis assumenda quae necessitatibus nisi mollitia perferendis!
                </p>
            </div>
        </>
    );
};

export default About;

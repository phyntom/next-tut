import Head from 'next/head';
import type { InferGetStaticPropsType, GetStaticProps, NextPage } from 'next';
import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export type Ninja = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
    };
};

interface NinjaProps {
    ninjas: Ninja[];
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Ninja[] = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { ninjas: data },
    };
};

const Ninjas: React.FC<NinjaProps> = ({ ninjas = [] }) => {
    return (
        <>
            <Head>
                <title>List Ninjas | List</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <h1>Ninjas List</h1>
            {ninjas.map((ninja) => {
                return (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id} className={styles.single}>
                        <span className={styles.name}>{ninja.name}</span>
                        <p>
                            <span>{ninja.email}</span>
                            <span className={styles.address}>
                                Street | {ninja.address.street} - {ninja.address.suite}
                            </span>
                        </p>
                    </Link>
                );
            })}
        </>
    );
};

export default Ninjas;

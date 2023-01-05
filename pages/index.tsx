import { Inter } from '@next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>List Ninjas | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum, quibusdam neque id
                    consequuntur consequatur perferendis reprehenderit suscipit ducimus officia incidunt impedit
                    deserunt fuga ipsam dolorem tempora, itaque aut laborum ea iure doloribus ad consectetur blanditiis
                    tempore? Fugiat aliquam quam, aperiam repellendus laudantium, cupiditate vitae deserunt voluptatibus
                    eligendi, neque temporibus?
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum, quibusdam neque id
                    consequuntur consequatur perferendis reprehenderit suscipit ducimus officia incidunt impedit
                    deserunt fuga ipsam dolorem tempora, itaque aut laborum ea iure doloribus ad consectetur blanditiis
                    tempore? Fugiat aliquam quam, aperiam repellendus laudantium, cupiditate vitae deserunt voluptatibus
                    eligendi, neque temporibus?
                </p>
                <Link href="/ninjas" className={styles.btn}>
                    See Ninja Listing
                </Link>
            </div>
        </>
    );
}

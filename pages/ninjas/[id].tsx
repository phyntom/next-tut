import { GetStaticPaths, GetStaticProps } from 'next';
import type { Ninja } from '.';
import styles from '../../styles/Ninjas.module.css';

interface ItemProps {
    ninja: Ninja;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Ninja[] = await res.json();
    const paths = data.map((user) => {
        return {
            params: { id: user.id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data: Ninja = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { ninja: data },
    };
};

const Item: React.FC<ItemProps> = ({ ninja }) => {
    return (
        <div>
            <div className={styles.name}>{ninja.name}</div>
            <p>Email: {ninja.email}</p>
            <p>Phone: {ninja.phone}</p>
            <p>Website: {ninja.website}</p>
            <fieldset>
                <legend>
                    <div className={styles.addressTitle}>ADDRESS</div>
                </legend>
                <div>City - {ninja.address.city}</div>
                <div>Street - {ninja.address.street}</div>
                <div>Suite - {ninja.address.suite}</div>
            </fieldset>
        </div>
    );
};

export default Item;

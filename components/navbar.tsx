import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={98} height={68} alt="image logo" />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja List</Link>
        </nav>
    );
};

export default NavBar;

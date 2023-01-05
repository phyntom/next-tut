import { FONT_MANIFEST } from 'next/dist/shared/lib/constants';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import Footer from './footer';
import NavBar from './navbar';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="content">
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

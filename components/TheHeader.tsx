import Link from 'next/link';
import React from 'react';

const TheHeader = () => {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
        </header>
    );
};

export default TheHeader;
import Link from "next/link";
import React from "react";

const TheHeader = () => {
  return (
    <header>
      <div className="wrapper_header">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default TheHeader;

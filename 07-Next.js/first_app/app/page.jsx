"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  // {params, searchParams}
  // console.log(await params);
  // console.log(await searchParams);

  return (

    <div>

      <h1>Technical Agency</h1>

      <h1>Hello world</h1>
      <Link href="/about">About</Link><br />
      <Link href="/services">services</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}

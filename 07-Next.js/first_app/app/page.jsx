import Image from "next/image";
import Link from "next/link";
import Component from "./_components/page";

export default function Home() {

  // {params, searchParams}
  // console.log(await params);
  // console.log(await searchParams);

  return (

    <div>

      <h1>Technical Agency</h1>
      <Component />

      <p><Link href="/about">About</Link></p>
      <p><Link href="/services">services</Link></p>
      <p><Link href="/blog">Blog</Link></p>
      <p><Link href="/files">Files</Link></p>
      <p><Link href="/components">Components</Link></p>

    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  // {params, searchParams}
  // console.log(await params);
  // console.log(await searchParams);

  return (

    <div>

      <h1>Technical Agency</h1>

      <p><Link href="/about">About</Link></p>
      <p><Link href="/services">services</Link></p>
      <p><Link href="/blog">Blog</Link></p>
      <p><Link href="/files">Files</Link></p>

    </div>
  );
}

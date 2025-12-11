import Link from "next/link";

export default function about() {

    console.log("Hello World");


    return (
        <div>
            <h1>about</h1>
            <Link href="/services">Services</Link><br/>
            <Link href="/">Home</Link>
        </div>
    );
}

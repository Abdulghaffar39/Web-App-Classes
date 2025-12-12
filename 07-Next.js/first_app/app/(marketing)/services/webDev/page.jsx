import Link from "next/link";

export default function webDev() {

    console.log("Hello World");


    return (
        <div>
            <h1>Web Development</h1>
            <p><Link href="/services">Back</Link></p>
        </div>
    );
}
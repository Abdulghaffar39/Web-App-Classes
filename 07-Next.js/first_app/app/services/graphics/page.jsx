import Link from "next/link";

export default function graphics() {

    console.log("Hello World");


    return (
        <div>
            <h1>Graphics</h1>
            <p><Link href="/services">Back</Link></p>
        </div>
    );
}
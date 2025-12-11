import Link from "next/link";

export default function mobDev() {

    console.log("Hello World");


    return (
        <div>
            <h1>Mobile Development</h1>
            <p><Link href="/services">Back</Link></p>
        </div>
    );
}
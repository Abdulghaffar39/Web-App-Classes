import Link from "next/link";

export default function appDev() {

    console.log("Hello World");


    return (
        <div>
            <h1>App Development</h1>
            <p><Link href="/services">Back</Link></p>
        </div>
    );
}
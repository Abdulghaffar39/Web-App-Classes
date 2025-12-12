import Link from "next/link";

export const metadata = {

    title: "Services"
}

export default function services() {

    return (
        <div>
            <h1>All Services</h1>
            <p><Link href="/services/webDev">Web Development</Link></p>
            <p><Link href="/services/appDev">App Development</Link></p>
            <p><Link href="/services/mobDev">Mobile Development</Link></p>
            <p><Link href="/services/graphics">Graphics</Link></p>
        </div>
    );  
}

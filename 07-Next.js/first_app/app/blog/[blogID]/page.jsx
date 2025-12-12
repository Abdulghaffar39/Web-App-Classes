import Link from "next/link";

export async function generateMetadata({ params }) {

    const { blogID } = await params

    return {
        title: `Blog ${blogID}`
    }
}

export default async function blog({ params }) {

    // console.log(await params);
    const { blogID } = await params

    return (

        <div>
            <h1>Blog</h1>
            <Link href="/">Home {blogID}</Link><br />
        </div>
    );
}
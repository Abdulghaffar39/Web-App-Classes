import Link from "next/link";

export default async function blog({params}) {

    // console.log(await params);
    const {blogID} = await params

    return (

        <div>
            <h1>Blog</h1>
            <Link href="/">Home {blogID}</Link><br />
        </div>
    );
}
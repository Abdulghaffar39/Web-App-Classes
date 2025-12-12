export const metadata = {

    title: {
        absolute: "My Files"
    },
}

export default async function File({ params }) {

    const {filePath} = await params;

    return (

        <h2>File /{filePath?.join("/")}</h2>
    )
}

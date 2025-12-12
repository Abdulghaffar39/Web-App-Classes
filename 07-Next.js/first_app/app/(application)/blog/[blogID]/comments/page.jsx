export default async function Comment({ params }) {

    const paramsObject = await params;
    const { blogID } = paramsObject;
    console.log(paramsObject);


    return (

        <div>All Comments on <b>{blogID}</b> page</div>
    )
}

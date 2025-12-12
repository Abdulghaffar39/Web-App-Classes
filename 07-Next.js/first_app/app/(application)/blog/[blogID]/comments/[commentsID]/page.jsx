export default async function Comment({ params }) {

    const paramsObject = await params;
    const { blogID, commentsID } = paramsObject;
    console.log(paramsObject);


    return (

        <div>Comments no <i>{commentsID}</i> on <b>{blogID}</b> page</div>
    )
}

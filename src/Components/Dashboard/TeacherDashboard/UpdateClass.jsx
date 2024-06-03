import { useLoaderData } from "react-router-dom";

function UpdateClass() {
    const loadedData = useLoaderData()
    console.log(loadedData);
  return <div>Update class page</div>;
}

export default UpdateClass;

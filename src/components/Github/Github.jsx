import { useLoaderData } from "react-router-dom"
// import {useParams} from "react-router-dom"

export default function Github() {
  const data = useLoaderData();
  // const {id} = useParams()
  return (
    <>
      <h1> Github Followers: {data.followers}</h1>
      <img src={data.avatar_url} width={300} />
    </>
  )
}

export const GitInfoLoader = async ({params}) => {
  const id = params.id
  const response = await fetch(`https://api.github.com/users/${id}`)
  return response.json();
}


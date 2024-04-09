import { useLoaderData } from "react-router-dom"
// import {useParams} from "react-router-dom"

export default function Github() {
  const data = useLoaderData();
  // const {id} = useParams()
  return (
  <div className="flex justify-center p-14 bg-gray-900">

    <img className="flex-none rounded-full shadow-xl" src={data.avatar_url} width={300} />
    
    <div className="flex flex-col justify-center mx-14 text-white text-pretty text-4xl" >
      <div className="flex flex-row-1"> Name: {data.name}</div>
      <div> Github Username: {data.login}</div>
      <div> Repos: {data.public_repos}</div>
      <div> Followers: {data.followers}</div>
      <div> Twitter: {data.twitter_username}</div>
    </div>

  </div>
  )
}

export const GitInfoLoader = async ({params}) => {
  const id = params.id
  const response = await fetch(`https://api.github.com/users/${id}`)
  return response.json();
}


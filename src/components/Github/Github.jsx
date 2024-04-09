import React from "react";
import { useLoaderData } from "react-router-dom"


export default function Github() {
  const data = useLoaderData();
  return (
    <>
      <h1> Github Followers: {data.followers}</h1>
      <img src={data.avatar_url} width={300} />
    </>
  )
}

export const GitInfoLoader = async () => {

  const response = await fetch(`https://api.github.com/users/ifeelsam`)
  return response.json();
}


import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Atropos from 'atropos/react';

function Github() {

  const data = useLoaderData()


    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/varshaa-7')
    //     .then((response)=>response.json())
    //     .then(data => {
    //       console.log(data)
    //       setData(data)
    //     })
    // }, [])
  return (
    <div className='app'>
      <Atropos className="my-atropos">
          <div className='flex items-center justify-center text-center m-4 bg-purple-200 text-purple-900 font-bold p-2 text-3xl'>
      Name: {data.name} <br/>Github followers: {data.followers} <br/>HTML URL: <br/><Link to={data.html_url}>{data.html_url}</Link> <br/>
      <img className='flex items-center justify-center' src={data.avatar_url} width={300} alt=""/>
      </div>
      </Atropos>
    </div>
  )
}

export default Github


export const githubInfoLoader =async () =>{
  const response = await fetch('https://api.github.com/users/varshaa-7')
  return response.json()
}
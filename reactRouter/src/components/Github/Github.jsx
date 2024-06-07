import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {

    // const [data, setData] = React.useState([])
    // useEffect(()=>{fetch('https://api.github.com/users/RealHarshAgarwal1')
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()


  return (
    <div className="text-center  text-stone-300 p-4 bg-stone-900 text-5xl my-5 rounded-lg" >
      <img src={data.avatar_url} width={400} height={400} alt="Error" className="rounded-full m-auto my-4" />
      Name: {data.name}<br/>
      Github Username: {data.login} <br />
      Github Followers: {data.followers}
    </div>
  )
}

export default Github


export const githubInfoLoader = async ()=>{
    const res = await fetch ('https://api.github.com/users/RealHarshAgarwal1')
    return res.json()
}
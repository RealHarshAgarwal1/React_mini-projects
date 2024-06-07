import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()


  return ( 
    <div className='bg-orange-600 text-black text-3xl text-center py-10'>
      User:{userid}
    </div>
  )
}

export default User

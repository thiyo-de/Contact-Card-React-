import React from 'react'
import {useParams} from "react-router-dom"

const User = () => {

  const {Username} = useParams();

  return (
    <>
    <h1>User</h1>
    <h1>{Username}</h1>
    </>
  )
}

export default User
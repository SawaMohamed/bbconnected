import React from 'react'
import { useNavigate } from 'react-router-dom'
import {authToken} from '../pages/Home'

const Logout = () => {
  let navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }
  
  return <button className="logout-btn" onClick={onClick}>
    Logout
    {/* authToken ? style={display:'none'} */} 
    </button>
}

export default Logout

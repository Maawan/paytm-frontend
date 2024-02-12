import React from 'react'
import { Link } from 'react-router-dom'

const BottomMessage = ({type}) => {
  return (
    <div className='w-full flex justify-center items-center'>
      {
        type === "signup" ? (<div>Already have an account?  <Link to={"/login"} className=' underline'> Sign in</Link></div>) : (<div>New to PayTm ?  <Link to={"/signup"} className=' underline'> Sign up</Link></div>)
      }
        
    </div>
  )
}

export default BottomMessage
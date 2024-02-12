import React from 'react'
import Button from './Button'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className='w-full h-[70px] border flex justify-between px-4 items-center text-[30px]'>
        <div>
            PayTm
        </div>
        <div className='h-full flex '>
          { !location.pathname.includes("mytransactions") && ( <Button title={"My Transactions"} className={"text-[20px] "} onClick={(e) => {
              
              navigate("/mytransactions");
          }}/>)}
         
            <Button title={"Logout"} onClick={(e) => {
              console.log("logout clicked ");
                localStorage.setItem("token" , "");
                navigate("/login");
            }}/>
        </div>
    </div>
  )
}

export default Header
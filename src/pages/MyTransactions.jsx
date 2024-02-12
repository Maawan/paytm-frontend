import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import userServices from '../Services/UserServices';

const MyTransactions = () => {
    const navigate = useNavigate();
    const [user , setUser] = useState(null);
    const [trans , setTrans] = useState([]);
    const [myId , setMyId] = useState("");
    useEffect(() => {
        checkLoginStatus();
       
    },[])

    const checkLoginStatus = async () => {
        const token = localStorage.getItem("token");
        if(token === undefined || token === ""){
            toast.error("You are not logged in");
            navigate("/signup");
        }else{
            try {
                const res = await userServices.checkUser({token});
                const transData = await userServices.getAllTransactions({token});
                setTrans(transData.data.trans);
                console.log(transData?.data?.trans);
                setMyId(transData?.data?.your_id);
                setUser(res.data);
            } catch (error) {
                console.log(error);
                toast.error("You are not logged in");
                localStorage.setItem("token" , "");
                navigate("/signup");
            }
            
        }
    }
  return (
    <div>
        <Header />
        <p className='ml-4 text-[30px]'>{"Your Current Balance Rs. " + user?.user?.amount}</p>
        <p className='ml-4 text-[25px] mt-4'>Your Transactions </p>
        <p></p>
        {/* <p>{JSON.stringify(trans)}</p> */}
        <div className='flex flex-col '>
            {/* <p>{myId} oerjmfopr</p> */}
            
        {
        
            trans.length > 0 && trans.map((ele , index) => (
                <div key={index} className={`text-white border p-4 my-2 mx-4 ${ele.from._id === ele.to._id ? "bg-green-900" :  myId === ele.from._id ? "bg-red-900" : "bg-green-900"}`}>
                    <p>{"From " + ele?.from?.name}</p>
                    <p>{"To " + ele?.to?.name}</p>
                    <p>{"Amount Rs. " + ele?.amount}</p>
                    <p>{"Time : " + new Date(ele?.createdAt).toLocaleTimeString() + "  "+ new Date(ele?.createdAt).toDateString()}</p>
                </div>
            ))
        }
        
        </div>
    </div>
  )
}

export default MyTransactions
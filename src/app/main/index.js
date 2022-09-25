import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../store/actions';


const Main = () => {
const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  let { userData } = useSelector((state)=>state.userReducer)
  console.log(userData)
  return (
    <div>
      {
        userData.map((item,i)=>(
         <>
          <h1>{item.name}</h1>
          <h2>{item.id}</h2>
         </>
        )

        )
      }
    </div>
  )
}

export default Main

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteForever } from "react-icons/md"
import { removeUser } from '../Store/slices/UserSlice'
const Displayuser = () => {
    const data = useSelector((state)=>{
        return state.users;
    })
    const dispatch = useDispatch();
    const DeleteAllUser = (id) =>{
      dispatch(removeUser(id))
    }
  return <>
    {
      data.map((users, id)=>{
        return <li key={id}>{users}
        <button onClick={()=>DeleteAllUser(id)}>
          <MdDeleteForever />
        </button>
        </li>
      })
    }
    </>
}
export default Displayuser
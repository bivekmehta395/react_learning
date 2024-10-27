import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function StateAndReduce() {
    const [loading,setLoading]=useState(true)
    const[error,isError]=useState('')
    const [post,setPost]=useState({})
    useEffect(
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
             setLoading(false)
                setPost(res.data)
                isError('')})
                .catch((err)=>{
                    isError('oops something went wrong')
                    setLoading(true)
                    setPost({})
                })


    ,[])
  return (
    <div>
      {
        setLoading
      }
      {
        setPost
      }
      {
        isError
      }
    </div>
  )
}

import { Button, TextField, Typography} from '@mui/material'
import React ,{useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  var [sub,setSub] =useState({Name:"",Email:"",Password:"",Phone:""})
  const navigate = useNavigate()

  
  const submitHandler = (e) => {
    setSub({ ...sub, [e.target.name]: e.target.value })
  }

 
  const handleSubmit = () => {
    axios.post('http://localhost:3000/', sub)
      .then((res) => {
        console.log(res.data.message)
        alert(res.data.message)
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
     <div align='center'><br /><br />
        <Typography variant='h4' color='primary'>SignUp</Typography><br /><br />
        <TextField variant='outlined' label='Name' name='Name' value={sub.Name} onChange={submitHandler}></TextField><br /><br />
        <TextField variant='outlined' label='Email' name='Email' value={sub.Email} onChange={submitHandler}></TextField><br /><br />
        <TextField variant='outlined' label='Password' name='Password' value={sub.Password} onChange={submitHandler}></TextField><br /><br />
        <TextField variant='outlined' label='Phone' name='Phone' value={sub.Phone} onChange={submitHandler}></TextField><br /><br />
        <Button variant='contained' onClick={handleSubmit}>SignUp</Button>
    </div>
  )
}

export default Signup

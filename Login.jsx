import { Button, TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [input,setInput] = useState({ Email : "", Password : ""})
  const navigate = useNavigate()

  const logIn = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value })
  console.log(input)
  }

//API for Login
  const loginHandler = () => {
    axios.post('http://localhost:3000/log', input)
          .then((res) => {
            console.log(res.data)
            alert(res.data)
            if(res.data === "Logged In Successfully"){
            navigate('/')
            }
          })
          .catch((err) => {
            console.error(err)
          })
  }
  return (
    <div align='center'><br /><br />
        <Typography variant='h4' color='primary'>Login</Typography><br /><br />
        <TextField variant='outlined' label='Email' name='Email' value={input.Email} onChange={logIn}></TextField><br /><br />
        <TextField variant='outlined' label='Password' name='Password' value={input.Password} onChange={logIn}></TextField><br /><br />
        <Button variant='contained' onClick={loginHandler}>Login</Button>
    </div>
  )
}

export default Login

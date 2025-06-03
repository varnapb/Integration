import React, { useState , useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

//View btn
const View = () => {
  var [product,setProduct] = useState([])
  var nagivate = useNavigate()
  axios.get(" http://localhost:3000/view")
  .then((res) => {
    console.log(res.data)
    setProduct(res.data)
     })

    //useEffect
     useEffect(() =>{
      axios.get(" http://localhost:3000/view")
      .then((res) => {
      console.log(res.data)
      setProduct(res.data)
     })
    },[]) 

//Delete btn
const deleteproduct = (id) => {
  console.log(id)
  axios.delete("http://localhost:3000/del/"+id)
  .then((res) => {
    console.log(res.data.message)
    alert(res.data.message)
    window.location.reload()
  })
}

//Update btn
const updateproduct = (val) => {
nagivate("/add",{state:{val}})
}
  return (
    <div align='center' style={{ padding: '40px' }}><br /><br />
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
      {product.map((val)=>{
        return(
          <Grid item xs={12} sm={6} md={4}>
       <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={val.Image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{val.Name}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{val.Description}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}><b>{val.Price}</b></Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  variant='contained' color='success' onClick={() => {updateproduct(val)}}>Update</Button>
        <Button size="small" variant='contained' color='error' onClick={() => {deleteproduct(val._id)}}>Delete</Button>
      </CardActions>
    </Card>
    
</Grid>
      )
      })}
      </Grid>

    </div>
  )
}

export default View



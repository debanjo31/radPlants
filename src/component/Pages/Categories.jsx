import React from 'react'
import cat1 from "../../img/rad2.jpg"
import cat2 from "../../img/rad3.jpg"
import cat3 from "../../img/rad4.jpg"
import cat4 from "../../img/rad5.png"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Categories() {
    
  
  const theme = createTheme();
    const Category = (props) => {
        return(
            //<div className='mb-4'>
              // {/* <img src={props.img} alt={props.name} className="w-full h-96 mb-2" /> */}
               <Grid item  xs={12} sm={6} md={6} lg={3}  >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={props.img}
                    alt={props.name}
                    sx={{ height: '100%', }}
                  />
                  <CardContent sx={{ flexGrow: 1}}>
                  <p className='font-mainFont'>{props.name}</p>
                  </CardContent>
                </Card>
              </Grid>
              //  <p className='font-mainFont'>{props.name}</p>
            //</div>
        )
    }
  return (
    <div className='w-5/6 mx-auto mt-16 '>
       <p className='text-center font-mainFont text-2xl mb-8'>Categories</p> 
       <Container sx={{ py: 4 }} maxWidth="lg">
       <Grid container spacing={4}>
            <Category img={cat1} name="Jungle plants" />
            <Category img={cat2} name="Outdoor plants" />
            <Category img={cat3} name="Bedroom plants" />
            <Category img={cat4} name="Indoor plants" />
            </Grid>
          </Container>
       
    </div>
  )
}

export default Categories
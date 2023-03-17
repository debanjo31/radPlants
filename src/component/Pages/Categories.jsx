import React from 'react'
import cat1 from "../../img/rad2.jpg"
import cat2 from "../../img/rad3.jpg"
import cat3 from "../../img/rad4.jpg"
import cat4 from "../../img/rad5.png"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function Categories() {
    
  
    const Category = (props) => {
        return(
               <Grid item  xs={12} sm={6} md={6} lg={3}  >
                <Card
                  sx={{ height: '60vh', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={props.img}
                    alt={props.name}
                    sx={{ height: '100%', }}
                  />
                </Card>
                <p className='text-lg'>{props.name}</p>
              </Grid>
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
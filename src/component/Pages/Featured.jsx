import React from 'react'
import cat1 from "../../img/rad2.jpg"
import cat2 from "../../img/rad3.jpg"
import cat3 from "../../img/rad4.jpg"
import cat4 from "../../img/rad5.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Featured() {
  
  const Category = (props) => {
    return(
        //<div className='mb-4'>
          // {/* <img src={props.img} alt={props.name} className="w-full h-96 mb-2" /> */}
           <Grid item  xs={12} sm={6} md={6} lg={4}  >
            <Card
              sx={{ height: '80vh', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                image={props.img}
                alt={props.name}
                sx={{ height: '80%', }}
                
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
    <div className='w-5/6 mx-auto'>
      <div className='lg:flex'> 
          <div className='lg:w-2/6'>
              <p className='text-center font-mainFont lg:text-left text-2xl mb-8 lg:mt-8'>Features</p>
              <p className='lg:text-sm'>Our plants are 100% organic, we don't use pesticide or harmful chemicals</p>
              <p className='mt-4 lg:text-sm'>!!! But please don't eat </p>
              <button className='hidden lg:block shadow-lg border-black border-b-2 px-8 py-2 font-bold mt-8'>Shop all Favourites</button>
          </div>
          <div>
          <Container sx={{ py: 4 }} maxWidth="lg">
            <Grid container spacing={4}>
            <Category img={cat1} name="Jungle plants" />
            <Category img={cat2} name="Outdoor plants" />
            <Category img={cat3} name="Bedroom plants" />
            </Grid>
          </Container>
          </div>
      </div>
    </div>
  )
}

export default Featured
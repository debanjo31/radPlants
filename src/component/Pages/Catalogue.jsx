import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { catalogueAtom } from '../../atom/catalogue';
import { useRecoilState } from 'recoil';


function Catalogue() {
  const [catalogue, setcatalogue] = useRecoilState(catalogueAtom);
  
  const CatalogueItem = (props) => {
    return(
           <Grid item  xs={12} sm={6} md={6} lg={3}  >
            <Card
              sx={{ height: '70vh', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                image={props.img}
                alt={props.name}
                sx={{ height: '80%', }}
              />
              <CardContent><p className='font-bold text-lg'>{props.name}</p></CardContent>
            </Card>
            
          </Grid>
    )
}
  return (
    <div>
      <Header />
        <p className='text-center font-mainFont text-2xl mb-8 mt-8'>Catalogues</p> 
       <Container sx={{ py: 4 }} maxWidth="lg">
        <Grid container spacing={4}>
          {catalogue.map((cat) => (
             <CatalogueItem key={cat.id} img={cat.img} name={cat.type} />
          ))}
        </Grid>
       </Container>
    </div>
  );
}

export default Catalogue;

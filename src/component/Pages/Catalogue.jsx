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
import { useNavigate } from 'react-router';


function Catalogue() {
  const [catalogue, setcatalogue] = useRecoilState(catalogueAtom);
  const navigate = useNavigate();
  const purchase = ({ id }) => {
    navigate(`/catalogue/${id}`)
  }
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
              <CardContent>
                <p className='text-sm text-gray-600'>Plant {props.id}</p>
                <div className="flex justify-between text-md text-black">
                    <p className='font-bold text-lg mt-2'>&#8358;{props.price}</p>
                    <button className='text-white font-bold bg-blue-500 px-4 py-2' onClick={() => purchase(props)}>Buy</button>
                </div>
              </CardContent>
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
             <CatalogueItem key={cat.id} img={cat.img} id={cat.id} price={cat.price} />
          ))}
        </Grid>
       </Container>
    </div>
  );
}

export default Catalogue;

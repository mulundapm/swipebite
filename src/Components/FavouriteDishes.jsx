import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Rating } from '@mui/material'
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { FavoriteContext } from '../Contexts/FavoriteDishes';
import { Link } from 'react-router-dom';


function FavouriteDishes() {
const {favoriteDishes} = useContext(FavoriteContext)
console.log(favoriteDishes)
    const displayList = (list) =>
        list.map(dish=>
            <>
                <Grid item xs={6}>
                    <Link to={`/restaurant/${dish.restaurantID}`}>
                    <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={dish.image}
                                alt="green iguana" />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {dish.restaurantData.name}
                                </Typography>
                                <div className="inline">
                                    <Rating name="disabled" value={dish.restaurantData.rating} />
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
            </>
    )
  return (
    <div className='container'>
        <Grid container spacing={2}>
            {displayList(favoriteDishes)}
        
        </Grid> 
        
    </div>
  )
}

export default FavouriteDishes
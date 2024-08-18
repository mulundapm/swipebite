import React, { useState , useMemo} from 'react'
// import Chip from '@mui/material/Chip';
import { Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import { RxCross2 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FavoriteContext } from '../Contexts/FavoriteDishes';
import { useContext } from 'react';
// import FavouriteDishes from './FavouriteDishes';
import { db , storage} from '../config/firebase'
import { getDocs , getDoc, collectionGroup, doc as firestoreDoc, collection,  getCountFromServer, getAggregateFromServer, average} from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage';

function HighlightedDish() {
  
  const [foodList, setFoodList] =useState([])
  const [availableDishes, setAvailableDishes] = useState([]);
  const {favoriteDishes, setFavoriteDishes} = useContext(FavoriteContext);
  const menuItemCollectionRef = collectionGroup(db, "menu-items")
  const [loading, setLoading] = useState(true)
  

  useEffect(()=>{
      const getfoodList = async () =>{
          try {
            const menuItem = await getDocs(menuItemCollectionRef);
            const foodListWithUrls = await Promise.all(menuItem.docs.map(async (doc) => {
              const docData = doc.data();

              const imageRef = ref(storage, docData.img);
              const imageUrl = await getDownloadURL(imageRef);

              const restaurantID = doc.ref.parent.parent.id;
              const restaurantRef = firestoreDoc(db, 'restaurants', restaurantID);
              const restaurantDoc = await getDoc(restaurantRef)
              const restaurantData = restaurantDoc.exists() ? restaurantDoc.data() : {};

              const reviewsRef = collection(db, 'restaurants', restaurantID, 'reviews');
              const reviewsCount = await getCountFromServer(reviewsRef)
              const reviewsAverage = await getAggregateFromServer(reviewsRef, {averageRating: average("rating")})
              
              return { ...docData, id: doc.id, fullPath: imageUrl, restaurantID: restaurantID, restaurantData, counts: reviewsCount.data().count, ratings: reviewsAverage.data().averageRating};
            }));
              setFoodList(foodListWithUrls);
              // console.log(foodListWithUrls)
          } catch (err) {
            console.error(err);
          } finally {
            setLoading(false);
          }
        }; 
      getfoodList()// eslint-disable-next-line
  }, [])

  const randomiseDishes = (dishes) => {
    let currentIndex = dishes.length;
    while (currentIndex !== 0 ){
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; 
      [dishes[currentIndex], dishes[randomIndex]] = [dishes[randomIndex], dishes[currentIndex]];
    }
    return dishes;
  };

  const memoizedAvailableDishes = useMemo(() => randomiseDishes([...foodList]), [foodList]);
  
  useEffect(() => {
    setAvailableDishes(memoizedAvailableDishes);
    console.log(memoizedAvailableDishes)
  }, [memoizedAvailableDishes]);



  const removeCard = () => {
    setAvailableDishes((prev) =>{
      const newDishList = [...prev];
      newDishList.pop();
      return newDishList
    })
  }

  const likeCard = () => {
    const likedDish = availableDishes[availableDishes.length - 1]; 
    if (!favoriteDishes.some(item => item === likedDish)){
    setFavoriteDishes((prevFavorites) => [...prevFavorites, likedDish]);}
    setAvailableDishes((prev) =>{
      const newDishList = [...prev];
      newDishList.pop();
      return newDishList
    })
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="card-stack">
      { availableDishes.length > 0 ? availableDishes.map((dish, index) => (
        <div key={index} className="card">
          <Link to={`restaurant/${dish.restaurantID}` }>
              <img className="main-image" alt={dish.name} src={dish.fullPath}/>
              <div className="float-text">
                <Stack direction="row" spacing={1}>
                  <h2>{dish.name}</h2>
                  {/* <Chip label={dish.type} variant="outlined" color='primary'/>
                  <Chip label="Popular" variant="outlined" color='primary'/> */}
                </Stack>
                <h3>{dish.restaurantData.name}</h3>
                <div className="inline">
                  <Rating name="disabled" value={dish.ratings} readOnly/>
                  <h6>{dish.counts} reviews</h6> 
                </div>
              </div>
          </Link>
          </div>
      )): (          
      <div className="no-dishes">
        <h2>No dishes to display</h2>
      </div>)}
      </div>
      <div className='dish-control container'>
          <RxCross2 className='control-icon' size={100} onClick={removeCard}/>
          <FaRegHeart className='control-icon' size={80} onClick={likeCard}/>
      </div>
    </>
    
  )
}

export default HighlightedDish

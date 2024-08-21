import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
// import { Dishes } from '../API/Dishes'
import { Rating } from '@mui/material'
import ImageSlider from '../Components/ImageSlider'
import Reviews from '../Components/Reviews'
import RestaurantMap from '../Components/RestaurantMap'
import { getDoc , collection, doc as firestoreDoc, getDocs, getAggregateFromServer, getCountFromServer, average} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { db } from '../config/firebase'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config/firebase'

function RestaurantDetails() {

    const { restaurantID } = useParams();
    const [thisRestaurant, setThisRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchRestaurant = async () => {
        try {
            const restaurantRef = firestoreDoc(db, 'restaurants', restaurantID);
            const restaurantDoc = await getDoc(restaurantRef);
            const restaurantData = restaurantDoc.exists() ? restaurantDoc.data() : {};
            // const environmentImage = await getDownloadURL(ref(storage, restaurantData.interior))

            // const reviewsRef = collection(db, 'restaurants', restaurantID, 'reviews');
            // const reviewSnap = await getDocs(reviewsRef);
            // const reviewsData = reviewSnap.docs.map(doc => doc.data());

            // const menuItemRef = collection(db, 'restaurants', restaurantID, 'menu-items')
            // const menuItemSnap = await getDocs(menuItemRef)
            // const menuItemData = menuItemSnap.docs.map(doc => doc.data())
            
            // const reviewsCount = await getCountFromServer(reviewsRef)
            // const reviewsAverage = await getAggregateFromServer(reviewsRef, {averageRating: average("rating")})


            setThisRestaurant({...restaurantData
                // interiorUrl: environmentImage,
                // reviews: reviewsData,  
                // menuItems: menuItemData, 
                // counts: reviewsCount.data().count, 
                // ratings: reviewsAverage.data().averageRating
            });
        } catch (err) {
        console.error(err);
        } finally {
        setLoading(false);
        }
    };
    fetchRestaurant();
    }, [restaurantID]);

    if (loading) {
    return <div>Loading...</div>;
    }

    if (!thisRestaurant) {
    return <div>Restaurant not found</div>;
    }

    if (!loading && thisRestaurant){
        console.log(thisRestaurant)
    }

    return (
    <div>
            <img src={thisRestaurant.interior} alt="Restaurant" className='restaurant-image center'/>
            <h2>{thisRestaurant.name}</h2>
            <p>{thisRestaurant.address}</p>
            <h4>{thisRestaurant.cuisine}</h4>
            {/* <div className="inline">
                <Rating name="disabled" value={thisRestaurant.ratings}/>
                <h6>{thisRestaurant.counts} Reviews</h6> 
            </div> */}
            <h2>Featured Dishes</h2>
            {/* <ImageSlider menuItems={thisRestaurant.menuItems}/> */}
            <div className="container center">
                <Link to={thisRestaurant.website}><button className='primary-button'>Reserve a table</button></Link>
            </div>
            {/* <Reviews reviews={thisRestaurant.reviews}/> */}
            {/* <RestaurantMap address={thisRestaurant.address}/> */}
            </div>
    )
    }

    export default RestaurantDetails
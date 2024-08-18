import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config/firebase'

function ImageSlider({menuItems}) { 

  const [updatedMenuItems, setUpdatedMenuItems] = useState([]); 

  useEffect(() => {
    const loadMenuItems = async () => {
      const updatedItems = await Promise.all(
        menuItems.map(async (item) => {
          const imageUrl = await getDownloadURL(ref(storage, item.img)); 
          return { ...item, img: imageUrl };
        })
      );
      setUpdatedMenuItems(updatedItems); 
    };

    loadMenuItems();
  }, [menuItems]);

  return (
    <div className='slider-container'>
      {updatedMenuItems.map((item, index) => (
        <div key={index} className='slider-item'>
          <img src={item.img} alt={item.name} className='slider-image' />
          <p className='center'>{item.name}</p>
        </div>
      ))
      }
    </div>
  )
}

export default ImageSlider
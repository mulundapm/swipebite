import React from 'react'
import FavouriteDishes from '../Components/FavouriteDishes'
import AppLayout from '../Components/AppLayout'

function FavoritesPage() {
  return (
    <div>
      <AppLayout>
        <h2 className='center'>My liked dish</h2>
        <FavouriteDishes/>
      </AppLayout>
    </div>
  )
}

export default FavoritesPage 
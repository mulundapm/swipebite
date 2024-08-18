import React from 'react'
import HighlightedDish from '../Components/HighlightedDish'
import AppLayout from '../Components/AppLayout'

function HomePage() {
  return (
    <div>
      <AppLayout>
        <HighlightedDish/>
      </AppLayout>
    </div>


  )
}

export default HomePage
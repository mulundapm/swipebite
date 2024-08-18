import React from 'react'
import { Rating } from '@mui/material'

function Reviews({reviews}) {
return (
    <div>
        <div>
            {reviews.map((review, index)=>(
                <div key={index}>
                    <div className="inline">
                        <h5>{review.title}</h5>
                        <Rating name="disabled" value={review.rating} readOnly/>
                    </div>
                    <p>{review.description}</p>
                    <br />
                </div>
            ))}
        </div>
    </div>
)
}

export default Reviews
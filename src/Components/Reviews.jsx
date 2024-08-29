import React, { useState } from 'react'
import { Rating } from '@mui/material'
import Box from '@mui/material/Box';

function Reviews({reviews}) {
    const [clickedIndex, setClickedIndex] = useState(null)
    const expand = (index) =>{
        setClickedIndex(prevIndex => (prevIndex === index? null: index))
    }
return (
    <div>
        <div>
            {reviews.map((review, index)=>(
                <div key={index}>
                    <Box         
                    component="span"
                    sx={(theme) => ({
                    display: 'block',
                    p: 1,
                    m: 1,
                    bgcolor: '#fff',
                    color: 'grey.800',
                    border: '1px solid',
                    borderColor: 'grey.300',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    })}
                    onClick={()=>expand(index)}>
                        <div className="inline">
                            <h5>{review.name}</h5>
                            <Rating name="disabled" value={review.rating} readOnly/>
                        </div>
                        <p className={clickedIndex === index? '':'ellipsisl3'}>{review.review_text}</p>
                    </Box>
                </div>
            ))}
        </div>
    </div>
)
}

export default Reviews
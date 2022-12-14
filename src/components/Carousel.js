import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Items from './Items'
import slides from '../json/slides.json'

const CarouselExample = () => {
    return (
        <>
            <div className='row'>
                <Carousel>
                    {
                        slides.map(item => <Items key={item.id} item={item} /> )
                    }
                </Carousel>
            </div>
        </>
    )
}

export default CarouselExample

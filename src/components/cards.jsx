import React from 'react';
import Offer from './card'; // Make sure to import the Offer component
import "../styles/card.css"

const Offers = ({ offer }) => {
    return (
        <div className="offers">
            {offer.map((item, index) => (
                <Offer 
                    key={item.image} 
                    src={item.image} 
                    description={item.description} 
                    link={item.url} 
                    index={index} 
                />
            ))}
        </div>
    );
}

export default  Offers ;

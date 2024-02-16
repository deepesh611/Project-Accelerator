import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react'
import "../styles/card.css"

// const Offer = ({src,width,height,description}) => {
//     return (
        // <Figure>
        //     <Figure.Image>
        //         width= {width}
        //         height={height}
        //         alt = "card image"
        //         src={src}
        //     </Figure.Image>
        //     <Figure.Caption>
        //         {description}
        //     </Figure.Caption>
        // </Figure>

        

const Offer = ({src,description,link}) => {
  return (
    <figure className="figure">
      <img src={src} alt={description} />
      <figcaption >{description}</figcaption>
    </figure>
  );
};

export default Offer;








        // <div className="t">
        //     <a href={link}> 
        //         <img src={src} alt={`${index} offer`} />
        //         <div className="offerDescription">

        //             <p>{description}</p>
        //         </div>
        //     </a>
        // </div>
//     )
    
// }

// export default Offer;
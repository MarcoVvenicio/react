import React from 'react';
import './Img.css';

    const Img = (p) => {

        console.log(p);

        return(
            <div className='Image'>
                <img src={p.url} />
            </div>

        );
    }

export default Img;
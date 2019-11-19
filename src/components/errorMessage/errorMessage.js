import React from 'react';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>  
            <img src={img} alt='error'></img>
            <br></br>
            <span>Something goes wrong</span>
        </>
            )
}

export default ErrorMessage;

 /* <img src={process.env.PUBLIC_URL + '/img/error.jpg'}></img> */
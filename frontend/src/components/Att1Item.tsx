import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';

const Att1Item = ({data}) =>{

    
    return(


        <div className='container'>

            <Link to={`/umowapdf/${data.id}`}>
                <div className='border border-black'>{data.id}</div>
            </Link>

        </div>
    )
}
export default Att1Item;
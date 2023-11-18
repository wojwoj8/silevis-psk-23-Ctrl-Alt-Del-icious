import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';

const Att1Item = ({data}) =>{

    
    return(


        <div className='container'>

            <Link to={`/umowapdf/${data.id}`}>
            <div className={`border border-black ${data.status === 'accepted' ? 'bg-success' : data.status === 'denied' ? 'bg-danger' : data.status === 'pending' ? 'bg-primary' : ''}`}>
<<<<<<< HEAD
                {data.id}
=======
            {data.id}
>>>>>>> backend
            </div>
            </Link>

        </div>
    )
}
export default Att1Item;
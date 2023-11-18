import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';

const Att1Item = ({data, defaultData}) =>{

    
    return(


        <div className='container'>
            <Link to={`/umowapdf/${data.id}`}>
            <div className={`border border-black ${data.status === 'accepted' ? 'bg-success' : data.status === 'denied' ? 'bg-danger' : data.status === 'pending' ? 'bg-primary' : ''}`}>
            {data.start_praktyk !== (defaultData && defaultData.start_praktyk) ?
                <p>Unusual or no data</p> :
                <p className="text-dark link-underline link-underline-opacity-0 pt-3">{data.nr_albumu}</p>
            }
            </div>
            </Link>

        </div>
    )
}
export default Att1Item;
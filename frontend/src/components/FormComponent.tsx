import { useState } from 'react';
import axios, { AxiosError } from 'axios';


const FormComponent = () =>{

    const [data, setData] = useState()
    
    const getData = async () =>{
        
        try{
            const response = await axios.get('/api/all-emails/',  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }

    return(
        <div>
            <button className='bg-blue-300' onClick={getData}>get data</button>
            test
        </div>
    )
}
export default FormComponent;
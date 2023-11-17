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

    const getEmailData = async () =>{
        
        try{
            const response = await axios.get(`/api/user/s011111@student.tu.kielce.pl`,  {
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
            <button className='btn btn-primary' onClick={getData}>get data</button>
            <button className='btn btn-danger' onClick={getEmailData}>get data</button>
            test
        </div>
    )
}
export default FormComponent;
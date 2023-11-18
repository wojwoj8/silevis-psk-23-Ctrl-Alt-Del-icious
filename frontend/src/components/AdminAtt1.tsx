import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Att1Item from './Att1Item';

const AdminAtt1 = () =>{

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { name, value } = event.target;
        console.log(name)
        setAdminData((prevData) => ({
        ...prevData!,
        [name]: value,
        }));

      };

    const [listData, setListData] = useState([])
    const [defaultData, setDefaultData] = useState()
    
    const getData = async () =>{
        
        try{
            const response = await axios.get('/backend/userpanel/',  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
           setListData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }

    const getDefaultData = async () =>{
        
        try{
            const response = await axios.get(`/backend/adminview/`,  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
           setDefaultData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }
    


    useEffect(()=>{
        const fetchData = async () =>{
            await getData()
            await getDefaultData()

        }
        fetchData()
    },[])

 
     
    return(


        <div className='container'>

            {listData.map((item, index) => (
                <Att1Item key={index} data={item} defaultData={defaultData} />
            ))
            }

            
        </div>
    )
}
export default AdminAtt1;
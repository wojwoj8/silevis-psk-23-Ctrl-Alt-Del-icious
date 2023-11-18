import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

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

      const [adminData, setAdminData] = useState({
        id: "",
        start_praktyk: "",
        koniec_praktyk: "",
        dziekan_wydzialu: "",
        
    })
    const [docData, setDocData] = useState()
    const [formData, setFormData] = useState({
        
        zawarcie_umowy: "",
        dziekan_wydzialu: "",
        miasto: "",
        ulica: "",
        krs: "",
        nip: "",
        regon: "",
        reprezentant_zakladu: "",
        student: "",
        nr_albumu: "",
        start_praktyk: "",
        koniec_praktyk: "",
        kontakt1_imie: "",
        kontakt1_tel: "",
        kontakt1_email: "",
        kontakt2_imie: "",
        kontakt2_tel: "",
        kontakt2_email: ""
      });
    const getData = async () =>{
        
        try{
            const response = await axios.get('/backend/userpanel/',  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
           setAdminData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }

    const postData = async () =>{
        
        try{
            const response = await axios.post(`/backend/adminview/`, adminData,  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
        //    setUserData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }

    const editData = async () =>{
        
        try{
            const response = await axios.put(`/backend/adminview/`, adminData,  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
        //    setUserData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }
    


    useEffect(()=>{
        const fetchData = async () =>{
            await getData()

        }
        fetchData()
    },[])

 
     
    return(


        <div className='container'>

            

            <button className='btn btn-primary' onClick={getData}>get data</button>
            <button className='btn btn-danger'  onClick={editData}>edit data</button>
            <button className='btn btn-danger' onClick={postData}>post data</button>
        </div>
    )
}
export default AdminAtt1;
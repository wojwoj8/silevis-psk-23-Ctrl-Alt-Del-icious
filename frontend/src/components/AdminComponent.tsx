import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

const AdminComponent = () =>{

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { name, value } = event.target;
        console.log(name)
        setFormData((prevFormData) => ({
        ...prevFormData!,
        [name]: value,
        }));

      };

      const [adminData, setAdminData] = useState({
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
            const response = await axios.get('/backend/testview/',  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
           setDocData(response.data)
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
        //    setUserData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }
    const postData = async () =>{
        
        try{
            const response = await axios.post(`/backend/testview/`, formData,  {
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
            await getEmailData()

           
        }
        fetchData()
    },[])

    // useEffect(() => {
        
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         nr_albumu: userData.studentNumber,
    //         student: `${userData.firstName} ${userData.lastName}`
    //     }));
        
    // }, [userData]);
     
    return(
        <div className='container'>
            <button className='btn btn-primary' onClick={getData}>get data</button>
            <button className='btn btn-danger'  onClick={getEmailData}>get data</button>
            <button className='btn btn-danger' onClick={postData}>post data</button>
        </div>
    )
}
export default AdminComponent;
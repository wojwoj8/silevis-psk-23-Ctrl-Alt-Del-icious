import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AdminComponent = () =>{

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
        id: 0,
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

      const ok = (mess:string) => toast.success(`${mess}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    const err = (mess:string)=>toast.error(`${mess}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
            });

    const getData = async () =>{
        
        try{
            const response = await axios.get('/backend/adminview/',  {
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
            ok('Dane zostały wysłane!')
            console.log(response.data)
            window.location.reload();
        //    setUserData(response.data)
        }catch (error: any) {
            err('Coś poszło nie tak, upewnij się że wszystkie pola zostały wypełnione.')
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
            ok('Dane zostały wysłane!')
           console.log(response.data)
        //    setUserData(response.data)
        }catch (error: any) {
            err('Coś poszło nie tak, upewnij się że wszystkie pola zostały wypełnione.')
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
            <div>
                <Link to='/adminatt1'>Attachment1</Link>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="start_praktyk" className="form-label">Start Praktyk *</label>
                    <input type="date" className="form-control" value={adminData?.start_praktyk} onChange={handleInputChange} name="start_praktyk"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="dziekan_wydzialu" className="form-label">Dziekan Wydziału *</label>
                    <input type="text" className="form-control" value={adminData?.dziekan_wydzialu} onChange={handleInputChange} name="dziekan_wydzialu" placeholder="Dziekan Wydziału"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="koniec_praktyk" className="form-label">Koniec Praktyk *</label>
                    <input type="date" className="form-control" value={adminData?.koniec_praktyk} onChange={handleInputChange} name="koniec_praktyk"/>
                </div>
            </div>
            <div className='d-flex justify-content-center'>

            
                {adminData.id === 1 ? (
                    <button className='btn btn-danger'  onClick={editData}>Edit data</button>
                ) :(
                    <>
                        {/* <button className='btn btn-primary' onClick={getData}>get data</button> */}
                    
                        <button className='btn btn-danger' onClick={postData}>Send data</button>
                    </>
                )}  
            </div>
            <ToastContainer/>
        </div>
    )
}
export default AdminComponent;
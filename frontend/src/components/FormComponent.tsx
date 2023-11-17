import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
interface FormData {
    zawarcie_umowy: string;
    dziekan_wydzialu: string;
    miasto: string;
    ulica: string;
    krs: string;
    nip: string;
    regon: string;
    reprezentant_zakladu: string;
    student: string;
    nr_albumu: string;
    start_praktyk: string;
    koniec_praktyk: string;
    kontakt1_imie: string;
    kontakt1_tel: string;
    kontakt1_email: string;
    kontakt2_imie: string;
    kontakt2_tel: string;
    kontakt2_email: string;
  }

const FormComponent = () =>{

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

    const [userData, setUserData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        staffStatus: "",
        studentStatus: "",
        email: "",
        studentNumber: "",
        studentProgrammes: ['']
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
           setUserData(response.data)
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

    useEffect(() => {
        
        setFormData(prevFormData => ({
            ...prevFormData,
            nr_albumu: userData.studentNumber,
            student: `${userData.firstName} ${userData.lastName}`
        }));
        
    }, [userData]);
     
    return(
        <div className='container'>
            <button className='btn btn-primary' onClick={getData}>get data</button>
            <button className='btn btn-danger'  onClick={getEmailData}>get data</button>

            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="zawarcie_umowy" className="form-label">Zawarcie Umowy</label>
                    <input type="date" className="form-control" value={formData?.zawarcie_umowy} onChange={handleInputChange} name="zawarcie_umowy"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="dziekan_wydzialu" className="form-label">Dziekan Wydziału</label>
                    <input type="text" className="form-control" value={formData?.dziekan_wydzialu} onChange={handleInputChange} name="dziekan_wydzialu" placeholder="Dziekan Wydziału"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="miasto" className="form-label">Miasto</label>
                    <input type="text" className="form-control" value={formData?.miasto} onChange={handleInputChange} name="miasto" placeholder="Miasto"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="ulica" className="form-label">Ulica</label>
                    <input type="text" className="form-control" value={formData?.ulica} onChange={handleInputChange} name="ulica" placeholder="Ulica"></input>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="krs" className="form-label">KRS</label>
                    <input type="text" className="form-control" value={formData?.krs} onChange={handleInputChange} name="krs" placeholder="KRS"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="nip" className="form-label">NIP</label>
                    <input type="text" className="form-control" value={formData?.nip} onChange={handleInputChange} name="nip" placeholder="NIP"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="regon" className="form-label">REGON</label>
                    <input type="text" className="form-control" value={formData?.regon} onChange={handleInputChange} name="regon" placeholder="REGON"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="reprezentant_zakladu" className="form-label">Reprezentant Zakładu</label>
                    <input type="text" className="form-control" value={formData?.reprezentant_zakladu} onChange={handleInputChange} name="reprezentant_zakladu" placeholder="Reprezentant Zakładu"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="student" className="form-label">Student</label>
                    <input type="text" className="form-control" value={formData?.student} onChange={handleInputChange} name="student" placeholder="Student"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="nr_albumu" className="form-label">Nr Albumu</label>
                    <input type="text" className="form-control" value={formData?.nr_albumu} onChange={handleInputChange} name="nr_albumu" placeholder="Nr Albumu"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="start_praktyk" className="form-label">Start Praktyk</label>
                    <input type="date" className="form-control" value={formData?.start_praktyk} onChange={handleInputChange} name="start_praktyk"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="koniec_praktyk" className="form-label">Koniec Praktyk</label>
                    <input type="date" className="form-control" value={formData?.koniec_praktyk} onChange={handleInputChange} name="koniec_praktyk"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt1_imie" className="form-label">Kontakt 1 Imię</label>
                    <input type="text" className="form-control" value={formData?.kontakt1_imie} onChange={handleInputChange} name="kontakt1_imie" placeholder="Imię"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt1_tel" className="form-label">Kontakt 1 Telefon</label>
                    <input type="tel" className="form-control" value={formData?.kontakt1_tel} onChange={handleInputChange} name="kontakt1_tel" placeholder="Telefon"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt1_email" className="form-label">Kontakt 1 Email</label>
                    <input type="email" className="form-control" value={formData?.kontakt1_email} onChange={handleInputChange} name="kontakt1_email" placeholder="Email"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt2_imie" className="form-label">Kontakt 2 Imię</label>
                    <input type="text" className="form-control" value={formData?.kontakt2_imie} onChange={handleInputChange} name="kontakt2_imie" placeholder="Imię"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt2_tel" className="form-label">Kontakt 2 Telefon</label>
                    <input type="tel" className="form-control" value={formData?.kontakt2_tel} onChange={handleInputChange} name="kontakt2_tel" placeholder="Telefon"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt2_email" className="form-label">Kontakt 2 Email</label>
                    <input type="email" className="form-control" value={formData?.kontakt2_email} onChange={handleInputChange} name="kontakt2_email" placeholder="Email"/>
                </div>
            </div>
            <button className='btn btn-danger' onClick={postData}>post data</button>
        </div>
    )
}
export default FormComponent;
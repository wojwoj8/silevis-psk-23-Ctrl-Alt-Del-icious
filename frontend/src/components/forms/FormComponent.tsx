import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Doc1v1 from '../pdf/Doc1v1';
import Doc1v2 from '../pdf/Doc1v2';
import { FormData } from '../interfaces/Form';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const navigate = useNavigate();
    const [status, setStatus] = useState(false)
    
    const [language, setLanguage] = useState('pl');
    const currentDate = new Date().toISOString().split('T')[0];
    const [userData, setUserData] = useState()
    const [docData, setDocData] = useState()
    const [defaultData, setDefaultData] = useState()
    const [formData, setFormData] = useState<FormData>({
        zawarcie_umowy: currentDate,
        dziekan_wydzialu: "",
        miasto: "",
        ulica: "",
        krs: "",
        nip: "",
        regon: "",
        reprezentant_zakladu: "",
        zaklad_pracy: "",
        student: "",
        nr_albumu: "",
        start_praktyk: "",
        koniec_praktyk: "",
        kontakt1_imie: "",
        kontakt1_tel: "",
        kontakt1_email: "",
        kontakt2_imie: "",
        kontakt2_tel: "",
        kontakt2_email: "",
        status: ""
      });
      const [error, setError] = useState({
        zawarcie_umowy: [],
        dziekan_wydzialu: [],
        miasto: [],
        ulica: [],
        krs: [],
        nip: [],
        regon: [],
        reprezentant_zakladu: [],
        zaklad_pracy: [],
        student: [],
        nr_albumu: [],
        start_praktyk: [],
        koniec_praktyk: [],
        kontakt1_imie: [],
        kontakt1_tel: [],
        kontakt1_email: [],
        kontakt2_imie: [],
        kontakt2_tel: [],
        kontakt2_email: [],
        status: []
      })
      const [errMes, setErrMes] = useState('')
    const { id } = useParams();
    const getData = async () =>{
        
        try {
            const url = id ? `/backend/testview/${id}` : '/backend/testview/';
            console.log(url)
            const response = await axios.get(url, {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
           setFormData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }

    // const getEmailData = async () =>{
        
    //     try{
    //         const response = await axios.get(`/api/user/s011111@student.tu.kielce.pl`,  {
    //             headers: {
    //                 'accept': 'application/json',
    //               },
    //           });
              
    //        console.log(response.data)
    //        setUserData(response.data)
    //     }catch (error: any) {
          
    //         console.log(error);
    //       }
    // }

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
    const ok = () => toast.success('Umowa została wysłana!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;

    const er500 = ()=>toast.error('Server Error (500)!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
    const er400 = ()=>toast.error('Źle wypełniny formularz!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });;
    const postData = async () =>{
        
            try{
                const response = await axios.post(`/backend/testview/`, formData,  {
                    headers: {
                        'accept': 'application/json',
                    },
                });
                ok()
                navigate('/userpanel');
            console.log(response.data);
            //    setUserData(response.data)
            }catch (error: any) {
                if(axios.isAxiosError(error)){
                    console.log(error);
                    if(error.response?.status === 500)
                        er500()
                    if(error.response?.status === 400){
                        er400()
                        setErrMes('Te pola są wymagane')
                        setError({...error.response?.data})
                    }
                }
            }
        
        
        
    }
    const editData = async () =>{
        
        try{
            const response = await axios.put(`/backend/testview/${id}`, formData,  {
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


    const downloadPDF = async ()=>{
        const page1 = document.getElementById('page1'); 
        const page2 = document.getElementById('page2');
        if(page1 && page2){
            const pdf1 = await html2canvas(page1, {scale:2});
            const pdf2 = await html2canvas(page2, {scale:2});
            
            const image1 = pdf1.toDataURL('image/png');
            const image2 = pdf2.toDataURL('image/png');


            const pdfDoc = new jsPDF();
            const width = pdfDoc.internal.pageSize.getWidth();
            const height1 = (pdf1.height * width) / pdf1.width;
            const height2 = (pdf2.height * width) / pdf2.width;

            pdfDoc.addImage(image1, 'PNG', 0, 0, width, height1);
            pdfDoc.addPage();
            pdfDoc.addImage(image2, 'PNG', 0, 0, width, height2);
            pdfDoc.save('component.pdf');
        }
        
    }

    const handleStatus = (status:string) =>{
        setFormData(prevFormData => ({
            ...prevFormData,
            status: status
            
        }));
        setStatus(true)
    }
    useEffect(()=>{
        if (status === true){
        const fetchData = async () =>{

            await editData()
            navigate('/adminatt1')

        }
        fetchData()
    }
    },[status])

    useEffect(()=>{
        const fetchData = async () =>{
            if (id){
                await getData()
            }
            // await getEmailData()
            await getDefaultData()
        }
        fetchData()
    },[])

    useEffect(() => {
        if (!id){
            setFormData(prevFormData => ({
                ...prevFormData,
                nr_albumu: userData?.studentNumber,
                student: `${userData?.firstName} ${userData?.lastName}`
            }));
        }
        
        
    }, [userData]);

    useEffect(() => {
        if (!id){
        setFormData(prevFormData => ({
            ...prevFormData,
            start_praktyk: defaultData?.start_praktyk,
            koniec_praktyk: defaultData?.koniec_praktyk,
            dziekan_wydzialu: defaultData?.dziekan_wydzialu,
        }));
    }
        
    }, [defaultData]);

    const userDataCookie = Cookies.get('userData');
    
    useEffect(() =>{
        if (userDataCookie) {
            const userDataJson = JSON.parse(userDataCookie);
            setUserData(userDataJson)
            
        } else {
            console.log('userData cookie not found');
        }
    },[])
    

    return(
        <div>
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={downloadPDF}>Download PDF</button>
            {errMes?errMes:''}
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="zawarcie_umowy" className="form-label">Zawarcie Umowy</label>
                    <input type="date" className={!error.zawarcie_umowy?"form-contro border border-danger":"form-control"} value={formData?.zawarcie_umowy} onChange={handleInputChange} name="zawarcie_umowy"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="dziekan_wydzialu" className="form-label">Dziekan Wydziału</label>
                    <input type="text" className={!error.dziekan_wydzialu? "form-contro border border-danger":"form-control"} value={formData?.dziekan_wydzialu} name="dziekan_wydzialu" placeholder="Dziekan Wydziału"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="miasto" className="form-label">Miasto</label>
                    <input type="text" className={!error.miasto?"form-contro border border-danger":"form-control"} value={formData?.miasto} onChange={handleInputChange} name="miasto" placeholder="Miasto"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="ulica" className="form-label">Ulica</label>
                    <input type="text" className={!error.ulica?"form-contro border border-danger":"form-control"} value={formData?.ulica} onChange={handleInputChange} name="ulica" placeholder="Ulica"></input>
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
                <div className="mb-3 col-md-3">
                    <label htmlFor="regon" className="form-label">REGON</label>
                    <input type="text" className="form-control" value={formData?.regon} onChange={handleInputChange} name="regon" placeholder="REGON"/>
                </div>
                <div className="mb-3 col-md-3">
                    <label htmlFor="reprezentant_zakladu" className="form-label">Reprezentant Zakładu</label>
                    <input type="text" className={!error.reprezentant_zakladu?"form-contro border border-danger":"form-control"} value={formData?.reprezentant_zakladu} onChange={handleInputChange} name="reprezentant_zakladu" placeholder="Reprezentant Zakładu"/>
                </div>
                <div className="mb-3 col-md-3">
                    <label htmlFor="zaklad_pracy" className="form-label">Zakład Pracy</label>
                    <input type="text" className={!error.zaklad_pracy?"form-contro border border-danger":"form-control"} value={formData?.zaklad_pracy} onChange={handleInputChange} name="zaklad_pracy" placeholder="Zakład Pracy"/>
                </div>
                <div className="mb-3 col-md-3">
                    <label htmlFor="student" className="form-label">Student</label>
                    <input type="text" className={!error.student?"form-contro border border-danger":"form-control"} value={formData?.student} name="student" placeholder="Student"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="nr_albumu" className="form-label">Nr Albumu</label>
                    <input type="text" className={!error.nr_albumu?"form-contro border border-danger":"form-control"} value={formData?.nr_albumu} name="nr_albumu" placeholder="Nr Albumu"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="start_praktyk" className="form-label">Start Praktyk</label>
                    <input type="date" className={!error.start_praktyk?"form-contro border border-danger":"form-control"} value={formData?.start_praktyk} onChange={handleInputChange} name="start_praktyk"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="koniec_praktyk" className="form-label">Koniec Praktyk</label>
                    <input type="date" className={!error.koniec_praktyk?"form-contro border border-danger":"form-control"} value={formData?.koniec_praktyk} onChange={handleInputChange} name="koniec_praktyk"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt1_imie" className="form-label">Kontakt 1 Imię</label>
                    <input type="text" className={!error.kontakt1_imie?"form-contro border border-danger":"form-control"} value={formData?.kontakt1_imie} onChange={handleInputChange} name="kontakt1_imie" placeholder="Imię"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt1_tel" className="form-label">Kontakt 1 Telefon</label>
                    <input type="tel" className={!error.kontakt1_tel?"form-contro border border-danger":"form-control"} value={formData?.kontakt1_tel} onChange={handleInputChange} name="kontakt1_tel" placeholder="Telefon"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt1_email" className="form-label">Kontakt 1 Email</label>
                    <input type="email" className={!error.kontakt2_email?"form-contro border border-danger":"form-control"} value={formData?.kontakt2_email} onChange={handleInputChange} name="kontakt1_email" placeholder="Email"/>
                </div>
            </div>
            <div className='row'>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt2_imie" className="form-label">Kontakt 2 Imię</label>
                    <input type="text" className={!error.kontakt2_imie?"form-contro border border-danger":"form-control"} value={formData?.kontakt2_imie} onChange={handleInputChange} name="kontakt2_imie" placeholder="Imię"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt2_tel" className="form-label">Kontakt 2 Telefon</label>
                    <input type="tel" className={!error.kontakt2_tel?"form-contro border border-danger":"form-control"} value={formData?.kontakt2_tel} onChange={handleInputChange} name="kontakt2_tel" placeholder="Telefon"/>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="kontakt2_email" className="form-label">Kontakt 2 Email</label>
                    <input type="email" className={!error.kontakt2_email?"form-contro border border-danger":"form-control"} value={formData?.kontakt2_email} onChange={handleInputChange} name="kontakt2_email" placeholder="Email"/>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
            {id ? (
                <>
                    <button className='btn btn-success' onClick={() =>handleStatus('accepted')}>Accept</button>
                    <button className='btn btn-danger' onClick={() =>handleStatus('denied')}>Deny</button>
                </>
            
            ) :(
                <button className='btn btn-danger' onClick={postData}>post data</button>
            )}
            </div>
            
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-5 items-center">
                <Doc1v1 data={formData}/>
                <Doc1v2 data={formData}/>
            </div>
            <ToastContainer/>
        </div>
    )
}
export default FormComponent;
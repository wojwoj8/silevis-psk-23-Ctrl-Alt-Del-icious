import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Doc1v1 from '../pdf/Doc1v1';
import Doc1v2 from '../pdf/Doc1v2';
import { FormData } from '../interfaces/Form';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sprawozdanie = () =>{

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
    const [formData, setFormData] = useState({

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
            await getEmailData()
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

    return(
        <div>
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={downloadPDF}>Download PDF</button>
                <button className='btn btn-primary' onClick={()=>{language==='pl'?setLanguage('en'):setLanguage('pl')}}>Change language: {language}</button>
            </div>
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
                <Doc1v1 data={formData} lang={language}/>
                <Doc1v2 data={formData}/>
            </div>
        </div>
    )
}
export default Sprawozdanie;
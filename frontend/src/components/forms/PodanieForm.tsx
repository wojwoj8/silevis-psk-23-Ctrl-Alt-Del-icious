import { useState } from "react";
import { PodanieInterface } from "../interfaces/Form";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Podanie from "../pdf/Podanie";

export default function PoadnieForm(){
    
    const [dataForm, setDataFomr] = useState<PodanieInterface>({
        imie_nazwisko:'',
        pesel:'',
        adres:'',
        telefon:'',
        kierunek:''
    })
    
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { name, value } = event.target;
        console.log(name)
        setDataFomr((prevFormData) => ({
        ...prevFormData!,
        [name]: value,
        }));

      };

      const downloadPDF = async ()=>{
        const page1 = document.getElementById('page1'); 
        if(page1){
            const pdf1 = await html2canvas(page1, {scale:2});
            
            const image1 = pdf1.toDataURL('image/png');

            const pdfDoc = new jsPDF();
            const width = pdfDoc.internal.pageSize.getWidth();
            const height1 = (pdf1.height * width) / pdf1.width;
            pdfDoc.addImage(image1, 'PNG', 0, 0, width, height1);
            pdfDoc.save('component.pdf');
        }
        
    }

      return(
        <div>
            <div className='container'>
            <button className='btn btn-primary' onClick={downloadPDF}>Download PDF</button>
                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="adres" className="form-label">adres</label>
                        <input type="text" className="form-control" placeholder="adres" value={dataForm.adres} onChange={handleInputChange} name="adres"/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="imie_nazwisko" className="form-label">imie_nazwisko Wydziału</label>
                        <input type="text" className="form-control" value={dataForm.imie_nazwisko} onChange={handleInputChange} name="imie_nazwisko" placeholder="Dziekan Wydziału"/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="kierunek" className="form-label">kierunek</label>
                        <input type="text" className="form-control" value={dataForm.kierunek} onChange={handleInputChange} name="kierunek" placeholder="Miasto"/>
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="pesel" className="form-label">pesel</label>
                        <input type="text" className="form-control" value={dataForm.pesel} onChange={handleInputChange} name="pesel" placeholder="Ulica"></input>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="telefon" className="form-label">telefon</label>
                        <input type="text" className="form-control" value={dataForm.telefon} onChange={handleInputChange} name="telefon" placeholder="KRS"/>
                    </div>
                </div>
            </div>
            <Podanie data={dataForm}/>
        </div>
      )
}
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
        kierunek:'',
        
        nazwa_firmy:'',
        addres_firmy:'',
        miejsce_praktyk:'',
        imie_nazwisko_firmy:'',
        tel_kon:'',
        dat_start:'',
        data_kon:'',
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
                    <div className="mb-3 col-md-4">
                        <label htmlFor="nazwa_firmy" className="form-label">nazwa_firmy</label>
                        <input type="text" className="form-control" value={dataForm.nazwa_firmy} onChange={handleInputChange} name="nazwa_firmy" placeholder="nazwa_firmy"/>
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="pesel" className="form-label">addres_firmy</label>
                        <input type="text" className="form-control" value={dataForm.addres_firmy} onChange={handleInputChange} name="addres_firmy" placeholder="addres_firmy"></input>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="telefon" className="form-label">miejsce_praktyk</label>
                        <input type="text" className="form-control" value={dataForm.miejsce_praktyk} onChange={handleInputChange} name="miejsce_praktyk" placeholder="miejsce_praktyk"/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="telefon" className="form-label">imie_nazwisko_firmy</label>
                        <input type="text" className="form-control" value={dataForm.imie_nazwisko_firmy} onChange={handleInputChange} name="imie_nazwisko_firmy" placeholder="imie_nazwisko_firmy"/>
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="pesel" className="form-label">tel_kon</label>
                        <input type="text" className="form-control" value={dataForm.tel_kon} onChange={handleInputChange} name="tel_kon" placeholder="tel_kon"></input>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="dat_start" className="form-label">dat_start</label>
                        <input type="date" className="form-control" value={dataForm.miejsce_praktyk} onChange={handleInputChange} name="dat_start" placeholder="dat_start"/>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="telefon" className="form-label">data_kon</label>
                        <input type="date" className="form-control" value={dataForm.data_kon} onChange={handleInputChange} name="data_kon" placeholder="data_kon"/>
                    </div>
                </div>
            </div>
            <Podanie data={dataForm}/>
        </div>
      )
}
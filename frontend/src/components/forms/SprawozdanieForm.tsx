import { useState } from "react";
import { SprawozdanieInterface } from "../interfaces/Form";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Sprawozdanie from "../pdf/Sprawozdanie";

export default function SprawozdanieForm(){
    
    const [dataForm, setDataFomr] = useState<SprawozdanieInterface>({
        imie_nazwisko: '',
        wydzial:'',
        kierunek:'',
        rok:'',
        zaklad_pracy:'',
        zawarcie_umowy:'',
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


    <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
            <div className="col">

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="student" className="form-label">Imie i nazwisko</label>
                        <input type="text" className="form-control" value={dataForm.student} onChange={handleInputChange} name="student" placeholder="Imie i nazwisko"/>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="nr_albumu" className="form-label">nr_albumu</label>
                        <input type="text" className="form-control" placeholder="nr_albumu" value={dataForm.nr_albumu} onChange={handleInputChange} name="nr_albumu"/>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="wydzial" className="form-label">wydzial</label>
                        <input type="text" className="form-control" value={dataForm.wydzial} onChange={handleInputChange} name="wydzial" placeholder="wydzial"/>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="kierunek" className="form-label">kierunek</label>
                        <input type="text" className="form-control" value={dataForm.kierunek} onChange={handleInputChange} name="kierunek" placeholder="kierunek"></input>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="forma" className="form-label">forma</label>
                        <input type="text" className="form-control" value={dataForm.forma} onChange={handleInputChange} name="forma" placeholder="forma"></input>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="rok_studiow" className="form-label">rok_studiow</label>
                        <input type="text" className="form-control" value={dataForm.rok_studiow} onChange={handleInputChange} name="rok_studiow" placeholder="rok_studiow"></input>
                    </div>
                </div> 

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="zaklad_pracy" className="form-label">zaklad_pracy</label>
                        <input type="text" className="form-control" value={dataForm.zaklad_pracy} onChange={handleInputChange} name="zaklad_pracy" placeholder="zaklad_pracy"></input>
                    </div>
                </div>   

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="start_praktyk" className="form-label">start_praktyk</label>
                        <input type="text" className="form-control" value={dataForm.start_praktyk} onChange={handleInputChange} name="start_praktyk" placeholder="start_praktyk"></input>
                    </div>
                </div> 

                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="koniec_praktyk" className="form-label">koniec_praktyk</label>
                        <input type="text" className="form-control" value={dataForm.koniec_praktyk} onChange={handleInputChange} name="koniec_praktyk" placeholder="koniec_praktyk"></input>
                    </div>
                </div> 
                
                <div className='row'>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="sprawozdanie" className="form-label">sprawozdanie</label>
                        <textarea className="form-control" value={dataForm.sprawozdanie} onChange={handleInputChange} name="sprawozdanie" placeholder="sprawozdanie"></textarea>
                    </div>
                </div> 

                <button className='btn btn-danger' onClick={downloadPDF}>Pobierz PDF</button>

            </div>
            
            <div className="col">
                <div className="card h-100 text-center">
                    <Sprawozdanie data={dataForm}/>
                    <div className="card-body "></div>
                </div>
            </div>
        </div>
    </div>
        
    )
}
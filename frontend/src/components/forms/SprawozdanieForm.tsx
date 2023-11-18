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
                    <div className="mb-3 col-md-4">
                        <label htmlFor="imie_nazwisko" className="form-label">Imie i nazwisko</label>
                        <input type="text" className="form-control" value={dataForm.imie_nazwisko} onChange={handleInputChange} name="imie_nazwisko" placeholder="Imie i nazwisko"/>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="adres" className="form-label">Wydzial</label>
                        <input type="text" className="form-control" placeholder="Wydział" value={dataForm.wydzial} onChange={handleInputChange} name="wydzial"/>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="kierunek" className="form-label">Kierunek studiow</label>
                        <input type="text" className="form-control" value={dataForm.kierunek} onChange={handleInputChange} name="kierunek" placeholder="kierunek studiow"/>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="nr_albumu" className="form-label">Rok studiów</label>
                        <input type="text" className="form-control" value={dataForm.rok} onChange={handleInputChange} name="rok" placeholder="rok"></input>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="nr_albumu" className="form-label">miejsce zrealizowanej praktyki</label>
                        <input type="text" className="form-control" value={dataForm.zaklad_pracy} onChange={handleInputChange} name="zaklad_pracy" placeholder="zaklad_pracy"></input>
                    </div>
                </div>

                <div className='row'>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="nr_albumu" className="form-label">termin zawarcia umowy</label>
                        <input type="text" className="form-control" value={dataForm.zawarcie_umowy} onChange={handleInputChange} name="zawarcie_umowy" placeholder="zawarcie_umowy"></input>
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
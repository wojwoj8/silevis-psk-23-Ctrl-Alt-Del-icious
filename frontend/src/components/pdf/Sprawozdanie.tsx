import { SprawozdanieInterface } from "../interfaces/Form";
export default function Sprawozdanie({data}:{data:SprawozdanieInterface}){
    const empty = "………………………………………………………………………………………………………………………………"
    return(
    <div id="page1" className="pt-5">
        <h2 className="text-center">SPRAWOZDANIE Z PRAKTYKI STUDENCKIEJ</h2>
        <div className="flex justify-content-start mx-20 pt-20">
            <div>
                <span>{data.student?data.student:empty}</span><br></br>
                <span>Imię i Nazwisko studenta</span><br></br>
                <span>{data.wydzial?data.wydzial:empty}</span><br></br>
                <span>Wydział</span><br></br>
                <span>{data.kierunek?data.kierunek:empty}</span><br></br>
                <span>Kierunek studiów</span><br></br>
                <span>{data.rok_studiow?data.rok_studiow:empty}</span><br></br>
                <span>Rok studiów</span><br></br>
                <span>{data.zaklad_pracy?data.zaklad_pracy:empty}</span><br></br>
                <span>Miejsce zrealizowanej praktyki</span><br></br>
                <span>{data.start_praktyk?data.start_praktyk:empty}</span><br></br>
                <span>Termin realizowanej praktyki</span><br></br>
            </div>
        </div>
        <div className="mx-20 flex items-end flex-col">

    
          
    
    
  
            <div className="text-center">
                <span className="block mt-2"></span><br></br>
            </div>
        </div>
        <div>
            <span className="mx-20">CHARAKTERYSTYKA PRZEBIEGU PRAKTYKI</span>
            <div className="mx-20 text-center">
            <span>{data.sprawozdanie?data.sprawozdanie:empty}</span><br />

            </div>
        </div>
        <div className="mx-20 mt-20 flex items-end flex-col">
            <div className="text-center">
                <span className="block mb-2">Z poważaniem</span><br></br>
                <span >............................................................</span><br></br>
                <span> podpis studenta</span>
            </div>
        </div>
    </div>
    );
}
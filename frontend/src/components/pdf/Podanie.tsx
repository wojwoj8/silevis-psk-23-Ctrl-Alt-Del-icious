import { PodanieInterface } from "../interfaces/Form";

export default function Podanie({data}:{data:PodanieInterface}){
    const empty = ".............................................."
    return(
    <div id="page1" className="font-serif page mt-20 ml-20 shadow-2xl">
        <div className="flex justify-between mx-20 pt-20">
            <div>
                <span>{data.imie_nazwisko?data.imie_nazwisko:empty}</span><br></br>
                <span>Imię i Nazwisko studenta</span><br></br>
                <span>PESEL: {data.pesel?data.pesel:empty} </span><br></br>
                <span>{data.adres?data.adres:empty}</span><br></br>
                <span>Adres zamieszkania</span><br></br>
                <span>Nr telefonu: {data.telefon?data.telefon:empty}</span><br></br>
                <span>Kierunek studiów:{data.kierunek?data.kierunek:empty}</span><br></br>
            </div>
            <div>
                <span>Kielce, ....................</span>
            </div>
        </div>
        <div className="mx-20 flex items-end flex-col">
            <div className="text-center">
                <span><b>Kierwonik</b></span><br></br>
                <span> <b>ds. praktyk studenckich</b></span><br></br>
                <span className="block mt-2">............................................................</span><br></br>
            </div>
        </div>
        <div>
            <h2 className="text-center">Podanie</h2>
            <span className="mx-20">Uprzejmie proszę o wyrażenie zgody na realizację czterotygodniowej praktyki studenckiej</span><br></br>
            <span className="mx-20">w zakładzie:</span>
            <div className="mx-20 text-center">
                <span>{data.nazwa_firmy} {data.addres_firmy} {data.addres_firmy}</span><br />
                <span className="text-xs">Nazwa i adres zakładu pracy i miejsca praktyki</span><br />
                <span>{data.imie_nazwisko_firmy} {data.tel_kon}</span><br />
                <span className="text-xs">Imię i Nazwisko osoby reprezentującej zakład oraz dane kontaktowe (np. nr telefonu) – do podpisania Umowy pomiędzy PŚk i Zakładem</span><br />
                <span>................................</span><br />
                <span className="text-xs">Imię i Nazwisko osoby do opieki nad praktykantem ze strony zakładu (w przypadku gdy jest znane w momencie składania podania)</span><br />
                <span>{data.dat_start} - {data.data_kon}</span><br />
                <span className="text-xs">termin rozpoczęcia i zakończenia praktyki</span><br />
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
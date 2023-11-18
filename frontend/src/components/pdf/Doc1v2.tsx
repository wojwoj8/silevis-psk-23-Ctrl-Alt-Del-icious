import { FormData } from "../interfaces/Form";

export default function Doc1v2({data}:{data:FormData}){
    const empty = "..........................................................."
    return(
        <div id="page2" className=" my-10 page shadow-2xl">
            <div className="mx-10 mt-20">
                <span>§ 5. 1. Strony wyznaczają osoby właściwe do kontaktu w bieżących sprawach:</span><br></br>
                <span>1) z ramienia Zakładu Pracy {data.kontakt1_imie?data.kontakt1_imie:empty}</span><br></br>
                <span className="mx-20">tel.: {data.kontakt1_tel?data.kontakt1_tel:empty}</span><br></br>
                <span className="mx-20">e-mail: {data.kontakt1_email?data.kontakt1_email:empty}</span><br></br>
                <span>2) z ramienia Uczelni: {data.kontakt2_imie?data.kontakt2_imie:empty}</span><br></br>
                <span className="mx-20">tel.: {data.kontakt2_tel?data.kontakt2_tel:empty}</span><br></br>
                <span className="mx-20">e-mail: {data.kontakt2_email?data.kontakt2_email:empty}</span><br></br>

                <span>2. Klauzula informacyjna dotycząca przetwarzania przez Uczelnię danych osobowych</span><br></br>
                <span>pozyskanych z Zakładu stanowi załącznik nr 2 do niniejszej umowy. Zakład zobowiązuje się</span><br></br>
                <span>do udostępnienia załącznika osobom, których dane przekazano na podstawie niniejszej</span><br></br>
                <span>umowy.</span><br></br>

                <span>§ 6. Umowa niniejsza została sporządzona w dwóch jednobrzmiących egzemplarzach po</span><br></br>
                <span>jednym dla każdej ze Stron.</span><br></br>

                <span>§ 7. Ewentualne spory mogące wyniknąć na tle stosowania niniejszej umowy będą</span><br></br>
                <span>rozstrzygane na zasadzie mediacji przez wytypowanych przez każdą ze Stron mediatorów.</span><br></br>

                <span>§ 8. Umowa została zawarta na czas odbywania przez studenta praktyki określony w § 1.</span><br></br>
            </div>
            <div className="mt-20 mr-10 flex gap-36 justify-center">
                <div className="flex flex-col items-center">
                    <span>W imieniu Zakładu:</span>
                    <span className="mt-36">……………………………………………….</span>
                    <span className="text-sm"><b>Podpis i pieczęć</b></span>
                </div>
                <div className="flex flex-col items-center">
                    <span>W imieniu Politechniki Świętokrzyskiej:</span>
                    <span className="mt-36">……………………………………………….</span>
                    <span className="text-sm"><b>Podpis i pieczęć</b></span>
                </div>
            </div>
            <span className="block text-center mt-44">Strona 2 z 2</span>
        </div>
    );
}
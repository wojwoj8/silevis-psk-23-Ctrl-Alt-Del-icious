import { FormData } from "../interfaces/Form"

export default function Doc1v1({data, lang}:{data:FormData, lang:string}){
    const empty = "........................................"
    const short_empty = "..................."
    return(
    <div id="page1" className="shrink-0	mx-10 my-10 page shadow-2xl">
        <div className=" mt-10 mx-10 flex flex-col items-end gap-0">
            <span className="font-bold text-xs ">Załącznik nr 1 do Zarządzenia Nr 54/19</span>
            <span className="font-bold text-xs ">Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r.</span>
        </div>
        <h1 className="mt-10 mb-10 text-center text-3xl">{lang=='pl'?'Umowa o organizację praktyki studenta Politechniki Świętokrzyskiej':'Internship contract for a student of the Kielce University of Technology'}</h1>
        <div>
            <span className="mx-10">zawarta w dniu {data.zawarcie_umowy?data.zawarcie_umowy:empty} r. pomiędzy:</span><br></br>
            <span className="mx-10">Politechniką Świętokrzyską al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce,</span><br></br>
            <span className="mx-10">zwaną dalej Uczelnią, reprezentowaną na podstawie udzielonego przez Rektora Uczelni</span><br></br>
            <div className="mx-10">
                <span>pełnomocnictwa, przez Dziekana Wydziału {data.dziekan_wydzialu?data.dziekan_wydzialu:empty} ,</span><br></br>
            </div>
            <span className="mx-10">a</span><br></br>
            <span className="mx-10">{data.zaklad_pracy?data.zaklad_pracy:empty} z siedzibą w {data.miasto?data.miasto:empty}. ul.{data.ulica?data.ulica:empty}.,</span><br></br>
            <span className="mx-10">o nr KRS {data.krs?data.krs:short_empty}, NIP {data.nip?data.nip:short_empty}, Regon {data.regon?data.regon:short_empty}, zwanym dalej</span><br></br>
            <span className="mx-10"><b>Zakładem</b> lub <b>Zakładem Pracy</b>, reprezentowanym przez </span><br></br>
            <span className="mx-10">{data.reprezentant_zakladu?data.reprezentant_zakladu:empty} .</span><br></br>
        </div>
        <div className="mx-10 mt-10">
        <span >§ 1. Uczelnia kieruje studenta {data.student?data.student:empty},</span><br></br>
        <span>nr albumu {data.nr_albumu?data.nr_albumu:short_empty} do Zakładu w celu odbycia przez niego praktyki studenckiej</span><br></br>
        <span>w okresie od {data.start_praktyk?data.start_praktyk:empty} do {data.koniec_praktyk?data.koniec_praktyk:empty}.</span><br></br>
        <span>§ 2. Zakład zobowiązuje się do:</span><br></br>
        <span>1) zapewnienia odpowiednich stanowisk pracy, pomieszczeń, warsztatów, urządzeń, narzędzi</span><br></br>
        <span>materiałów zgodnie z programem praktyki stanowiącym załącznik nr 1 do niniejszej</span><br></br>
        <span>umowy;</span><br></br>
        <span >2) zapoznania studenta z zakładowym regulaminem pracy, przepisami o bezpieczeństwie</span><br></br>
        <span >i higienie pracy oraz o ochronie danych/tajemnicy przedsiębiorstwa itp. obowiązujących</span><br></br>
        <span >w Zakładzie;</span><br></br>
        <span >3) nadzoru nad wykonaniem przez studenta zadań wynikających z programu praktyki.</span><br></br>
        <span>§ 3. Uczelnia zobowiązuje się do sprawowania kierownictwa dydaktycznego nad praktyką</span><br></br>
        <span >studencką oraz jej kontroli i oceny, zgodnie z programem praktyk.</span><br></br>
        <span >§ 4. W przypadku gdy Zakład zdecyduje o możliwości przyznania studentowi wynagrodzenia</span><br></br>
        <span >z tytułu pracy wykonywanej w trakcie odbywania praktyki, stosowna umowa zawierana jest</span><br></br>
        <span >pomiędzy Zakładem a studentem, bez udziału i pośrednictwa Uczelni.</span><br></br>
        </div>
        <span className="text-center block mt-20">Strona 1 z 2</span>
    </div>)
}
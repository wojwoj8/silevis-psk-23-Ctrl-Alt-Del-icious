import { FormData } from "../interfaces/Form"

export default function Doc1v1({data}:{data:FormData}){
    const empty = "........................................"
    return(
    <div className="mx-10 my-10 page shadow-2xl">
    <div className=" mt-10 mx-10 flex flex-col items-end gap-0">
        <span className="font-bold text-xs ">Załącznik nr 1 do Zarządzenia Nr 54/19</span>
        <span className="font-bold text-xs ">Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r.</span>
    </div>
    <h1 className="mt-10 text-center text-3xl">Umowa o organizację praktyki studenta Politechniki Świętokrzyskiej</h1>
    <div>
        <span className="mx-10">zawarta w dniu {data.zawarcie_umowy} r. pomiędzy:</span><br></br>
        <span className="mx-10">Politechniką Świętokrzyską al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce,</span><br></br>
        <span className="mx-10">zwaną dalej Uczelnią, reprezentowaną na podstawie udzielonego przez Rektora Uczelni</span><br></br>
        <div className="mx-10">
            <span>pełnomocnictwa, przez Dziekana Wydziału ………………………… ……….……………………………………………………………………………………………………………… ,</span><br></br>
        </div>
        <span className="mx-10">a</span><br></br>
        <span className="mx-10">.......... z siedzibą w {data.miasto}. ul.{data.ulica}.,</span><br></br>
        <span className="mx-10">o nr KRS {data.krs}, NIP {data.nip}, Regon {data.regon}, zwanym dalej</span><br></br>
        <span className="mx-10"><b>Zakładem</b> lub <b>Zakładem Pracy</b>, reprezentowanym przez </span><br></br>
        <span className="mx-10">{data.reprezentant_zakladu} .</span><br></br>
    </div>
    <div className="mx-10 mt-10">
    <span >§ 1. Uczelnia kieruje studenta {data.student},</span><br></br>
    <span>nr albumu {data.nr_albumu} do Zakładu w celu odbycia przez niego praktyki studenckiej</span><br></br>
    <span>w okresie od {data.start_praktyk} do {data.koniec_praktyk}.</span><br></br>
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
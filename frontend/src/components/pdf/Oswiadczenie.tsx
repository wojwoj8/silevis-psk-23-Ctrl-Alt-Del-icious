import { OswiadczenieInterface } from "../interfaces/Form";

export default function Oswiadczenie({data}:{data:OswiadczenieInterface}){
    const empty = ".............................................."
    return(
    <div id="page1" className="page mt-20 ml-20 shadow-2xl">
        <div className="flex justify-between mx-20 pt-20">
            <div>
                <span>{data.imie_nazwisko?data.imie_nazwisko:empty}</span><br></br>
                <span>Imię i Nazwisko studenta</span><br></br>
                <span>{data.adres?data.adres:empty}</span><br></br>
                <span>Wydzial</span><br></br>
                <span>{data.kierunek?data.kierunek:empty}</span><br></br>
                <span>Kierunek, zakres:</span><br></br>
                <span>{data.nr_albumu?data.nr_albumu:empty}</span><br></br>
                <span>Nr albumu, forma studiów</span><br></br>
            </div>
            <div>
                <span className="text-xs">Załącznik nr 2 do Zarządzenia Nr 54/19</span>
            </div>
        </div>
        <div className="mx-20 flex items-end flex-col">
            <div className="text-center">
                <span>Wydziałowy Kierownik Praktyk</span><br></br>
                <span className="block mt-2">..................................................................</span>
                <span>Wydział..................................................</span><br></br>
                <span>Politechnika Świętokrzyska</span><br></br><br></br>
            </div>
        </div>
        <div>
            <h5 className="text-center">Oświadczenie o znajomości zasad odbywania praktyki</h5><br></br>
            <span className="mx-20">Oświadczam, że zapoznałem się z Regulaminem Praktyk Zawodowych w Politechnice</span><br></br>
            <span className="mx-20">Świętokrzyskiej oraz z niżej przedstawionymi warunkami praktyki studenckiej </span><br></br>
            <span className="mx-20">i zobowiązuję się do ich przestrzegania.</span><br></br><br></br>


            <span className="mx-20">Warunki praktyki studenckiej:</span><br></br>
            <div className="mx-20 text-left">
            <span className="text-xs">
                1. Uczelnia zobowiązana jest do sprawowania nadzoru dydaktyczno-wychowawczego
                oraz organizacyjnego nad przebiegiem praktyk. Obowiązki te pełni w imieniu Uczelni
                odpowiednio wydziałowy kierownik praktyk lub opiekun praktyki, który jest też
                upoważniony do rozstrzygania z kierownictwem Zakładu wszelkich spraw związanych
                z przebiegiem praktyki.
            </span><br />
            <span className="text-xs">
                2. Student zobowiązuje się do odbycia praktyk zgodnie z programem, a ponadto do:
                − przestrzegania ustalonego przez Zakład porządku i dyscypliny pracy,
                − przestrzegania zasad BHP i ochr. p. poż,
                − przestrzegania zasad zachowania tajemnicy (odpowiednio: przedsiębiorstwa, służbowej lub
                państwowej) oraz do ochrony poufności danych w zakresie określonym przez Zakład,
                − przestrzegania zasad odbywania praktyki określonych przez Uczelnię.
            </span><br />
            <span className="text-xs">
                3. Po zakończeniu praktyki Student sporządza „Sprawozdanie z praktyki studenckiej”
                potwierdzone przez zakładowego opiekuna praktyki i zaopiniowane przez opiekuna praktyk
                Sprawozdanie stanowi podstawę decyzji o zaliczeniu praktyki przez Studenta.
            </span><br />
            <span className="text-xs">
                Jednocześnie przyjmuję do wiadomości, że: <b>Uczelnia nie ubezpiecza studentów –
                praktykantów od następstw nieszczęśliwych wypadków (NNW).
                Decyzję o ewentualnym ubezpieczeniu podejmę samodzielnie i z pełną
                odpowiedzialnością, z uwzględnieniem wymogów w tym zakresie stawianych przez
                Zakład, w którym odbywa się praktyka.</b>
            </span><br />
            </div>
        </div>
        <div className="mt-20 mr-10 flex gap-36 justify-center">
                <div className="flex flex-col items-center">
                    <span>Kielce dnia ………………………………</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="">………………………………………</span>
                    <span className="text-sm">Podpis studenta</span>
                </div>
            </div>
    </div>
    );
}
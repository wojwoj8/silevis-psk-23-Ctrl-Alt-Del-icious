import { Link } from "react-router-dom";

export default function Before(){
    return(
    <section >
        <div>
            <div className="flex items-center flex-col">
                <h2>Przed Praktyka</h2>

                <h2>Generatory PDF</h2>
                <span>Wygeneruj swoje pdf do wydrukowania</span>
            </div>
            <div >
                <ul className="flex items-center flex-col">
                    <li><Link className="no-underline text-lg " to='/umowapdf'>Umowa o organizację praktyki studenta Politechniki Świętokrzyskiej – załącznik nr 1</Link></li>
                    <li><Link className="no-underline text-lg " to='/podanie'>Podanie o wyrażenie zgody na realizację czterotygodniowej praktyki studenckiej załącznik nr 5.</Link></li>
                </ul>
            </div>
        </div>
        <div>
            Dokumenty potrzebne przed praktykami:
            <ul>
                <li><b>Kierownik praktyk:</b></li>
                <li className="border-b-4 border-sky-500 no-underline"><a href="https://weaii.tu.kielce.pl/wp-content/uploads/2020/05/Za%C5%82%C4%85cznik-5.pdf">Podanie o wyrażenie zgody na realizację czterotygodniowej praktyki studenckiej (załącznik nr 5).</a></li>
                <li><b>Dziekanat:</b></li>
                <li><a href="https://tu.kielce.pl/wp-content/uploads/2019/09/Zarz_R_54_19_zal_1.pdf" className="no-underline">Umowę o organizację praktyki studenta Politechniki Świętokrzyskiej – załącznik nr 1</a></li>
                <li><a href="https://tu.kielce.pl/wp-content/uploads/2019/09/Zarz_R_54_19_zal_2.pdf" className="no-underline">Oświadczenie o znajomości zasad odbywania praktyki – załącznik nr 2 </a></li>
            </ul>
        </div>
    </section>
    );
}
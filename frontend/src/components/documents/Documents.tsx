import { Link } from "react-router-dom";

export default function Before(){
    return(
    <section>
        <div className="d-flex justify-content-evenly m-3">
             <h2>Dokumenty</h2>
        </div>
        <div className="m-5">
            <ul className="text-left">
                <li><b>Kierownik praktyk:</b></li>
                <li><a href="https://weaii.tu.kielce.pl/wp-content/uploads/2020/05/Za%C5%82%C4%85cznik-5.pdf" className=" no-underline onhoverorangetext">Zgoda na realizację czterotygodniowej praktyki studenckiej załącznik – nr 5</a></li>
                <li><b>Dziekanat:</b></li>
                <li><a href="https://tu.kielce.pl/wp-content/uploads/2019/09/Zarz_R_54_19_zal_1.pdf" className="no-underline onhoverorangetext">Umowę o organizację praktyki studenta Politechniki Świętokrzyskiej – załącznik nr 1</a></li>
                <li><a href="https://tu.kielce.pl/wp-content/uploads/2019/09/Zarz_R_54_19_zal_2.pdf" className="no-underline onhoverorangetext">Oświadczenie o znajomości zasad odbywania praktyki – załącznik nr 2 </a></li>
            </ul>
        </div>


        <div className="height150"> </div>
    </section>
    );
}
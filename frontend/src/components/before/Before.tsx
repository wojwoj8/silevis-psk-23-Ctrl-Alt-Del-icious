import { Link } from "react-router-dom";

export default function Before(){
    return(
    <section >
        <div>
            <div className="flex items-center flex-col">
                <h2>Generatory PDF</h2>
                <span>Wygeneruj swoje pdf do wydrukowania</span>
            </div>
            <div >
                <ul className="flex items-center">
                    <li><Link className="no-underline text-lg " to='/umowapdf'>Umowa o organizację praktyki studenta Politechniki Świętokrzyskiej – załącznik nr 1</Link></li>
                </ul>
            </div>
        </div>
    </section>
    );
}
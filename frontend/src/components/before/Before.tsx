import { Link } from "react-router-dom";

export default function Before(){
    return(
    <section>
        <div className="d-flex justify-content-evenly m-3">
             <h2>Przed Praktyka</h2>
        </div>


        <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
            <div className="col">
                <div className="card h-100 text-center">
                    <div className="card-body ">
                        <h5 className="card-title">Generatory PDF</h5>
                        <p className="card-text">Wygeneruj swoje pdf do wydrukowania
                            <ul className="text-left">
                                <li><Link className="no-underline text-lg onhoverorangetext" to='/umowapdf'>Umowa o organizację praktyki studenta Politechniki Świętokrzyskiej – załącznik nr 1</Link></li>
                                <li><Link className="no-underline text-lg onhoverorangetext" to='/podanie'>Zgoda na realizację czterotygodniowej praktyki studenckiej – załącznik nr 5</Link></li>
                                <li><Link className="no-underline text-lg onhoverorangetext" to='/oswiadczenie'>Oświadczenie o znajomości zasad odbywania praktyki – załącznik nr 2</Link></li>

                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card h-100 text-center">
                    <div className="card-body ">
                        <h5 className="card-title">Inne Dokumenty</h5>
                        <p className="card-text ">Dokumenty potrzebne przed praktykami
                        <ul className="text-left">
                            <li><b>Kierownik praktyk:</b></li>
                            <li><a href="https://weaii.tu.kielce.pl/wp-content/uploads/2020/05/Za%C5%82%C4%85cznik-5.pdf" className=" no-underline onhoverorangetext">Zgoda na realizację czterotygodniowej praktyki studenckiej załącznik – nr 5</a></li>
                            <li><b>Dziekanat:</b></li>
                            <li><a href="https://tu.kielce.pl/wp-content/uploads/2019/09/Zarz_R_54_19_zal_1.pdf" className="no-underline onhoverorangetext">Umowę o organizację praktyki studenta Politechniki Świętokrzyskiej – załącznik nr 1</a></li>
                            <li><a href="https://tu.kielce.pl/wp-content/uploads/2019/09/Zarz_R_54_19_zal_2.pdf" className="no-underline onhoverorangetext">Oświadczenie o znajomości zasad odbywania praktyki – załącznik nr 2 </a></li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="height150"></div>
    </section>
    );
}
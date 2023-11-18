import { Link } from "react-router-dom";

export default function Before(){
    return(
    <section>
        <div className="d-flex justify-content-evenly m-3">
             <h2>Po Praktyce</h2>
        </div>


        <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
            <div className="col">
                <div className="card h-100 text-center">
                    <div className="card-body ">
                        <h5 className="card-title">Sprawdz status swojego wniosku</h5>
                        <p className="card-text">

                        </p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100 text-center">
                    <div className="card-body ">
                        <h5 className="card-title">Złóż dokumenty</h5>
                        <p className="card-text">

                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card h-100 text-center">
                    <div className="card-body ">
                        <h5 className="card-title">Uzupełnij zaległości</h5>
                        <p className="card-text">

                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="height150"> </div>
    </section>
    );
}
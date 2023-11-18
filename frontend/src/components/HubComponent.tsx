import { Link } from "react-router-dom";
import { useState } from 'react';

export default function HubComponent(){
    const [language, setLanguage] = useState('pl');
    return(
        <div className="justify-content-center text-dark">
            <button className='btn' onClick={()=>{language==='pl'?setLanguage('en'):setLanguage('pl')}}>Change language: {language}</button>
            <p className="text-center fw-bold text-muted pt-4 pb-1">
            {language=='pl'?'Zasady i program odbywania praktyk studenckich':'Rules and program for student internships'}<br></br>
            {language=='pl'?'na Wydziale Elektrotechniki, Automatyki i Informatyki':'At the Faculty of Electrical Engineering, Automation and Computer Science'}<br></br>
            {language=='pl'?'Politechniki Świętokrzyskiej':'Swietokrzyski University of Technology'}<br></br>
            {language=='pl'?'dla studiów o profilu akademickim':'for studies with an academic profile'}<br></br>
            </p>
            <div className="max75p mx-auto pb-3"> 
            {language=='pl'?'Zgodnie z Zarządzeniem Nr 54/19 Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r. w sprawie Regulaminu Praktyk Zawodowych w Politechnice Świętokrzyskiej (ze zmianami) oraz programem studiów realizowanym na poszczególnych kierunkach studiów o profilu akademickim na Wydziale Elektrotechniki, Automatyki i Informatyki student zobowiązany jest do odbycia czterotygodniowej praktyki.  Praktyki studenckie stanowią integralną część procesu kształcenia i podlegają zaliczeniu. Dotyczy to zarówno studentów studiów stacjonarnych jak i niestacjonarnych. Studenci odbywają praktykę w okresie wakacyjnym przed rozpoczęciem V lub VII semestru studiów I stopnia (w zależności od kierunku studiów). Głównym celem praktyki studenckiej jest m.in.':
            'In accordance with the Order No. 54/19 of the Rector of Swietokrzyska Polytechnic University of Technology dated September 20, 2019 on the Regulations of Professional Practice at Swietokrzyska Polytechnic University (as amended) and the study program implemented in the individual fields of study of academic profile at the Faculty of Electrical Engineering, Automation and Computer Science, students are required to complete a four-week internship.  Student internships are an integral part of the educational process and are subject to credit. This applies to both full-time and part-time students. Students undergo their internship during the summer vacation before the beginning of the fifth or seventh semester of their undergraduate studies (depending on the field of study). The main purpose of the student internship is, among other things.'}
            <p></p>
            <ul>
                <li> {language=='pl'?'umiejętne wykorzystanie wiedzy zdobytej na studiach w pracy zawodowej':'Skillful use of the knowledge gained in studies in professional work'}</li>
                <li> {language=='pl'?'przygotowanie studenta do pracy w zespole, ale także do samodzielnego wykonywania powierzonych mu zadań':"Preparing the student to work as part of a team, but also to perform assigned tasks independently"}</li>
                <li> {language=='pl'?'pogłębianie wiedzy o branżach gospodarki, poznanie zasad organizacji przedsiębiorstw i mechanizmów ich funkcjonowania':"Deepening knowledge of the industries of the economy, learning the principles of the organization of enterprises and the mechanisms of their operation"}</li>
            </ul>

            <div className="row row-cols-1 row-cols-md-3 g-4 p-5 ">
                <Link to='/przed' className="col text-decoration-none">
                    <div className="card h-100 text-center onhoverorange">
                    <img src="https://cdn.icon-icons.com/icons2/2385/PNG/512/room_icon_144154.png" className="card-img-top mx-auto max65p pt-2" alt="..."/>
                    <div className="card-body ">
                        <h5 className="card-title">Przed praktyka</h5>
                        <p className="card-text">Wyszkuja interesujace oferty praktyk, sprawdź terminy, wygeneruj dokumenty</p>
                    </div>
                    </div>
                </Link>
                <Link to='/po' className="col text-decoration-none">
                    <div className="card h-100 text-center onhoverorange">
                    <img src="https://icons-for-free.com/iconfiles/png/512/out+icon-1320166904342226658.png" className="card-img-top mx-auto max65p  pt-2z" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title pt-2">Po praktyce</h5>
                        <p className="card-text">Sprawdź status praktyk, złóż dokumenty, uzupełnij zaległości</p>
                    </div>
                    </div>
                </Link>
                <Link to='/dokumenty' className="col text-decoration-none">
                    <div className="card h-100 text-center onhoverorange">
                    <img src="https://www.svgrepo.com/download/164522/checked-files.svg" className="card-img-top mx-auto max65p  pt-2" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dokumenty</h5>
                        <p className="card-text">Wzory dokumentow potrzebnych przez caly okres odbywania praktyk</p>
                    </div>
                    </div>
                </Link>
            </div>
            <p>Praktyka studencka może być odbywana w wybranym przez studenta podmiocie gospodarczym, instytucji lub zakładzie o profilu umożliwiającym zrealizowanie celów określonych w programie praktyk.
            Student we własnym zakresie wyszukuje miejsce odbywania praktyki, przedstawia propozycję Kierownikowi ds. praktyk studenckich na Wydziale (odpowiednio dla danego kierunku studiów) w celu uzyskania akceptacji. Po uzyskaniu zgody student składa w wybranym przez siebie zakładzie pracy podanie z prośbą o przyjęcie na praktykę (w przypadku gdy tego wymaga pracodawca). Warunki realizacji praktyki przez studenta określa Umowa zawarta pomiędzy Politechniką Świętokrzyską i pracodawcą. Praktyka ma z reguły charakter nieodpłatnej pracy na rzecz danego zakładu pracy. Uczelnia nie ubezpiecza studentów – praktykantów od następstw nieszczęśliwych wypadków (NW). Decyzję o ewentualnym ubezpieczeniu student podejmuje samodzielnie.
            Przed odbyciem praktyki student powinien dostarczyć w nieprzekraczalnych terminie do dnia 3.06.2023 następujące dokumenty do Dziekanatu:     
            </p>
            </div>
        </div>
    )
}
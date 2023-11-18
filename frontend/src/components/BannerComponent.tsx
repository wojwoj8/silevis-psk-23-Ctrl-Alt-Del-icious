import LanguageContext from '../context/LanguageContext'
import { useContext } from 'react';

export default function BannerComponent(){
    const {language} = useContext(LanguageContext)

    return(
        <div className="banner d-flex justify-content-evenly h-32">
            <div className="h4 text-white m-5">
                {language=='pl'?'Praktyki - profil akademicki':'Internships - academic profile'}

            </div>
            <div></div>
            <div className="h4 text-uppercase text-danger m-5">
            {language=='pl'?'porażamy pozytywną energią':'we strike with positive energy'}
            </div>
        </div>
    )
}
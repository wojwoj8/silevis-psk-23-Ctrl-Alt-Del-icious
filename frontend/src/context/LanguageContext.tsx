import { createContext } from "react";
import { ReactNode, useState } from "react";

interface LanguageContextData{
    language:string;
    changeLanguage:()=>void;
}

const LanguageContext = createContext<LanguageContextData>({
    language:'',
    changeLanguage:()=>{},
})

export default LanguageContext

export const LanguageProvider = ({ children }: { children: ReactNode })=>{

    const [language, setLanguage] = useState<string>('pl');

    const changeLanguage =()=>{
        setLanguage(language === 'pl'?'en':'pl');
    }

    const contextData = {
        language,
        changeLanguage,
    }

    return(
        <LanguageContext.Provider value={contextData}>
            {children}
        </LanguageContext.Provider>
    );
}
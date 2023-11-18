interface FormData {
    zawarcie_umowy: string;
    dziekan_wydzialu: string;
    miasto: string;
    ulica: string;
    krs: string;
    nip: string;
    regon: string;
    zaklad_pracy: string;
    reprezentant_zakladu: string;
    student: string;
    nr_albumu: string;
    start_praktyk: string;
    koniec_praktyk: string;
    kontakt1_imie: string;
    kontakt1_tel: string;
    kontakt1_email: string;
    kontakt2_imie: string;
    kontakt2_tel: string;
    kontakt2_email: string;
    status: string;
  }


interface PodanieInterface{
  imie_nazwisko: string;
  pesel: string;
  adres:string;
  telefon:string;
  kierunek:string;
}

  export type{FormData,PodanieInterface}
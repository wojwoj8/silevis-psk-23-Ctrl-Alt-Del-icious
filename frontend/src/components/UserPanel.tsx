import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Att1Item from './Att1Item';
import Cookies from 'js-cookie';

const UserPanel = () =>{

    const userDataCookie = Cookies.get('userData');
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { name, value } = event.target;
        console.log(name)
        setAdminData((prevData) => ({
        ...prevData!,
        [name]: value,
        }));

      };

    const [listData, setListData] = useState([])
    const [userData, setUserData] = useState()
    const [defaultData, setDefaultData] = useState()
    
    const getData = async (studentNumber:string) =>{
        
        try{
            const response = await axios.get(`/backend/userpanel/${studentNumber}`,  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
           setListData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }

    const getDefaultData = async () =>{
        
        try{
            const response = await axios.get(`/backend/adminview/`,  {
                headers: {
                    'accept': 'application/json',
                  },
              });
              
           console.log(response.data)
           setDefaultData(response.data)
        }catch (error: any) {
          
            console.log(error);
          }
    }
    

 

    useEffect(()=>{
        const fetchData = async () =>{
            if (userDataCookie) {
                const userDataJson = JSON.parse(userDataCookie);
                setUserData(userDataJson)
                await getData(`${userDataJson.studentNumber}`)
                
            } else {
                console.log('userData cookie not found');
            }
            
            await getDefaultData()

        }
        fetchData()
    },[])

    
     
    return(
        <div className='container'>
            {/* <button className='btn btn-primary' onClick={getData}>get data</button> */}
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5 ">
                <div className="col text-decoration-none">
                    <div className="card h-100 text-center">
                        <div className="card-body ">
                            <h5 className="card-title">Zatwierdzone wnioski</h5>
                            {listData
                            .filter(item => item.status === 'accepted')
                            .map((item, index) => (
                                <Att1Item key={index} data={item} defaultData={defaultData} />
                            ))
                            }                        
                        </div>
                    </div>
                </div>

                <div className="col text-decoration-none">
                    <div className="card h-100 text-center">
                        <div className="card-body ">
                            <h5 className="card-title">Oczekujace wnioski</h5>
                            {listData
                            .filter(item => item.status === 'pending')
                            .map((item, index) => (
                                <Att1Item key={index} data={item} defaultData={defaultData} />
                            ))
                            }                          
                        </div>
                    </div>
                </div>

                <div className="col text-decoration-none">
                    <div className="card h-100 text-center">
                        <div className="card-body ">
                            <h5 className="card-title">Odrzucone wnioski</h5>
                            {listData
                            .filter(item => item.status === 'denied')
                            .map((item, index) => (
                                <Att1Item key={index} data={item} defaultData={defaultData} />
                            ))
                            }                           
                        </div>
                    </div>
                </div>
            </div>






            
        </div>
    )
}
export default UserPanel;
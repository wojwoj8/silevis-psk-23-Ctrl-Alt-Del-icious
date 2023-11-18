import Cookies from 'js-cookie';
import axios from 'axios';
import { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userData, setUserData] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { name, value } = event.target;
        console.log(name)
        setUserData((prevFormData) => ({
        ...prevFormData!,
        [name]: value,
        }));

      };

    const getEmailData = async () => {
        try {
            const response = await axios.get(`/api/user/${userData?.Email}`, {
                headers: {
                    'accept': 'application/json',
                },
            });

            console.log(response.data);
            Cookies.set('userData', JSON.stringify(response.data));
            setError(null)
            setUserData(response.data);
            navigate('/')
            window.location.reload();

            
        } catch (error:any) {
            setError(error.response.data)
            console.log(error);
            console.log(error.response.data)
        }
    }

    return (
        <div className='container'>
            <div className="mb-3 col-md-4">
                {error && error.detail && <p>{error.detail}</p>}
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={handleInputChange} name="Email"/>
            </div>
            <button className='btn btn-primary' onClick={getEmailData}>Log In</button>
        </div>
    )
}
export default Login;
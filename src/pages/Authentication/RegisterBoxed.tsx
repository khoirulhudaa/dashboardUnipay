import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SweetAlert from '../../components/alertBox';
import FormGroup from '../../components/formGroup';
import { setPageTitle } from '../../store/themeConfigSlice';

const RegisterBoxed = () => {
    
    const [errorMessage, setErrorMessage] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleErrorMessage = (error: string) => {
        setErrorMessage(error)
    }

    const handleResponseMessage = (response: number) => {
        if(response === 200) {
            setErrorMessage("")
            SweetAlert({
              text:'Berhasil daftar',
              title: 'Success',
              confirmButtonText: 'Lanjut',
              showCancelButton: false,
              icon: 'success',
              route: '/auth/signin',
              navigate
            })
          }
    }

    useEffect(() => {
        dispatch(setPageTitle('Register Boxed'));
    });

    return (
        <div>
            <div className="relative md:overflow-hidden flex justify-center items-center min-h-screen bg-blue-500 bg-cover bg-center">
                <div className="panel w-full md:w-[30%] overflow-auto p-[20px] md:p-[30px] min-h-screen max-w-lg w-full">
                    <h2 className="font-bold text-2xl mb-[15px] mt-5">Daftar</h2>
                    <p className="mb-7">Bergabung bersama UnipayDasboard</p>
                    <FormGroup error={errorMessage} handleErrorMessage={handleErrorMessage} handleResponse={handleResponseMessage} />
                    <p className="text-center mt-6">
                        Sudah punya akun ?
                        <Link to="/auth/signin" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
                            Masuk
                        </Link>
                    </p>
                </div>
                <div className='w-[70%] h-screen overflow-hidden hidden md:flex items-center justify-center'>
                    <img 
                        src='/assets/images/logoUnipay.png'
                        className='w-[60%] ml-auto mr-auto'
                    />
                </div>
            </div>
        </div>
    );
};

export default RegisterBoxed;

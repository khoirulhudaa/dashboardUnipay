import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormGroup from '../../components/formGroup';
import { authSignOut } from '../../store/authSlice';
import { setPageTitle } from '../../store/themeConfigSlice';

const LoginBoxed = () => {
    
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setPageTitle('Login Boxed'));
        dispatch(authSignOut())
    }, [])
    

    const handleErrorMessage = (error: string) => {
        setErrorMessage(error)
    }

    const handleResponseMessage = (response: number) => {
        console.log(response)
    }

    return (
        <div className="relative md:overflow-hidden flex justify-between bg-blue-500 items-center min-h-screen bg-cover bg-center">
            <div className="panel ml-auto w-full md:w-[30%] h-screen max-w-lg p-[20px] md:p-[30px] w-full">
                <h2 className="font-bold text-2xl mb-[15px] mt-5">Masuk</h2>
                <p className="mb-7">Masukan email dan password anda</p>
                <FormGroup error={errorMessage} handleErrorMessage={handleErrorMessage} handleResponse={handleResponseMessage} type='signIn' />
                <div className='flex items-center justify-center mt-6'>
                    <p className="text-center">
                        Belum punya akun ?
                        <Link to="/auth/signup" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
                            Daftar
                        </Link>
                    </p>
                </div>
            </div>
            <div className='relative w-[70%] h-screen overflow-hidden hidden md:flex items-center justify-center'>
                <img 
                    src='/assets/images/logoUnipay.png'
                    className='w-[60%] ml-auto mr-auto'
                />
            </div>
        </div>
    );
};

export default LoginBoxed;

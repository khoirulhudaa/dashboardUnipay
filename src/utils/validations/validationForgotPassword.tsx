import { AxiosResponse } from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import API from '../../services/api';


export const useForgotPassword = ({onError}: {onError?: any}) => {
    const navigate = useNavigate()

    const formik = useFormik<any>({
        initialValues: {
            email_seller: '',
        },
        validationSchema: Yup.object({
            email_seller: Yup.string()
            .email('Invalid email address')
            .required('This field is required.'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                const response: AxiosResponse = await API.sendEmailResetPassword(values)
                console.log('response forgot pass:', response)
                if(response.data.message === "Email sent successfully!") {
                    resetForm()
                    navigate('/auth/succes/sendEmailMessage')
                }else {
                    onError("Failed sent email!")
                }

            } catch (error: any) {
                onError(error.data.message)
            }
        }
    })

    return formik
}
import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/api';
import { signAdminInterface } from '../interfaces/signAdminInterface';

export const useRegistrationFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {

  const abortController = new AbortController()
  const abortSignal = abortController.signal

  const formik = useFormik<signAdminInterface>({
    initialValues: {
      admin_name: '',
      email_admin: '',
      password: '',
      telephone_admin: '',
    },
    validationSchema: Yup.object({
      admin_name: Yup.string()
        .max(15, 'Maksimal 15 karakter')
        .required('Tidak boleh kosong!'),
      email_admin: Yup.string()
        .email('Format email salah')
        .required('Tidak boleh kosong!'),
      password: Yup.string()
        .min(6, 'Minimal 6 karakter')
        .required('Tidak boleh kosong!'),
      telephone_admin: Yup.string()
        .max(13, 'Maksimal 13 karakter')
        .required('Tidak boleh kosong!'),
    }),
    onSubmit: async (values: any, {resetForm}) => {
      try {
      
      if(abortSignal.aborted) return
      
      const response = await API.createAccountadmin(values);
      if (response.data.status === 200) {
        onResponse(response.data.status)
        resetForm()
      } else {
        onError(response.data.message)
      }
      
      } catch (error: any) {
        onError(error.message)
      }
    }
  });

  return formik

};

import { useFormik } from "formik";
import * as Yup from 'yup';

const useShopFormik = ({ onError }:{ onError?: any }) => {

    const abortController = new AbortController()
    const abortSignal = abortController.signal

    const formik = useFormik<any>({
        initialValues: {
            seller_name: '',
            shop_name: '',
            shop_address: '',
            image_shop: null,
            motto_shop: '',
            description_shop: '',
        },
        validationSchema: Yup.object({
            seller_name: Yup.string()
            .required('This field is required.')
            .min(3, 'Must be at lest 3 characters'),
            shop_name: Yup.string()
            .required('This field is required.')
            .min(3, 'Must be at least 3 chracters'),
            shop_address: Yup.string()
            .required('This field is required.')
            .min(12, 'Must be at least 12 characters')
            .max(100, 'Maximum only 100 characters'),
            image_shop: Yup.mixed()
            .required('This field is required.')
            .test('fileType', 'Only JPG and PNG', (value: any) => {
                if (!value) return true; // Izinkan input berkas kosong (opsional)
                const supportedFormats = ['image/jpeg', 'image/png'];
                const fileExtension = value.type;
                const isExtensionSupported = supportedFormats.includes(fileExtension);
                return isExtensionSupported;
            })
            .test('fileSize', 'Maximal size is 2MB.', (value: any) => {
                if (!value) return true; // Izinkan input berkas kosong (opsional)
                return value.size <= 2 * 1024 * 1024; // 2MB dalam byte
            }),
            motto_shop: Yup.string()
            .required('This field is required.')
            .min(10, 'Must be at lest 10 characters')
            .max(100, 'Maximum only 100 characters'),
            description_shop: Yup.string()
            .required('This field is required.')
            .min(10, 'Must be at lest 10 characters')
            .max(150, 'Maximum only 150 characters'),
        }),
        onSubmit: async () => {
            try {
                if(abortSignal.aborted) return
                
            } catch (error: any) {
                onError(error.message)
            }
        }
    })

    return formik
}

export default useShopFormik
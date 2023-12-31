import { useEffect, useState } from 'react';
import { FaFilePdf, FaSpinner } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SweetAlert from '../../../components/alertBox';
import Button from '../../../components/button';
import Table from '../../../components/table';
import { isEqual } from '../../../helpers/equal';
import API from '../../../services/api';
import { usePDF } from 'react-to-pdf';

const Semester = () => {
    const { toPDF, targetRef } = usePDF({filename: 'table.pdf'});


    const [code, setCode] = useState<string>("")
    const [year, setYear] = useState<string>("")
    const [classRoom, setClassRoom] = useState<string>("")
    const [alertMessage, setAlertMessage] = useState<boolean>(false)
    const [updateStatus, setUpdateStatus] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    const [dataHistory, setDataHistory] = useState<[]>([])

    const dispatch = useDispatch()
    const params = useParams()
    const { prodi } = params

    useEffect(() => {
        const getDataShop = async () => {
            try {
                const response = await API.getAllHistoryPayments()
                const filteredData = response.data.data.filter((item: any) => {
                    return item.prodi === prodi && item.type_payment === 'UP';
                });
                if(!isEqual(dataHistory, response.data.data)) {
                    setDataHistory(filteredData)
                    setUpdateStatus(false)
                    setAlertMessage(false)
                    setUpdate(false)
                }   
            } catch (error: any) {
                console.log(error.message);
            }
        };
        
        getDataShop();
    }, [dispatch, prodi, update, updateStatus]);

    const columns = [
        {label: 'NIM'},
        {label: 'Nama'},
        {label: 'Waktu'},
        {label: 'Tahun'},
        {label: 'Jumlah'},
        {label: 'Kode'},
    ]

    return (
        <>
            <div className="panel">
                <div className="flex flex-col mb-5 gap-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Data Ujian Perbaikan ({prodi ?? '-'})</h5>
                    <div className="flex items-center">
                        <input type="text" className="form-input w-auto py-3 mr-3" placeholder="Kode transaksi" value={code} onChange={(e) => setCode(e.target.value)} />
                        <input type="text" className="form-input w-auto py-3 mr-3" placeholder="Tahun ajaran" value={year} onChange={(e) => setYear(e.target.value)} />
                        <input type="text" className="form-input w-auto py-3 mr-3" placeholder="Kelas" value={classRoom} onChange={(e) => setClassRoom(e.target.value)} />
                        <div className='ml-auto flex items-center'>
                            <Button onClick={() => setUpdate(true)} text='Muat ulang' typeButton='with-icon' icon={<FaSpinner />} />
                            <div className='mx-3'></div>
                            <Button onClick={() => toPDF()} method='delete' typeButton='with-icon' icon={<FaFilePdf />} text='Unduh PDF' />
                        </div>
                    </div>
                </div>
                <div className="datatables">
                    <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                        <Table prodi={prodi} targetRef={targetRef} classRoom={classRoom} year={year} code={code} columns={columns} data={dataHistory} />
                    </div>
                </div>
                </div>
            </div>
            {
                alertMessage && (
                    SweetAlert({
                        text:'Berhasil daftar',
                        title: 'Success',
                        confirmButtonText: 'Lanjut',
                        showCancelButton: false,
                        icon: 'success',
                    })
                )
            }
        </>
    );
};

export default Semester;

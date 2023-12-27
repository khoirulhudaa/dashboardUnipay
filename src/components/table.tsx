import React, { useEffect, useState } from "react";
import showFormattedDate from "../helpers/formatDate";
import toRupiah from "../helpers/toRupiah";

interface Column {
  label?: string;
  amount?: number;
  channel_code?: string;
  account_number?: string;
  date?: any;
}

interface TableWDAdminProps {
  data?: Column[],
  columns?: Column[],
  code?: string,
  year?: string,
  classRoom?: string,
  targetRef?: any,
  prodi?: string
}

const Table: React.FC<TableWDAdminProps> = ({
  data,
  columns,
  code,
  year,
  classRoom,
  targetRef,
  prodi
}) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let filteredData = data
      ? data.filter((rowData: any) => {
          if (!code && !year && !classRoom) {
            return true;
          } else {
            const codeMatch = !code || rowData.code === code;
            const yearMatch = !year || rowData.year === year;
            const classRoomMatch =
              !classRoom ||
              rowData.classRoom.toLowerCase().includes(classRoom.toLowerCase());

            return codeMatch && yearMatch && classRoomMatch;
          }
        })
      : [];

    // Set the total outside the rendering logic
    setTotal(filteredData.length);
  }, [data, code, year, classRoom]);

  return (
    <div ref={targetRef} className="border-t-[1px] border-t-slate-200">
      <div className="flex items-center justify-between mt-6 px-4">
        <small className="text-[14px] mr-3">Total mahasiswa: {total}</small>
        {
          classRoom ? <small className="text-[14px]">Kelas: {classRoom ?? ''}</small> : ''
        }
        <small className="text-[14px] ml-3">Prodi: {prodi}</small>
      </div>
      <div className="h-[25px]"></div>
      <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
        <thead className="align-bottom">
          <tr>
            {columns?.map((column: Column, index: number) => (
              <th
                key={index}
                className="py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`relative ${data && data.length > 0 ? "" : "h-[150px]"}`}>
          {data && data.length > 0 ? (
            (() => {
              let filteredData = data.filter((data: any) => {
                if (!code && !year && !classRoom) {
                  return true;
                } else {
                  const codeMatch = !code || data.code === code;
                  const yearMatch = !year || data.year === year;
                  const classRoomMatch =
                    !classRoom || data.classRoom.toLowerCase().includes(classRoom.toLowerCase());

                  return codeMatch && yearMatch && classRoomMatch;
                }
              });

              if (filteredData.length === 0) {
                return (
                  <div className="flex flex-col items-center justify-center text-center h-[150px]">
                    <div className="w-full flex flex-col top-3 justify-center absolute left-[50%] transform translate-x-[-50%] h-full text-center items-center">
                      <img src="/assets/images/search.png" alt="icon" className="w-[80px]" />
                      <p className="text-[15px] mt-4">Data tidak ditemukan!</p>
                    </div>
                  </div>
                );
              }

              const slicedData = filteredData.slice(0, 50);

              return slicedData?.map((data: any, index: number) => (
                <tr key={index}>
                  <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">{data?.NIM}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">{data?.fullName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                      {showFormattedDate(data?.date)}
                    </p>
                  </td>
                  <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-black">{data?.year}</span>
                  </td>
                  <td className="p-2 text-center text-red-500 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-black">{toRupiah(data?.amount)}</span>
                  </td>
                  <td className="p-2 text-center text-red-500 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-black">{data?.code}</span>
                  </td>
                </tr>
              ));
            })()
          ) : (
            <div className="w-full flex flex-col top-3 justify-center absolute left-[50%] transform translate-x-[-50%] h-full text-center items-center">
              <img src="/assets/images/search.png" alt="icon" className="w-[80px]" />
              <p className="text-[15px] mt-4">Belum ada data!</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

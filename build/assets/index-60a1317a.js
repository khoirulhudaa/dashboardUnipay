import{r as t,u as P,o as F,a as s,d as j,j as e,b as k,p as A}from"./index-547714e3.js";import{S as T}from"./alertBox-4cc2ca82.js";import{B as d}from"./button-02dddda1.js";import{$ as M,T as U}from"./module-4e84e8ac.js";import{i as $}from"./equal-f26f0b90.js";import{A as E}from"./api-537efcc3.js";import"./formatDate-90248bb2.js";import"./toRupiah-980d2178.js";const _=()=>{const{toPDF:p,targetRef:f}=M({filename:"table.pdf"}),[r,h]=t.useState(""),[n,x]=t.useState(""),[c,g]=t.useState(""),[y,S]=t.useState(!1),[b,v]=t.useState(!1),[N,i]=t.useState(!1),[u,w]=t.useState([]),C=P(),D=F(),{prodi:o}=D;return t.useEffect(()=>{(async()=>{try{const l=await E.getAllHistoryPayments(),B=l.data.data.filter(m=>m.prodi===o&&m.type_payment==="UP");$(u,l.data.data)||(w(B),v(!1),S(!1),i(!1))}catch(l){console.log(l.message)}})()},[C,N,b]),s(j,{children:[s("div",{className:"panel",children:[s("div",{className:"flex flex-col mb-5 gap-5",children:[s("h5",{className:"font-semibold text-lg dark:text-white-light",children:["Data Semesteran (",o??"-",")"]}),s("div",{className:"flex items-center",children:[e("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kode transaksi",value:r,onChange:a=>h(a.target.value)}),e("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Tahun ajaran",value:n,onChange:a=>x(a.target.value)}),e("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kelas",value:c,onChange:a=>g(a.target.value)}),s("div",{className:"ml-auto flex items-center",children:[e(d,{onClick:()=>i(!0),text:"Muat ulang",typeButton:"with-icon",icon:e(k,{})}),e("div",{className:"mx-3"}),e(d,{onClick:()=>p(),method:"delete",typeButton:"with-icon",icon:e(A,{}),text:"Unduh PDF"})]})]})]}),e("div",{className:"datatables",children:e("div",{className:"flex-auto px-0 pt-0 pb-2",children:e("div",{className:"p-0 overflow-x-auto",children:e(U,{prodi:o,targetRef:f,classRoom:c,year:n,code:r,columns:[{label:"NIM"},{label:"Nama"},{label:"Waktu"},{label:"Tahun"},{label:"Jumlah"},{label:"Kode"}],data:u})})})})]}),y&&T({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success"})]})};export{_ as default};

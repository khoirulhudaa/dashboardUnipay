import{r as t,u as k,o as C,a as s,d as B,j as a,b as D}from"./index-c28607b4.js";import{S as T}from"./alertBox-0434af11.js";import{B as j}from"./button-124bb9c8.js";import{T as A}from"./table-1079cff9.js";import{i as M}from"./equal-f26f0b90.js";import{A as E}from"./api-b9b00496.js";import"./formatDate-90248bb2.js";import"./toRupiah-980d2178.js";const L=()=>{const[r,p]=t.useState(""),[n,d]=t.useState(""),[c,f]=t.useState(""),[h,g]=t.useState(!1),[x,S]=t.useState(!1),[y,o]=t.useState(!1),[i,v]=t.useState([]),N=k(),b=C(),{prodi:u}=b;return t.useEffect(()=>{(async()=>{try{const l=await E.getAllHistoryPayments(),w=l.data.data.filter(m=>m.prodi===u&&m.type_payment==="Semesteran");M(i,l.data.data)||(v(w),S(!1),g(!1),o(!1))}catch(l){console.log(l.message)}})()},[N,y,x]),s(B,{children:[s("div",{className:"panel",children:[s("div",{className:"flex flex-col mb-5 gap-5",children:[s("h5",{className:"font-semibold text-lg dark:text-white-light",children:["Data Semesteran (",u??"-",")"]}),s("div",{className:"flex items-center",children:[a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kode transaksi",value:r,onChange:e=>p(e.target.value)}),a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Tahun ajaran",value:n,onChange:e=>d(e.target.value)}),a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kelas",value:c,onChange:e=>f(e.target.value)}),a("div",{className:"ml-auto",children:a(j,{onClick:()=>o(!0),text:"Muat ulang",typeButton:"with-icon",icon:a(D,{})})})]})]}),a("div",{className:"datatables",children:a("div",{className:"flex-auto px-0 pt-0 pb-2",children:a("div",{className:"p-0 overflow-x-auto",children:a(A,{prodi:"Teknik Informatika",classRoom:c,year:n,code:r,columns:[{label:"NIM"},{label:"Nama"},{label:"Waktu"},{label:"Tahun"},{label:"Jumlah"},{label:"Kode"}],data:i,update:e=>o(e)})})})})]}),h&&T({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success"})]})};export{L as default};

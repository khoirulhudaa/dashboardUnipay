import{r as t,u as C,o as j,a as s,d as B,j as a,b as D}from"./index-2a7528ff.js";import{S as A}from"./alertBox-2c301e0b.js";import{B as T}from"./button-268951c3.js";import{T as k}from"./table-e267f5e2.js";import{i as K}from"./equal-f26f0b90.js";import{A as M}from"./api-535637dc.js";import"./formatDate-90248bb2.js";import"./toRupiah-980d2178.js";const L=()=>{const[o,u]=t.useState(""),[n,m]=t.useState(""),[r,p]=t.useState(""),[d,f]=t.useState(!1),[h,g]=t.useState(!1),[x,c]=t.useState(!1),[i,y]=t.useState([]),S=C(),v=j(),{prodi:N}=v;return t.useEffect(()=>{(async()=>{try{const l=await M.getAllHistoryPayments(),b=l.data.data.filter(w=>w.type_payment==="Canteen");K(i,l.data.data)||(y(b),g(!1),f(!1),c(!1))}catch(l){console.log(l.message)}})()},[S,x,h]),s(B,{children:[s("div",{className:"panel",children:[s("div",{className:"flex flex-col mb-5 gap-5",children:[s("h5",{className:"font-semibold text-lg dark:text-white-light",children:["Data Penjualan Kantin (",N??"-",")"]}),s("div",{className:"flex items-center",children:[a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kode transaksi",value:o,onChange:e=>u(e.target.value)}),a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Tahun ajaran",value:n,onChange:e=>m(e.target.value)}),a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kelas",value:r,onChange:e=>p(e.target.value)}),a("div",{className:"ml-auto",children:a(T,{onClick:()=>c(!0),text:"Muat ulang",typeButton:"with-icon",icon:a(D,{})})})]})]}),a("div",{className:"datatables",children:a("div",{className:"flex-auto px-0 pt-0 pb-2",children:a("div",{className:"p-0 overflow-x-auto",children:a(k,{classRoom:r,year:n,code:o,columns:[{label:"NIM"},{label:"Nama"},{label:"Waktu"},{label:"Tahun"},{label:"Jumlah"},{label:"Kode"}],data:i})})})})]}),d&&A({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success"})]})};export{L as default};

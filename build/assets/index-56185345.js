import{r as e,u as A,o as k,a as s,d as C,j as a,b as B}from"./index-dd7faf58.js";import{S as D}from"./alertBox-1e0ebead.js";import{B as T}from"./button-b457ecb2.js";import{T as j}from"./table-14d83113.js";import{i as U}from"./equal-f26f0b90.js";import{A as M}from"./api-03399754.js";import"./formatDate-90248bb2.js";import"./toRupiah-980d2178.js";const L=()=>{const[r,m]=e.useState(""),[n,d]=e.useState(""),[c,f]=e.useState(""),[h,g]=e.useState(!1),[x,S]=e.useState(!1),[y,o]=e.useState(!1),[i,v]=e.useState([]),N=A(),b=k(),{prodi:u}=b;return e.useEffect(()=>{(async()=>{try{const l=await M.getAllHistoryPayments(),w=l.data.data.filter(p=>p.prodi===u&&p.type_payment==="UAS");U(i,l.data.data)||(v(w),S(!1),g(!1),o(!1))}catch(l){console.log(l.message)}})()},[N,y,x]),s(C,{children:[s("div",{className:"panel",children:[s("div",{className:"flex flex-col mb-5 gap-5",children:[s("h5",{className:"font-semibold text-lg dark:text-white-light",children:["Data UAS (",u??"-",")"]}),s("div",{className:"flex items-center",children:[a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kode transaksi",value:r,onChange:t=>m(t.target.value)}),a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Tahun ajaran",value:n,onChange:t=>d(t.target.value)}),a("input",{type:"text",className:"form-input w-auto py-3 mr-3",placeholder:"Kelas",value:c,onChange:t=>f(t.target.value)}),a("div",{className:"ml-auto",children:a(T,{onClick:()=>o(!0),text:"Muat ulang",typeButton:"with-icon",icon:a(B,{})})})]})]}),a("div",{className:"datatables",children:a("div",{className:"flex-auto px-0 pt-0 pb-2",children:a("div",{className:"p-0 overflow-x-auto",children:a(j,{prodi:"Teknik Informatika",classRoom:c,year:n,code:r,columns:[{label:"NIM"},{label:"Nama"},{label:"Waktu"},{label:"Tahun"},{label:"Jumlah"},{label:"Kode"}],data:i,update:t=>o(t)})})})})]}),h&&D({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success"})]})};export{L as default};

import{a as l,j as e,c as g,r as a,u as w,d as N}from"./index-74c1abb2.js";import{S as p}from"./alertBox-019922bb.js";import{t as v}from"./toRupiah-980d2178.js";import{A as u}from"./api-e09118d0.js";import{i as k}from"./equal-f26f0b90.js";const S=({data:r,columns:c,update:i})=>{const d=async t=>{(await u.removeUser(t)).data.status===200?(i(!0),p({title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success",text:"Berhasil hapus pengguna"})):p({title:"Error",cancelButtonText:"Tutup",showCancelButton:!0,showConfirmButton:!1,icon:"error",text:"Gagal hapus pengguna!"})};return l("table",{className:"items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500",children:[e("thead",{className:"align-bottom",children:e("tr",{children:(c??[]).map((t,s)=>e("th",{className:"px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70",children:t.label},s))})}),e("tbody",{children:r==null?void 0:r.map((t,s)=>l("tr",{children:[e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("div",{className:"flex px-2 py-1",children:e("div",{className:"flex flex-col justify-center",children:e("h6",{className:"mb-0 text-sm leading-normal dark:text-white",children:t==null?void 0:t.fullName})})})}),e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("div",{className:"flex px-2 py-1",children:e("div",{className:"flex flex-col justify-center",children:e("h6",{className:"mb-0 text-sm leading-normal dark:text-white",children:t==null?void 0:t.prodi})})})}),e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("p",{className:"mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80",children:t==null?void 0:t.year})}),e("td",{className:"p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("span",{className:"text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400",children:v(t==null?void 0:t.balance)})}),e("td",{className:"p-2 text-center text-red-500 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e(g,{onClick:()=>d(t==null?void 0:t.NIM),className:"cursor-pointer active:scale-[0.98] hover:brightness-[90%] duration-100 text-red-500"})})]},s))})]})},A=()=>{const[r,c]=a.useState("");a.useState("");const[i,d]=a.useState(!1),[t,s]=a.useState(!1),[b,h]=a.useState(!1),[m,x]=a.useState([]),f=w();return a.useEffect(()=>{(async()=>{try{const o=await u.getAllUser();k(m,o.data.data)||(x(o.data.data),s(!1),d(!1),h(!1))}catch(o){console.log(o.message)}})()},[f,b]),l(N,{children:[l("div",{className:"panel",children:[l("div",{className:"flex md:items-center md:flex-row flex-col mb-5 gap-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Data Pengguna Unipay"}),e("div",{className:"ltr:ml-auto rtl:mr-auto",children:e("input",{type:"text",className:"form-input w-auto",placeholder:"Search by name",value:r,onChange:n=>c(n.target.value)})})]}),e("div",{className:"datatables",children:e("div",{className:"flex-auto px-0 pt-0 pb-2",children:e("div",{className:"p-0 overflow-x-auto",children:e(S,{columns:[{label:"Nama"},{label:"Jurusan"},{label:"Tahun"},{label:"Saldo"},{label:"Opsi"}],data:m,update:n=>h(n)})})})})]}),i&&p({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success"})]})};export{A as default};

import{r as s,u as i,i as p,j as t,a as d}from"./index-74c1abb2.js";import{S as h}from"./alertBox-019922bb.js";import{F as u}from"./formGroup-001d812a.js";import{A as f}from"./api-e09118d0.js";import"./inputField-b8e11c30.js";import"./button-d24ad0c5.js";const A=()=>{const[r,o]=s.useState(""),[n,l]=s.useState(!1),a=i();s.useEffect(()=>{(async()=>{const e=await f.getAllPayments();a(p(e.data.data[0].payments)),console.log("payment list:",e)})()},[n,a]);const m=e=>{o(e)},c=e=>{l(!0),e===200&&h({title:"Success",icon:"success",text:"Berhasil perbarui pembayaran!",showCancelButton:!1,confirmButtonText:"Lanjut"})};return t("div",{className:"w-full flex flex-col",children:d("div",{className:"bg-white rounded-lg py-6 px-5 shadow-md",children:[t("h5",{className:"font-semibold mb-2 text-lg dark:text-white-light",children:"Data sistem pembayaran"}),t(u,{type:"payment-methods",handleErrorMessage:e=>m(e),handleResponse:e=>c(e),error:r})]})})};export{A as default};
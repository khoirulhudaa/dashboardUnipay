import{r,u as m,h as d,e as u,j as e,a as t,L as h}from"./index-99068ab7.js";import{S as p}from"./alertBox-1fe2cfe0.js";import{F as f}from"./formGroup-aa5310d4.js";import"./inputField-507cd3db.js";import"./api-31714349.js";import"./button-3cac0bb4.js";const j=()=>{const[n,a]=r.useState(""),o=m(),i=d(),l=s=>{a(s)},c=s=>{s===200&&(a(""),p({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success",route:"/auth/signin",navigate:i}))};return r.useEffect(()=>{o(u("Register Boxed"))}),e("div",{children:t("div",{className:"relative md:overflow-hidden flex justify-center items-center min-h-screen bg-cover bg-center",children:[t("div",{className:"panel w-full md:w-[30%] overflow-auto p-[20px] md:p-[30px] min-h-screen max-w-lg w-full",children:[e("h2",{className:"font-bold text-2xl mb-[15px] mt-5",children:"Daftar"}),e("p",{className:"mb-7",children:"Bergabung bersama UnipayDasboard"}),e(f,{error:n,handleErrorMessage:l,handleResponse:c}),t("p",{className:"text-center mt-6",children:["Sudah punya akun ?",e(h,{to:"/auth/signin",className:"font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1",children:"Masuk"})]})]}),e("div",{className:"w-[70%] h-screen overflow-hidden bg-blue-200 hidden md:flex items-center justify-center",children:e("img",{src:"/assets/images/mockup.svg",className:"w-[60%] ml-auto mr-auto"})})]})})};export{j as default};
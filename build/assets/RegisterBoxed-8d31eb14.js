import{r,u as m,h as d,e as u,j as e,a,L as h}from"./index-74c1abb2.js";import{S as p}from"./alertBox-019922bb.js";import{F as f}from"./formGroup-001d812a.js";import"./inputField-b8e11c30.js";import"./api-e09118d0.js";import"./button-d24ad0c5.js";const j=()=>{const[n,t]=r.useState(""),o=m(),i=d(),l=s=>{t(s)},c=s=>{s===200&&(t(""),p({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success",route:"/auth/signin",navigate:i}))};return r.useEffect(()=>{o(u("Register Boxed"))}),e("div",{children:a("div",{className:"relative md:overflow-hidden flex justify-center items-center min-h-screen bg-blue-500 bg-cover bg-center",children:[a("div",{className:"panel w-full md:w-[30%] overflow-auto p-[20px] md:p-[30px] min-h-screen max-w-lg w-full",children:[e("h2",{className:"font-bold text-2xl mb-[15px] mt-5",children:"Daftar"}),e("p",{className:"mb-7",children:"Bergabung bersama UnipayDasboard"}),e(f,{error:n,handleErrorMessage:l,handleResponse:c}),a("p",{className:"text-center mt-6",children:["Sudah punya akun ?",e(h,{to:"/auth/signin",className:"font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1",children:"Masuk"})]})]}),e("div",{className:"w-[70%] h-screen overflow-hidden hidden md:flex items-center justify-center",children:e("img",{src:"/assets/images/logoUnipay.png",className:"w-[60%] ml-auto mr-auto"})})]})})};export{j as default};
import{r,u as m,h as d,e as h,j as e,a as t,L as p}from"./index-09c0444e.js";import{S as u}from"./alertBox-6169a1f1.js";import{F as g}from"./formGroup-22a870cf.js";import"./inputField-940d81c2.js";import"./api-3a278fe4.js";import"./button-5c6213b8.js";const S=()=>{const[n,a]=r.useState(""),o=m(),i=d(),c=s=>{a(s)},l=s=>{s===200&&(a(""),u({text:"Berhasil daftar",title:"Success",confirmButtonText:"Lanjut",showCancelButton:!1,icon:"success",route:"/auth/signin",navigate:i}))};return r.useEffect(()=>{o(h("Register Boxed"))}),e("div",{children:t("div",{className:"relative md:overflow-hidden flex justify-center items-center min-h-screen bg-cover bg-center",children:[e("img",{src:"/assets/images/Card.svg",className:"absolute transform w-[170%] opacity-[0.5]"}),t("div",{className:"panel sm:w-[480px] m-6 max-w-lg w-full",children:[e("h2",{className:"font-bold text-2xl mb-[15px] mt-5",children:"Sign Up"}),e("p",{className:"mb-7",children:"Lets go join with ElectShop"}),e(g,{error:n,handleErrorMessage:c,handleResponse:l}),t("p",{className:"text-center mt-6",children:["Already have an account ?",e(p,{to:"/auth/signin",className:"font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1",children:"Sign In"})]})]})]})})};export{S as default};
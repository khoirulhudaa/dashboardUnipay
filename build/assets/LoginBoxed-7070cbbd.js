import{r as t,u as l,e as i,f as c,a,j as e,L as m}from"./index-c509510f.js";import{F as d}from"./formGroup-735d5bbc.js";import"./inputField-e89656d1.js";import"./api-ee442efb.js";import"./button-41c36fcd.js";const N=()=>{const[n,o]=t.useState(""),r=l();return t.useEffect(()=>{r(i("Login Boxed")),r(c())},[]),a("div",{className:"relative md:overflow-hidden flex justify-center items-center min-h-screen bg-cover bg-center",children:[e("img",{src:"/assets/images/Card.svg",className:"absolute transform w-[170%] opacity-[0.5]"}),a("div",{className:"panel sm:w-[480px] m-6 max-w-lg w-full",children:[e("h2",{className:"font-bold text-2xl mb-[15px] mt-5",children:"Sign In"}),e("p",{className:"mb-7",children:"Enter your email and password to login"}),e(d,{error:n,handleErrorMessage:s=>{o(s)},handleResponse:s=>{console.log(s)},type:"signIn"}),e("div",{className:"flex items-center justify-center mt-6",children:a("p",{className:"text-center",children:["Dont't have an account ?",e(m,{to:"/auth/signup",className:"font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1",children:"Sign Up"})]})})]})]})};export{N as default};

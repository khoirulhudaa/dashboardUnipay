import{s as j,j as e,a as n,F as T,r as i,u as W,b as O,g as F}from"./index-c28607b4.js";import{S as H}from"./alertBox-0434af11.js";import{t as u}from"./toRupiah-980d2178.js";import{u as $,c as q,a as y,b as A,E as Y,I as p}from"./inputField-bcc71084.js";import{A as m}from"./api-b9b00496.js";import{B as f}from"./button-124bb9c8.js";import{s as U}from"./formatDate-90248bb2.js";const V=({onError:l,onResponse:o})=>{const t=j.getState().paymentSlice.balance,s=$({initialValues:{bank_code:"",account_number:0,amount:0,description:""},validationSchema:q({bank_code:y().required(),account_number:A().max(1e16,"Maksimal 16 angka.").min(9999999999,"Minimal 10 angka.").required(),amount:A().min(9999,"Minimal nominal Rp. 10.000.").required(),description:y().required("Tidak boleh kosong!").max(200,"Maksimal 200 karakter.")}),onSubmit:async(r,{resetForm:d})=>{try{const a={channelCode:r.bank_code,accountNumber:r.account_number,amount:r.amount,accountHolderName:"Admin kampus",description:r.description};if(console.log("values:",a),r.amount>t){s.setErrors({amount:`Pencairan maksimal ${u(t)}`});return}const h=await m.disbursementAdmin(a);h.data.status===200?(d(),o(h.data.status)):l(h.data.message)}catch(a){l(a.data.message)}}});return s},z=({onClick:l,balance:o,error:t,handleResponse:s,handleErrorMessage:r})=>{const d=[{label:"Select payment method",value:""},{label:"BCA",value:"ID_BCA"},{label:"BNI",value:"ID_BNI"},{label:"BRI",value:"ID_BRI"},{label:"MANDIRI",value:"ID_MANDIRI"},{label:"BSI",value:"ID_BSI"},{label:"DANA",value:"ID_DANA"},{label:"OVO",value:"ID_OVO"},{label:"GOPAY",value:"ID_GOPAY"},{label:"SHOPEEPAY",value:"ID_SHOPEEPAY"}],a=V({onResponse:s,onError:r});return e("form",{onSubmit:a.handleSubmit,className:"left-0 top-0 z-[9999999] flex items-center justify-center bg-slate-500 bg-opacity-60 w-[100vw] h-[100vh] fixed",children:n("div",{className:'w-[45vw] z-[999999] bg-white fixed rounded-lg bg-slate-100 p-2 overflow-hidden fade-in-down duration-300" shadow-lg h-max',children:[e("div",{onClick:l,className:"absolute right-4 top-4 rounded-full bg-red-500 text-white overflow-hidden cursor-pointer shadow-lg w-[30px] h-[30px] flex justify-center items-center hover:brightnes-[90%] active:scale-[0.98]",children:e(T,{})}),n("div",{className:"w-full mt-[25px] border-b border-b-slate-400 pb-3",children:[t!==""?e(Y,{error:t}):null,n("div",{className:"w-full px-4 py-3",children:[e("div",{className:"mb-5",children:e(p,{value:a.values.bank_code,name:"bank_code",label:"Payment method",typeInput:"select-input",options:d,id:"paymentMethod",onError:a.errors.bank_code,onTouched:!!a.touched.bank_code,onChange:a.handleChange,onBlur:a.handleBlur})}),e("div",{className:"mb-5",children:e(p,{name:"account_number",label:"Account/telephone number",id:"paymentMethod",onTouched:!!a.touched.account_number,onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.account_number})}),e("div",{className:"mb-5",children:e(p,{name:"amount",label:"Amount",type:"number",id:"amount",onError:a.errors.amount,onTouched:!!a.touched.amount,onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.amount})}),e("div",{children:e(p,{name:"description",label:"Description",id:"description",typeInput:"textarea-input",onError:a.errors.description,onTouched:!!a.touched.description,onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.description})})]})]}),n("div",{className:"w-full px-[20px] flex items-center h-max py-[16px] justify-center justify-between",children:[e(f,{text:"Withdraw",type:"submit"}),n("p",{children:[u(o)," - ",u(a.values.amount?a.values.amount:0)]})]})]})})},G=({data:l,columns:o})=>n("table",{className:"items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500",children:[e("thead",{className:"align-bottom",children:e("tr",{children:(o??[]).map((t,s)=>e("th",{className:"px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70",children:t.label},s))})}),e("tbody",{className:`relative ${l&&l.length>0?"":"h-[150px]"}`,children:l&&l.length>0?l==null?void 0:l.map((t,s)=>n("tr",{children:[e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("div",{className:"flex px-2 py-1",children:e("div",{className:"flex flex-col justify-center",children:e("h6",{className:"mb-0 text-sm leading-normal dark:text-white",children:t==null?void 0:t.amount})})})}),e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("div",{className:"flex px-2 py-1",children:e("div",{className:"flex flex-col justify-center",children:e("h6",{className:"mb-0 text-sm leading-normal dark:text-white",children:t==null?void 0:t.channel_code})})})}),e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("p",{className:"mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80",children:t==null?void 0:t.account_number})}),e("td",{className:"p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("span",{className:"text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400",children:U(t==null?void 0:t.date)})})]},s)):n("div",{className:"w-full flex flex-col top-3 justify-center absolute left-[50%] transform translate-x-[-50%] h-full text-center items-center",children:[e("img",{src:"/assets/images/search.png",alt:"icon",className:"w-[80px]"}),e("p",{className:"text-[15px] mt-4",children:"Belum ada pencairan!"})]})})]}),ae=()=>{const[l,o]=i.useState([]),[t,s]=i.useState([]),[r,d]=i.useState(!1),[a,h]=i.useState(0),[g,S]=i.useState(0),[v,B]=i.useState(0),[D,b]=i.useState(!1),[I,_]=i.useState(""),w=W();i.useEffect(()=>{(async()=>{try{const x=await m.getAllUser(),N=await m.getRevenue(),M=await m.getRevenueCanteen(),P=await m.getBalance(),k=await m.getHistoryWDAdmin();o(x.data.data),h(N.data.data[0].revenueAdmin??0),S(M.data.data[0].revenueCanteen??0),B(P.data.data.balance),s(k.data.data),console.log(k.data.data),w(F(N.data.data[0].revenueAdmin??0)),b(!1)}catch(x){console.log(x.message)}})()},[D,w]);const C=c=>{c===200&&(d(!1),b(!0),H({icon:"success",text:"Pencairan berhasil!",showCancelButton:!1}))},R=c=>{_(c)},E=[{label:"Jumlah"},{label:"Kode bank"},{label:"Nomer akun"},{label:"Waktu"}];return n("div",{children:[r?e(z,{handleResponse:c=>C(c),handleErrorMessage:c=>R(c),error:I,balance:a??0,onClick:()=>d(!1)}):null,n("ul",{className:"flex items-center justify-between space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(f,{onClick:()=>b(!0),text:"Muat ulang",typeButton:"with-icon",icon:e(O,{})})}),n("div",{className:"flex items-center",children:[n("p",{children:["SALDO :",e("span",{className:"font-bold ml-2 text-[16px]",children:a?u(a):0})]}),e("div",{className:"w-[1px] h-[40px] bg-slate-300 mx-5"}),e("small",{className:"text-slate-500 text-[14px] mr-5",children:"Min. nominal Rp. 10.000"}),e(f,{disabled:!(a>1e4),text:"Percairan",onClick:()=>d(!0)})]})]}),e("hr",{className:"my-5"}),n("div",{className:"pt-5",children:[n("div",{className:"grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-6 mb-6 text-white",children:[n("div",{className:"panel bg-blue-400",children:[e("div",{className:"flex justify-between",children:e("div",{className:"ltr:mr-1 rtl:ml-1 text-md font-semibold",children:"Pengguna"})}),e("div",{className:"flex items-center mt-5",children:n("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:[" ",l&&l.length>0?l==null?void 0:l.length:0," Akun"]})}),e("div",{className:"flex items-center font-semibold mt-5",children:"Pengguna aktif"})]}),n("div",{className:"panel bg-blue-300",children:[e("div",{className:"flex justify-between",children:e("div",{className:"ltr:mr-1 rtl:ml-1 text-md font-semibold",children:"Total saldo (Seluruh)"})}),e("div",{className:"flex items-center mt-5",children:e("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:v?u(v):0})}),e("div",{className:"flex items-center font-semibold mt-5",children:"Saldo keseluruhan"})]}),n("div",{className:"panel bg-blue-400",children:[e("div",{className:"flex justify-between",children:e("div",{className:"ltr:mr-1 rtl:ml-1 text-md font-semibold",children:"Total saldo (Terbaru)"})}),e("div",{className:"flex items-center mt-5",children:e("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:g?u(g):0})}),e("div",{className:"flex items-center font-semibold mt-5",children:"Saldo kantin"})]})]}),n("div",{className:"mt-[45px]",children:[e("h2",{className:"text-[20px] ml-[2px] mb-5",children:"Riwayat pencairan"}),e(G,{columns:E,data:t})]})]})]})};export{ae as default};

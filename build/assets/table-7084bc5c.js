import{a as l,j as e}from"./index-e918b324.js";import{s as p}from"./formatDate-90248bb2.js";import{t as m}from"./toRupiah-980d2178.js";const N=({data:s,columns:a,update:x,code:n,year:i,classRoom:c,prodi:b})=>l("table",{className:"items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500",children:[e("thead",{className:"align-bottom",children:e("tr",{children:a==null?void 0:a.map((r,t)=>e("th",{className:"py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70",children:r.label},t))})}),e("tbody",{className:`relative ${s&&s.length>0?"":"h-[150px]"}`,children:s&&s.length>0?(()=>{const r=s.filter(t=>{if(!n&&!i&&!c)return!0;{const o=!n||t.code===n,d=!i||t.year===i,h=!c||t.classRoom.toLowerCase().includes(c.toLowerCase());return o&&d&&h}});return r.length===0?e("div",{className:"flex flex-col items-center justify-center text-center h-[150px]",children:l("div",{className:"w-full flex flex-col top-3 justify-center absolute left-[50%] transform translate-x-[-50%] h-full text-center items-center",children:[e("img",{src:"/assets/images/search.png",alt:"icon",className:"w-[80px]"}),e("p",{className:"text-[15px] mt-4",children:"Data tidak ditemukan!"})]})}):r==null?void 0:r.map((t,o)=>l("tr",{children:[e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("div",{className:"flex px-2 py-1",children:e("div",{className:"flex flex-col justify-center",children:e("h6",{className:"mb-0 text-sm leading-normal dark:text-white",children:t==null?void 0:t.NIM})})})}),e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("div",{className:"flex px-2 py-1",children:e("div",{className:"flex flex-col justify-center",children:e("h6",{className:"mb-0 text-sm leading-normal dark:text-white",children:t==null?void 0:t.fullName})})})}),e("td",{className:"p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("p",{className:"mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80",children:p(t==null?void 0:t.date)})}),e("td",{className:"p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("span",{className:"text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400",children:t==null?void 0:t.year})}),e("td",{className:"p-2 text-center text-red-500 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("span",{className:"text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400",children:m(t==null?void 0:t.amount)})}),e("td",{className:"p-2 text-center text-red-500 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent",children:e("span",{className:"text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400",children:t==null?void 0:t.code})})]},o))})():l("div",{className:"w-full flex flex-col top-3 justify-center absolute left-[50%] transform translate-x-[-50%] h-full text-center items-center",children:[e("img",{src:"/assets/images/search.png",alt:"icon",className:"w-[80px]"}),e("p",{className:"text-[15px] mt-4",children:"Belum ada data!"})]})})]});export{N as T};

import{s as S,r as f,u as k,h as v,k as K,l as x,a as l,j as a}from"./index-c509510f.js";import{u as b,c as _,b as c,a as h,E as y,I as i}from"./inputField-e89656d1.js";import{A as g}from"./api-ee442efb.js";import{B as p}from"./button-41c36fcd.js";const B=({onError:d,onResponse:u})=>{const t=S.getState().paymentSlice.payment[0],m=b({initialValues:{Semesteran:0,UP:0,UAS:0,UTS:0,Sertifikasi:0,PKKMB:0,Kantin:0,note_Semesteran:"",note_UAS:"",note_UTS:"",note_Sertifikasi:"",note_PKKMB:"",note_Kantin:"",note_UP:""},validationSchema:_({Semesteran:c().min(9999,"Minimal nominal Rp. 10.000").max(9999999,"Maksimal nominal Rp. 9.999.999").notRequired(),UP:c().min(9999,"Minimal nominal Rp. 10.000").max(9999999,"Maksimal nominal Rp. 9.999.999").notRequired(),UAS:c().min(9999,"Minimal nominal Rp. 10.000").max(9999999,"Maksimal nominal Rp. 9.999.999").notRequired(),UTS:c().min(9999,"Minimal nominal Rp. 10.000").max(9999999,"Maksimal nominal Rp. 9.999.999").notRequired(),Sertifikasi:c().min(9999,"Minimal nominal Rp. 10.000").max(9999999,"Maksimal nominal Rp. 9.999.999").notRequired(),PKKMB:c().min(9999,"Minimal nominal Rp. 10.000").max(9999999,"Maksimal nominal Rp. 9.999.999").notRequired(),Kantin:c().min(9999,"Minimal nominal Rp. 10.000").max(9999999,"Maksimal nominal Rp. 9.999.999").notRequired()}),onSubmit:async n=>{try{const r=[{type_payment:"Semesteran",minimum_payment:n.Semesteran,note:n.note_Semesteran},{type_payment:"UP",minimum_payment:n.UP,note:n.note_UP},{type_payment:"UAS",minimum_payment:n.UAS,note:n.note_UAS},{type_payment:"UTS",minimum_payment:n.UTS,note:n.note_UTS},{type_payment:"PKKMB",minimum_payment:n.PKKMB,note:n.note_PKKMB},{type_payment:"Kantin",minimum_payment:n.Kantin,note:n.note_Kantin},{type_payment:"Sertifikasi",minimum_payment:n.Sertifikasi,note:n.note_Sertifikasi}],e=await g.updatePaymentMethodByShop(r);e.data.status===200?u(e.data.status):d(e.data.message)}catch(r){d(r.data.message)}}});return f.useEffect(()=>{m.setValues({Semesteran:t?t[4].minimum_payment:0,UP:t?t[2].minimum_payment:0,UAS:t?t[0].minimum_payment:0,UTS:t?t[5].minimum_payment:0,Sertifikasi:t?t[3].minimum_payment:0,PKKMB:t?t[6].minimum_payment:0,Kantin:t?t[1].minimum_payment:0,note_Semesteran:t?t[4].note_payment:"",note_UP:t?t[2].note_payment:"",note_UAS:t?t[0].note_payment:"",note_UTS:t?t[5].note_payment:"",note_PKKMB:t?t[6].note_payment:"",note_Sertifikasi:t?t[3].note_payment:"",note_Kantin:t?t[1].note_payment:""})},[t]),m},N=({onError:d})=>{const u=k(),t=v();return b({initialValues:{email_admin:"",password:""},validationSchema:_({email_admin:h().email("Invalid email address").required("This field is required."),password:h().min(6,"Must be at least 6 characters").required("This field is required.")}),onSubmit:async(n,{resetForm:r})=>{try{const e=await g.checkAccountadmin(n);e.data.status===401||e.data.status===404?d(e.data.message):(u(K(e.data.data)),u(x(e.data.token)),r(),t("/"))}catch(e){d(e.message)}}})},w=({onError:d,onResponse:u})=>{const m=new AbortController().signal;return b({initialValues:{admin_name:"",email_admin:"",password:"",telephone_admin:""},validationSchema:_({admin_name:h().max(15,"Maksimal 15 karakter").required("Tidak boleh kosong!"),email_admin:h().email("Format email salah").required("Tidak boleh kosong!"),password:h().min(6,"Minimal 6 karakter").required("Tidak boleh kosong!"),telephone_admin:h().max(13,"Maksimal 13 karakter").required("Tidak boleh kosong!")}),onSubmit:async(r,{resetForm:e})=>{try{if(m.aborted)return;const s=await g.createAccountadmin(r);s.data.status===200?(u(s.data.status),e()):d(s.data.message)}catch(s){d(s.message)}}})},T=({type:d,handleErrorMessage:u,handleResponse:t,error:m})=>{const n=w({onError:u,onResponse:t}),r=N({onError:u}),e=B({onError:u,onResponse:t});switch(d){case"signIn":return l("form",{className:"space-y-5",onSubmit:r.handleSubmit,children:[m!==""?a(y,{error:m}):null,a("div",{children:a(i,{value:r.values.email_admin,name:"email_admin",label:"email",onError:r.errors.email_admin,onTouched:!!r.touched.email_admin,onChange:r.handleChange,onBlur:r.handleBlur,placeholder:"Enter Email"})}),a("div",{children:a(i,{value:r.values.password,name:"password",label:"password",type:"password",onError:r.errors.password,onTouched:!!r.touched.password,onChange:r.handleChange,onBlur:r.handleBlur,placeholder:"Enter Password"})}),a("button",{type:"submit",className:"btn btn-primary w-full",children:"SIGN IN"})]});case"payment-methods":return l("form",{onSubmit:e.handleSubmit,children:[m!==""?a(y,{error:m}):null,l("div",{className:"w-full flex flex-col items-center justify-between",children:[l("div",{className:"w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4",children:[a("img",{src:"/assets/images/building.png",alt:"icon",className:"w-[8%] relative left-[-10px] mb-5"}),a(i,{label:"Nominal pembayaran semesteran",name:"Semesteran",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.Semesteran,onError:e.errors.Semesteran,onTouched:e.touched.Semesteran}),a("div",{className:"my-5",children:a(i,{id:"note_Semesteran",label:"Ketarangan",typeInput:"ckEditor",datackEditor:e.values.note_Semesteran||"",onChangeCKEditor:(s,o)=>{e.setFieldValue("note_Semesteran",o.getData())}})}),a("div",{className:"h-3"}),a(p,{text:"Simpan",typeButton:"submit"})]}),l("div",{className:"w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4",children:[a("img",{src:"/assets/images/UP.png",alt:"icon",className:"w-[8%] relative left-[-10px] mb-5"}),a(i,{label:"Nominal pembayaran ujian perbaikan",name:"UP",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.UP,onError:e.errors.UP,onTouched:e.touched.UP}),a("div",{className:"my-5",children:a(i,{id:"note_UP",label:"Ketarangan",typeInput:"ckEditor",datackEditor:e.values.note_UP||"",onChangeCKEditor:(s,o)=>{e.setFieldValue("note_UP",o.getData())}})}),a("div",{className:"h-3"}),a(p,{text:"Simpan",typeButton:"submit"})]})]}),l("div",{className:"w-full flex flex-col items-center justify-between",children:[l("div",{className:"w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4",children:[a("img",{src:"/assets/images/test.png",alt:"icon",className:"w-[8%] relative left-[-10px] mb-5"}),a(i,{label:"Nominal pembayaran UAS",name:"UAS",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.UAS,onError:e.errors.UAS,onTouched:e.touched.UAS}),a("div",{className:"my-5",children:a(i,{id:"note_UAS",label:"Ketarangan",typeInput:"ckEditor",datackEditor:e.values.note_UAS||"",onChangeCKEditor:(s,o)=>{e.setFieldValue("note_UAS",o.getData())}})}),a("div",{className:"h-3"}),a(p,{text:"Simpan",typeButton:"submit"})]}),l("div",{className:"w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4",children:[a("img",{src:"/assets/images/test.png",alt:"icon",className:"w-[8%] relative left-[-10px] mb-5"}),a(i,{label:"Nominal pembayaran UTS",name:"UTS",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.UTS,onError:e.errors.UTS,onTouched:e.touched.UTS}),a("div",{className:"my-5",children:a(i,{id:"note_UTS",label:"Ketarangan",typeInput:"ckEditor",datackEditor:e.values.note_UTS||"",onChangeCKEditor:(s,o)=>{e.setFieldValue("note_UTS",o.getData())}})}),a("div",{className:"h-3"}),a(p,{text:"Simpan",typeButton:"submit"})]})]}),l("div",{className:"w-full flex flex-col items-center justify-between",children:[l("div",{className:"w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4",children:[a("img",{src:"/assets/images/sertification.png",alt:"icon",className:"w-[8%] relative left-[-10px] mb-5"}),a(i,{label:"Nominal pembayaran sertifikasi",name:"Sertifikasi",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.Sertifikasi,onError:e.errors.Sertifikasi,onTouched:e.touched.Sertifikasi}),a("div",{className:"my-5",children:a(i,{id:"note_Sertifikasi",label:"Ketarangan",typeInput:"ckEditor",datackEditor:e.values.note_Sertifikasi||"",onChangeCKEditor:(s,o)=>{e.setFieldValue("note_Sertifikasi",o.getData())}})}),a("div",{className:"h-3"}),a(p,{text:"Simpan",typeButton:"submit"})]}),l("div",{className:"w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4",children:[a("img",{src:"/assets/images/pkkmb.png",alt:"icon",className:"w-[8%] relative left-[-10px] mb-5"}),a(i,{label:"Nominal pembayaran PKKMB",name:"PKKMB",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.PKKMB,onError:e.errors.PKKMB,onTouched:e.touched.PKKMB}),a("div",{className:"my-5",children:a(i,{id:"note_PKKMB",label:"Ketarangan",typeInput:"ckEditor",datackEditor:e.values.note_PKKMB||"",onChangeCKEditor:(s,o)=>{e.setFieldValue("note_PKKMB",o.getData())}})}),a("div",{className:"h-3"}),a(p,{text:"Simpan",typeButton:"submit"})]})]}),a("div",{className:"w-full flex items-center justify-between",children:l("div",{className:"w-full my-4 h-max border border-slate-400 rounded-[12px] px-6 py-4",children:[a("img",{src:"/assets/images/canteen.png",alt:"icon",className:"w-[8%] relative left-[-10px] mb-5"}),a(i,{label:"Nominal pembayaran kantin",name:"Kantin",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.Kantin,onError:e.errors.Kantin,onTouched:e.touched.Kantin}),a("div",{className:"my-5",children:a(i,{id:"note_Kantin",label:"Ketarangan",typeInput:"ckEditor",datackEditor:e.values.note_Kantin||"",onChangeCKEditor:(s,o)=>{e.setFieldValue("note_Kantin",o.getData())}})}),a("div",{className:"h-3"}),a(p,{text:"Simpan",typeButton:"submit"})]})})]});default:return l("form",{className:"space-y-5",onSubmit:n.handleSubmit,children:[m!==""?a(y,{error:m}):null,a("div",{children:a(i,{value:n.values.admin_name,name:"admin_name",label:"seller name",id:"sellerName",onError:n.errors.admin_name,onTouched:!!n.touched.admin_name,onChange:n.handleChange,onBlur:n.handleBlur,placeholder:"Enter Your Name"})}),a("div",{children:a(i,{value:n.values.email_admin,name:"email_admin",label:"email",id:"email",onError:n.errors.email_admin,onTouched:!!n.touched.email_admin,onChange:n.handleChange,onBlur:n.handleBlur,placeholder:"Enter Email"})}),a("div",{children:a(i,{value:n.values.password,name:"password",id:"password",label:"password",type:"password",onError:n.errors.password,onTouched:!!n.touched.password,onChange:n.handleChange,onBlur:n.handleBlur,placeholder:"Enter Password"})}),a("div",{children:a(i,{value:n.values.telephone_admin,name:"telephone_admin",label:"Number Telephone",id:"telephone",onError:n.errors.telephone_admin,onTouched:!!n.touched.telephone_admin,onChange:n.handleChange,onBlur:n.handleBlur,placeholder:"Your number"})}),a("button",{type:"submit",className:"btn btn-primary w-full",children:"Daftar"})]})}};export{T as F};
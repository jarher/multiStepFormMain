import{r as c,D as T,U as I,i,j as d}from"./index-O0L1SJXi.js";import{p as N,H as j}from"./pageTransition-mZZGaIoB.js";import{F as y}from"./Form-AgrPHS4K.js";import{B as A}from"./ButtonsContainer-l5R4kivf.js";function t(e,o,r){return e.addonsSelected[o][r]}function F(){const{userData:e,setNavIndex:o}=c.useContext(T),{isFilledForm:r}=c.useContext(I),[s,x]=c.useState(0),[l,n]=c.useState(!1),[p,S]=c.useState(!1),[h,m]=c.useState(t(e,s,0).isSelected),[u,k]=c.useState(t(e,s,1).isSelected),[C,f]=c.useState(t(e,s,2).isSelected),g=[{nameClass:`addonsWrapper ${h?"elementSelected":""}`,type:"checkbox",name:"checkbox1",id:"checkbox1",labelText:t(e,s,0).name,ariaText:t(e,s,0).ariaText,isLegend:!0,legend:{description:t(e,s,0).description,price:t(e,s,0).price},defaultChecked:t(e,s,0).isSelected,helperText:{isValid:!1},onClick:a=>{t(e,0,0).isSelected=a.target.checked,t(e,1,0).isSelected=a.target.checked,n(i(e.addonsSelected[0]&&e.addonsSelected[1])),m(a.target.checked)}},{nameClass:`addonsWrapper ${u?"elementSelected":""}`,type:"checkbox",name:"checkbox2",id:"chekcbox2",labelText:t(e,s,1).name,ariaText:t(e,s,1).ariaText,isLegend:!0,legend:{description:t(e,s,1).description,price:t(e,s,1).price},defaultChecked:t(e,s,1).isSelected,helperText:{isValid:!1},onClick:a=>{t(e,0,1).isSelected=a.target.checked,t(e,1,1).isSelected=a.target.checked,n(i(e.addonsSelected[0]&&e.addonsSelected[1])),k(a.target.checked)}},{nameClass:`addonsWrapper ${C?"elementSelected":""}`,type:"checkbox",name:"checkbox3",id:"username",labelText:t(e,s,2).name,ariaText:t(e,s,2).ariaText,isLegend:!0,legend:{description:t(e,s,2).description,price:t(e,s,2).price},defaultChecked:t(e,s,2).isSelected,helperText:{isValid:!1},onClick:a=>{t(e,0,2).isSelected=a.target.checked,t(e,1,2).isSelected=a.target.checked,n(i(e.addonsSelected[0]&&e.addonsSelected[1])),f(a.target.checked)}}],b=[{url:"/plan",text:"Go Back",classNm:"btnPrev",ariaText:"Return to plan section",isActive:!0},{url:l?"/summary":"",text:"Next Step",classNm:"btnNext",ariaText:"Go to summary section",isActive:l}];return c.useEffect(()=>{o(2),n(i(e.addonsSelected[0]&&e.addonsSelected[1])),r(),x(e.timePlan==="Monthly"?0:1),N(S)},[]),c.useEffect(()=>{localStorage.setItem("userData",JSON.stringify(e))},[l]),d.jsxs("section",{className:`addonsSection ${p?"":"noVisible"}`,children:[d.jsxs("div",{className:"container",children:[d.jsx(j,{title:"Pick add-ons",description:"Add-ons help enhance gamin experience."}),d.jsx(y,{data:g})]}),d.jsx(A,{data:b})]})}export{F as default};
import{r as s,D as d,j as e,U as f}from"./index-Ckzx-o10.js";import{p as N,H as S}from"./pageTransition-E1MwJ03W.js";import{B as j}from"./ButtonsContainer-xXE8qxYn.js";function v({cardData:a,dataPlan:l,cardIndex:n,setCardIndex:r,timePlan:t,index:c}){const{userData:o}=s.useContext(d),i=l[c];return e.jsxs("div",{className:`card ${n===c?"elementSelected":""}`,onClick:()=>{i.isSelected=!0,o.planSelected=i,r(c)},children:[e.jsx("img",{src:a.image,alt:"card-icon",className:"cardIcon"}),e.jsxs("div",{className:"cardTextWrapper",children:[e.jsx("span",{className:"cardTitle",children:a.name}),e.jsx("span",{className:"cardPrice",children:a.price}),t==="Yearly"&&e.jsx("span",{className:"cardDescription",children:"2 months free"})]})]})}function g({timePlan:a,changeTimePlan:l}){const{userData:n,data:r}=s.useContext(d);return s.useEffect(()=>{const t=n.planSelected.planIndex;n.planSelected=a==="Monthly"?r.monthly.plan[t]:r.yearly.plan[t],n.planSelected.isSelected=!0},[a]),e.jsxs("form",{className:"inputRangeWrapper",children:[e.jsx("span",{className:`planName ${a==="Monthly"?"planSelected":""}`,children:"Monthly"}),e.jsx("input",{type:"range",name:"switchPlanInput",id:"switchPlanInput",min:"0",max:"1","aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":0,defaultValue:a==="Monthly"?0:1,onChange:t=>{l(t.target.value==="0"?"Monthly":"Yearly")}}),e.jsx("span",{className:`planName ${a==="Yearly"?"planSelected":""}`,children:"Yearly"})]})}function P(){const{userData:a,data:l,setNavIndex:n}=s.useContext(d),{isFilledForm:r}=s.useContext(f),[t,c]=s.useState(a.timePlan),[o,i]=s.useState(a.planSelected.planIndex),[m,x]=s.useState(!1),p=t==="Monthly"?l.monthly.plan:l.yearly.plan,h=[{url:"/",text:"Go Back",classNm:"btnPrev",ariaText:"Return to user info form",isActive:!0},{url:"/addons",text:"Next Step",classNm:"btnNext",ariaText:"Goto user Add-ons section",isActive:!0}];return s.useEffect(()=>{n(1),r(),N(x)},[]),s.useEffect(()=>{a.timePlan=t,localStorage.setItem("userData",JSON.stringify(a))},[t,o]),e.jsxs("section",{className:`planSection ${m?"":"noVisible"}`,children:[e.jsxs("div",{className:"container",children:[e.jsx(S,{title:"Select your plan",description:"You have the option of monthly o yearly billing."}),e.jsx("div",{className:"cardWrapper",children:p.map((y,u)=>e.jsx(v,{cardData:y,dataPlan:p,cardIndex:o,setCardIndex:i,timePlan:t,index:u},u))}),e.jsx(g,{timePlan:t,changeTimePlan:c})]}),e.jsx(j,{data:h})]})}export{P as default};
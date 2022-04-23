import m from"./Progress.b454c5ce.js";import{f as h}from"./index.6e03100f.js";import{_ as v,e as f,o as i,c as d,a as s,f as g,g as y,t as a,F as x,r as S,p as b,h as k,d as _,n as w}from"./app.449d4929.js";const C={components:{Progress:m},data(){return{textMap:{easy:"\u7B80\u5355",medium:"\u4E2D\u7B49",hard:"\u56F0\u96BE"},list:[]}},computed:{resolvedAmount(){return this.list.reduce((e,o)=>e+o.resolved,0)},amount(){return this.list.reduce((e,o)=>e+o.amount,0)}},methods:{initData(e){const{numAcceptedQuestions:o,numUntouchedQuestions:l}=e;this.list=o.map((u,r)=>{const{difficulty:n,count:c}=u,t=l[r];return{type:n.toLowerCase(),resolved:c,amount:t.count}})}},mounted(){h("https://leetcode-api-new.herokuapp.com/progress/qaqljj").then(e=>{this.initData(e.userProfileUserQuestionProgress)})}},p=e=>(b("data-v-2e818011"),e=e(),k(),e),P={class:"card"},I=p(()=>s("div",{class:"card-title"},"\u89E3\u9898\u6570\u91CF",-1)),Q={class:"card-content"},A={class:"progress-round-container"},B={class:"text-xl font-bold"},D=p(()=>s("div",{class:"text-sm text-gray-500"},"\u89E3\u51B3\u95EE\u9898",-1)),L={class:"progress-list"},$={class:"progress-item-header flex items-center"},j={class:"text-sm"},q={class:"ml-8 text-sm"};function z(e,o,l,u,r,n){const c=f("Progress");return i(),d("div",P,[I,s("div",Q,[s("div",A,[g(c,null,{default:y(()=>[s("div",B,a(n.resolvedAmount),1),D]),_:1})]),s("div",L,[(i(!0),d(x,null,S(r.list,t=>(i(),d("div",{class:"progress-item",key:t.type},[s("div",$,[s("div",j,a(r.textMap[t.type]),1),s("div",q,a(t.resolved)+" / "+a(t.amount),1)]),s("div",{class:_(["progress-item-bar",`progress-item-bar--${t.type}`])},[s("div",{class:_(["progress-item-bar__inner",`progress-item-bar__inner--${t.type}`]),style:w({width:t.resolved/t.amount*100+"%"})},null,6)],2)]))),128))])])])}var U=v(C,[["render",z],["__scopeId","data-v-2e818011"],["__file","Summary.vue"]]);export{U as default};

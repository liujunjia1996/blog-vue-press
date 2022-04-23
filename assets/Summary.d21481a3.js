import m from"./Progress.e41c49de.js";import{f as h}from"./index.6e03100f.js";import{_ as v,e as g,o as c,c as i,a as s,f,g as y,t as n,F as x,r as S,p as b,h as k,d as _,n as w}from"./app.e93af481.js";const C={components:{Progress:m},data(){return{textMap:{easy:"\u7B80\u5355",medium:"\u4E2D\u7B49",hard:"\u56F0\u96BE"},list:[]}},computed:{resolvedAmount(){return this.list.reduce((e,o)=>e+o.resolved,0)},amount(){return this.list.reduce((e,o)=>e+o.amount,0)}},methods:{initData(e){const{numAcceptedQuestions:o,numUntouchedQuestions:l}=e;this.list=o.map((u,r)=>{const{difficulty:a,count:d}=u,t=l[r];return{type:a.toLowerCase(),resolved:d,amount:t.count}})}},mounted(){h("https://leetcode-api-new.herokuapp.com/progress/renlindong").then(e=>{this.initData(e.userProfileUserQuestionProgress)})}},p=e=>(b("data-v-424d3646"),e=e(),k(),e),P={class:"card"},I=p(()=>s("div",{class:"card-title"},"\u89E3\u9898\u6570\u91CF",-1)),Q={class:"card-content"},A={class:"progress-round-container"},B={class:"text-xl font-bold"},D=p(()=>s("div",{class:"text-sm text-gray-500"},"\u89E3\u51B3\u95EE\u9898",-1)),L={class:"progress-list"},$={class:"progress-item-header flex items-center"},z={class:"text-sm"},F={class:"ml-8 text-sm"};function M(e,o,l,u,r,a){const d=g("Progress");return c(),i("div",P,[I,s("div",Q,[s("div",A,[f(d,null,{default:y(()=>[s("div",B,n(a.resolvedAmount),1),D]),_:1})]),s("div",L,[(c(!0),i(x,null,S(r.list,t=>(c(),i("div",{class:"progress-item",key:t.type},[s("div",$,[s("div",z,n(r.textMap[t.type]),1),s("div",F,n(t.resolved)+" / "+n(t.amount),1)]),s("div",{class:_(["progress-item-bar",`progress-item-bar--${t.type}`])},[s("div",{class:_(["progress-item-bar__inner",`progress-item-bar__inner--${t.type}`]),style:w({width:t.resolved/t.amount*100+"%"})},null,6)],2)]))),128))])])])}var E=v(C,[["render",M],["__scopeId","data-v-424d3646"],["__file","Summary.vue"]]);export{E as default};

import m from"./Progress.62332d90.js";import{f as h}from"./index.6e03100f.js";import{_ as v,e as g,o as d,c as i,a as s,f,g as y,t as a,F as x,r as S,p as b,h as k,d as p,n as w}from"./app.a0981e70.js";const C={components:{Progress:m},data(){return{textMap:{easy:"\u7B80\u5355",medium:"\u4E2D\u7B49",hard:"\u56F0\u96BE"},list:[]}},computed:{resolvedAmount(){return this.list.reduce((e,o)=>e+o.resolved,0)},amount(){return this.list.reduce((e,o)=>e+o.amount,0)}},methods:{initData(e){const{numAcceptedQuestions:o,numUntouchedQuestions:l}=e;this.list=o.map((u,r)=>{const{difficulty:n,count:c}=u,t=l[r];return{type:n.toLowerCase(),resolved:c,amount:t.count}})}},mounted(){h("https://leetcode-api-new.herokuapp.com/progress/qaqljj").then(e=>{this.initData(e.userProfileUserQuestionProgress)})}},_=e=>(b("data-v-487bc459"),e=e(),k(),e),P={class:"card"},I=_(()=>s("div",{class:"card-title"},"\u89E3\u9898\u6570\u91CF",-1)),Q={class:"card-content"},A={class:"progress-round-container"},B={class:"text-xl font-bold"},D=_(()=>s("div",{class:"text-sm text-gray-500"},"\u89E3\u51B3\u95EE\u9898",-1)),L={class:"progress-list"},$={class:"progress-item-header"};function j(e,o,l,u,r,n){const c=g("Progress");return d(),i("div",P,[I,s("div",Q,[s("div",A,[f(c,null,{default:y(()=>[s("div",B,a(n.resolvedAmount),1),D]),_:1})]),s("div",L,[(d(!0),i(x,null,S(r.list,t=>(d(),i("div",{class:"progress-item",key:t.type},[s("div",$,[s("span",null,a(r.textMap[t.type])+"\xA0 ",1),s("span",null,a(t.resolved)+" / "+a(t.amount),1)]),s("div",{class:p(["progress-item-bar",`progress-item-bar--${t.type}`])},[s("div",{class:p(["progress-item-bar__inner",`progress-item-bar__inner--${t.type}`]),style:w({width:t.resolved/t.amount*100+"%"})},null,6)],2)]))),128))])])])}var M=v(C,[["render",j],["__scopeId","data-v-487bc459"],["__file","Summary.vue"]]);export{M as default};

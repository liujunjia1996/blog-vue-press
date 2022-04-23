import{f as h}from"./index.6e03100f.js";import{M as f,d as v}from"./Month.36defa1c.js";import{_ as y,e as T,o as l,c as _,a as i,t as m,F as b,r as k,i as p,j as x}from"./app.e93af481.js";const M={components:{Month:f},data(){return{loading:!1,streak:0,totalActiveDays:0,submitList:[],timeline:[]}},computed:{amount(){return this.submitList.reduce((t,n)=>t+n.count,0)}},methods:{initMonths(){let t=0;const n=[],c=v();for(;t<=12;){const e=c.subtract(t,"month");e.daysInMonth();let o=e.startOf("month"),s=e.endOf("month");t===0&&(s=e),t===12&&(o=e),n.unshift({startTime:o,endTime:s}),t++}const d=[...n].reverse(),a=[];d.reduce((e,o)=>{const{startTime:s,endTime:r}=o,u=(r.date()-s.date()+1+e)%7;return a.push({startTime:s.valueOf(),endTime:r.valueOf(),indent:7-u}),u},0),this.timeline=a.reverse()},initRecentData(t){},initCalendarData(t){const{userCalendar:n}=t,{streak:c,totalActiveDays:d,submissionCalendar:a}=n;this.streak=c,this.totalActiveDays=d;const e=JSON.parse(a);this.submitList=Object.keys(e).map(o=>({time:o,count:e[o]}))}},mounted(){this.initMonths(),Promise.all([h("https://leetcode-api-new.herokuapp.com/recentSubmit/renlindong"),h("https://leetcode-api-new.herokuapp.com/calendar/renlindong")]).then(([t,n])=>{this.initRecentData(t),this.initCalendarData(n)})}},D={class:"calendar"},L={class:"flex"},C={class:"text-base"},g=p(" \u8FC7\u53BB\u4E00\u5E74\u4E00\u5171\u63D0\u4EA4\u4E86 "),w={class:"font-bold text-2xl"},O=p(" \u6B21 "),A={class:"flex ml-auto"},B={class:"flex mt-4"};function S(t,n,c,d,a,e){const o=T("Month");return l(),_("div",D,[i("div",L,[i("div",C,[g,i("span",w,m(e.amount),1),O]),i("div",A,[i("div",null," \u7D2F\u8BA1\u63D0\u4EA4\uFF1A"+m(a.totalActiveDays),1),i("div",null," \u8FDE\u7EED\u63D0\u4EA4\uFF1A"+m(a.streak),1)])]),i("div",B,[(l(!0),_(b,null,k(a.timeline,(s,r)=>(l(),x(o,{class:"mr-4",key:r,showMonth:r>=1,indent:s.indent,startTime:s.startTime,endTime:s.endTime,days:s.days,submitList:a.submitList},null,8,["showMonth","indent","startTime","endTime","days","submitList"]))),128))])])}var V=y(M,[["render",S],["__file","index.vue"]]);export{V as default};

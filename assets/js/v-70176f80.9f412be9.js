"use strict";(self.webpackChunkblog_vue_press=self.webpackChunkblog_vue_press||[]).push([[126],{9388:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-70176f80",path:"/JDK/Array.asList%20%E5%92%8C%20List.of%20%E7%9A%84%E5%8C%BA%E5%88%AB.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"可变性",slug:"可变性",children:[]},{level:2,title:"对 null 的处理",slug:"对-null-的处理",children:[]},{level:2,title:"副作用",slug:"副作用",children:[]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"JDK/Array.asList 和 List.of 的区别.md",git:{updatedTime:1637925824e3,contributors:[{name:"liujunjia",email:"43411944+liujunjia1996@users.noreply.github.com",commits:1}]}}},2530:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h2 id="可变性" tabindex="-1"><a class="header-anchor" href="#可变性" aria-hidden="true">#</a> 可变性</h2><p>Arrays.asList 返回部分可变的 list，而 List.of 返回的是完全不可变的 list，即 asList 不能增删，可以更新；of 不能增删和更新</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlist<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlist2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// UnsupportedOperationException</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="对-null-的处理" tabindex="-1"><a class="header-anchor" href="#对-null-的处理" aria-hidden="true">#</a> 对 null 的处理</h2><p>Arrays.asList 入参支持存入<code>null</code>，而 List.of 不行；类似地，Arrays.asList 的 contains 方法支持传入 null，而 List.of 不行</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// 异常：NullPointerException</span>\n<span class="token comment">// idea 也会报警告： Passing &#39;null&#39; argument to parameter annotated as @NotNull </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="副作用" tabindex="-1"><a class="header-anchor" href="#副作用" aria-hidden="true">#</a> 副作用</h2><p>Arrays.asList 原数组的修改会影响新 List，而 List.of 不会</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\narray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 [1, 10, 3]</span>\n<span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>array2<span class="token punctuation">)</span><span class="token punctuation">;</span>\narray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 [1, 2, 3]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这三个最应该警惕的是第三点，因为第三点在 idea 上没有任何的警告</p><p>至于使用上，个人比较喜欢 List.of ，因为 Arrays.asList 返回的 List 是它自己的内部类，虽然可以修改，但是功能不完全（比如不能 add），不纯粹，对于要得到可修改的 List 的需求，我会选择 <code>new ArrayList&lt;&gt;(List.of(1, 2, 3))</code>手动创建一个正常的 ArrayList</p><p>但是，List.of 属于 jdk11，jdk11 在团队内部是没有问题的，但是当我提供 sdk 给别的团队用时，尽量就不要用 List.of 了，因为有的团队还在跑 jdk8 （题外话，虽然本地的 jdk 是 11 的，但是可以在 idea 上为某个项目设置语法级别，这样就可以用 jdk11 开发出 jdk8 可用的 sdk 了）</p>',13),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);
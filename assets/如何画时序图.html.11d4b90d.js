import{_ as e,o as a,c as t,d}from"./app.f6bfe801.js";const r={},h=d('<p>时序图(Sequence diagram)描述对象之间交互的时间顺序。</p><h1 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h1><p>表示一个对象，如客户端 a，服务端 b，数据库 c，某个中间件 d。</p><h1 id="lifeline" tabindex="-1"><a class="header-anchor" href="#lifeline" aria-hidden="true">#</a> Lifeline</h1><p>从对象引出向下延伸的虚线，表示时序图存在的时间轴。</p><h1 id="focus-of-control" tabindex="-1"><a class="header-anchor" href="#focus-of-control" aria-hidden="true">#</a> Focus of Control</h1><p>即控制焦点，生命线上的矩形块，表示某个对象是否处于活跃状态。</p><h1 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h1><p>Message 分为：</p><ul><li>Self Message：实线实箭头指向自己</li><li>Sync Message：实线实箭头</li><li>Async Message：实线虚箭头</li><li>Reply Message：虚线虚箭头</li></ul><h1 id="combined-fragment" tabindex="-1"><a class="header-anchor" href="#combined-fragment" aria-hidden="true">#</a> Combined Fragment</h1><table><thead><tr><th>名称</th><th>作用</th><th>描述</th></tr></thead><tbody><tr><td>alt（alternatives）</td><td>选择</td><td>包含一个片段列表，这个片段列表有备选的消息序列，每次只能走一个消息序列</td></tr><tr><td>opt（option)</td><td>选项</td><td>包含一个可能会发生的消息序列</td></tr><tr><td>loop（iteration）</td><td>重复</td><td>包含一个可以重复的消息序列</td></tr><tr><td>par（parallel）</td><td>并行</td><td>包含一个可以并行的消息序列</td></tr><tr><td>break（break）</td><td>中断</td><td>如果执行了此部分则放弃了序列的其他部分的执行，可用于中断 loop 片段</td></tr></tbody></table><h1 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h1><p><img src="https://gitee.com/qaqljj/pic/raw/master/img/20210617235139.png" alt=""></p><h1 id="各种图的区别" tabindex="-1"><a class="header-anchor" href="#各种图的区别" aria-hidden="true">#</a> 各种图的区别</h1><h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h2><p>描述交互逻辑</p><h2 id="泳道图" tabindex="-1"><a class="header-anchor" href="#泳道图" aria-hidden="true">#</a> 泳道图</h2><p>描述跨模块的交互逻辑</p><h2 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图" aria-hidden="true">#</a> 时序图</h2><p>描述时序逻辑</p><h2 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图" aria-hidden="true">#</a> 甘特图</h2><p>描述项目或人的先后顺序与持续时间</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p>https://juejin.cn/post/6923717340127297549</p>',25),i=[h];function n(s,c){return a(),t("div",null,i)}const l=e(r,[["render",n],["__file","如何画时序图.html.vue"]]);export{l as default};

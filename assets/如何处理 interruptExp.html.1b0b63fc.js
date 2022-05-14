import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{b as n}from"./app.7a7684da.js";const r={},a=n(`<h1 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h1><p>\u6211\u5728\u7F16\u5199\u4E00\u4E2A sdk \u65F6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E2A\u7528\u4E8E\u53D1 mq \u7684\u65B9\u6CD5\u3002</p><p>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u5C5E\u4E8E\u4E1A\u52A1\u7684\u4E3B\u903B\u8F91\uFF0C\u5931\u8D25\u4E86\u4E5F\u65E0\u6240\u8C13\uFF0C\u6240\u4EE5\u4E0D\u5E0C\u671B\u8FD9\u4E2A\u65B9\u6CD5\u629B\u7ED9\u4E1A\u52A1\u4EFB\u4F55\u5F02\u5E38\u800C\u5BFC\u81F4\u4E1A\u52A1\u4E0D\u53EF\u7528\u3002</p><p>\u56E0\u6B64\u5C01\u88C5\u8FD9\u4E2A\u65B9\u6CD5\u65F6\u6211\u5199\u4E86\u8FD9\u6837\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>try{
  send();
} catch(Exception e) {
  log.error(&quot;\u53D1\u9001\u51FA\u9519&quot;, e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u65F6\u6211\u5F97\u5230\u4E86\u4E00\u4E2A sonar-lint \u7684\u8B66\u544A\uFF1A</p><blockquote><p>Either re-interrupt this method or rethrow the \u201CInterruptedException\u201D</p></blockquote><p>\u8FD9\u4E2A interruptedException \u6709\u4EC0\u4E48\u7279\u522B\u4E4B\u5904\u5417\uFF0C\u4E3A\u5565\u522B\u7684\u5F02\u5E38\u90FD\u80FD\u76F4\u63A5 catch \u5C31\u5B8C\u4E8B\uFF0C\u5B83\u975E\u8981\u62A5\u8B66\u544A?</p><h1 id="\u7EBF\u7A0B\u7684-interrupt-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u7684-interrupt-\u65B9\u6CD5" aria-hidden="true">#</a> \u7EBF\u7A0B\u7684 interrupt \u65B9\u6CD5</h1><p>\u53EF\u4EE5\u4F7F\u7EBF\u7A0B\u7684\u4E2D\u65AD\u6807\u5FD7\u4F4D true\uFF0C\u4F46\u662F\u4E0D\u4F1A\u5BF9\u7EBF\u7A0B\u4EA7\u751F\u5B9E\u8D28\u5F71\u54CD\uFF0C\u7EBF\u7A0B\u53EF\u4EE5\u901A\u8FC7 <code>isInterrupted()</code> \u67E5\u8BE2\u4E2D\u65AD\u72B6\u6001\u5E76\u81EA\u884C\u54CD\u5E94</p><h1 id="\u4EC0\u4E48\u662F-interruptexception" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-interruptexception" aria-hidden="true">#</a> \u4EC0\u4E48\u662F interruptException</h1><p>\u7EBF\u7A0B\u5728\u6267\u884C sleep \u6216 join \u7B49\u963B\u585E\u65B9\u6CD5\u65F6\uFF0C\u5BF9\u5176\u8C03\u7528 xxxThread.interrupt() \u65F6\u4EA7\u751F</p><h1 id="\u4E24\u79CD\u5904\u7406\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E24\u79CD\u5904\u7406\u65B9\u5F0F" aria-hidden="true">#</a> \u4E24\u79CD\u5904\u7406\u65B9\u5F0F</h1><ol><li>\u5F80\u4E0A\u629B</li><li>\u5FFD\u7565\uFF0C\u624B\u52A8\u8BBE\u7F6E\u7EBF\u7A0B\u7684\u4E2D\u65AD\u72B6\u6001</li></ol><p>\u6839\u636E\u6211\u7684\u4F7F\u7528\u573A\u666F\uFF0C\u9009\u62E9\u4E86\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>try{
  send();
} catch(InterruptedException e) {
  log.error(&quot;\u4E2D\u65AD\u5F02\u5E38&quot;,e);
  // \u8FD9\u91CC\u518D\u6B21\u8C03\u7528 interrupt \u662F\u4E3A\u4E86\u8BA9\u5806\u6808\u4E2D\u66F4\u6DF1\u7684\u65B9\u6CD5\u4E5F\u80FD\u611F\u77E5\u5230\u8FD9\u4E2A\u5F02\u5E38
  // \u4E0D\u7136\u5B83\u4EEC\u6839\u672C\u4E0D\u77E5\u9053\u6709\u4E2D\u65AD\u53D1\u751F\uFF0C\u66F4\u4E0D\u7528\u8C08\u5904\u7406\u4E86
  Thread.currentThread().interrupt();
} catch(Exception e) {
  log.error(&quot;\u53D1\u9001\u51FA\u9519&quot;,e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6700\u540E\uFF0C<a href="https://www.jianshu.com/p/a8abe097d4ed" target="_blank" rel="noopener noreferrer">\u8FD9\u7BC7</a> \u5173\u4E8E interruptException \u7684\u6587\u7AE0\u5199\u7684\u4E5F\u5F88\u597D\uFF0Cmark \u4E00\u4E0B</p>`,17);function s(t,p){return a}var l=e(r,[["render",s],["__file","\u5982\u4F55\u5904\u7406 interruptExp.html.vue"]]);export{l as default};

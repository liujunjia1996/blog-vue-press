import{a as e}from"./app.7cb75648.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},n=e(`<p>\u4ECA\u5929\u8DD1\u4E00\u4E2A mybatis \u7684 demo \u9879\u76EE\uFF0C\u6267\u884C\u7B2C\u4E00\u6761\u6570\u636E\u5E93\u64CD\u4F5C\u65F6\u4F1A\u62A5\u9519\uFF0C\u91CD\u542F\u6570\u636E\u5E93\u53C8\u81EA\u52A8\u6062\u590D\u4E86\uFF0C\u6BD4\u8F83\u5947\u602A<br> \u7ECF\u8FC7\u7B80\u5355\u7684\u7814\u7A76\uFF0C\u53D1\u73B0\u8FDE\u63A5\u6570\u4E0D\u591F\u5BFC\u81F4\u7684\uFF0C\u4F46\u662F\u8FDE\u63A5\u6570\u4E3A\u4EC0\u4E48\u4F1A\u4E0D\u591F\u5462\uFF1F</p><p><img src="https://user-images.githubusercontent.com/43411944/153551030-50a0ea54-fe75-4fd4-b4be-1a4c5a423dd2.png" alt="image"></p><p>my.ini \u91CC\u9762\u8BBE\u7F6E\u7684\u8FDE\u63A5\u6570\u662F 20\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u5141\u8BB8\u6700\u5927\u8FDE\u63A5\u6570</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>hikari \u9ED8\u8BA4\u8FDE\u63A5\u6C60\u7684\u5BB9\u91CF\u662F 10\uFF0C\u6240\u4EE5\u53EA\u8981\u4E0D\u540C\u65F6\u8D77\u597D\u51E0\u4E2A\u670D\u52A1\u5E94\u8BE5\u90FD\u662F\u6CA1\u95EE\u9898\u7684\uFF0C\u521D\u6B65\u6000\u7591\u662F hikari \u6CA1\u5F52\u8FD8\u8FDE\u63A5\uFF1F<br> \u4F46\u662F\u540E\u9762\u5728 mysql \u547D\u4EE4\u884C\u4F7F\u7528\uFF1A<code>show processlist</code>\uFF0C\u53D1\u73B0\u91CC\u9762\u6709\u597D\u591A\u6628\u5929\u542F\u52A8 java \u5E94\u7528\u5728\u5360\u7528\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u6240\u4EE5\u5224\u65AD\u8FD8\u53EF\u80FD\u662F idea \u7684 bug\uFF0C\u6700\u540E\u518D\u4F7F\u7528 jps \u9A8C\u8BC1\uFF0C\u770B\u5230\u679C\u7136\u6709\u597D\u591A\u6628\u5929\u7684 java \u5E94\u7528\u4E00\u76F4\u6CA1\u5173<br> \u4F7F\u7528 <code>tskill pid</code> \u628A\u8FD9\u4E9B\u65E0\u5173\u5E94\u7528\u5173\u95ED\u4E4B\u540E\uFF0C\u4E00\u5207\u53C8\u6062\u590D\u6B63\u5E38\u4E86\uFF0C\u770B\u6765\u771F\u7684\u662F\u9519\u602A hikari \u4E86</p><p>\u4E0B\u9762\u662F <code>show status like &#39;Threads%&#39;</code> \u91CC\u9762\u6BCF\u4E00\u884C\u7684\u542B\u4E49\uFF1A</p><ul><li>Threads_cached\uFF1Amysql \u88AB\u5BA2\u6237\u7AEF\u65AD\u8FDE\u540E\u4E0D\u4F1A\u7ACB\u5373\u9500\u6BC1\u7EBF\u7A0B\uFF0C\u51CF\u5C11\u9891\u7E41\u521B\u5EFA\u8FDE\u63A5\u7684\u5F00\u9500\u63D0\u5347\u6027\u80FD</li><li>Threads_connected\uFF1A\u5F53\u524D\u8FDE\u63A5\u6570\uFF0C\u548C <code>show processlist</code> \u7684\u7ED3\u679C\u4E00\u81F4\uFF0C\u4F46\u662F <code>show processlist</code> \u4F1A\u8BE6\u7EC6\u4E9B</li><li>Threads_created\uFF1A\u603B\u65B0\u5EFA\u6570</li><li>Threads_running\uFF1A\u6D3B\u8DC3\u8FDE\u63A5\u6570\uFF0C\u8FD9\u4E2A\u503C\u4E00\u822C\u6BD4\u8F83\u5C0F</li></ul>`,7);function i(c,r){return n}var d=s(a,[["render",i]]);export{d as default};

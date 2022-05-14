import{_ as n,b as a}from"./app.153d2fb2.js";const s={},e=a(`<h2 id="\u4E1A\u52A1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u573A\u666F" aria-hidden="true">#</a> \u4E1A\u52A1\u573A\u666F</h2><p>\u591A\u5B9E\u4F8B\u4E4B\u95F4\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90\uFF0C\u6709\u65F6\u9700\u8981\u52A0\u9501\uFF0C\u9632\u6B62\u4EA7\u751F\u5E76\u53D1\u6267\u884C\u95EE\u9898\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><h3 id="\u7248\u672C-1" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C-1" aria-hidden="true">#</a> \u7248\u672C 1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (setnx(key, 1) == 1){
    expire(key, 30)
    try {
        //TODO \u4E1A\u52A1\u903B\u8F91
    } finally {
        del(key)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7248\u672C-1-\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C-1-\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> \u7248\u672C 1 \u5B58\u5728\u7684\u95EE\u9898</h3><p>\u5982\u679C SETNX \u6210\u529F\uFF0C\u5728\u8BBE\u7F6E\u9501\u8D85\u65F6\u65F6\u95F4\u540E\uFF0C\u5982\u679C\u670D\u52A1\u5668\u5B95\u673A\u3001\u91CD\u542F\u6216\u7F51\u7EDC\u6709\u6CE2\u52A8\uFF0CEXPIRE \u547D\u4EE4\u6267\u884C\u5931\u8D25\uFF0C\u5BFC\u81F4\u9501\u6CA1\u6709\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u800C\u53D8\u6210\u6B7B\u9501\u3002</p><h3 id="\u7248\u672C-2" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C-2" aria-hidden="true">#</a> \u7248\u672C 2</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token char">&#39;setnx&#39;</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> 
then <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> 
end<span class="token punctuation">;</span> 
redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token char">&#39;expire&#39;</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0 lua \u811A\u672C\uFF0C\u4F7F\u52A0\u9501\u548C\u8BBE\u7F6E\u9501\u8FC7\u671F\u65F6\u95F4\u6210\u4E3A\u4E00\u4E2A\u539F\u5B50\u903B\u8F91\u3002</p><h3 id="\u9501\u8FC7\u671F\u5BFC\u81F4\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9501\u8FC7\u671F\u5BFC\u81F4\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9501\u8FC7\u671F\u5BFC\u81F4\u7684\u95EE\u9898</h3><p>\u5982\u679C\u7EBF\u7A0B A \u6210\u529F\u83B7\u53D6\u5230\u4E86\u9501\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4 30 \u79D2\uFF0C\u4F46\u7EBF\u7A0B A \u6267\u884C\u65F6\u95F4\u8D85\u8FC7\u4E86 30 \u79D2\uFF0C\u9501\u8FC7\u671F\u81EA\u52A8\u91CA\u653E\uFF0C\u6B64\u65F6\u7EBF\u7A0B B \u83B7\u53D6\u5230\u4E86\u9501\uFF1B<br> \u968F\u540E A \u6267\u884C\u5B8C\u6210\uFF0C\u7EBF\u7A0B A \u4F7F\u7528 DEL \u547D\u4EE4\u6765\u91CA\u653E\u9501\uFF0C\u4F46\u6B64\u65F6\u7EBF\u7A0B B \u52A0\u7684\u9501\u8FD8\u6CA1\u6709\u6267\u884C\u5B8C\u6210\uFF0C\u7EBF\u7A0B A \u5B9E\u9645\u91CA\u653E\u7684\u7EBF\u7A0B B \u52A0\u7684\u9501\u3002<br> \u8FD9\u6837\u5C31\u4F1A\u5BFC\u81F4\u5206\u5E03\u5F0F\u9501\uFF0C\u9501\u4E0D\u4F4F\u7684\u95EE\u9898\u3002<br> \u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u5B88\u62A4\u7EBF\u7A0B\u81EA\u52A8\u7EED\u671F\u89E3\u51B3\u6216\u8005\u76F4\u63A5\u8BBE\u7F6E\u8DB3\u591F\u5927\u7684\u8FC7\u671F\u65F6\u95F4\u89E3\u51B3\u3002</p>`,12);function t(p,i){return e}var l=n(s,[["render",t],["__file","redis \u5206\u5E03\u5F0F\u9501.html.vue"]]);export{l as default};

import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{b as e}from"./app.7a7684da.js";const a={},n=e(`<p>\u5220\u9664\u6587\u4EF6\u65F6\uFF0C\u60F3\u4FDD\u7559\u67D0\u4E2A\u7279\u5B9A\u6587\u4EF6:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ls
a  autoCurl.sh  b  c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u8981\u5220\u9664 a\u3001 b\u3001c \u8FD9\u4E09\u4E2A\u6587\u4EF6\uFF0C\u4F46\u662F\u4FDD\u7559 autoCurl\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u7528\u4E0B\u9762\u4E24\u4E2A\u547D\u4EE4\u4E4B\u4E00\u89E3\u51B3\uFF1A</p><p>\u65B9\u6CD5 1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rm -f \`ls | grep -v auto\`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u65B9\u6CD5 2\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u662F\u5426\u6253\u5F00 \u6A21\u5F0F\u6269\u5C55
shopt extglob
# \u5982\u679C\u662F off\uFF0C\u5219\u9700\u6267\u884C\u4E0B\u9762\u547D\u4EE4\u6253\u5F00
shopt -s extglob
# \u540D\u79F0\u8981\u5199\u5168
rm -f !(autoCurl.sh)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7);function r(l,i){return n}var b=s(a,[["render",r],["__file","rm -rf \u6392\u9664\u6307\u5B9A\u6587\u4EF6.html.vue"]]);export{b as default};

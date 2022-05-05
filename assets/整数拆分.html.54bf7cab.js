import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{b as a}from"./app.9c7ab487.js";const s={},e=a(`<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6B63\u6574\u6570 n\uFF0C\u5C06\u5176\u62C6\u5206\u4E3A\u81F3\u5C11\u4E24\u4E2A\u6B63\u6574\u6570\u7684\u548C\uFF0C\u5E76\u4F7F\u8FD9\u4E9B\u6574\u6570\u7684\u4E58\u79EF\u6700\u5927\u5316\u3002 \u8FD4\u56DE\u4F60\u53EF\u4EE5\u83B7\u5F97\u7684\u6700\u5927\u4E58\u79EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u793A\u4F8B 1:

\u8F93\u5165: 2
\u8F93\u51FA: 1
\u89E3\u91CA: 2 = 1 + 1, 1 \xD7 1 = 1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u793A\u4F8B\xA02:

\u8F93\u5165: 10
\u8F93\u51FA: 36
\u89E3\u91CA: 10 = 3 + 3 + 4, 3 \xD7\xA03 \xD7\xA04 = 36\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BF4\u660E: \u4F60\u53EF\u4EE5\u5047\u8BBE\xA0n\xA0\u4E0D\u5C0F\u4E8E 2 \u4E14\u4E0D\u5927\u4E8E 58\u3002</p><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><h3 id="\u52A8\u6001\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a> \u52A8\u6001\u89C4\u5212</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>class Solution {
    public int integerBreak(int n) {
        // dp [i] \u8868\u793A i \u65F6\u7684\u6700\u5927\u4E58\u79EF
        int[] dp = new int[n + 1];

        // \u9898\u76EE\u63CF\u8FF0\u91CC n \u4E0D\u5C0F\u4E8E 2 \u4E14\u4E0D\u5927\u4E8E 58
        // \u6240\u4EE5\u4ECE 2 \u5F00\u59CB\u904D\u5386\u5373\u53EF
        for (var i = 2; i &lt;= n; i++) {
            for (var j = 1; j &lt; i; j++) {
                // \u53D6 dp [i]\u3001j *(i-j)\u3001j* dp [i-j] \u4E4B\u95F4\u7684\u6700\u5927\u8005
                dp[i] = max(dp[i], j * (i - j), j * dp[i - j]);
            }
        }

        return dp[n];
    }

    public int max(int a, int b, int c) {
        return Math.max(Math.max(a, b), c);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,8);function r(i,l){return e}var c=n(s,[["render",r],["__file","\u6574\u6570\u62C6\u5206.html.vue"]]);export{c as default};

import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{b as a}from"./app.7a7684da.js";const n={},e=a(`<h2 id="\u53EF\u53D8\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u53D8\u6027" aria-hidden="true">#</a> \u53EF\u53D8\u6027</h2><p>Arrays.asList \u8FD4\u56DE\u90E8\u5206\u53EF\u53D8\u7684 list\uFF0C\u800C List.of \u8FD4\u56DE\u7684\u662F\u5B8C\u5168\u4E0D\u53EF\u53D8\u7684 list\uFF0C\u5373 asList \u4E0D\u80FD\u589E\u5220\uFF0C\u53EF\u4EE5\u66F4\u65B0\uFF1Bof \u4E0D\u80FD\u589E\u5220\u548C\u66F4\u65B0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>List&lt;Integer&gt; list = Arrays.asList(1, 2, null);
list.set(1, 10); // OK
List&lt;Integer&gt; list2 = List.of(1, 2, 3);
list2.set(1, 10); // UnsupportedOperationException
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5BF9-null-\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5BF9-null-\u7684\u5904\u7406" aria-hidden="true">#</a> \u5BF9 null \u7684\u5904\u7406</h2><p>Arrays.asList \u5165\u53C2\u652F\u6301\u5B58\u5165 <code>null</code>\uFF0C\u800C List.of \u4E0D\u884C\uFF1B\u7C7B\u4F3C\u5730\uFF0CArrays.asList \u7684 contains \u65B9\u6CD5\u652F\u6301\u4F20\u5165 null\uFF0C\u800C List.of \u4E0D\u884C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>List&lt;Integer&gt; list = Arrays.asList(1, 2, null); // OK
List&lt;Integer&gt; list = List.of(1, 2, null); 
// \u5F02\u5E38\uFF1ANullPointerException
// idea \u4E5F\u4F1A\u62A5\u8B66\u544A\uFF1A Passing &#39;null&#39; argument to parameter annotated as @NotNull 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u526F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u526F\u4F5C\u7528" aria-hidden="true">#</a> \u526F\u4F5C\u7528</h2><p>Arrays.asList \u539F\u6570\u7EC4\u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u65B0 List\uFF0C\u800C List.of \u4E0D\u4F1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Integer[] array = {1,2,3};
List&lt;Integer&gt; list = Arrays.asList(array);
array[1] = 10;
System.out.println(list); // \u8F93\u51FA [1, 10, 3]
Integer[] array2 = {1,2,3};
List&lt;Integer&gt; list2 = List.of(array2);
array[1] = 10;
System.out.println(list2); // \u8F93\u51FA [1, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u4E09\u4E2A\u6700\u5E94\u8BE5\u8B66\u60D5\u7684\u662F\u7B2C\u4E09\u70B9\uFF0C\u56E0\u4E3A\u7B2C\u4E09\u70B9\u5728 idea \u4E0A\u6CA1\u6709\u4EFB\u4F55\u7684\u8B66\u544A</p><p>\u81F3\u4E8E\u4F7F\u7528\u4E0A\uFF0C\u4E2A\u4EBA\u6BD4\u8F83\u559C\u6B22 List.of \uFF0C\u56E0\u4E3A\u5B83\u7684\u8FD4\u56DE\u7684 list \u5F88\u7EAF\u7CB9\uFF0C\u5B8C\u5168\u4E0D\u652F\u6301\u66F4\u65B0\u64CD\u4F5C\uFF0C\u800C Arrays.asList \u8FD4\u56DE\u7684 List \u867D\u7136\u53EF\u4EE5\u4FEE\u6539\uFF0C\u4F46\u662F\u529F\u80FD\u4E0D\u5B8C\u5168\uFF08\u6BD4\u5982\u4E0D\u80FD add\uFF09\uFF0C\u4E0D\u7EAF\u7CB9\uFF0C\u5BF9\u4E8E\u8981\u5F97\u5230\u53EF\u4FEE\u6539\u7684 List \u7684\u9700\u6C42\uFF0C\u6211\u4F1A\u76F4\u63A5\u9009\u62E9 <code>new ArrayList&lt;&gt;(List.of(1, 2, 3))</code> \u624B\u52A8\u521B\u5EFA\u4E00\u4E2A\u6B63\u5E38\u7684 ArrayList</p><p>\u4F46\u662F\uFF0CList.of \u5C5E\u4E8E jdk11\uFF0Cjdk11 \u5728\u56E2\u961F\u5185\u90E8\u662F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u4F46\u662F\u5F53\u6211\u63D0\u4F9B sdk \u7ED9\u522B\u7684\u56E2\u961F\u7528\u65F6\uFF0C\u5C3D\u91CF\u5C31\u4E0D\u8981\u7528 List.of \u4E86\uFF0C\u56E0\u4E3A\u6709\u7684\u56E2\u961F\u8FD8\u5728\u8DD1 jdk8 \uFF08\u9898\u5916\u8BDD\uFF0C\u867D\u7136\u672C\u5730\u7684 jdk \u662F 11 \u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u5728 idea \u4E0A\u4E3A\u67D0\u4E2A\u9879\u76EE\u8BBE\u7F6E\u8BED\u6CD5\u7EA7\u522B\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u7528 jdk11 \u5F00\u53D1\u51FA jdk8 \u53EF\u7528\u7684 sdk \u4E86\uFF09</p>`,13);function r(i,t){return e}var p=s(n,[["render",r],["__file","Array.asList \u548C List.of \u7684\u533A\u522B.html.vue"]]);export{p as default};

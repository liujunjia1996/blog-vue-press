import{_ as n,l as a}from"./app.f51b6376.js";const s={},t=a(`<p><strong>\u5176\u5B9E log4j2 \u7684\u914D\u7F6E\u6587\u4EF6\u5C31\u73A9\u4E2A appender \u548C logger\uFF0C\u4E00\u4E2A\u7BA1\u8F93\u51FA\uFF0C\u4E00\u4E2A\u7BA1\u8F93\u5165\uFF0C\u53EA\u8981\u4E86\u89E3\u4E86\u8FD9\u4E2A\u9AA8\u67B6\uFF0Clog4j2 \u5C31\u6CA1\u95EE\u9898\u4E86\uFF0C\u5269\u4E0B\u7684\u901A\u8FC7 google \u90FD\u53EF\u4EE5\u641E\u5B9A</strong></p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u6839\u8282\u70B9-configuration" tabindex="-1"><a class="header-anchor" href="#\u6839\u8282\u70B9-configuration" aria-hidden="true">#</a> \u6839\u8282\u70B9 Configuration</h3><p>\u6709\u4E24\u4E2A\u5C5E\u6027: status \u548C monitorinterval\uFF0C\u6709\u4E24\u4E2A\u5B50\u8282\u70B9: Appenders \u548C Loggers</p><ul><li><p>status \u7528\u6765\u6307\u5B9A log4j \u672C\u8EAB\u7684\u6253\u5370\u65E5\u5FD7\u7684\u7EA7\u522B.</p></li><li><p>monitorinterval \u7528\u4E8E\u6307\u5B9A log4j \u81EA\u52A8\u91CD\u65B0\u914D\u7F6E\u7684\u76D1\u6D4B\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F s\uFF0C\u6700\u5C0F\u662F 5s.</p></li></ul><h3 id="appenders-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#appenders-\u8282\u70B9" aria-hidden="true">#</a> Appenders \u8282\u70B9</h3><p>\u5E38\u89C1\u7684\u6709\u4E09\u79CD\u5B50\u8282\u70B9: Console\u3001File\u3001RollingFile.</p><h4 id="console-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#console-\u8282\u70B9" aria-hidden="true">#</a> Console \u8282\u70B9</h4><p>\u7528\u6765\u5B9A\u4E49\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u7684 Appender.</p><ul><li><p>name: \u6307\u5B9A Appender \u7684\u540D\u5B57.</p></li><li><p>target: SYSTEM_OUT \u6216 SYSTEM_ERR, \u4E00\u822C\u53EA\u8BBE\u7F6E\u9ED8\u8BA4: SYSTEM_OUT.</p></li><li><p>PatternLayout: \u8F93\u51FA\u683C\u5F0F\uFF0C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A: %m%n.</p></li></ul><h4 id="file-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#file-\u8282\u70B9" aria-hidden="true">#</a> File \u8282\u70B9</h4><p>\u7528\u6765\u5B9A\u4E49\u8F93\u51FA\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u6587\u4EF6\u7684 Appender.</p><ul><li><p>name: \u6307\u5B9A Appender \u7684\u540D\u5B57.</p></li><li><p>fileName: \u6307\u5B9A\u8F93\u51FA\u65E5\u5FD7\u7684\u76EE\u7684\u6587\u4EF6\u5E26\u5168\u8DEF\u5F84\u7684\u6587\u4EF6\u540D.</p></li><li><p>PatternLayout: \u8F93\u51FA\u683C\u5F0F\uFF0C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A: %m%n.</p></li></ul><h4 id="rollingfile-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#rollingfile-\u8282\u70B9" aria-hidden="true">#</a> RollingFile \u8282\u70B9</h4><p>\u7528\u6765\u5B9A\u4E49\u8D85\u8FC7\u6307\u5B9A\u5927\u5C0F\u81EA\u52A8\u5220\u9664\u65E7\u7684\u521B\u5EFA\u65B0\u7684\u7684 Appender.</p><ul><li><p>name: \u6307\u5B9A Appender \u7684\u540D\u5B57.</p></li><li><p>fileName: \u6307\u5B9A\u8F93\u51FA\u65E5\u5FD7\u7684\u76EE\u7684\u6587\u4EF6\u5E26\u5168\u8DEF\u5F84\u7684\u6587\u4EF6\u540D.</p></li><li><p>filePattern: \u6307\u5B9A\u65B0\u5EFA\u65E5\u5FD7\u6587\u4EF6\u7684\u540D\u79F0\u683C\u5F0F.</p></li><li><p>PatternLayout: \u8F93\u51FA\u683C\u5F0F\uFF0C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A: %m%n.</p></li><li><p>Policies: \u6307\u5B9A\u6EDA\u52A8\u65E5\u5FD7\u7684\u7B56\u7565\uFF0C\u5C31\u662F\u4EC0\u4E48\u65F6\u5019\u8FDB\u884C\u65B0\u5EFA\u65E5\u5FD7\u6587\u4EF6\u8F93\u51FA\u65E5\u5FD7.</p><ul><li>TimeBasedTriggeringPolicy: Policies \u5B50\u8282\u70B9\uFF0C\u57FA\u4E8E\u65F6\u95F4\u7684\u6EDA\u52A8\u7B56\u7565\uFF0Cinterval \u5C5E\u6027\u7528\u6765\u6307\u5B9A\u591A\u4E45\u6EDA\u52A8\u4E00\u6B21\uFF0C\u9ED8\u8BA4\u662F 1 hour\u3002modulate = true \u7528\u6765\u8C03\u6574\u65F6\u95F4\uFF1A\u6BD4\u5982\u73B0\u5728\u662F\u65E9\u4E0A 3am\uFF0Cinterval \u662F 4\uFF0C\u90A3\u4E48\u7B2C\u4E00\u6B21\u6EDA\u52A8\u662F\u5728 4am\uFF0C\u63A5\u7740\u662F 8am\uFF0C12am...\u800C\u4E0D\u662F 7am.</li><li>SizeBasedTriggeringPolicy: Policies \u5B50\u8282\u70B9\uFF0C\u57FA\u4E8E\u6307\u5B9A\u6587\u4EF6\u5927\u5C0F\u7684\u6EDA\u52A8\u7B56\u7565\uFF0Csize \u5C5E\u6027\u7528\u6765\u5B9A\u4E49\u6BCF\u4E2A\u65E5\u5FD7\u6587\u4EF6\u7684\u5927\u5C0F.</li><li>DefaultRolloverStrategy: \u7528\u6765\u6307\u5B9A\u540C\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\u6700\u591A\u6709\u51E0\u4E2A\u65E5\u5FD7\u6587\u4EF6\u65F6\u5F00\u59CB\u5220\u9664\u6700\u65E7\u7684\uFF0C\u521B\u5EFA\u65B0\u7684(\u901A\u8FC7 max \u5C5E\u6027)\u3002</li></ul></li></ul><h4 id="patternlayout" tabindex="-1"><a class="header-anchor" href="#patternlayout" aria-hidden="true">#</a> PatternLayout</h4><table><thead><tr><th style="text-align:left;">\u6807\u8BB0</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">%m</td><td style="text-align:left;">\u8F93\u51FA\u4EE3\u7801\u4E2D\u6307\u5B9A\u7684\u6D88\u606F</td></tr><tr><td style="text-align:left;">%p</td><td style="text-align:left;">\u8F93\u51FA\u4F18\u5148\u7EA7\uFF0CDEBUG\uFF0CINFO\uFF0CWARN\uFF0CERROR\uFF0CFATAL</td></tr><tr><td style="text-align:left;">%r</td><td style="text-align:left;">\u8F93\u51FA\u81EA\u5E94\u7528\u542F\u52A8\u5230\u8F93\u51FA\u8BE5 log \u4FE1\u606F\u8017\u8D39\u7684\u6BEB\u79D2\u6570</td></tr><tr><td style="text-align:left;">%t</td><td style="text-align:left;">\u8F93\u51FA\u4EA7\u751F\u8BE5\u65E5\u5FD7\u4E8B\u4EF6\u7684\u7EBF\u7A0B\u540D</td></tr><tr><td style="text-align:left;">%n</td><td style="text-align:left;">\u8F93\u51FA\u4E00\u4E2A\u56DE\u8F66\u6362\u884C\u7B26\uFF0CWindows \u5E73\u53F0\u4E3A /r/n\uFF0CUnix \u5E73\u53F0\u4E3A /n</td></tr><tr><td style="text-align:left;">%d</td><td style="text-align:left;">\u8F93\u51FA\u65E5\u5FD7\u65F6\u95F4\u70B9\u7684\u65E5\u671F\u6216\u65F6\u95F4</td></tr><tr><td style="text-align:left;">%c</td><td style="text-align:left;">\u8F93\u51FA\u6240\u5C5E\u7684\u7C7B\u76EE\uFF0C\u901A\u5E38\u5C31\u662F\u6240\u5728\u7C7B\u7684\u5168\u540D\uFF0C%c{2} \u610F\u4E3A\u4FDD\u7559\u6700\u540E\u4E24\u5C42</td></tr><tr><td style="text-align:left;">%l</td><td style="text-align:left;">\u8F93\u51FA\u65E5\u5FD7\u4E8B\u4EF6\u7684\u53D1\u751F\u4F4D\u7F6E\uFF0C\u5305\u62EC\u5305\u540D\uFF0C\u65B9\u6CD5\u540D\uFF0C\u884C\u53F7</td></tr><tr><td style="text-align:left;">%L</td><td style="text-align:left;">\u8F93\u51FA\u884C\u53F7</td></tr></tbody></table><h3 id="loggers-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#loggers-\u8282\u70B9" aria-hidden="true">#</a> Loggers \u8282\u70B9</h3><p>\u5E38\u89C1\u7684\u6709\u4E24\u79CD: Root \u548C Logger.</p><h4 id="root-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#root-\u8282\u70B9" aria-hidden="true">#</a> Root \u8282\u70B9</h4><p>\u7528\u6765\u6307\u5B9A\u9879\u76EE\u7684\u6839\u65E5\u5FD7\uFF0C\u5982\u679C\u6CA1\u6709\u5355\u72EC\u6307\u5B9A Logger\uFF0C\u90A3\u4E48\u5C31\u4F1A\u9ED8\u8BA4\u4F7F\u7528\u8BE5 Root \u65E5\u5FD7\u8F93\u51FA</p><ul><li><p>level: \u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\uFF0C\u5171\u6709 8 \u4E2A\u7EA7\u522B\uFF0C\u6309\u7167\u4ECE\u4F4E\u5230\u9AD8\u4E3A\uFF1AAll\xA0&lt; Trace &lt; Debug &lt;\xA0Info\xA0&lt;\xA0Warn\xA0&lt; Error &lt; Fatal &lt;\xA0OFF.</p></li><li><p>appenderRef\uFF1ARoot \u7684\u5B50\u8282\u70B9\uFF0C\u7528\u6765\u6307\u5B9A\u8BE5\u65E5\u5FD7\u8F93\u51FA\u5230\u54EA\u4E2A Appender.</p></li></ul><h4 id="logger-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#logger-\u8282\u70B9" aria-hidden="true">#</a> Logger \u8282\u70B9</h4><p>\u7528\u6765\u5355\u72EC\u6307\u5B9A\u65E5\u5FD7\u7684\u5F62\u5F0F\uFF0C\u6BD4\u5982\u8981\u4E3A\u6307\u5B9A\u5305\u4E0B\u7684 class \u6307\u5B9A\u4E0D\u540C\u7684\u65E5\u5FD7\u7EA7\u522B\u7B49\u3002</p><ul><li><p>level: \u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B</p></li><li><p>name: \u7528\u6765\u6307\u5B9A\u8BE5 Logger \u6240\u9002\u7528\u7684\u7C7B\u6216\u8005\u7C7B\u6240\u5728\u7684\u5305\u5168\u8DEF\u5F84, \u7EE7\u627F\u81EA Root \u8282\u70B9.</p></li><li><p>AppenderRef\uFF1ALogger \u7684\u5B50\u8282\u70B9\uFF0C\u7528\u6765\u6307\u5B9A\u8BE5\u65E5\u5FD7\u8F93\u51FA\u5230\u54EA\u4E2A Appender, \u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5C31\u4F1A\u9ED8\u8BA4\u7EE7\u627F\u81EA Root.\u5982\u679C\u6307\u5B9A\u4E86\uFF0C\u90A3\u4E48\u4F1A\u5728\u6307\u5B9A\u7684\u8FD9\u4E2A Appender \u548C Root \u7684 Appender \u4E2D\u90FD\u4F1A\u8F93\u51FA\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E Logger \u7684 additivity = &quot;false&quot; \u53EA\u5728\u81EA\u5B9A\u4E49\u7684 Appender \u4E2D\u8FDB\u884C\u8F93\u51FA\u3002</p></li></ul><h2 id="\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a> \u6A21\u677F</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Configuration</span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WARN<span class="token punctuation">&quot;</span></span> <span class="token attr-name">monitorInterval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--monitorInterval \u81EA\u52A8\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u7684\u5468\u671F--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logPath<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>/logs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>every_file_size<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>50M<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- \u65E5\u5FD7\u5207\u5272\u5355\u4F4D --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u8F93\u51FA\u4ECB\u8D28--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Appenders</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u63A7\u5236\u53F0--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Console</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>console<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SYSTEM_OUT<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c{2}:%L - %msg%n<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!-- &lt;PatternLayout pattern=&quot;%d{HH:mm:ss} [%t] %-5level %logger{36} - %msg%n&quot; /&gt; --&gt;</span>
            <span class="token comment">&lt;!-- &lt;PatternLayout pattern=&quot;%-d [%t] %-5p %c{1}:%L - %m%n&quot; /&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Console</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u6587\u4EF6--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RollingFile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span> <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${logPath}/root.log<span class="token punctuation">&quot;</span></span>
                     <span class="token attr-name">filepattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${logPath}/%d{yyyyMMdd}-%i-root.log<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%d{yyyy-MM-dd HH:mm:ss,SSS} [%t] %-5p %c{1}:%L - %msg%n<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Policies</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--\u5355\u6587\u4EF6\u7684\u6700\u5927 size--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SizeBasedTriggeringPolicy</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${every_file_size}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token comment">&lt;!--  \${sys:every_file_size} == System.getProperty(&quot;every_file_size&quot;)--&gt;</span>
                <span class="token comment">&lt;!--  &lt;SizeBasedTriggeringPolicy size=&quot;\${sys:every_file_size}&quot;/&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Policies</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--\u6700\u591A\u4FDD\u7559 100 \u4E2A\u6587\u4EF6--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DefaultRolloverStrategy</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RollingFile</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RollingFile</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root-error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${logPath}/root-error.log<span class="token punctuation">&quot;</span></span>
                     <span class="token attr-name">filepattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${logPath}/%d{yyyyMMdd}-%i-root-error.log<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThresholdFilter</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onMatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ACCEPT<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onMismatch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DENY<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%d{yyyy-MM-dd HH:mm:ss,SSS} [%t] %-5p %c{1}:%L - %msg%n<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Policies</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SizeBasedTriggeringPolicy</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${every_file_size}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Policies</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DefaultRolloverStrategy</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RollingFile</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Appenders</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u8F93\u5165\u7BA1\u7406--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loggers</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u5FC5\u987B\u6709\u8FD9\u4E2A\u624D\u80FD\u8BA9 mybatis \u6253\u5370\u51FA sql \u8BED\u53E5--&gt;</span>
        <span class="token comment">&lt;!-- additivity \u9ED8\u8BA4\u662F true--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.mybatis.mapper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>debug<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Console<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root-error<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Loggers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,28);function p(e,l){return t}var c=n(s,[["render",p],["__file","log4j2 \u914D\u7F6E\u6587\u4EF6\u603B\u7ED3.html.vue"]]);export{c as default};

import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{b as a}from"./app.7a7684da.js";const e={},s=a(`<h2 id="\u8FDB\u7A0B\u548C\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u548C\u7EBF\u7A0B" aria-hidden="true">#</a> \u8FDB\u7A0B\u548C\u7EBF\u7A0B</h2><p>\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u542B\u6709\u4E00\u4E2A\u81F3\u591A\u4E2A\u7EBF\u7A0B\u3002</p><p>\u6BCF\u7528 java \u547D\u4EE4\u542F\u52A8\u4E00\u4E2A java \u5E94\u7528\u7A0B\u5E8F\uFF0C\u5C31\u4F1A\u542F\u52A8\u4E00\u4E2A jvm \u8FDB\u7A0B\uFF0C\u8BE5\u8FDB\u7A0B\u4E2D\u5305\u542B\u4E86\u4E00\u4E9B\u9ED8\u8BA4\u7684\u7EBF\u7A0B\u548C\u5F00\u53D1\u8005\u542F\u52A8\u7684\u7EBF\u7A0B\u3002</p><h2 id="\u5E76\u884C\u548C\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5E76\u884C\u548C\u5E76\u53D1" aria-hidden="true">#</a> \u5E76\u884C\u548C\u5E76\u53D1</h2><p>\u5E76\u884C\u662F\u6307\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u201C\u540C\u65F6\u8FDB\u884C\u201C\uFF0C\u800C\u5E76\u53D1\u6307 <strong>\u67D0\u4E00\u6BB5\u65F6\u95F4</strong> \u5185\u201D\u540C\u65F6\u8FDB\u884C\u201C\u3002</p><h2 id="\u521B\u5EFA\u7EBF\u7A0B\u7684\u4E09\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7EBF\u7A0B\u7684\u4E09\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u521B\u5EFA\u7EBF\u7A0B\u7684\u4E09\u79CD\u65B9\u5F0F</h2><ul><li>\u901A\u8FC7\u7EE7\u627F <code>Thread</code> \u7C7B\uFF0C\u91CD\u5199 <code>run</code> \u65B9\u6CD5\uFF1B</li><li>\u901A\u8FC7\u5B9E\u73B0 <code>runable</code> \u63A5\u53E3\uFF1B</li><li>\u901A\u8FC7\u5B9E\u73B0 <code>callable</code> \u63A5\u53E3\u3002</li></ul><h2 id="\u7EBF\u7A0B\u7684\u516D\u79CD\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u7684\u516D\u79CD\u72B6\u6001" aria-hidden="true">#</a> \u7EBF\u7A0B\u7684\u516D\u79CD\u72B6\u6001</h2><p>\u53EF\u4EE5\u901A\u8FC7 <code>getState</code> \u83B7\u53D6\u7EBF\u7A0B\u5F53\u524D\u7684\u72B6\u6001\uFF1A</p><ul><li>New\uFF1A\u65B0\u521B\u5EFA\u7684\u7EBF\u7A0B\uFF0C\u5C1A\u672A\u6267\u884C\uFF1B</li><li>Runnable\uFF1A\u8FD0\u884C\u4E2D\u7684\u7EBF\u7A0B\uFF0C\u6B63\u5728\u6267\u884C <code>run</code> \u65B9\u6CD5\u7684 Java \u4EE3\u7801\uFF1B</li><li>Blocked\uFF1A\u8FD0\u884C\u4E2D\u7684\u7EBF\u7A0B\uFF0C\u56E0\u4E3A\u67D0\u4E9B\u64CD\u4F5C\u88AB\u963B\u585E\u800C\u6302\u8D77\uFF1B</li><li>Waiting\uFF1A\u8FD0\u884C\u4E2D\u7684\u7EBF\u7A0B\uFF0C\u56E0\u4E3A\u67D0\u4E9B\u64CD\u4F5C\u5728\u7B49\u5F85\u4E2D\uFF1B</li><li>Timed Waiting\uFF1A\u8FD0\u884C\u4E2D\u7684\u7EBF\u7A0B\uFF0C\u56E0\u4E3A\u6267\u884C <code>sleep</code> \u65B9\u6CD5\u6B63\u5728\u8BA1\u65F6\u7B49\u5F85\uFF1B</li><li>Terminated\uFF1A\u7EBF\u7A0B\u5DF2\u7EC8\u6B62\uFF0C\u56E0\u4E3A <code>run</code> \u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u3002</li></ul><h3 id="\u4E3A\u4EC0\u4E48\u516D\u79CD\u72B6\u6001\u6709-runnable-\u800C\u6CA1\u6709-running" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u516D\u79CD\u72B6\u6001\u6709-runnable-\u800C\u6CA1\u6709-running" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u516D\u79CD\u72B6\u6001\u6709 Runnable \u800C\u6CA1\u6709 Running</h3><p>\u4E0A\u8FF0\u516D\u79CD\u72B6\u6001\u662F jvm \u5B9A\u4E49\u7684 java \u7EBF\u7A0B\u7684\u72B6\u6001\uFF0C\u800C\u4E0D\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u7684\u7EBF\u7A0B\u7684\u72B6\u6001\u3002</p><p>\u5728 jvm \u5C42\u9762\u53EA\u80FD\u5BF9\u7EBF\u7A0B\u505A\u5230 <code>Runnable</code> \u7EC6\u7C92\u5EA6\u7684\u5B9A\u4E49\uFF0C\u66F4\u7EC6\u5206\u7684\u72B6\u6001\u4F9D\u8D56\u64CD\u4F5C\u7CFB\u7EDF\u5177\u4F53\u7684\u8C03\u5EA6\u3002</p><h3 id="\u72B6\u6001\u8F6C\u79FB\u56FE" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u8F6C\u79FB\u56FE" aria-hidden="true">#</a> \u72B6\u6001\u8F6C\u79FB\u56FE</h3><img src="http://s3v2-qos.storage.wanyol.com/guass-cloud-storage-provider/wallpaper/21/04/27/12b41f7c025d4f71980c9fdd6a971711.png"><h2 id="\u4E2D\u65AD\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u65AD\u7EBF\u7A0B" aria-hidden="true">#</a> \u4E2D\u65AD\u7EBF\u7A0B</h2><p>\u8C03\u7528 <code>interrupt</code> \u5E76\u4E0D\u76F4\u63A5\u7EC8\u7ED3\u76EE\u6807\u7EBF\u7A0B\u7684\u6267\u884C\uFF0C\u800C\u662F\u4FEE\u6539\u4E86\u76EE\u6807\u7EBF\u7A0B\u7684\u4E2D\u65AD\u6807\u5FD7\uFF0C\u81F3\u4E8E\u5177\u4F53\u505A\u4EC0\u4E48\u4E8B\u60C5\u7531\u76EE\u6807\u7EBF\u7A0B\u81EA\u8EAB\u51B3\u5B9A\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new MyThread();
        t.start();
        Thread.sleep(1);
        t.interrupt();
    }
}

class MyThread extends Thread {
    public void run() {
        while (!isInterrupted()) {
            // \u7EBF\u7A0B\u6B63\u5728\u6267\u884C
            System.out.println(&quot;running&quot;);
        }
        // \u7EBF\u7A0B\u5DF2\u88AB\u4E2D\u65AD
        System.out.println(&quot;interrupted&quot;);
    }
}

/*
running
running
running
running
interrupted
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="interruptedexception" tabindex="-1"><a class="header-anchor" href="#interruptedexception" aria-hidden="true">#</a> InterruptedException</h3><p>\u5BF9\u88AB <code>wait</code>\u3001<code>await</code>\u3001<code>join</code> \u6216\u8005 <code>sleep</code> \u7B49\u65B9\u6CD5\u6302\u8D77\u7684\u7EBF\u7A0B\u8C03\u7528 <code>interrupt</code> \u65F6\u4F1A\u629B\u8BE5\u5F02\u5E38\u3002</p><h3 id="isinterrupted-\u548C-interrupted" tabindex="-1"><a class="header-anchor" href="#isinterrupted-\u548C-interrupted" aria-hidden="true">#</a> isInterrupted \u548C interrupted</h3><ul><li><p><code>isInterrupted</code> \u662F\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u83B7\u53D6\u8C03\u7528\u8005\u7EBF\u7A0B\u7684\u4E2D\u65AD\u6807\u5FD7\uFF0C\u6CA1\u6709\u526F\u4F5C\u7528\uFF1B</p></li><li><p><code>interrupted</code> \u662F\u9759\u6001\u65B9\u6CD5\uFF0C\u548C\u8C01\u8C03\u7528\u65E0\u5173\uFF0C\u53EA\u4F1A\u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B\u7684\u4E2D\u65AD\u6807\u5FD7\uFF1B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Main {
    public static void main(String[] args) {
        Thread threadOne = new Thread(() -&gt; {
            //noinspection StatementWithEmptyBody
            while (true) ;
        });
        threadOne.start();
        threadOne.interrupt();
        System.out.println(threadOne.isInterrupted());
        //noinspection AccessStaticViaInstance
        System.out.println(threadOne.interrupted());
        System.out.println(Thread.interrupted());
        System.exit(1);
    }
}

/*
true
false
false
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li><li><p><code>interrupted</code> \u4F1A\u6709\u6E05\u9664\u4E2D\u65AD\u6807\u5FD7\u7684\u526F\u4F5C\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread threadOne = new Thread(() -&gt; {
            //noinspection StatementWithEmptyBody
            while (!Thread.interrupted()) ;
            System.out.println(&quot;threadOne isInterrupted : &quot; + Thread.currentThread().isInterrupted());
        });
        threadOne.start();
        threadOne.interrupt();
        threadOne.join();
        System.out.println(&quot;main thread is over&quot;);
    }
}

/*
threadOne isInterrupted : false
main thread is over
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li></ul><h2 id="volatile" tabindex="-1"><a class="header-anchor" href="#volatile" aria-hidden="true">#</a> volatile</h2><h3 id="\u6539\u53D8\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u53EF\u89C1\u6027" aria-hidden="true">#</a> \u6539\u53D8\u53EF\u89C1\u6027</h3><p><code>volatile</code> \u5173\u952E\u5B57\u7684\u76EE\u7684\u662F\u544A\u8BC9 jvm\uFF1A</p><ul><li>\u6BCF\u6B21\u8BBF\u95EE\u53D8\u91CF\u65F6\uFF0C\u603B\u662F\u83B7\u53D6\u4E3B\u5185\u5B58\u7684\u6700\u65B0\u503C\uFF1B</li><li>\u6BCF\u6B21\u4FEE\u6539\u53D8\u91CF\u540E\uFF0C\u7ACB\u523B\u56DE\u5199\u5230\u4E3B\u5185\u5B58\u3002</li></ul><p>\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u67D0\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u503C\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u80FD\u591F\u7ACB\u523B\u770B\u5230\u4FEE\u6539\u540E\u7684\u503C\u3002</p><h3 id="\u7981\u6B62\u6307\u4EE4\u91CD\u6392" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u6307\u4EE4\u91CD\u6392" aria-hidden="true">#</a> \u7981\u6B62\u6307\u4EE4\u91CD\u6392</h3><p>\u52A0 <code>volatile</code> \u540E\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5728\u8BFB\u5199\u8BE5\u53D8\u91CF\u7684\u65F6\u5019\u6DFB\u52A0\u5BF9\u5E94\u7684\u5185\u5B58\u5C4F\u969C\uFF0C\u9632\u6B62\u4E86\u6307\u4EE4\u91CD\u6392\u3002</p><table><thead><tr><th style="text-align:left;">\u5C4F\u969C\u7C7B\u578B</th><th style="text-align:left;">\u6307\u4EE4\u793A\u4F8B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">LoadLoad Barriers</td><td style="text-align:left;">Load1; LoadLoad; Load2</td><td style="text-align:left;">\u8BE5\u5C4F\u969C\u786E\u4FDD Load1 \u6570\u636E\u7684\u88C5\u8F7D\u5148\u4E8E Load2 \u53CA\u5176\u540E\u6240\u6709\u88C5\u8F7D\u6307\u4EE4\u7684\u7684\u64CD\u4F5C</td></tr><tr><td style="text-align:left;">StoreStore Barriers</td><td style="text-align:left;">Store1; StoreStore; Store2</td><td style="text-align:left;">\u8BE5\u5C4F\u969C\u786E\u4FDD Store1 \u7ACB\u523B\u5237\u65B0\u6570\u636E\u5230\u5185\u5B58(\u4F7F\u5176\u5BF9\u5176\u4ED6\u5904\u7406\u5668\u53EF\u89C1)\u7684\u64CD\u4F5C\u5148\u4E8E Store2 \u53CA\u5176\u540E\u6240\u6709\u5B58\u50A8\u6307\u4EE4\u7684\u64CD\u4F5C</td></tr><tr><td style="text-align:left;">LoadStore Barriers</td><td style="text-align:left;">Load1; LoadStore; Store2</td><td style="text-align:left;">\u786E\u4FDD Load1 \u7684\u6570\u636E\u88C5\u8F7D\u5148\u4E8E Store2 \u53CA\u5176\u540E\u6240\u6709\u7684\u5B58\u50A8\u6307\u4EE4\u5237\u65B0\u6570\u636E\u5230\u5185\u5B58\u7684\u64CD\u4F5C</td></tr><tr><td style="text-align:left;">StoreLoad Barriers</td><td style="text-align:left;">Store1; StoreLoad; Load2</td><td style="text-align:left;">\u8BE5\u5C4F\u969C\u786E\u4FDD Store1 \u7ACB\u523B\u5237\u65B0\u6570\u636E\u5230\u5185\u5B58\u7684\u64CD\u4F5C\u5148\u4E8E Load2 \u53CA\u5176\u540E\u6240\u6709\u88C5\u8F7D\u88C5\u8F7D\u6307\u4EE4\u7684\u64CD\u4F5C\u3002\u5B83\u4F1A\u4F7F\u8BE5\u5C4F\u969C\u4E4B\u524D\u7684\u6240\u6709\u5185\u5B58\u8BBF\u95EE\u6307\u4EE4(\u5B58\u50A8\u6307\u4EE4\u548C\u8BBF\u95EE\u6307\u4EE4)\u5B8C\u6210\u4E4B\u540E, \u624D\u6267\u884C\u8BE5\u5C4F\u969C\u4E4B\u540E\u7684\u5185\u5B58\u8BBF\u95EE\u6307\u4EE4</td></tr></tbody></table><p>\u57FA\u4E8E <strong>\u4FDD\u5B88\u7B56\u7565</strong> \u7684 JMM \u5185\u5B58\u5C4F\u969C\u63D2\u5165\u7B56\u7565\uFF1A</p><ul><li><p>\u5728\u6BCF\u4E2A volatile \u5199\u64CD\u4F5C\u7684\u524D\u9762\u63D2\u5165\u4E00\u4E2A StoreStore \u5C4F\u969C\uFF1B</p></li><li><p>\u5728\u6BCF\u4E2A volatile \u5199\u64CD\u4F5C\u7684\u540E\u9762\u63D2\u5165\u4E00\u4E2A StoreLoad \u5C4F\u969C\u3002</p><img src="http://s3v2-qos.storage.wanyol.com/guass-cloud-storage-provider/wallpaper/21/04/27/c76c301df5d445599c3a02623da39705.jpg"></li><li><p>\u5728\u6BCF\u4E2A volatile \u8BFB\u64CD\u4F5C\u7684\u540E\u9762\u63D2\u5165\u4E00\u4E2A LoadLoad \u5C4F\u969C\uFF1B</p></li><li><p>\u5728\u6BCF\u4E2A volatile \u8BFB\u64CD\u4F5C\u7684\u540E\u9762\u63D2\u5165\u4E00\u4E2A LoadStore \u5C4F\u969C\u3002</p><img src="http://s3v2-qos.storage.wanyol.com/guass-cloud-storage-provider/wallpaper/21/04/27/a24e0f6319044dbba360f02a2cf92abd.jpg"></li></ul><h2 id="synchronized" tabindex="-1"><a class="header-anchor" href="#synchronized" aria-hidden="true">#</a> synchronized</h2><p>\u53EF\u4EE5\u7528\u5728\u9759\u6001\u65B9\u6CD5\u3001\u5B9E\u4F8B\u65B9\u6CD5\u6216\u4EE3\u7801\u5757\u4E0A\uFF0C\u4FDD\u8BC1\u4E86\uFF1A</p><ul><li>\u539F\u5B50\u6027\uFF0C\u7EBF\u7A0B\u4E92\u65A5\u7684\u8BBF\u95EE\u540C\u6B65\u4EE3\u7801\u3002</li><li>\u53EF\u89C1\u6027\uFF0C\u52A0\u9501\u65F6\u6E05\u7A7A\u5DE5\u4F5C\u5185\u5B58\u4E2D\u5171\u4EAB\u53D8\u91CF\u7684\u503C\uFF0C\u89E3\u9501\u65F6\u540C\u6B65\u5DE5\u4F5C\u5185\u5B58\u4E2D\u5171\u4EAB\u53D8\u91CF\u7684\u503C\u5230\u4E3B\u5185\u5B58\u3002</li></ul><p><strong>\u61D2\u6C49\u5F0F\u5355\u4F8B\u6A21\u5F0F\u7684\u53CC\u91CD\u9501\u68C0\u67E5(dcl)</strong></p><p>\u540C\u65F6\u5E94\u7528 synchronized \u548C volatile \u7684\u7279\u6027\u7684\u6848\u4F8B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Singleton {
    private Singleton() { }
    private volatile static Singleton instance;
  
    public synchronized Singleton getInstanceSlowly(){
        if(instance == null\uFF09
            return instance = new Singleton();
        }
        return instance;
    }
  
    public Singleton getInstance(){
        if(instance == null){
            synchronized (Singleton.class){
                if(instance == null){
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ol><li><p><code>synchronized</code> \u4FDD\u8BC1\u4E86 <code>new</code> \u64CD\u4F5C\u7684\u539F\u5B50\u6027\uFF0C\u52A0\u4E0A\u7B2C\u4E8C\u6B21\u7684\u5224\u7A7A\uFF0C\u53EF\u4EE5\u786E\u4FDD\u4E0D\u4F1A <code>new</code> \u51FA\u591A\u4E2A\u5B9E\u4F8B\uFF1B</p></li><li><p><code>volatile</code> \u4FDD\u8BC1\u4E86 <code>instance</code> \u7684\u521D\u59CB\u5316\u3002\u5982\u679C\u6CA1\u6709 <code>volatile</code> \u4F1A\u4EA7\u751F\u4EE5\u4E0B\u60C5\u51B5\uFF1A</p></li></ol><img src="http://s3v2-qos.storage.wanyol.com/guass-cloud-storage-provider/wallpaper/21/04/27/ec6666f0ecc945f7b1966fdb28907f81.jpg"><h2 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h2><p><code>ThreadLocal</code> \u9694\u79BB\u4E86\u7684\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\uFF0C\u63D0\u4F9B\u4E86\u7EBF\u7A0B\u672C\u5730\u53D8\u91CF\uFF0C\u8BA9\u7EBF\u7A0B\u5185\u7684\u4E0A\u4E0B\u6587\u5171\u4EAB\u66F4\u65B9\u4FBF\u3002</p><h3 id="withinitial-\u548C-initialvalue" tabindex="-1"><a class="header-anchor" href="#withinitial-\u548C-initialvalue" aria-hidden="true">#</a> withInitial \u548C initialValue</h3><p>\u5F53\u6CA1\u8C03\u7528\u8FC7 <code>set</code> \u800C\u76F4\u63A5\u8C03\u7528 <code>get</code> \u65F6\uFF0C\u4F1A\u7528 <code>initialValue</code> \u8BBE\u7F6E\u521D\u59CB\u503C\uFF0C\u9ED8\u8BA4\u7684\u5B9E\u73B0\u662F\u4E00\u4E2A\u8FD4\u56DE <code>null</code> \u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7EE7\u627F <code>ThreadLocal</code> \u91CD\u5199\u8BE5\u65B9\u6CD5\u4E3A\u7EBF\u7A0B\u672C\u5730\u53D8\u91CF\u63D0\u4F9B\u521D\u59CB\u503C\u3002</p><p>\u66F4\u7B80\u4FBF\u7684\u65B9\u5F0F\u662F\u4F7F\u7528 <code>ThreadLocal</code> \u7684 <code>withInitial</code> \u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u4F20\u5165\u4E00\u4E2A <code>Supplier</code> \u5373\u53EF\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ThreadLocal&lt;Integer&gt; whatever = ThreadLocal.withInitial(() -&gt; 0);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="inheritablethreadlocal-\u548C-childvalue" tabindex="-1"><a class="header-anchor" href="#inheritablethreadlocal-\u548C-childvalue" aria-hidden="true">#</a> InheritableThreadLocal \u548C childValue</h3><p>\u4F7F\u7528 <code>InheritableThreadLocal</code> \u65F6\uFF0C\u65B0\u5EFA\u7684\u5B50\u7EBF\u7A0B\u65F6\u53EF\u4EE5\u7EE7\u627F\u7236\u7EBF\u7A0B\u7684\u7EBF\u7A0B\u672C\u5730\u53D8\u91CF\uFF0C</p><p>\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u91CD\u5199 <code>childValue</code> \u65B9\u6CD5\u6765\u8BBE\u7F6E\u7EE7\u627F\u540E\u7684\u65B0\u503C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class InheritableThreadLocalDemo {

    static final InheritableThreadLocal&lt;String&gt; THREAD_LOCAL = new InheritableThreadLocal&lt;&gt;() {
        @Override
        protected String childValue(String parentValue) {
            return parentValue.repeat(2);
        }
    };

    public static void main(String[] args) {
        THREAD_LOCAL.set(&quot;123&quot;);
        // \u4E3B\u7EBF\u7A0B\u8BFB\uFF1A123
        System.out.println(THREAD_LOCAL.get());
        new Thread(() -&gt; {
            // \u4E00\u7EA7\u5B50\u7EBF\u7A0B\u8BFB\uFF1A123123
            System.out.println(THREAD_LOCAL.get());
            new Thread(() -&gt; {
                // \u4E8C\u7EA7\u5B50\u7EBF\u7A0B\u8BFB\uFF1A123123123123
                System.out.println(THREAD_LOCAL.get());
                THREAD_LOCAL.remove();
            }).start();
        }).start();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="\u5B9E\u73B0\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u7EC6\u8282" aria-hidden="true">#</a> \u5B9E\u73B0\u7EC6\u8282</h3><img src="http://s3v2-qos.storage.wanyol.com/guass-cloud-storage-provider/wallpaper/21/04/27/0d4af95d4a6f481083ae485944108d42.jpg"><img src="http://s3v2-qos.storage.wanyol.com/guass-cloud-storage-provider/wallpaper/21/04/27/3055ae3313894f8aa668ab9fafbeaf67.jpg"><p><code>ThreadLocal</code> \u53EF\u662F\u8BF4\u662F\u4E00\u4E2A <strong>\u5DE5\u5177\u7C7B</strong>\uFF0C\u5B9E\u9645\u5B58\u6570\u636E\u7684 <code>map</code> \u662F\u653E\u5728\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u7C7B\u7684\u5C5E\u6027\u4E4B\u4E2D\u7684\u3002</p><h3 id="\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a> \u5B9E\u8DF5</h3><h4 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5F31\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5F31\u5F15\u7528" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F7F\u7528\u5F31\u5F15\u7528</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void foo() {
    var threadLocal = new ThreadLocal&lt;Integer&gt;();
    threadLocal.set(10000);
}

public void bar() {
    foo();
    foo();
    foo();
    foo();
    foo();
    foo();
    foo();
    foo();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8003\u8651\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u5728 bar \u4E2D\u8C03\u7528\u4E86\u5F88\u591A\u6B21 foo\uFF0C\u6BCF\u6B21\u8C03\u7528\u90FD\u521B\u5EFA\u4E86\u4E00\u4E2A ThreadLocal \u5BF9\u8C61\uFF0C\u4ED6\u4EEC\u90FD\u4F1A\u5F62\u6210 Entry \u653E\u5165 ThreadLocalMap \u4E2D\uFF0C\u5982\u679C Entry \u4F7F\u7528\u5F3A\u5F15\u7528\uFF0C\u90A3\u4E48\u5806\u4E2D ThreadLocal \u5BF9\u8C61\u5C31\u6C38\u8FDC\u4E0D\u4F1A\u56DE\u6536\uFF0C\u5C31\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\uFF0C\u800C\u5982\u679C\u91C7\u7528\u5F31\u5F15\u7528\uFF0C\u53EA\u8981\u6808\u4E0D\u5F15\u7528 ThreadLocal\uFF0C\u5B83\u5C31\u80FD\u88AB\u56DE\u6536\uFF0C\u56DE\u6536\u540E Entry \u5C31\u53D8\u6210 k \u4E3A null \u7684 stale entry \u4E86\uFF0C\u8FD9\u6837 ThreadLocal \u5728\u6267\u884C set\u3001get\u3001remove \u65F6\u53EF\u4EE5\u6839\u636E k \u662F\u5426\u4E3A null \u8BC6\u522B stale entry \u5E76\u8FDB\u884C\u6E05\u9664\uFF0C\u5927\u5927\u907F\u514D\u4E86\u5185\u5B58\u6CC4\u6F0F\u3002</p><p><em>\u5C06 <code>ThreadLocal</code> \u7F6E\u4E3A <code>null</code> \u5E76\u4E0D\u80FD\u4F7F <code>value</code> \u88AB\u5783\u573E\u56DE\u6536\u3002</em></p><p>\u5C06\u5F15\u7528\u7F6E\u4E3A <code>nul</code> \u53EF\u4EE5\u6D88\u9664\u5BF9 <code>ThreadLocal</code> \u7684\u5F3A\u5F15\u7528\uFF0C\u52A0\u4E0A <code>map</code> \u5BF9 <code>ThreadLocal</code> \u5F15\u7528\u662F\u5F31\u5F15\u7528\uFF0C\u6240\u4EE5 <code>ThreadLocal</code> \u5B9E\u4F8B\u53EF\u4EE5\u88AB\u5783\u573E\u56DE\u6536\uFF0C</p><p>\u4F46\u662F\u5BF9\u4E8E <code>value</code> \u800C\u8A00\uFF0C\u59CB\u7EC8\u5B58\u5728\u4EE5\u7EBF\u7A0B\u5BF9\u8C61\u4E3A\u8D77\u70B9\u7684\u5F3A\u5F15\u7528\uFF0C\u6240\u4EE5 <code>value</code> \u5728\u7EBF\u7A0B\u7ED3\u675F\u4E4B\u524D\u4E00\u76F4\u4E0D\u80FD\u88AB\u56DE\u6536\uFF0C</p><p>\u8FD9\u4E00\u70B9\u5728\u4F7F\u7528\u7EBF\u7A0B\u6C60\u7684\u65F6\u5019\u8981\u683C\u5916\u6CE8\u610F\u3002</p><p><strong>\u4ECE\u5B8F\u89C2\u8BB2\uFF0C<code>ThreadLocal</code> \u53EA\u662F\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u800C\u4E0D\u662F\u5B9E\u9645\u5B58\u6570\u636E\u7684\u5730\u65B9\uFF0C\u5C06\u5176\u7F6E\u4E3A <code>null</code>\uFF0C\u663E\u7136\u4E0D\u80FD\u91CA\u653E\u6570\u636E\u5360\u7528\u7684\u5185\u5B58\u3002</strong></p><p>\u4E0D\u8FC7\uFF0Cjdk \u4E5F\u5BF9\u8FD9\u4E2A\u95EE\u9898\u4F5C\u51FA\u4E86\u4E00\u4E9B\u4F18\u5316\uFF0C\u5F53\u8C03\u7528 <code>set</code> \u6216 <code>get</code> \u65B9\u6CD5\u65F6\u53EF\u80FD\u4F1A\u6E05\u7406 stale \u6570\u636E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>expungeStaleEntry(...)
replaceStaleEntry(...)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F5C\u4E3A\u5F00\u53D1\u8005\uFF0C\u4E0D\u80FD\u4F9D\u8D56 jdk \u4E0D\u53CA\u65F6\u4E14\u4E0D\u786E\u4FDD\u4E00\u5B9A\u6267\u884C\u7684\u6E05\u7406\u903B\u8F91\uFF0C\u6700\u597D\u5728\u4F7F\u7528\u5B8C\u6BD5\u540E\u663E\u5F0F\u7684\u8C03\u7528 <code>remove</code> \u65B9\u6CD5\uFF1B</p><p>\u4E5F\u53EF\u4EE5\u518D\u5C01\u88C5\u4E00\u5C42\uFF0C\u5B9E\u73B0 <code>AutoCloseable</code> \u63A5\u53E3\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Context implements AutoCloseable {

    final ThreadLocal&lt;String&gt; ctx = new ThreadLocal&lt;&gt;();

    public Context(String someData) {
        ctx.set(someData);
    }

    public String get() {
        return ctx.get();
    }

    @Override
    public void close() {
        ctx.remove();
    }
}


try (var ctx = new Context(&quot;someData&quot;)) {
// to something
} 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="aqs" tabindex="-1"><a class="header-anchor" href="#aqs" aria-hidden="true">#</a> AQS</h2><p>AQS \u5373\u62BD\u8C61\u961F\u5217\u540C\u6B65\u5668\u5185\u90E8\u7EF4\u62A4\u4E86 FIFO \u7684\u7C7B CLH \u961F\u5217\uFF0C\u5E76\u4F7F\u7528\u53D8\u91CF <code>state</code> \u6807\u8BB0\u540C\u6B65\u72B6\u6001\uFF08\u53EF\u4EE5\u4EE3\u8868\u8D44\u6E90\u6570\u3001\u9501\u72B6\u6001\u7B49\u7B49\uFF09\u3002\u4F7F\u7528\u8005\u901A\u8FC7\u91CD\u5199 <code>tryAcquire</code>\u3001<code>tryRelease</code> \u7B49\u65B9\u6CD5\u6765\u64CD\u4F5C <code>state</code> \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u540C\u6B65\u89C4\u5219\u3002</p><p>AQS \u63D0\u4F9B\u4E86\uFF1A</p><ul><li>\u540C\u6B65\u72B6\u6001\u7684\u539F\u5B50\u6027\u7BA1\u7406\uFF1B</li><li>\u7EBF\u7A0B\u7684\u963B\u585E\u548C\u89E3\u9664\u963B\u585E\uFF1B</li><li>\u63D0\u4F9B\u963B\u585E\u7EBF\u7A0B\u7684\u5B58\u50A8\u961F\u5217\u3002</li></ul><img src="http://s3v2-qos.storage.wanyol.com/guass-cloud-storage-provider/wallpaper/21/04/27/0551646f2c8b4096b4a9c4807c071cd3.jpg"><h3 id="aqs-\u7684\u57FA\u7840-clh" tabindex="-1"><a class="header-anchor" href="#aqs-\u7684\u57FA\u7840-clh" aria-hidden="true">#</a> AQS \u7684\u57FA\u7840: CLH</h3><p>AQS \u6E90\u7801\u6CE8\u91CA\uFF1A</p><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>The wait queue is a variant of a &quot;CLH&quot; (Craig, Landin, and Hagersten) lock queue. 
CLH locks are normally used for spinlocks.  
We instead use them for blocking synchronizers, 
but use the same basic tactic of holding some of the control information about a thread in the predecessor of its node. 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><p>\u6B63\u5982\u6E90\u7801\u6CE8\u91CA\u6240\u8BF4\uFF0CAQS \u4E2D\u7684\u7B49\u5F85\u961F\u5217\u501F\u9274\u4E86 CLH , \u90FD\u662F\u628A\u4E00\u4E9B\u63A7\u5236\u4FE1\u606F\u653E\u5230\u4E86\u81EA\u5DF1\u7684\u524D\u9A71\u8282\u70B9\u4E2D\u3002</p><p>\u4E0B\u9762\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A CLH \u9501\u961F\u5217\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class CLHLock {
  
    public static int count = 0;

    public static void main(String[] args) throws InterruptedException {
      
        var lock = new CLHLock();


        var add = new Thread(() -&gt; {
            for (int i = 0; i &lt; 10000; i++) {
                lock.lock();
                count += 1;
                lock.unlock();
            }
        });


        var dec = new Thread(() -&gt; {
            for (int i = 0; i &lt; 10000; i++) {
                lock.lock();
                count -= 1;
                lock.unlock();
            }
        });


        add.start();
        dec.start();
        add.join();
        dec.join();
        System.out.println(count); // 0
    }

  
    static class QueueNode {
        //! \u8FD9\u91CC\u4E0D\u52A0 volatile \u4F1A\u6709\u53EF\u89C1\u6027\u95EE\u9898\uFF0C\u5BFC\u81F4\u6B7B\u5FAA\u73AF
        volatile boolean locked;
    }

    AtomicReference&lt;QueueNode&gt; tail = new AtomicReference&lt;&gt;(new QueueNode());
    
    ThreadLocal&lt;QueueNode&gt; pred = ThreadLocal.withInitial(() -&gt; null);
    ThreadLocal&lt;QueueNode&gt; current = ThreadLocal.withInitial(QueueNode::new);

    public void lock() {
        QueueNode node = current.get();
        node.locked = true;
        QueueNode pred = tail.getAndSet(node);
        this.pred.set(pred);
        //noinspection StatementWithEmptyBody
        while (pred.locked) ;
    }

    public void unlock() {
        QueueNode node = current.get();
        node.locked = false;
        current.set(this.pred.get());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>\u7ED3\u8BBA\uFF1ACLH \u662F <code>\u516C\u5E73\u81EA\u65CB</code> \u9501</p><h2 id="countdownlatch\u3001cyclicbarrier-\u548C-semaphore" tabindex="-1"><a class="header-anchor" href="#countdownlatch\u3001cyclicbarrier-\u548C-semaphore" aria-hidden="true">#</a> CountDownLatch\u3001CyclicBarrier \u548C Semaphore</h2><h3 id="countdownlatch" tabindex="-1"><a class="header-anchor" href="#countdownlatch" aria-hidden="true">#</a> CountDownLatch</h3><p>\u63D0\u4F9B\u4E86\u8BA1\u6570\u7B49\u5F85\u7684\u529F\u80FD\uFF0C\u8C03\u7528\u4E86 <code>await</code> \u7684\u7EBF\u7A0B\u4F1A\u7B49\u5F85\u5176\u4ED6\u7EBF\u7A0B\u5C06\u5012\u8BA1\u6570\u51CF\u5230 0 \u540E\u518D\u6267\u884C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class CountDownLatchDemo {
    public static void main(String[] args) throws InterruptedException {
        CountDownLatch countDownLatch = new CountDownLatch(6);

        for(int i = 1; i &lt;= 6; i++){
            new Thread(()-&gt;{
                System.out.println(Thread.currentThread().getName()+&quot;\\t \u505A\u4E00\u4E9B\u5DE5\u4F5C&quot;);
                countDownLatch.countDown();
            },String.valueOf(i)).start();
        }
        countDownLatch.await();
      
        System.out.println(Thread.currentThread().getName()+&quot; \u6BCF\u4E2A\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u7684\u505A\u5B8C\u4E86\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E0B\u4E00\u6B65\u4E86&quot;);
    }
}

/*
5	   \u505A\u4E00\u4E9B\u5DE5\u4F5C
2	   \u505A\u4E00\u4E9B\u5DE5\u4F5C
6	   \u505A\u4E00\u4E9B\u5DE5\u4F5C
1	   \u505A\u4E00\u4E9B\u5DE5\u4F5C
4	   \u505A\u4E00\u4E9B\u5DE5\u4F5C
3	   \u505A\u4E00\u4E9B\u5DE5\u4F5C
main \u6BCF\u4E2A\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u7684\u505A\u5B8C\u4E86\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E0B\u4E00\u6B65\u4E86
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="cyclicbarrier" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier" aria-hidden="true">#</a> CyclicBarrier</h3><p>\u8BA9\u7EBF\u7A0B\u4EEC\u5148\u540E\u5728\u68C0\u67E5\u70B9\u505C\u4F4F\uFF0C\u7B49\u5168\u90E8\u6267\u884C\u5230\u68C0\u67E5\u70B9\u540E\u518D\u7EE7\u7EED\u3002<code>CyclicBarrier</code> \u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class CyclicBarrierDemo {
    public static void main(String[] args) throws InterruptedException {
        CyclicBarrier barrier  = new CyclicBarrier(6);

        for(int i = 1; i &lt;= 6; i++){
            new Thread(()-&gt;{
                System.out.println(Thread.currentThread().getName()+&quot;\\t \u505A\u4E00\u4E9B\u5DE5\u4F5C&quot;);
                try {
                    barrier.await();
                } catch (InterruptedException | BrokenBarrierException e) {
                    e.printStackTrace();
                }
                System.out.println(Thread.currentThread().getName()+&quot;\\t \u7EE7\u7EED\u6267\u884C&quot;);
            },String.valueOf(i)).start();
        }

    }
}

/*
1	 \u505A\u4E00\u4E9B\u5DE5\u4F5C
5	 \u505A\u4E00\u4E9B\u5DE5\u4F5C
4	 \u505A\u4E00\u4E9B\u5DE5\u4F5C
2	 \u505A\u4E00\u4E9B\u5DE5\u4F5C
3	 \u505A\u4E00\u4E9B\u5DE5\u4F5C
6	 \u505A\u4E00\u4E9B\u5DE5\u4F5C
1	 \u7EE7\u7EED\u6267\u884C
3	 \u7EE7\u7EED\u6267\u884C
6	 \u7EE7\u7EED\u6267\u884C
2	 \u7EE7\u7EED\u6267\u884C
5	 \u7EE7\u7EED\u6267\u884C
4	 \u7EE7\u7EED\u6267\u884C
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="semaphore" tabindex="-1"><a class="header-anchor" href="#semaphore" aria-hidden="true">#</a> Semaphore</h3><p>\u63D0\u4F9B\u4E86\u5BF9\u5171\u4EAB\u8D44\u6E90\u5360\u7528\u7684\u9650\u5236\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class SemaphoreDemo {
		public static void main(String[] args) {
        int N = 8;
        Semaphore semaphore = new Semaphore(5);
        ExecutorService executor = Executors.newFixedThreadPool(8);
        for (int i = 0; i &lt; N; i++) {
            executor.submit(new Worker(i, semaphore));
        }
    }

    static class Worker implements Runnable {
        private final int num;
        private final Semaphore semaphore;

        public Worker(int num, Semaphore semaphore) {
            this.num = num;
            this.semaphore = semaphore;
        }

        @Override
        public void run() {
            try {
                semaphore.acquire();
                System.out.println(&quot;\u5DE5\u4EBA&quot; + this.num + &quot;\u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...&quot;);
                Thread.sleep(2000);
                System.out.println(&quot;\u5DE5\u4EBA&quot; + this.num + &quot;\u91CA\u653E\u51FA\u673A\u5668&quot;);
                semaphore.release();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

/*
\u5DE5\u4EBA 3 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 4 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 2 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 0 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 1 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 1 \u91CA\u653E\u51FA\u673A\u5668
\u5DE5\u4EBA 2 \u91CA\u653E\u51FA\u673A\u5668
\u5DE5\u4EBA 3 \u91CA\u653E\u51FA\u673A\u5668
\u5DE5\u4EBA 4 \u91CA\u653E\u51FA\u673A\u5668
\u5DE5\u4EBA 0 \u91CA\u653E\u51FA\u673A\u5668
\u5DE5\u4EBA 6 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 5 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 7 \u5360\u7528\u4E00\u4E2A\u673A\u5668\u5728\u751F\u4EA7...
\u5DE5\u4EBA 7 \u91CA\u653E\u51FA\u673A\u5668
\u5DE5\u4EBA 5 \u91CA\u653E\u51FA\u673A\u5668
\u5DE5\u4EBA 6 \u91CA\u653E\u51FA\u673A\u5668
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h3><p>\u4E24\u4E2A\u7EBF\u7A0B\u4EA4\u66FF\u6253\u5370\u6570\u5B57\u548C\u5B57\u6BCD\uFF0C\u7EBF\u7A0B 1 \u6253\u5370 1\uFF0C\u7EBF\u7A0B 2 \u6253\u5370 a\uFF0C\u7EBF\u7A0B 1 \u6253\u5370 2\uFF0C\u7EBF\u7A0B 2 \u6253\u5370 b\uFF0C\u4EE5\u6B64\u7C7B\u63A8...</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class AlternatelyPrintSynchronized {

    public static void main(String[] args) {
        final Object obj = new Object();
        char[] digitalArr = &quot;1234567&quot;.toCharArray();
        char[] letterArr = &quot;ABCDEFG&quot;.toCharArray();

        new Thread(() -&gt; {
            synchronized (obj) {
                for (char digital : digitalArr) {
                    System.out.print(digital);
                    try {
                        obj.notify();
                        obj.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                obj.notify();
            }
        }, &quot;t1&quot;).start();

        new Thread(() -&gt; {
            synchronized (obj) {
                for (char letter : letterArr) {
                    System.out.print(letter);
                    try {
                        obj.notify();
                        obj.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                obj.notify();
            }
        }, &quot;t2&quot;).start();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h4 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h4><p>\u53EF\u4EE5\u4FDD\u8BC1\u5148\u8F93\u51FA\u6570\u5B57\u5417\uFF0C\u5982\u4F55\u4FDD\u8BC1\u5148\u8F93\u51FA\u6570\u5B57</p><h4 id="\u5148\u8F93\u51FA\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5148\u8F93\u51FA\u6570\u5B57" aria-hidden="true">#</a> \u5148\u8F93\u51FA\u6570\u5B57</h4><p>\u5229\u7528 CountDownLatch:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class AlternatelyPrintSynchronized {

    public static void main(String[] args) {
        final Object obj = new Object();
        char[] digitalArr = &quot;1234567&quot;.toCharArray();
        char[] letterArr = &quot;ABCDEFG&quot;.toCharArray();
        final CountDownLatch latch = new CountDownLatch(1);

        new Thread(() -&gt; {
            synchronized (obj) {
                latch.countDown();
                for (char digital : digitalArr) {
                    System.out.print(digital);
                    try {
                        obj.notify();
                        obj.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                obj.notify();
            }
        }, &quot;t1&quot;).start();

        new Thread(() -&gt; {
            try {
                latch.await();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            synchronized (obj) {
                for (char letter : letterArr) {
                    System.out.print(letter);
                    try {
                        obj.notify();
                        obj.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                obj.notify();
            }
        }, &quot;t2&quot;).start();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="future-\u548C-completablefuture" tabindex="-1"><a class="header-anchor" href="#future-\u548C-completablefuture" aria-hidden="true">#</a> Future \u548C CompletableFuture</h2><h3 id="future" tabindex="-1"><a class="header-anchor" href="#future" aria-hidden="true">#</a> Future</h3><p>Future \u53EF\u4EE5\u66F4\u65B9\u4FBF\u7684\u83B7\u53D6\u5176\u4ED6\u7684\u7EBF\u7A0B\u7684\u8FD4\u56DE\u503C\u3002</p><p>\u7528\u7EBF\u7A0B\u6C60\u63D0\u4EA4 <code>Callable</code> \u4EFB\u52A1\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>Future</code> \u5BF9\u8C61\uFF0C\u7136\u540E\uFF0C\u67D0\u4E2A\u65F6\u523B\u8C03\u7528 <code>Future</code> \u5BF9\u8C61\u7684 <code>get()</code> \u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u83B7\u5F97\u5F02\u6B65\u6267\u884C\u7684\u7ED3\u679C\u3002</p><p>\u5728\u8C03\u7528 <code>get()</code> \u65F6\uFF0C\u5982\u679C\u5F02\u6B65\u4EFB\u52A1\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u5C31\u76F4\u63A5\u83B7\u5F97\u7ED3\u679C\u3002\u5982\u679C\u5F02\u6B65\u4EFB\u52A1\u8FD8\u6CA1\u6709\u5B8C\u6210\uFF0C\u90A3\u4E48 <code>get()</code> \u4F1A\u963B\u585E\uFF0C\u76F4\u5230\u4EFB\u52A1\u5B8C\u6210\u540E\u624D\u8FD4\u56DE\u7ED3\u679C\u3002</p><h3 id="completablefuture" tabindex="-1"><a class="header-anchor" href="#completablefuture" aria-hidden="true">#</a> CompletableFuture</h3><p>\u76F8\u6BD4 <code>future</code> \u589E\u52A0\u4E86\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E0D\u518D\u963B\u585E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class CompletableFutureDemo {
    public static void main(String[] args) throws Exception {
        CompletableFuture&lt;String&gt; step1 = CompletableFuture.supplyAsync(CompletableFutureDemo::task1);
        CompletableFuture&lt;String&gt; step2 = step1.thenApplyAsync(CompletableFutureDemo::task2);
        step2.thenAccept(System.out::println);
      
        Thread.sleep(2000);
    }

    static String task1() {
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
        }
        return &quot;task1Res&quot;;
    }

    static String task2(String task1Res) {
        try {
            // use task1Res do something
          	System.out.println(&quot;get &quot; + task1Res);
            Thread.sleep(100);
        } catch (InterruptedException e) {
        }
        return &quot;finalRes&quot;;
    }
}

/*
get task1Res
finalRes
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u53E6\u5916\uFF0C<code>CompletableFuture</code> \u8FD8\u63D0\u4F9B\u4E86 <code>anyOf</code> \u548C <code>allOf</code> \u7B49 api\uFF0C\u5229\u7528\u8FD9\u4E9B api \u53EF\u4EE5\u5B9E\u73B0\u66F4\u4E30\u5BCC\u7684\u5F02\u6B65\u6D41\u7A0B\u63A7\u5236\u3002</p><h2 id="forkjoin" tabindex="-1"><a class="header-anchor" href="#forkjoin" aria-hidden="true">#</a> ForkJoin</h2><p>\u5229\u7528\u4E86\u5206\u6CBB\u7684\u601D\u60F3\uFF0C\u4FBF\u4E8E\u5927\u89C4\u6A21\u8BA1\u7B97\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class ForkJoinDemo {
    public static void main(String[] args) throws Exception {
        // \u521B\u5EFA 2000 \u4E2A\u968F\u673A\u6570\u7EC4\u6210\u7684\u6570\u7EC4:
        long[] array = new long[2000];
        long expectedSum = 0;
        for (int i = 0; i &lt; array.length; i++) {
            array[i] = random();
            expectedSum += array[i];
        }
        System.out.println(&quot;Expected sum: &quot; + expectedSum);
        // fork/join:
        ForkJoinTask&lt;Long&gt; task = new SumTask(array, 0, array.length);
        long startTime = System.currentTimeMillis();
        Long result = ForkJoinPool.commonPool().invoke(task);
        long endTime = System.currentTimeMillis();
        System.out.println(&quot;Fork/join sum: &quot; + result + &quot; in &quot; + (endTime - startTime) + &quot; ms.&quot;);
    }

    static Random random = new Random(0);

    static long random() {
        return random.nextInt(10000);
    }
}

class SumTask extends RecursiveTask&lt;Long&gt; {
    static final int THRESHOLD = 500;
  
    long[] array;
    int start;
    int end;

    SumTask(long[] array, int start, int end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }

    @Override
    protected Long compute() {
        if (end - start &lt;= THRESHOLD) {
            // \u5982\u679C\u4EFB\u52A1\u8DB3\u591F\u5C0F, \u76F4\u63A5\u8BA1\u7B97:
            long sum = 0;
            for (int i = start; i &lt; end; i++) {
                sum += this.array[i];
                // \u653E\u6162\u8BA1\u7B97\u901F\u5EA6:
                try {
                    //noinspection BusyWait
                    Thread.sleep(1);
                } catch (InterruptedException ignored) {
                }
            }
            return sum;
        }
        // \u4EFB\u52A1\u592A\u5927, \u4E00\u5206\u4E3A\u4E8C:
        int middle = (end + start) / 2;
        System.out.printf(&quot;split %d~%d ==&gt; %d~%d, %d~%d%n&quot;, start, end, start, middle, middle, end);
        SumTask subtask1 = new SumTask(this.array, start, middle);
        SumTask subtask2 = new SumTask(this.array, middle, end);
        invokeAll(subtask1, subtask2);
        Long subresult1 = subtask1.join();
        Long subresult2 = subtask2.join();
        Long result = subresult1 + subresult2;
        System.out.println(&quot;result = &quot; + subresult1 + &quot; + &quot; + subresult2 + &quot; ==&gt; &quot; + result);
        return result;
    }
}

/*
Expected sum: 9788366
split 0~2000 ==&gt; 0~1000, 1000~2000
split 0~1000 ==&gt; 0~500, 500~1000
split 1000~2000 ==&gt; 1000~1500, 1500~2000
result = 2485485 + 2491717 ==&gt; 4977202
result = 2391591 + 2419573 ==&gt; 4811164
result = 4811164 + 4977202 ==&gt; 9788366
Fork/join sum: 9788366 in 664 ms.
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6BCF\u7D2F\u52A0\u4E00\u6B21\uFF0C\u5728\u4EE3\u7801\u91CC\u8BA9\u7EBF\u7A0B <code>sleep</code> \u4E86 1 \u6BEB\u79D2\uFF0C\u6240\u4EE5\u5982\u679C\u987A\u5E8F\u7D2F\u52A0 2000 \u6B21\uFF0C\u7406\u8BBA\u4E0A\u9700\u8981\u81F3\u5C11 2000ms\u3002\u5728\u4F7F\u7528 ForkJoin \u540E\u603B\u8017\u65F6\u4E3A 664ms\uFF0C\u6548\u7387\u4E0A\u6709\u8F83\u5927\u7684\u63D0\u5347\u3002</p><h2 id="\u591A\u7EBF\u7A0B\u4E00\u5B9A\u6BD4\u5355\u7EBF\u7A0B\u5FEB\u5417" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EBF\u7A0B\u4E00\u5B9A\u6BD4\u5355\u7EBF\u7A0B\u5FEB\u5417" aria-hidden="true">#</a> \u591A\u7EBF\u7A0B\u4E00\u5B9A\u6BD4\u5355\u7EBF\u7A0B\u5FEB\u5417</h2><p>\u7EBF\u7A0B\u7684\u4E0A\u4E0B\u6587\u5207\u6362\u548C\u65B0\u7EBF\u7A0B\u7684\u521B\u5EFA\u90FD\u662F\u6709\u6027\u80FD\u5F00\u9500\u7684\u3002</p><p>\u5982\u679C\u5F00\u542F\u4E86\u8FC7\u591A\u7684\u7EBF\u7A0B\uFF0C\u6216\u8005\u9891\u7E41\u7684\u52A0\u9501\u89E3\u9501\u90FD\u6709\u53EF\u80FD\u964D\u4F4E\u7CFB\u7EDF\u7684\u6548\u7387\uFF0C\u751A\u81F3\u4F7F\u7CFB\u7EDF\u5D29\u6E83\u3002</p><p>\u6240\u4EE5\u5408\u7406\u7684\u8BBE\u7F6E\u7EBF\u7A0B\u6570\u81F3\u5173\u91CD\u8981\uFF0C\u4E0B\u9762\u6709\u4E00\u4E9B\u5173\u4E8E\u7EBF\u7A0B\u6570\u8BBE\u7F6E\u7684\u5C0F tips</p><h3 id="\u8BA1\u7B97\u5BC6\u96C6\u578B" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u5BC6\u96C6\u578B" aria-hidden="true">#</a> \u8BA1\u7B97\u5BC6\u96C6\u578B</h3><p>\u573A\u666F</p><ul><li>\u89C6\u9891\u89E3\u7801</li><li>\u6570\u636E\u8BA1\u7B97\uFF0C\u5982\u4E09\u89D2\u51FD\u6570\uFF0C\u5706\u5468\u7387</li></ul><p>\u4E00\u822C\u53EF\u8BBE\u7F6E\u4E3A</p><ol><li>\u6838\u5FC3\u52A0 1\uFF0C\u57FA\u4E8E\u5145\u5206\u5229\u7528 cpu \u7684\u601D\u60F3</li></ol><blockquote><p>\u5BF9\u4E8E\u8BA1\u7B97\u5BC6\u96C6\u578B\u7684\u7A0B\u5E8F\uFF0C\u7EBF\u7A0B\u6570\u5E94\u5F53\u7B49\u4E8E\u6838\u5FC3\u6570\uFF0C\u4F46\u662F\u518D\u600E\u4E48\u8BA1\u7B97\u5BC6\u96C6\uFF0C\u603B\u6709\u4E00\u4E9B IO\uFF0C\u6240\u4EE5\u518D\u52A0\u4E00\u4E2A\u7EBF\u7A0B\u6765\u628A\u7B49\u5F85 IO \u7684 CPU \u65F6\u95F4\u5229\u7528\u8D77\u6765</p></blockquote><ol start="2"><li>\u6838\u5FC3\u6570\u51CF\u4E00\uFF0C\u57FA\u4E8E\u670D\u52A1\u53EF\u7528\u6027\u7684\u601D\u60F3</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// forkJion \u6E90\u7801\u4E2D\u7684\u9ED8\u8BA4\u7EBF\u7A0B\u6570\u4E3A\u6240\u6709\u6838\u5FC3\u6570\u51CF\u4E00
ForkJoinPool.commonPool().invoke(task);
// ForkJoinPool.java
parallelism = Runtime.getRuntime().availableProcessors() - 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="io-\u5BC6\u96C6\u578B" tabindex="-1"><a class="header-anchor" href="#io-\u5BC6\u96C6\u578B" aria-hidden="true">#</a> IO \u5BC6\u96C6\u578B</h3><p>\u573A\u666F</p><ul><li>Web \u5E94\u7528\uFF0C\u5982 tomcat \u7684 maxThreads = 200</li></ul><p>\u963B\u585E\u7CFB\u6570 = \u963B\u585E\u65F6\u95F4/(\u963B\u585E\u65F6\u95F4+\u8BA1\u7B97\u65F6\u95F4)</p><p>\u7EBF\u7A0B\u6570 = CPU \u53EF\u7528\u6838\u5FC3\u6570/(1 - \u963B\u585E\u7CFB\u6570\uFF09</p><p>\u6B63\u5E38\u7684\u963B\u585E\u7CFB\u6570\u5927\u6982\u90FD 0.8\uFF0C0.9 \u5DE6\u53F3</p><h3 id="\u6DF7\u5408\u578B" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408\u578B" aria-hidden="true">#</a> \u6DF7\u5408\u578B</h3><p>\u573A\u666F</p><ul><li>mysql cost</li></ul><p>mysql \u6267\u884C\u8BA1\u5212\u6839\u636E\u6267\u884C\u6210\u672C\u9009\u62E9\u6700\u4F18\u8DEF\u7EBF\uFF0C\u5177\u4F53\u7684\u7B97\u6CD5\u662F io \u4E00\u4E2A\u6570\u636E\u9875\u6210\u672C\u4E3A 1\uFF0C\u626B\u63CF\u4E00\u4E2A record \u6210\u672C\u4E3A 0.2\uFF0C\u5982\u679C\u626B\u5168\u8868\u7684\u6210\u672C\u4F4E\u4E8E\u8D70\u7D22\u5F15\uFF0Cmysql \u751A\u81F3\u4F1A\u5FFD\u89C6\u7D22\u5F15\u76F4\u63A5\u626B\u5168\u8868</p><p>\u8FD9\u4E2A\u548C\u7EBF\u7A0B\u6570\u6CA1\u5173\u7CFB\uFF0C\u4F46\u662F\u4F53\u73B0\u4E86\u6DF7\u5408\u578B\u4EFB\u52A1\u7684\u7279\u5F81</p><h2 id="\u7EBF\u7A0B\u6C60" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60</h2><h3 id="threadpoolexecutor-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-\u53C2\u6570" aria-hidden="true">#</a> ThreadPoolExecutor \u53C2\u6570</h3><p>\uFF081\uFF09corePoolSize\uFF1A\u6838\u5FC3\u7EBF\u7A0B\u6570\uFF0C\u7EBF\u7A0B\u6C60\u4E2D\u59CB\u7EC8\u5B58\u6D3B\u7684\u7EBF\u7A0B\u6570\u3002</p><p>\uFF082\uFF09maximumPoolSize: \u6700\u5927\u7EBF\u7A0B\u6570\uFF0C\u7EBF\u7A0B\u6C60\u4E2D\u5141\u8BB8\u7684\u6700\u5927\u7EBF\u7A0B\u6570\u3002</p><p>\uFF083\uFF09keepAliveTime: \u5B58\u6D3B\u65F6\u95F4\uFF0C\u7EBF\u7A0B\u6CA1\u6709\u4EFB\u52A1\u6267\u884C\u65F6\u6700\u591A\u4FDD\u6301\u591A\u4E45\u65F6\u95F4\u4F1A\u7EC8\u6B62\u3002</p><p>\uFF084\uFF09unit: \u5355\u4F4D\uFF0C\u53C2\u6570 keepAliveTime \u7684\u65F6\u95F4\u5355\u4F4D\uFF0C7 \u79CD\u53EF\u9009\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>TimeUnit.DAYS</td><td>\u5929</td></tr><tr><td>TimeUnit.HOURS</td><td>\u5C0F\u65F6</td></tr><tr><td>TimeUnit.MINUTES</td><td>\u5206</td></tr><tr><td>TimeUnit.SECONDS</td><td>\u79D2</td></tr><tr><td>TimeUnit.MILLISECONDS</td><td>\u6BEB\u79D2</td></tr><tr><td>TimeUnit.MICROSECONDS</td><td>\u5FAE\u5999</td></tr><tr><td>TimeUnit.NANOSECONDS</td><td>\u7EB3\u79D2</td></tr></tbody></table><p>\uFF085\uFF09workQueue: \u4E00\u4E2A\u963B\u585E\u961F\u5217\uFF0C\u7528\u6765\u5B58\u50A8\u7B49\u5F85\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u5747\u4E3A\u7EBF\u7A0B\u5B89\u5168\uFF0C7 \u79CD\u53EF\u9009\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>ArrayBlockingQueue</td><td>\u4E00\u4E2A\u7531\u6570\u7EC4\u7ED3\u6784\u7EC4\u6210\u7684\u6709\u754C\u963B\u585E\u961F\u5217\u3002</td></tr><tr><td>LinkedBlockingQueue</td><td>\u4E00\u4E2A\u7531\u94FE\u8868\u7ED3\u6784\u7EC4\u6210\u7684\u6709\u754C\u963B\u585E\u961F\u5217\u3002</td></tr><tr><td>SynchronousQueue</td><td>\u4E00\u4E2A\u4E0D\u5B58\u50A8\u5143\u7D20\u7684\u963B\u585E\u961F\u5217\uFF0C\u5373\u76F4\u63A5\u63D0\u4EA4\u7ED9\u7EBF\u7A0B\u4E0D\u4FDD\u6301\u5B83\u4EEC\u3002</td></tr><tr><td>PriorityBlockingQueue</td><td>\u4E00\u4E2A\u652F\u6301\u4F18\u5148\u7EA7\u6392\u5E8F\u7684\u65E0\u754C\u963B\u585E\u961F\u5217\u3002</td></tr><tr><td>DelayQueue</td><td>\u4E00\u4E2A\u4F7F\u7528\u4F18\u5148\u7EA7\u961F\u5217\u5B9E\u73B0\u7684\u65E0\u754C\u963B\u585E\u961F\u5217\uFF0C\u53EA\u6709\u5728\u5EF6\u8FDF\u671F\u6EE1\u65F6\u624D\u80FD\u4ECE\u4E2D\u63D0\u53D6\u5143\u7D20\u3002</td></tr><tr><td>LinkedTransferQueue</td><td>\u4E00\u4E2A\u7531\u94FE\u8868\u7ED3\u6784\u7EC4\u6210\u7684\u65E0\u754C\u963B\u585E\u961F\u5217\u3002\u4E0E SynchronousQueue \u7C7B\u4F3C\uFF0C\u8FD8\u542B\u6709\u975E\u963B\u585E\u65B9\u6CD5\u3002</td></tr><tr><td>LinkedBlockingDeque</td><td>\u4E00\u4E2A\u7531\u94FE\u8868\u7ED3\u6784\u7EC4\u6210\u7684\u53CC\u5411\u963B\u585E\u961F\u5217\u3002</td></tr></tbody></table><p>\uFF086\uFF09threadFactory: \u7EBF\u7A0B\u5DE5\u5382\uFF0C\u4E3B\u8981\u7528\u6765\u521B\u5EFA\u7EBF\u7A0B\uFF0C\u9ED8\u53CA\u6B63\u5E38\u4F18\u5148\u7EA7\u3001\u975E\u5B88\u62A4\u7EBF\u7A0B\u3002</p><p>\uFF087\uFF09handler\uFF1A\u62D2\u7EDD\u7B56\u7565\uFF0C\u62D2\u7EDD\u5904\u7406\u4EFB\u52A1\u65F6\u7684\u7B56\u7565\uFF0C4 \u79CD\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A AbortPolicy\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>AbortPolicy</td><td>\u62D2\u7EDD\u5E76\u629B\u51FA\u5F02\u5E38\u3002</td></tr><tr><td>CallerRunsPolicy</td><td>\u91CD\u8BD5\u63D0\u4EA4\u5F53\u524D\u7684\u4EFB\u52A1\uFF0C\u5373\u518D\u6B21\u8C03\u7528\u8FD0\u884C\u8BE5\u4EFB\u52A1\u7684 execute()\u65B9\u6CD5\u3002</td></tr><tr><td>DiscardOldestPolicy</td><td>\u629B\u5F03\u961F\u5217\u5934\u90E8\uFF08\u6700\u65E7\uFF09\u7684\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5E76\u6267\u884C\u5F53\u524D\u4EFB\u52A1\u3002</td></tr><tr><td>DiscardPolicy</td><td>\u629B\u5F03\u5F53\u524D\u4EFB\u52A1\u3002</td></tr></tbody></table><h3 id="\u7EBF\u7A0B\u6C60\u7684\u6267\u884C\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u7684\u6267\u884C\u89C4\u5219" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u7684\u6267\u884C\u89C4\u5219</h3><ol><li><p>\u5F53\u7EBF\u7A0B\u6570\u5C0F\u4E8E\u6838\u5FC3\u7EBF\u7A0B\u6570\u65F6\uFF0C\u521B\u5EFA\u7EBF\u7A0B\u3002</p></li><li><p>\u5F53\u7EBF\u7A0B\u6570\u5927\u4E8E\u7B49\u4E8E\u6838\u5FC3\u7EBF\u7A0B\u6570\uFF0C\u4E14\u4EFB\u52A1\u961F\u5217\u672A\u6EE1\u65F6\uFF0C\u5C06\u4EFB\u52A1\u653E\u5165\u4EFB\u52A1\u961F\u5217\u3002</p></li><li><p>\u5F53\u7EBF\u7A0B\u6570\u5927\u4E8E\u7B49\u4E8E\u6838\u5FC3\u7EBF\u7A0B\u6570\uFF0C\u4E14\u4EFB\u52A1\u961F\u5217\u5DF2\u6EE1\uFF1A</p></li></ol><blockquote><p>\u82E5\u7EBF\u7A0B\u6570\u5C0F\u4E8E\u6700\u5927\u7EBF\u7A0B\u6570\uFF0C\u521B\u5EFA\u7EBF\u7A0B\u3002</p><p>\u82E5\u7EBF\u7A0B\u6570\u7B49\u4E8E\u6700\u5927\u7EBF\u7A0B\u6570\uFF0C\u629B\u51FA\u5F02\u5E38\uFF0C\u62D2\u7EDD\u4EFB\u52A1\u3002</p></blockquote><h3 id="\u7EBF\u7A0B\u6C60\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u89C4\u8303" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u89C4\u8303</h3><p>\u7EBF\u7A0B\u6C60\u4E0D\u5141\u8BB8\u4F7F\u7528 Executors \u53BB\u521B\u5EFA\uFF0C\u800C\u662F\u901A\u8FC7 ThreadPoolExecutor \u7684\u65B9\u5F0F\uFF0C\u8FD9\u6837\u7684\u5904\u7406\u65B9\u5F0F\u8BA9\u5199\u7684\u540C\u5B66\u66F4\u52A0\u660E\u786E\u7EBF\u7A0B\u6C60\u7684\u8FD0\u884C\u89C4\u5219\uFF0C\u89C4\u907F\u8D44\u6E90\u8017\u5C3D\u7684\u98CE\u9669\u3002</p><p>Executors \u8FD4\u56DE\u7684\u7EBF\u7A0B\u6C60\u5BF9\u8C61\u7684\u5F0A\u7AEF\u5982\u4E0B:</p><p>FixedThreadPool \u548C SingleThreadPool\uFF1A\u5141\u8BB8\u7684\u8BF7\u6C42\u961F\u5217\u957F\u5EA6\u4E3A Integer.MAX_VALUE\uFF0C\u53EF\u80FD\u4F1A\u5806\u79EF\u5927\u91CF\u7684\u8BF7\u6C42\uFF0C\u4ECE\u800C\u5BFC\u81F4 OOM\u3002</p><p>CachedThreadPool \u548C ScheduledThreadPool\uFF1A\u5141\u8BB8\u7684\u521B\u5EFA\u7EBF\u7A0B\u6570\u91CF\u4E3A Integer.MAX_VALUE\uFF0C\u53EF\u80FD\u4F1A\u521B\u5EFA\u5927\u91CF\u7684\u7EBF\u7A0B\uFF0C\u4ECE\u800C\u5BFC\u81F4 OOM\u3002</p>`,154);function r(l,i){return s}var c=n(e,[["render",r],["__file","\u591A\u7EBF\u7A0B\u57FA\u7840.html.vue"]]);export{c as default};

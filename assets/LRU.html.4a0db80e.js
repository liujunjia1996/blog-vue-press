import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{b as s}from"./app.9c7ab487.js";const a={},e=s(`<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u8FD0\u7528\u4F60\u6240\u638C\u63E1\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u8BBE\u8BA1\u548C\u5B9E\u73B0\u4E00\u4E2A\xA0 LRU (\u6700\u8FD1\u6700\u5C11\u4F7F\u7528) \u7F13\u5B58\u673A\u5236 \u3002<br> \u5B9E\u73B0 LRUCache \u7C7B\uFF1A</p><p>LRUCache(int capacity) \u4EE5\u6B63\u6574\u6570\u4F5C\u4E3A\u5BB9\u91CF\xA0capacity \u521D\u59CB\u5316 LRU \u7F13\u5B58<br> int get(int key) \u5982\u679C\u5173\u952E\u5B57 key \u5B58\u5728\u4E8E\u7F13\u5B58\u4E2D\uFF0C\u5219\u8FD4\u56DE\u5173\u952E\u5B57\u7684\u503C\uFF0C\u5426\u5219\u8FD4\u56DE -1 \u3002<br> void put(int key, int value)\xA0\u5982\u679C\u5173\u952E\u5B57\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u53D8\u66F4\u5176\u6570\u636E\u503C\uFF1B\u5982\u679C\u5173\u952E\u5B57\u4E0D\u5B58\u5728\uFF0C\u5219\u63D2\u5165\u8BE5\u7EC4\u300C\u5173\u952E\u5B57-\u503C\u300D\u3002\u5F53\u7F13\u5B58\u5BB9\u91CF\u8FBE\u5230\u4E0A\u9650\u65F6\uFF0C\u5B83\u5E94\u8BE5\u5728\u5199\u5165\u65B0\u6570\u636E\u4E4B\u524D\u5220\u9664\u6700\u4E45\u672A\u4F7F\u7528\u7684\u6570\u636E\u503C\uFF0C\u4ECE\u800C\u4E3A\u65B0\u7684\u6570\u636E\u503C\u7559\u51FA\u7A7A\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u793A\u4F8B\uFF1A

\u8F93\u5165
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
\u8F93\u51FA
[null, null, null, 1, null, -1, null, -1, 3, 4]

\u89E3\u91CA
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // \u7F13\u5B58\u662F {1=1}
lRUCache.put(2, 2); // \u7F13\u5B58\u662F {1=1, 2=2}
lRUCache.get(1);    // \u8FD4\u56DE 1
lRUCache.put(3, 3); // \u8BE5\u64CD\u4F5C\u4F1A\u4F7F\u5F97\u5173\u952E\u5B57 2 \u4F5C\u5E9F\uFF0C\u7F13\u5B58\u662F {1=1, 3=3}
lRUCache.get(2);    // \u8FD4\u56DE -1 (\u672A\u627E\u5230)
lRUCache.put(4, 4); // \u8BE5\u64CD\u4F5C\u4F1A\u4F7F\u5F97\u5173\u952E\u5B57 1 \u4F5C\u5E9F\uFF0C\u7F13\u5B58\u662F {4=4, 3=3}
lRUCache.get(1);    // \u8FD4\u56DE -1 (\u672A\u627E\u5230)
lRUCache.get(3);    // \u8FD4\u56DE 3
lRUCache.get(4);    // \u8FD4\u56DE 4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><h3 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</h3><p>\u6CA1\u770B\u9898\u89E3\uFF0C\u5199\u4E86\u4E2A\u94FE\u8868\u7248\u7684\uFF0C\u5728 20 / 21 \u4E2A\u7528\u4F8B\u65F6\u8D85\u65F6\u4E86</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>import java.util.Objects;

class LRUCache {

    int capacity;

    int curCapacity;

    Node head;

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {
        var cur = head;
        Node last = null;
        while (cur != null) {
            if (key == cur.k) {
                // \u8C03\u6574\u94FE\u8868\u987A\u5E8F
                replace2Top(last, cur);
                return cur.v;
            }
            last = cur;
            cur = cur.next;
        }
        return -1;
    }

    /*
     *  \u5148\u770B\u6709\u65E0\u91CD\u590D\uFF0C\u91CD\u590D\u5C31\u66FF\u6362
     *  \u5982\u679C\u6CA1\u6709\u91CD\u590D\uFF0C\u5C31\u770B\u662F\u5426\u8D85\u8FC7\u5BB9\u91CF\uFF0C\u8D85\u8FC7\u9700\u8981\u6DD8\u6C70\u65E7\u503C
     */
    public void put(int key, int value) {
        if (null == head) {
            curCapacity++;
            head = new Node(key, value, null);
            return;
        }
        var cur = head;
        Node last = null;
        while (true) {
            if (key == cur.k) {
                cur.v = value;
                replace2Top(last, cur);
                return;
            }
            // \u6700\u540E\u4E00\u4E2A\u90FD\u6CA1\u627E\u5230\u91CD\u590D\u7684 2 1 2
            if (cur.next == null) {
                curCapacity++;
                head = new Node(key, value, head);
                // \u5BB9\u91CF\u8D85\u4E86
                if (curCapacity &gt; capacity) {
                    Objects.requireNonNullElseGet(last, () -&gt; head).next = null;
                    curCapacity--;
                }
                return;
            }
            last = cur;
            cur = cur.next;
        }

    }

    public void replace2Top(Node last, Node cur) {
        if (last == null) return;
        last.next = cur.next;
        cur.next = head;
        head = cur;
    }

    static class Node {
        int k;
        int v;
        Node next;

        public Node(int k, int v, Node next) {
            this.k = k;
            this.v = v;
            this.next = next;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><h3 id="linkedhashmap" tabindex="-1"><a class="header-anchor" href="#linkedhashmap" aria-hidden="true">#</a> LinkedHashMap</h3><p>\u7528 hash \u5BFB\u5740\u6027\u80FD\u5C31\u597D\u5F88\u591A\u4E86</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>class LRUCache {
    int cap;
    LinkedHashMap&lt;Integer, Integer&gt; cache = new LinkedHashMap&lt;&gt;();
    public LRUCache(int capacity) { 
        this.cap = capacity;
    }
    
    public int get(int key) {
        if (!cache.containsKey(key)) {
            return -1;
        }
        // \u5C06 key \u53D8\u4E3A\u6700\u8FD1\u4F7F\u7528
        makeRecently(key);
        return cache.get(key);
    }
    
    public void put(int key, int val) {
        if (cache.containsKey(key)) {
            // \u4FEE\u6539 key \u7684\u503C
            cache.put(key, val);
            // \u5C06 key \u53D8\u4E3A\u6700\u8FD1\u4F7F\u7528
            makeRecently(key);
            return;
        }
        
        if (cache.size() &gt;= this.cap) {
            // \u94FE\u8868\u5934\u90E8\u5C31\u662F\u6700\u4E45\u672A\u4F7F\u7528\u7684 key
            int oldestKey = cache.keySet().iterator().next();
            cache.remove(oldestKey);
        }
        // \u5C06\u65B0\u7684 key \u6DFB\u52A0\u94FE\u8868\u5C3E\u90E8
        cache.put(key, val);
    }
    
    private void makeRecently(int key) {
        int val = cache.get(key);
        // \u5220\u9664 key\uFF0C\u91CD\u65B0\u63D2\u5165\u5230\u961F\u5C3E
        cache.remove(key);
        cache.put(key, val);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,11);function l(r,p){return e}var i=n(a,[["render",l],["__file","LRU.html.vue"]]);export{i as default};

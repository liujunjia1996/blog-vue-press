"use strict";(self.webpackChunkblog_vue_press=self.webpackChunkblog_vue_press||[]).push([[330],{7963:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-05940e7b",path:"/db/mysql%20explain%20%E4%BE%8B%E8%A7%A3.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"例1",slug:"例1",children:[]},{level:2,title:"例2",slug:"例2",children:[]}],filePathRelative:"db/mysql explain 例解.md",git:{updatedTime:1637925824e3,contributors:[{name:"liujunjia",email:"43411944+liujunjia1996@users.noreply.github.com",commits:1}]}}},9054:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});const s=(0,n(6252).uE)('<p><code>show variables like &quot;%version%&quot;</code><br><img src="https://user-images.githubusercontent.com/43411944/140270326-5dbc4219-efb9-4a7f-b150-3e7162d73721.png" alt="image"></p><h2 id="例1" tabindex="-1"><a class="header-anchor" href="#例1" aria-hidden="true">#</a> 例1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>EXPLAIN\nSELECT * FROM tbl_user AS tb1 WHERE user_name = &#39;薛沉香&#39;\nUNION\nSELECT * FROM tbl_user AS tb2 WHERE user_name = &#39;慕容兰娟&#39;;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>因为 UNION 默认是去重的，所以需要用一个临时表存去重后的结果集，id 越大越先执行，id 相同则从上到下执行：</p><p><img src="https://user-images.githubusercontent.com/43411944/140271057-d448eb9e-5bc7-4ac8-8ec8-28a0da91c851.png" alt="image"></p><p>如果将 UNION 改为 UNION ALL，就不需要临时表了</p><p><img src="https://user-images.githubusercontent.com/43411944/140271189-fd8230c7-1a9e-4eb5-bc07-fdcf48337ca6.png" alt="image"></p><h2 id="例2" tabindex="-1"><a class="header-anchor" href="#例2" aria-hidden="true">#</a> 例2</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE TABLE `student` (\n  `studentid` int(11) NOT NULL,\n  `studentname` varchar(45) NOT NULL,\n  `teacherid` int(11) NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\nCREATE TABLE `teacher` (\n  `teacherid` int(11) NOT NULL,\n  `teachername` varchar(45) NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>explain select * from student where teacherid in (select teacherid from teacher);</code></p><p><img src="https://user-images.githubusercontent.com/43411944/141982616-13e06571-f613-42d6-8b4d-83364cc1e390.png" alt="image"></p><p>这条语句，mysql 会优化成半连接 (semi join)，具体的执行流程大概是：<br> 1)先执行子查询语句 select teacherid from teacher，将结果集放入到临时表，该临时表就是子查询结果集的列，并进行去重。如果结果集不大，建立基于内存的 Memory 存储引擎的临时表，并建立hash索引；如果结果集非常大，超过了系统变量 tmp_table_size 或者 max_heap_table_size，临时表会转而使用基于磁盘的存储引擎来保存结果集中的记录，索引类型也对应转变为 B+ 树索引。</p><p>结果集记录保存到临时表的过程，称之为物化(Materialize)，该临时表称之为物化表。</p><p>2)物化之后，对于 student 表，如表记录的 teacherid 值在物化表中，会记录到最终的结果集；同样对于物化表，其每个列值 (teacherid) 在 student 表能找到对应列的值，就能写到最终结果集。所以就相当于student 表与物化表(materialize_table)内联。<br> 另外，如果把 teacher 表的 teacherid 设置为主键，那么这个查询直接就可以通过表上拉优化，不再需要临时表去重 <img src="https://user-images.githubusercontent.com/43411944/141982645-78b26a5b-86c3-4a29-bc06-b23d1acbe281.png" alt="image"></p>',14),t={},r=(0,n(3744).Z)(t,[["render",function(e,a){return s}]])},3744:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}}}]);
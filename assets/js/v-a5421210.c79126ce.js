"use strict";(self.webpackChunkblog_vue_press=self.webpackChunkblog_vue_press||[]).push([[3612],{4087:(e,a,i)=>{i.r(a),i.d(a,{data:()=>t});const t={key:"v-a5421210",path:"/other/git%20%E5%9F%BA%E7%A1%80.html",title:"三个分区",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Blob 对象",slug:"blob-对象",children:[]},{level:2,title:"Tree 对象",slug:"tree-对象",children:[]},{level:2,title:"Commit 对象",slug:"commit-对象",children:[]},{level:2,title:"Tag 对象",slug:"tag-对象",children:[]},{level:2,title:"基础模型",slug:"基础模型",children:[]},{level:2,title:"feature 模型",slug:"feature-模型",children:[]},{level:2,title:"git flow",slug:"git-flow",children:[]},{level:2,title:"github flow",slug:"github-flow",children:[]},{level:2,title:"gitlab flow",slug:"gitlab-flow",children:[]},{level:2,title:"gitignore 失效",slug:"gitignore-失效",children:[]},{level:2,title:"添加远程仓库",slug:"添加远程仓库",children:[]}],filePathRelative:"other/git 基础.md",git:{updatedTime:1638173223e3,contributors:[{name:"liujunjia",email:"43411944+liujunjia1996@users.noreply.github.com",commits:1}]}}},2727:(e,a,i)=>{i.r(a),i.d(a,{default:()=>o});var t=i(6252);const r=(0,t.uE)('<p>平时工作中，对 git 的使用很频繁，但是还从来没有具体了解过 git，所以今天站在一个使用者的角度，来总结一下 git。</p><h1 id="三个分区" tabindex="-1"><a class="header-anchor" href="#三个分区" aria-hidden="true">#</a> 三个分区</h1><p>工作区 workSpace 存放项目代码的地方</p><p>暂存区 index 临时存放改动的地方</p><p>版本库 repository 存放本地已经提交的代码的地方</p><h1 id="三种状态" tabindex="-1"><a class="header-anchor" href="#三种状态" aria-hidden="true">#</a> 三种状态</h1><p>已修改（modified）文件已被修改，但还没有提交保存</p><p>已暂存（staged）文件已被修改，并且已经暂存</p><p>已提交（committed）文件已经被保存在本地仓库中</p><h1 id="两种指针" tabindex="-1"><a class="header-anchor" href="#两种指针" aria-hidden="true">#</a> 两种指针</h1><p>git 有一个 HEAD 指针，指向当前所在的提交</p><p>git 还有一种 branch 指针，指向某个分支</p><h1 id="四种对象" tabindex="-1"><a class="header-anchor" href="#四种对象" aria-hidden="true">#</a> 四种对象</h1><h2 id="blob-对象" tabindex="-1"><a class="header-anchor" href="#blob-对象" aria-hidden="true">#</a> Blob 对象</h2><p>新文件纳入到 Git 后，它的内容存到一个 blob 对象中，它的对象名是基于内容运算生成的一个 40 个字符的 SHA1值。</p><p>SHA1 是一种 hash 算法，类似的还有 MD5，SHA256 等。他们之间的区别是长度不同，比如 SHA1 是 160 bit 的，用 16 进制表示就是 40 个字符了。</p><h2 id="tree-对象" tabindex="-1"><a class="header-anchor" href="#tree-对象" aria-hidden="true">#</a> Tree 对象</h2><p>可以把 tree 对象理解为一个文件夹，里面包含</p><ol><li>子级 tree （子文件夹）</li><li>blob （子文件）</li></ol><h2 id="commit-对象" tabindex="-1"><a class="header-anchor" href="#commit-对象" aria-hidden="true">#</a> Commit 对象</h2><p>由以下几部分组成</p><ol><li>作者</li><li>提交者</li><li>注释</li><li>指向一个 big tree 的指针</li></ol><p><img src="https://user-images.githubusercontent.com/43411944/131253067-df7b6cae-6193-48bd-81c9-c415f10a242e.png" alt="image"></p><h2 id="tag-对象" tabindex="-1"><a class="header-anchor" href="#tag-对象" aria-hidden="true">#</a> Tag 对象</h2><p>这个比较用的比较少，用来标记某个 commit 对象，主要是为了解决 commit 的 id 太长不好记的问题</p><h1 id="五种分支模型" tabindex="-1"><a class="header-anchor" href="#五种分支模型" aria-hidden="true">#</a> 五种分支模型</h1><h2 id="基础模型" tabindex="-1"><a class="header-anchor" href="#基础模型" aria-hidden="true">#</a> 基础模型</h2><p><img src="https://cdn.jsdelivr.net/gh/qaqLjj/pic/20210829211200.png" alt=""></p><p>所有修改直接在 master 上进行，仅适合个人项目或 demo。</p><h2 id="feature-模型" tabindex="-1"><a class="header-anchor" href="#feature-模型" aria-hidden="true">#</a> feature 模型</h2><p><img src="https://cdn.jsdelivr.net/gh/qaqLjj/pic/20210829211225.png" alt=""></p><p>开发新功能就从 master 切分支出来，开发测试完再合入 master。</p><h2 id="git-flow" tabindex="-1"><a class="header-anchor" href="#git-flow" aria-hidden="true">#</a> git flow</h2><p><img src="https://cdn.jsdelivr.net/gh/qaqLjj/pic/20210829220201.png" alt=""></p>',34),l=(0,t.Uk)("这个是一个很有名的"),n={href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("博客"),h=(0,t.Uk)("提出的，比较适合大版本迭代的场景，不适合经常迭代。"),s=(0,t.uE)('<blockquote><p>Git flow的优点是清晰可控，缺点是相对复杂，需要同时维护两个长期分支。大多数工具都将<code>master</code>当作默认分支，可是开发是在<code>develop</code>分支进行的，这导致经常要切换分支，非常烦人。更大问题在于，这个模式是基于&quot;版本发布&quot;的，目标是一段时间以后产出一个新版本。但是，很多网站项目是&quot;持续发布&quot;，代码一有变动，就部署一次。这时，<code>master</code>分支和<code>develop</code>分支的差别不大，没必要维护两个长期分支。</p></blockquote><h2 id="github-flow" tabindex="-1"><a class="header-anchor" href="#github-flow" aria-hidden="true">#</a> github flow</h2><p><img src="https://cdn.jsdelivr.net/gh/qaqLjj/pic/20210829211459.png" alt=""></p><p>github 的 pr 模型，最大的特点就是简单，没什么好说的</p><h2 id="gitlab-flow" tabindex="-1"><a class="header-anchor" href="#gitlab-flow" aria-hidden="true">#</a> gitlab flow</h2><p>持续发布</p><p><img src="https://cdn.jsdelivr.net/gh/qaqLjj/pic/20210829211700.png" alt=""></p><p>基于版本</p><p><img src="https://cdn.jsdelivr.net/gh/qaqLjj/pic/20210829211710.png" alt=""></p><p>目前，我所在的团队的分支模型属于第二种的变种： <img src="https://user-images.githubusercontent.com/43411944/131253007-6a0fddbf-cd1d-4f3f-b2d3-4b3642fb1457.png" alt="image"></p><h1 id="若干个-git-实用命令" tabindex="-1"><a class="header-anchor" href="#若干个-git-实用命令" aria-hidden="true">#</a> 若干个 git 实用命令</h1><h2 id="gitignore-失效" tabindex="-1"><a class="header-anchor" href="#gitignore-失效" aria-hidden="true">#</a> gitignore 失效</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rm -r --cached .\ngit add .\ngit commit -m &quot;update .gitignore&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. 添加远程仓库\ngit remote add origin https://github.com/liujunjia1996/blog\n2. 将远程分支和本地分支关联\ngit branch --set-upstream-to=origin/main master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',15),c={},o=(0,i(3744).Z)(c,[["render",function(e,a){const i=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,(0,t._)("p",null,[l,(0,t._)("a",n,[d,(0,t.Wm)(i)]),h]),s],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,t]of a)i[e]=t;return i}}}]);
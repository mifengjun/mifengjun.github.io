(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{436:function(_,v,t){"use strict";t.r(v);var r=t(22),e=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"初识并发编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初识并发编程"}},[_._v("#")]),_._v(" 初识并发编程")]),_._v(" "),t("blockquote",[t("p",[_._v("用了将近半年的碎片时间, 共计40个小时, 终于读完了这本阿里大佬方腾飞编写的《Java并发编程的艺术》现在将书中内容理解并消化，现在用自己的理解将书中内容‘倒出来’。后续将会更新这一系列的读书笔记。内容随笔作为自我知识学习的沉淀积累。")])]),_._v(" "),t("p",[_._v("我一般讲什么东西都喜欢用简单的理解去讲，而不是去按部就班。教材中有明确的字样对某些知识点的概况，但你去理解要理解很多新的内容，如果是具体的内容还好，如果是抽象的内容，可能会打消你学习的积极性或者让你对要理解的内容更难以理解接收。我总在试图用最简单的办法去传播知识，去学习接收知识。当然事实总会给你一记无情的巴掌，但我仍坚持用已知事务类比的方法去传播知识，让更多的人能够接收到更容易学而且更深的知识，当然这显然是一件很困难的事情（复杂度守恒定律），不过我愿意尽力的去坚持去做。")]),_._v(" "),t("h2",{attrs:{id:"什么是并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是并发"}},[_._v("#")]),_._v(" 什么是并发")]),_._v(" "),t("blockquote",[t("p",[_._v("公交车的前门上车，后面下车其实就是一种并发。")])]),_._v(" "),t("p",[_._v("根据具体的业务场景不同，使用的并发形态也不同。但其中的原理都是一样，那就是"),t("strong",[_._v("同时进行皆并发")])]),_._v(" "),t("ul",[t("li",[_._v("世界上所有生物同时呼吸就是并发")]),_._v(" "),t("li",[_._v("你现在听着歌看我的文章你也是在并发")]),_._v(" "),t("li",[_._v("你边走路边打电话是在并发")]),_._v(" "),t("li",[_._v("灯泡并联也是并发")]),_._v(" "),t("li",[_._v("~")])]),_._v(" "),t("p",[_._v("如果以上的例子中的同时进行改成按序执行即串行，非并发。在某些情况下可能会导致‘灾难’")]),_._v(" "),t("ul",[t("li",[_._v("每个生物按序呼吸")]),_._v(" "),t("li",[_._v("你听歌的时候看不见东西，看得见东西听不了歌")]),_._v(" "),t("li",[_._v("你只能一动不动的打电话（而且你说话的时候什么都听不见）")]),_._v(" "),t("li",[_._v("灯泡串联")]),_._v(" "),t("li",[_._v("~")])]),_._v(" "),t("h2",{attrs:{id:"并发的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发的应用"}},[_._v("#")]),_._v(" 并发的应用")]),_._v(" "),t("blockquote",[t("p",[_._v("上面是根据"),t("strong",[_._v("同时进行皆并发")]),_._v("举了几个生活的例子，那并发如果将其应用到具体的程序中是什么呢？同时也说了一些串行的内容，在某些情况可能会导致‘灾难’。")])]),_._v(" "),t("p",[_._v("要知道并发的应用要知道两个计算机上的概念进程和线程。")]),_._v(" "),t("ul",[t("li",[_._v("进程是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[_._v("操作系统"),t("OutboundLink")],1),_._v("结构的基础。")]),_._v(" "),t("li",[_._v("线程是"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[_._v("操作系统"),t("OutboundLink")],1),_._v("能够进行运算"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E8%B0%83%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"}},[_._v("调度"),t("OutboundLink")],1),_._v("的最小单位")])]),_._v(" "),t("p",[_._v("用我的方法学习什么是进程什么是线程")]),_._v(" "),t("ul",[t("li",[_._v("进程是我们每个人的一心一意，当你三心二意的时候就开启了多进程")]),_._v(" "),t("li",[_._v("线程就是你一心一意中的每个动作，包括你的思想。这就一定是多线程")])]),_._v(" "),t("p",[t("strong",[_._v("举例")])]),_._v(" "),t("p",[_._v("张三今天在专心的写作业  - 启动了写作业进程")]),_._v(" "),t("p",[_._v("在写作业的时候张三用脑子思考，用手写，用眼睛看 - 张三开了3条线程来完成写作业这个进程的调度")]),_._v(" "),t("p",[_._v("张三边唱歌边吃饭边玩滑板 - 启动了玩滑板进程，吃饭进程，唱歌进程")]),_._v(" "),t("p",[_._v("他的脑子接到了很多指令，开始运行，啪！最后张三的腿脚线程一直阻塞着没机会执行，最后抛出异常张三没能完成这个作业。")]),_._v(" "),t("hr"),_._v(" "),t("h2",{attrs:{id:"并发程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发程序"}},[_._v("#")]),_._v(" 并发程序")]),_._v(" "),t("blockquote",[t("p",[_._v("通过上面的内容我们知道了线程和进程的区别，线程是运行在进程中的 ，线程可以有多线程，进程也可以有多进程")])]),_._v(" "),t("p",[_._v("说了这么多，那我们并发编程到底是什么呢。")]),_._v(" "),t("p",[t("strong",[_._v("需求一")])]),_._v(" "),t("p",[_._v("有100个人来参加一个宴会，需要在海报上签上自己的名字。大会需要大家在10分钟完成这个任务。假入只有一个笔，而且每个人签字的平均速度是7秒，签完名的时间大概是11分钟，我们要怎么解决这个问题？")]),_._v(" "),t("p",[t("strong",[_._v("需求二")])]),_._v(" "),t("p",[_._v("我们有一个10TB的文件需要解析，我们假设需要3天完成这个任务，但是你设计个程序把文件从头读到为就需要4天，看似不可完成的任务该怎么做？")]),_._v(" "),t("p",[t("strong",[_._v("解决方案")])]),_._v(" "),t("p",[_._v("针对需求一，我们可以再买一支笔，那大概6分钟就可以写完，3支笔4分钟， 4支笔3分钟 。。。100支笔 10秒钟？")]),_._v(" "),t("p",[_._v("需求二我们可以将文件分成两部分，让两个程序一起读，这样2天就看完了，拆成4部分1天拆成8部分半天，拆成100部分文件给你就看完了？")]),_._v(" "),t("h2",{attrs:{id:"并发遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发遇到的问题"}},[_._v("#")]),_._v(" 并发遇到的问题")]),_._v(" "),t("p",[_._v("在并发场景我们需要考虑几个问题")]),_._v(" "),t("ol",[t("li",[_._v("数据一致性（安全性）")]),_._v(" "),t("li",[_._v("系统资源（性能，可用性）")])]),_._v(" "),t("p",[t("code",[_._v("那什么是数据一致性问题？")])]),_._v(" "),t("p",[t("strong",[_._v("第一种情况")])]),_._v(" "),t("p",[_._v("在签到过程中，张三看见还有5支笔摆在那，但是张三却看不见他前面刚过去了5个人（多线程情况下各线程间隔离，共享进程资源）等张三过去的时候发现没有笔了，这个时候张三就会抛出来一个没有笔异常（NullPointException） 这里说明的就是张三看到的笔数量和实际的笔数量不相同（数据一致性问题）")]),_._v(" "),t("p",[t("strong",[_._v("第二种情况")])]),_._v(" "),t("p",[_._v("将文件分开两部分后，两个程序过来读，恰好两个程序读的都是第一部分，等到程序执行完发现还有一部分没读，这个时候显然时间已经来不及了，这里说明两个程序看到的都是两部分数据，所有从第一部分开始读，但是当一个程序已经读了第一部分第二个程序不知道，所以它也读了第一部分（数据一致性问题）")]),_._v(" "),t("p",[t("code",[_._v("那什么是系统资源问题呢？")])]),_._v(" "),t("p",[t("strong",[_._v("第一种情况")])]),_._v(" "),t("p",[_._v("你提供了100支笔给大家签到,100个人都会过去签到 , 假设100个人都拿到了笔,( 这里同样会有数据一致性的安全问题) 当他们过去海报签字的时候, 发现根本站不下, 不过好在当时海报边上设计的空地还有很大的位置, 大家可以站边上等一等. 你写完我在写(实际程序可不是这样, 实际程序的话有可能是你写一笔我写一笔, 上下文切换), (但实际情况可能更糟, 两个人写在了同一块地方, 张三名字写在了李四的上面, 只能看到张三的名字, 根本看不到李四的名字了(同样的数据一致性问题)) 如果海报设计的位置不够, 这个时候就会出现一个问题, 内存溢出")]),_._v(" "),t("p",[_._v("第二种情况类似")]),_._v(" "),t("hr"),_._v(" "),t("h2",{attrs:{id:"并发问题的引申问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发问题的引申问题"}},[_._v("#")]),_._v(" 并发问题的引申问题")]),_._v(" "),t("p",[_._v("在上面我们发现了一些并发时的问题, 那问题清楚后, 我们就想办法去解决出现的问题.")]),_._v(" "),t("ol",[t("li",[_._v("数据一致性（安全性）")]),_._v(" "),t("li",[_._v("系统资源（性能，可用性）")]),_._v(" "),t("li",[_._v("·····")])]),_._v(" "),t("p",[_._v("不同的问题我们有不同的解决方案, 如数据一致性的问题, 我们可以通过加锁来实现.")]),_._v(" "),t("p",[_._v("加锁以后我们会迎来另一系列的新的问题(性能问题, 死锁)")]),_._v(" "),t("p",[_._v("对于系统资源的问题我们也有对应的解决方案, 即分配合理的内存(这里不关注这个) 和 分配合理的线程数(笔的支数)")]),_._v(" "),t("blockquote",[t("p",[_._v("这里引申的几个问题我们后面逐个从书中寻找答案, 带着问题去慢慢读享受这个过程, 加锁, 什么是锁, 怎么用锁. 分配资源, 分多少刚好合适?")])])])}),[],!1,null,null,null);v.default=e.exports}}]);
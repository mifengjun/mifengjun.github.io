(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{448:function(a,t,v){"use strict";v.r(t);var s=v(22),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"lvgo-的-jvm-学习笔记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lvgo-的-jvm-学习笔记"}},[a._v("#")]),a._v(" lvgo 的 JVM 学习笔记")]),a._v(" "),v("p",[a._v("实不相瞒，这份 JVM 学习笔记，可以说很香。")]),a._v(" "),v("blockquote",[v("p",[a._v("大家好，我是 lvgo，如果你之前看过我写的《和 lvgo 一起学习设计模式》.PDF，应该知道了 lvgo 的意思了，相信你知道它是什么意思后，会加深你对 lvgo 的印象。")])]),a._v(" "),v("h1",{attrs:{id:"写在前面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[a._v("#")]),a._v(" 写在前面")]),a._v(" "),v("p",[a._v("关于 Java 虚拟机的学习，无论从业务开发上来说，还是从解决问题的角度上来看。我认为都是一个 Java 程序员必会的一个知识体系，为什么这么说呢？还是那句耳朵已经听起茧的话 ”知其然，而知其所以然“。")]),a._v(" "),v("h1",{attrs:{id:"知其然-而知其所以然"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#知其然-而知其所以然"}},[a._v("#")]),a._v(" 知其然，而知其所以然")]),a._v(" "),v("p",[a._v("我见过因为不清楚技术底层原理乱用的开发人员，也见过不懂技术原理所以害怕其出现问题的领导拒绝开发人员应有新技术。")]),a._v(" "),v("p",[a._v("举个例子：如果有 10 个人，给他们每个人一把刀，叫他们去山上砍柴，那这 10 个人假如都是第一次接触”刀“这个物品的话。那么就一定有人用刀背砍东西，有人用刀刃砍石头，而真正能正确使用的人它一定清楚这个物品哪里手可以握，哪里锋利，哪里可以砍树不能砍石头。（例子可能不恰当，说明意思即可）")]),a._v(" "),v("p",[a._v("Java 虚拟机的这个知识点，我觉得最重要的不是调优部分，而是编译优化的那部分。之前听郑雨迪（Oracle 高级研究员，hotspot 开发者）说他现在在做 graal 编译器的工作内容就是想办法优化业务代码，让他们跑的更快。那我们能不能直接写出来无需优化，或减少编译优化阶段的工作呢？答案是可以的，但也只能做到编码部分的优化，关于虚拟机的优化内容慢慢会在我的笔记中了解到。")]),a._v(" "),v("h1",{attrs:{id:"学习过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学习过程"}},[a._v("#")]),a._v(" 学习过程")]),a._v(" "),v("p",[a._v("在学习 Java 虚拟机的这个过程是及其枯燥的，18 年我看完了周老师的《深入理解 Java 虚拟机》（第二版），大概只用了 10 几个小时。不过这 10 几个小时却花了我 1 年多的时间才消化掉。去年年底，也就是 19 年 11 月，周老师出了《深入理解 Java 虚拟机》（第三版），我是到今年 9 月份才开始读这本书的。大概还是只用了 10 几个小时就读完了，这次很明显感觉不一样了。而且这次一起看了很多关于虚拟机的内容，包括 JSR 和 虚拟机规范，还有 R 大的一些博客。")]),a._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"微信读书","data-src":"https://i.loli.net/2020/12/22/zWFAnxNPhs7t1iq.png",loading:"lazy"}})]),a._v(" "),v("h1",{attrs:{id:"学习目标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[a._v("#")]),a._v(" 学习目标")]),a._v(" "),v("p",[a._v("系统的学习使我对 Java 虚拟机有了一定的理解，但究其深处还有很多可以探索的内容，其中执行引擎就是一个 “巨坑” ，不过这里并不是我们学习的目的，我们要学习的是"),v("strong",[a._v("我们写的代码在虚拟机里都干了什么")]),a._v("，而不是执行引擎到底是怎么执行的指令，明确的了我们学习目标，那就好办了。")]),a._v(" "),v("h1",{attrs:{id:"接下来的事"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接下来的事"}},[a._v("#")]),a._v(" 接下来的事")]),a._v(" "),v("p",[a._v("明确了学习的目标，再去学习就会相对清晰了很多，可以避开不是当前学习计划的内容，因为虚拟机的东西还是比较多。我根据周老师的书中内容，将虚拟机整理成如下几个知识点")]),a._v(" "),v("ol",[v("li",[a._v("自动内存管理")]),a._v(" "),v("li",[a._v("虚拟机的执行")]),a._v(" "),v("li",[a._v("程序编译和代码优化")]),a._v(" "),v("li",[a._v("“高”并发")])]),a._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"JVM","data-src":"https://i.loli.net/2020/12/22/dKlebYpL5VxM3jW.png",loading:"lazy"}})]),a._v(" "),v("p",[a._v("这里面的第 3 点尤为重要，我觉得其他的都不懂这个都要懂。")]),a._v(" "),v("p",[a._v("很多面试或者文章中说虚拟机调优多么多么重要，之前看过廖神（廖雪峰）写的一个 JVM 调优的内容，我觉得很有道理。JVM 每天跑着几百万、几千万的程序，经历了无数次的考验。有问题的可能性不大，换句话说，如果想要调优虚拟机，先调优你的代码。")]),a._v(" "),v("h1",{attrs:{id:"欢迎关注"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#欢迎关注"}},[a._v("#")]),a._v(" 欢迎关注")]),a._v(" "),v("p",[a._v("接下来我会以日更或半周更的形式，以周老师的书籍为主线，其他资料的辅助将这本国内口碑极佳的《深入理解 Java 虚拟机》以极简的形式输出出来，让更多想要学习虚拟机，但碍于枯燥晦涩（周老师书其实说的一点都不晦涩难懂）而放弃学习 Java 虚拟机的开发者们能够一起来学习虚拟机的相关知识。")]),a._v(" "),v("hr"),a._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"jvm笔记","data-src":"https://i.loli.net/2020/12/22/2CzWEr1ueBoQ8gl.jpg",loading:"lazy"}})]),a._v(" "),v("p",[a._v("也欢迎大家一起加群交流学习，关注回复"),v("strong",[a._v("加群")]),a._v("一起在这个寒冷的冬天啃完这块重要的内容。")])])}),[],!1,null,null,null);t.default=_.exports}}]);
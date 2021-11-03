(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{465:function(s,a,t){"use strict";t.r(a);var n=t(22),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("这将会是你编程生涯很有意义的10分钟")]),s._v(" "),t("h4",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("反对枯燥的技术学习，拒绝从入门到放弃，从删库到跑路。\n拒绝！大声跟我念！拒绝！")]),s._v(" "),t("h4",{attrs:{id:"啥是事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#啥是事务"}},[s._v("#")]),s._v(" 啥是事务")]),s._v(" "),t("p",[t("s",[s._v("事物指的是逻辑上的一组操作，这组操作要么全部成功，要么全部失败")]),s._v("\n同生共死")]),s._v(" "),t("h4",{attrs:{id:"事务的四个特性-acid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的四个特性-acid"}},[s._v("#")]),s._v(" 事务的四个特性 ACID")]),s._v(" "),t("p",[s._v("原子性（Atomicity）：事物是一个不可分割的工作单位，事物中的操作要么都发生，要么都不发生")]),s._v(" "),t("p",[s._v("一致性（Consistency）：事物前后数据的完整性必须保持一致")]),s._v(" "),t("p",[s._v("隔离性（Isolation）：指多个用户并发访问数据库时，一个用户的事物不能被其他用户的事物所干扰，多个并发事物之间数据要相互隔离。")]),s._v(" "),t("p",[s._v("持久性（Durability）：一个事物一旦被提交，它对数据库中数据的改变就是永久性的，即使数据库发生故障也不应该对其有任何影响。")]),s._v(" "),t("h5",{attrs:{id:"事务的7种传播行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的7种传播行为"}},[s._v("#")]),s._v(" 事务的7种传播行为")]),s._v(" "),t("p",[s._v("这里我看到好多官方或者博文写的基本都是差不多. 如果我会用的话, 我可能不会去翻书翻博文找答案. 那既然翻书的和找答案的都是不会用的. 那怎么能让寻求答案的人, 一眼就看到自己想要的东西呢?")]),s._v(" "),t("h5",{attrs:{id:"首先7种传播行为分别为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先7种传播行为分别为"}},[s._v("#")]),s._v(" 首先7种传播行为分别为:")]),s._v(" "),t("p",[t("em",[s._v("名字有可能和大家看到其他的文章内容不一样. 个人理解. 不影响阅读")])]),s._v(" "),t("ol",[t("li",[s._v("默认事务  "),t("strong",[s._v("REQUIRED")]),s._v("(开启事务后不做任何传播行为说明的)")]),s._v(" "),t("li",[s._v("新启事务  "),t("strong",[s._v("REQUIRES_NEW")])]),s._v(" "),t("li",[s._v("嵌套事务  "),t("strong",[s._v("NESTED")])]),s._v(" "),t("li",[s._v("依赖事务  "),t("strong",[s._v("SUPPORTS")])]),s._v(" "),t("li",[s._v("非事务  "),t("strong",[s._v("NOT_SUPPORTED")])]),s._v(" "),t("li",[s._v("必须非事务  "),t("strong",[s._v("NEVER")])]),s._v(" "),t("li",[s._v("必须以事务  "),t("strong",[s._v("MANDATORY")])])]),s._v(" "),t("p",[s._v("那这7个分别对应的是什么情景, 我们来用最直白, 最简单的话来说明一下.")]),s._v(" "),t("h6",{attrs:{id:"_1-默认事务-required"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认事务-required"}},[s._v("#")]),s._v(" 1. 默认事务 REQUIRED")]),s._v(" "),t("p",[s._v("顾名思义, 当你对某个方法开启了事务, 但又不去指定它的传播行为时, 此时的事务管理会默认分配给他一个事务. 那就是调用者如果有事务便加入其中, 否则自身新启事务. 什么意思")]),s._v(" "),t("p",[s._v("你去小李家玩, 玩累了, 想吃饭, "),t("strong",[s._v("如果小李家可以吃饭, 那就在小李家一起吃, 否则你就自己吃.")])]),s._v(" "),t("h6",{attrs:{id:"_2-新启事务-requires-new"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-新启事务-requires-new"}},[s._v("#")]),s._v(" 2. 新启事务 REQUIRES_NEW")]),s._v(" "),t("p",[s._v("与默认事务中的第二种情况相同. 只不过, 此时无论小李家可不可以吃饭, 你都要自己吃, 不过还有一种情况, 就是如果调用者存在事务, 那该事务需要挂起.也就是说. 小李家如果可以吃饭, 那他们家人要等你吃完以后才能吃, 相当于暂停. 但是大家要切记, 这段时间只是时间暂停, 资源是在继续使用的. 也就是说, 外层事务挂起时, 数据库连接是一直持有状态. 所以你吃饭要快点. 不然等你吃的太久, 小李家其他人一直在等他们的餐桌吃饭可是要一直等下去的. "),t("strong",[t("code",[s._v("此时说的是事务挂起的情况")])])]),s._v(" "),t("h6",{attrs:{id:"_3-嵌套事务-nested"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-嵌套事务-nested"}},[s._v("#")]),s._v(" 3. 嵌套事务  NESTED")]),s._v(" "),t("p",[s._v("厉害的来了, 这个事务比较特殊, 适用的场景大家根据我后面的说明自行 决断;\n当前存在事务, 加入到这个事务中作为一个附属事务.  如果不存在, 则以默认事务执行, 其实也就是以新启事务执行;")]),s._v(" "),t("p",[s._v("解释一下附属事务的情况是什么意思. 附属, 归属,具体表现为我们的县城, 归属市区管辖, 但自己又独立. 当市级A()派遣任务给县城B(), 与它一同协作完成. 如果县城B()没有预期完成任务,我们说的抛出异常, 那市级A()会继续执行该市的其他任务. 如果市级预期完成, 那么县城的任务失败, 市级负责的部分任务完成. 此时事务A()提交. 县城事务B()回滚.\n但, 如果县城B()按期完成任务, 市级A()任务没有完成. 那县城B()的事务要同A()一起回滚.")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 独立事务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 嵌套事务")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("a调用b , a 为独立事务 b 为嵌套事务\n当执行到方法b时, a事务被挂起. 方法 b 无论成功失败, a继续执行\na执行成功 a与b 事务提交\na执行失败 无论b事务是否完成 与a一同回滚")])]),s._v(" "),t("p",[s._v("嵌套事务只影响本身事务, 不能影响外层事务. 同时受外层事务影响\na可以影响b , 但b不能影响a")]),s._v(" "),t("p",[t("strong",[s._v("顺便提一点")]),s._v(" 如果b为默认事务, 此时 b 如果出现异常, 整个事务执行回滚, 不能对b做异常捕获不抛出异常. 否则会出现事务提交异常, 因为此时 a 与 b 同处一个事务中, 要么同时提交, 要么同时回滚.")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("上面讲的就是我们最常用的三种传播行为, 下面再看看其他4种不常用的")])]),s._v(" "),t("h6",{attrs:{id:"_4-依赖事务-supports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-依赖事务-supports"}},[s._v("#")]),s._v(" 4. 依赖事务  SUPPORTS")]),s._v(" "),t("p",[s._v("这种事务情况为, 如果调用者有事务我就加入, 没有我就以非事务执行\n小李家有饭我就吃, 没有我就不吃了")]),s._v(" "),t("h6",{attrs:{id:"_5-非事务-not-supported"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-非事务-not-supported"}},[s._v("#")]),s._v(" 5. 非事务 NOT_SUPPORTED")]),s._v(" "),t("p",[s._v("如果调用者有事务我就把他挂起, 然后以非事务执行\n小李家有饭我就让他暂停, 然后我做我的事,做完后恢复挂起事务继续执行")]),s._v(" "),t("h6",{attrs:{id:"_6-必须非事务-never"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-必须非事务-never"}},[s._v("#")]),s._v(" 6. 必须非事务  NEVER")]),s._v(" "),t("p",[s._v("如果调用者"),t("strong",[s._v("有事务")]),s._v("我就抛出异常. 不再继续执行\n小李家"),t("strong",[s._v("有饭")]),s._v("我就报警, 谁都别想动")]),s._v(" "),t("h6",{attrs:{id:"_7-必须以事务-mandatory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-必须以事务-mandatory"}},[s._v("#")]),s._v(" 7. 必须以事务  MANDATORY")]),s._v(" "),t("p",[s._v("如果调用者"),t("strong",[s._v("没有事务")]),s._v("我就抛出异常. 不再继续执行\n小李家"),t("strong",[s._v("没有饭")]),s._v("我就报警, 谁都别想动")]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"接下来你应该知道的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接下来你应该知道的"}},[s._v("#")]),s._v(" 接下来你应该知道的")]),s._v(" "),t("p",[s._v("说了基本概念, 我觉得既然是最简单的事务学习, 那一定是要跟大家讲怎么使用事务.具体怎么去配置事务大家随便百度吧. 就不赘述了.")]),s._v(" "),t("p",[s._v("当你将你的方法配置好事务后. 有几个基础的东西你一定要知道, 当然现在用的事务都是spring的事务.")]),s._v(" "),t("h4",{attrs:{id:"_1-同方法内-被调用的事务不会生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-同方法内-被调用的事务不会生效"}},[s._v("#")]),s._v(" 1. 同方法内, 被调用的事务不会生效")]),s._v(" "),t("p",[s._v("举例")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方法 A() 配有独立事务")]),s._v("\n\tfun "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用 方法B(), 记笔记. 此时 B 的独立事务不生效")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方法 B() 配有独立事务")]),s._v("\n\tfun "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("该问题比较好理解. 原因是由于spring的事务管理是基于 spring 的 AOP 实现的. 而方法增强需要通过调用时执行切点方法才能实现增强. 所以此时的方法B就是正常的一段方法加入到了方法A中, 与 A同事务.")]),s._v(" "),t("h4",{attrs:{id:"_2-默认事务的异常处理-重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-默认事务的异常处理-重点"}},[s._v("#")]),s._v(" 2. 默认事务的异常处理*[重点]")]),s._v(" "),t("p",[s._v("我现在有以下几个方法")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方法 A() 配有默认事务")]),s._v("\n\tfun "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用 方法B()")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("B")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方法 B() 配有默认事务")]),s._v("\n\tfun "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用 方法C()")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("C")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceC")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方法 C() 配有默认事务")]),s._v("\n\tfun "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("我将Service类A B C 都增加了事务. 但没配置具体事务传播行为. 所以为默认事务.\n默认事务为: 谁用谁管. 不管我就自己管自己")]),s._v(" "),t("p",[s._v("此时的情况为, A在调用的时候没有事务, 所以他自己新启了事务, 当它调用B的时候, B发现A存在独立事务, 那么B加入到了A的事务中, 同样 B在调用C的时候已经加入到了A的事务中, 那么C在执行的时候加入到了A的事务中.")]),s._v(" "),t("p",[s._v("调用者有事务, 我加入,\n调用者没有, 我新启.")]),s._v(" "),t("p",[s._v("此时情况. 正常运行, 为独立事务没有问题.")]),s._v(" "),t("p",[s._v("但当方法 C()出现异常时. 被方法 B()捕获并未抛出.\n当方法执行结束后, 会出现\n"),t("code",[s._v("Transaction has been rolled back because it has been marked as rollback")])]),s._v(" "),t("p",[s._v("原因为上面提到的")]),s._v(" "),t("p",[t("strong",[s._v("原子性（Atomicity）：事物是一个不可分割的工作单位，事物中的操作要么都发生，要么都不发生")])]),s._v(" "),t("p",[s._v("方法C()不发生, 其他也不能继续发生 . 所以当C()出现问题时, B() 把它包庇了下来. 当时A()不知道, 还继续做提交, 说我们的事务都提交了. 其实C()回滚了. 最后来事情暴露了. 程序执行中断. 这个锅. B 必须背. 因为当它捕获了异常后, 应将异常继续抛出. 让程序正常中断. 不然就是意外退出.")]),s._v(" "),t("p",[t("strong",[s._v("切记 -- 知识点, 记笔记")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
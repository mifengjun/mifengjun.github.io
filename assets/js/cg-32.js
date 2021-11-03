(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{445:function(a,e,t){"use strict";t.r(e);var r=t(22),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"class文件的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件的结构"}},[a._v("#")]),a._v(" CLASS文件的结构")]),a._v(" "),t("blockquote",[t("p",[a._v("我相信你一定打开过 class 文件，你看到的也是下面这个样子，不过这里面都是啥？今天我们一起好好看看。")])]),a._v(" "),t("h2",{attrs:{id:"class文件的结构-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件的结构-2"}},[a._v("#")]),a._v(" CLASS文件的结构")]),a._v(" "),t("ol",[t("li",[a._v("魔数")]),a._v(" "),t("li",[a._v("版本号")]),a._v(" "),t("li",[a._v("常量池")]),a._v(" "),t("li",[a._v("字段表集合")]),a._v(" "),t("li",[a._v("方法表集合")]),a._v(" "),t("li",[a._v("属性表集合")])]),a._v(" "),t("p",[a._v("我相信你一定打开过 class 文件，你看到的也是下面这个样子，不过这里面都是啥？今天我们一起好好看看。（如果不方便看的话，可以在文章末尾关注我的公众号，在手机上阅读）")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.loli.net/2021/01/10/3oGNDJpU91xnfLM.png",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("如果上图不方便看的话，可以在文章末尾关注我的公众号，在手机上阅读")])]),a._v(" "),t("h2",{attrs:{id:"属性表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性表"}},[a._v("#")]),a._v(" 属性表")]),a._v(" "),t("p",[a._v("首先属性表是用来补充信息用的，比如他可以继续补充类文件的信息、就是我们上面最后的那一段内容，还有他可以补充字段的信息，补充方法的信息。所以它出现的位置不同，补充的额外信息也会不一样。")]),a._v(" "),t("p",[a._v("下面我们 "),t("strong",[a._v("简单")]),a._v(" 的了解一下都有哪些 "),t("strong",[a._v("主要")]),a._v(" 的内容，之所以要简单、要了解主要的，就是因为它保存的额外信息实在太多了。")]),a._v(" "),t("p",[a._v("属性表的结构是由 2 个字节的属性名索引，4 个字节的属性内容长度，和 1 个字节的属性信息组成。")]),a._v(" "),t("p",[a._v("按照属性的类别可以分为：类文件属性、字段表属性、方法表属性")]),a._v(" "),t("h3",{attrs:{id:"类文件属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类文件属性"}},[a._v("#")]),a._v(" 类文件属性")]),a._v(" "),t("h4",{attrs:{id:"innerclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innerclass"}},[a._v("#")]),a._v(" InnerClass")]),a._v(" "),t("p",[a._v("保存主类和内部类的关系")]),a._v(" "),t("h4",{attrs:{id:"sourcefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcefile"}},[a._v("#")]),a._v(" SourceFile")]),a._v(" "),t("p",[a._v("记录生成这个Class文件的源码文件名称")]),a._v(" "),t("h3",{attrs:{id:"方法表属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法表属性"}},[a._v("#")]),a._v(" 方法表属性")]),a._v(" "),t("h4",{attrs:{id:"code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[a._v("#")]),a._v(" Code")]),a._v(" "),t("p",[a._v("Java 程序方法体里面的代码经过 Javac 编译器处理之后， 最终变为字节码指令存储在Code属性内。并非所有的方法表都必须存在这个属性， 接口或者抽象类中的方法就不存在Code属性 。")]),a._v(" "),t("p",[a._v("code 属性里面还有属性表.... （套娃啊），其中包含")]),a._v(" "),t("ul",[t("li",[a._v("LineNumberTable 源码和生成的字节码行号映射表")]),a._v(" "),t("li",[a._v("LocalVariableTable 栈帧中的变量与源码变量的映射关系")]),a._v(" "),t("li",[a._v("ExceptionTable 异常表")]),a._v(" "),t("li",[a._v(".....")])]),a._v(" "),t("h4",{attrs:{id:"exceptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[a._v("#")]),a._v(" Exceptions")]),a._v(" "),t("p",[a._v("Exceptions属性的作用是列举出在throws关键字后面抛出的异常")]),a._v(" "),t("h4",{attrs:{id:"methodparameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methodparameters"}},[a._v("#")]),a._v(" MethodParameters")]),a._v(" "),t("p",[a._v("定义方法的参数信息")]),a._v(" "),t("h3",{attrs:{id:"字段表属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字段表属性"}},[a._v("#")]),a._v(" 字段表属性")]),a._v(" "),t("h4",{attrs:{id:"constantvalue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constantvalue"}},[a._v("#")]),a._v(" ConstantValue")]),a._v(" "),t("p",[a._v("这个属性用于为字段的静态变量赋值。只有字段声明为 static 时才有效。Javac 编译器在编译的时候，如果遇到 static 和 final 同时修饰的 基本类型或String 类型变量，会直接在 ConstantValue 属性进行字段初始化。也就是我们说的常量。如果没有 final 修饰，或者不是基本类型和 String 类型，则会在类初始化方法执行的时候初始化  "),t("code",[a._v("<clinit>")])]),a._v(" "),t("h3",{attrs:{id:"通用属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用属性"}},[a._v("#")]),a._v(" 通用属性")]),a._v(" "),t("h5",{attrs:{id:"deprecated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deprecated"}},[a._v("#")]),a._v(" Deprecated")]),a._v(" "),t("p",[a._v("Deprecated属性用于表示某个类、 字段或者方法被弃用")]),a._v(" "),t("p",[a._v("关于属性表的内容还有很多，我只了解了一些基本常见的，这部分内容在周老师书里还是比较全的。想继续了解的可以在书中 6.3.7 章节找到更多内容。")]),a._v(" "),t("p",[a._v("（正文完）")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("如果觉得写的还不错，可以关注点赞在看支持我，如果想一起学习的话，非常欢迎加群一起学习。")]),a._v(" "),t("h2",{attrs:{id:"推荐阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[a._v("#")]),a._v(" 推荐阅读")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MjM2NDU1Mw==&mid=2247485295&idx=1&sn=ebb76f06a0998e12a16d817392de0f7e&chksm=fc6bee89cb1c679f6ef3e0a5327cf0e19d2f833bdec2eb4c3cb7edd233a6d5b66ff3ad39c5eb&token=1494472137&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("到底是谁在回收 JVM 的垃圾"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MjM2NDU1Mw==&mid=2247485282&idx=1&sn=abde86f06e82c63858d60960b3122fa7&chksm=fc6bee84cb1c67927e360626ac0c1822d8f5e77de14c097989dcbab052028f05ffc24ed93d63&token=1303129454&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("天天听人家说的 GC 到底是个啥？"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MjM2NDU1Mw==&mid=2247485226&idx=1&sn=5b8ed2e5d06899ff2d7d931f9d964d70&chksm=fc6beecccb1c67da4b405fa8c8c69878958b56d9291bdf8067b4bbf8c137b0194a0cae14e622&token=1941800665&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("你创建的 Java 对象搁哪了"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MjM2NDU1Mw==&mid=2247485249&idx=1&sn=589495ebea994d2ac91110d9bdcf5326&chksm=fc6beea7cb1c67b17258a7da71a36f00b0386b68f7d25d53949ac7de7be5f3f74d3a205e439b&token=1941800665&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM 中对象咋创建啊，又怎么访问啊"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MjM2NDU1Mw==&mid=2247485273&idx=1&sn=ca06732e3ce9853446993618ca06a154&chksm=fc6beebfcb1c67a9bee28a755e15a31fb62b87d48e2a795a15765d82595525ce49fc3cb95fee&token=1941800665&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM 把内存”收“回来用的是什么法器"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU2MjM2NDU1Mw==&mid=2247485257&idx=1&sn=ca53d2e3a29f1a05bcd4b5fd7ec271fc&chksm=fc6beeafcb1c67b9e0b33ea8d59e6d5e9d386f0ef38ef2a3329bb0f1dfabeb5103854a2f2160&token=1941800665&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM 是怎么把“送”出去的内存又“要”回来的"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{562:function(t,e,r){"use strict";r.r(e);var a=r(12),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("前端工具和框架的自身更新速度非常块，要想追赶上前端工具和框架的更新速度，\n需要抓住那些"),r("strong",[t._v("本质的知识")]),t._v("，然后才能更加轻松地理解这些上层应用。")]),t._v(" "),r("h2",{attrs:{id:"编译器和解释器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译器和解释器"}},[t._v("#")]),t._v(" 编译器和解释器")]),t._v(" "),r("p",[t._v("由于机器不能直接理解高级代码，需要通过编译器或者解析器翻译成机器码")]),t._v(" "),r("h3",{attrs:{id:"编译器-compiler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译器-compiler"}},[t._v("#")]),t._v(" 编译器（Compiler）")]),t._v(" "),r("p",[t._v("编译型语言在程序执行之前，需要经过编译器的编译过程，并且编译之后会直接保留机器能读懂的二进制文件，\n这样每次运行程序时，都可以直接运行该二进制文件，而不需要再次重新编译了。\n比如 C/C++、GO 等都是编译型语言。")]),t._v(" "),r("h3",{attrs:{id:"解析器-interpreter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解析器-interpreter"}},[t._v("#")]),t._v(" 解析器（Interpreter）")]),t._v(" "),r("p",[t._v("解释型语言编写的程序，在每次运行时都需要通过解释器对程序进行动态解释和执行。\n比如 Python、JavaScript 等都属于解释型语言。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f757d423cda149f1b638576a32eea5dc~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),r("h2",{attrs:{id:"v8-执行一段-javascript-代码流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v8-执行一段-javascript-代码流程"}},[t._v("#")]),t._v(" V8 执行一段 JavaScript 代码流程")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("生成抽象语法树（AST）和执行上下文")]),t._v(" "),r("p",[t._v("高级语言是开发者可以理解的语言，但是让编译器或者解释器来理解就非常困难了。\n对于编译器或者解释器来说，它们可以理解的就是 AST 了。所以无论你使用的是解释型语言还是编译型语言，\n在编译过程中，它们都会生成一个 AST。\n这和渲染引擎将 HTML 格式文件转换为计算机可以理解的 DOM 树的情况类似。")]),t._v(" "),r("ul",[r("li",[t._v("第一阶段是分词（tokenize），又称为词法分析，其作用是将一行行的源码拆解成一个个 token。")]),t._v(" "),r("li",[t._v("第二阶段是解析（parse），又称为语法分析，其作用是将上一步生成的 token 数据，根据语法规则转为 AST。")])])]),t._v(" "),r("li",[r("p",[t._v("将代码翻译成字节码（Bytecode）")]),t._v(" "),r("p",[t._v("由于直接执行机器码效率高，但是运行在 512M 内存的手机上，内存占用问题也暴露出来了，\n因为 V8 需要消耗大量的内存来存放转换后的机器码。为了解决内存占用问题，\nV8 团队大幅重构了引擎架构，引入字节码，并且抛弃了之前的编译器，")]),t._v(" "),r("p",[r("strong",[t._v("字节码就是介于 AST 和机器码之间的一种代码。"),r("strong",[t._v("但是与特定类型的机器码无关，\n字节码需要通过")]),t._v("解释器")]),t._v("将其转换为机器码后才能执行。")]),t._v(" "),r("p",[t._v("机器码所占用的空间远远超过了字节码，所以使用字节码可以减少系统的内存使用。")])]),t._v(" "),r("li",[r("p",[t._v("执行代码\n即时编译器（JIT）")]),t._v(" "),r("p",[t._v("在 Ignition 执行字节码的过程中，如果发现有热点代码（HotSpot），\n比如一段代码被重复执行多次，这种就称为热点代码，那么后台的编译器 TurboFan\n就会把该段热点的字节码编译为高效的机器码，然后当再次执行这段被优化的代码时，\n只需要执行编译后的机器码就可以了，这样就大大提升了代码的执行效率。")]),t._v(" "),r("p",[t._v("Java 和 Python 的虚拟机也都是基于即时编译（JIT）（字节码配合解释器和编译器）实现的。\n具体到 V8，就是指解释器 Ignition 在解释执行字节码的同时，收集代码信息，\n当它发现某一部分代码变热了之后，TurboFan 编译器就把热点的字节码转换为机器码，\n并把转换后的机器码保存起来，以备下次使用。")]),t._v(" "),r("blockquote",[r("p",[t._v("V8 使用了“字节码 +JIT”技术之外，苹果的 SquirrelFish Extreme 和 Mozilla 的\nSpiderMonkey 也都使用了该技术。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a75603e8cf064bedbbb9170bdea76fd6~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://time.geekbang.org/column/article/131887",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://v8.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("v8"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);
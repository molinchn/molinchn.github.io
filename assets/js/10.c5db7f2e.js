(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{335:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"关于-容器适配器-container-adaptors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-容器适配器-container-adaptors"}},[s._v("#")]),s._v(" 关于“容器适配器(container adaptors)”")]),s._v(" "),t("p",[s._v("在C++ primer中关于容器适配器的定义是：")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("适配器")]),s._v("是标准库中的一个通用概念。容器，迭代器和函数都有适配器。本质上，一个适配器是一种机制，能使某种事物的行为看起来像一种不同的类型。")])]),s._v(" "),t("p",[s._v("在C++ STL中有三个顺序容器适配器：stack, queue和priority_queue。这三种数据结构并不是容器，而是对容器的一种行为限制，让它能够以例如push或者pop这种操作改变所存储的内容。")]),s._v(" "),t("h2",{attrs:{id:"c-stl中的priority-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-stl中的priority-queue"}},[s._v("#")]),s._v(" C++ STL中的priority_queue")]),s._v(" "),t("h3",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),t("p",[s._v("定义代码如下：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("T"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Compare")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" less"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Container")]),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("value_type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("priority_queue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可以看出默认情况下，Container是一个vector,也就是如果使用的是vector，的话，可以忽略后面Container的参数，只传class就可以了。")]),s._v(" "),t("p",[s._v('然后Compare默认使用的是less（STL所有的有序容器都默认用的是"<"，也就是less'),t("Type",[s._v("）。因此默认情况下建立出来的是一个大顶堆：priority_queue.top()取出来的是最大值。")])],1),s._v(" "),t("p",[s._v("这里大顶堆的理解是，比如vector按less排序会是下面这样：")]),s._v(" "),t("p",[s._v("1 < 2 < 3 < 4")]),s._v(" "),t("p",[s._v("这样1是在入队的地方，而4是在出队的地方，也就是top()。")]),s._v(" "),t("p",[s._v("如果想创建一个小顶堆，就要用functional中的greater"),t("Type",[s._v("()去构建，如下：")])],1),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("priority_queue "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pq")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token generic-function"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("greater")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
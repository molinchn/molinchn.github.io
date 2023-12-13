(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"c与c-风格的字符串辨析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c与c-风格的字符串辨析"}},[s._v("#")]),s._v(" C与C++风格的字符串辨析")]),s._v(" "),t("p",[s._v("C++中实际上存在两类字符串，一类是常说的标准库中的string，另一类是C风格的字符串。")]),s._v(" "),t("p",[s._v("正如C++ primer中所述：")]),s._v(" "),t("blockquote",[t("p",[s._v("尽管C++支持C风格的字符串，但是在C++程序中最好还是不要使用它们。这是因为C风格字符串不仅使用起来不太方便，而且极易引发程序漏洞，是诸多安全问题的根本原因。")])]),s._v(" "),t("p",[s._v("确实C风格的字符串及其难用，而且非常容易发生问题。")]),s._v(" "),t("p",[s._v("但是，我们不能完全不了解C风格的字符串，因为很多程序和相关的API在标准库出现前就已经完成。而且其中很多涉及重要的系统调用，例如网络编程中就有大量的C风格字符串的使用。我们可以嫌弃它，但是掌握它也是必须的。")]),s._v(" "),t("p",[s._v("下面就C与C++风格的字符串中一些使用上极易混淆的地方做一些辨析。")]),s._v(" "),t("h2",{attrs:{id:"_1-关于头文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于头文件"}},[s._v("#")]),s._v(" 1. 关于头文件")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("C风格的字符串是"),t("code",[s._v("string.h")]),s._v("。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("cstring")]),s._v("是C风格的string.h在C++下的对应头文件。")])]),s._v(" "),t("li",[t("p",[s._v("C++风格的字符串是"),t("code",[s._v("string")]),s._v("（STL标准库）。")])])]),s._v(" "),t("p",[s._v("实际是C++是兼容上述三个头文件的。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("string.h和cstring都提供了对于C风格字符串的相关操作。")])]),s._v(" "),t("li",[t("p",[s._v("而string是STL标准库提供的模板类容器。")])])]),s._v(" "),t("p",[s._v("他们是完全不一样的，如需详细了解，可以查阅cppreference.com文档。")]),s._v(" "),t("h2",{attrs:{id:"_2-关于c风格字符串的初始化与赋值操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-关于c风格字符串的初始化与赋值操作"}},[s._v("#")]),s._v(" 2. 关于C风格字符串的初始化与赋值操作")]),s._v(" "),t("h3",{attrs:{id:"_2-1-不同方式的初始化与其存储位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-不同方式的初始化与其存储位置"}},[s._v("#")]),s._v(" 2.1 不同方式的初始化与其存储位置")]),s._v(" "),t("p",[s._v("C风格的字符串有两大类初始化方式：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一类：字符数组形式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcde"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 由编译器计算大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcde"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二类：字符指针形式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcde"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("strong",[s._v("第一类方法用来指定大小时，必须至少比初始化的内容多1个空间")]),s._v("，用来存放null-terminated，即'\\0'。否则会有undefined错误发生。")]),s._v(" "),t("p",[s._v("必须要明确知道，这两类初始化"),t("strong",[s._v("完全不同")]),s._v("。使用字符数组所创建的字符串是可读可写的，存储位置为栈区。而用字符指针所得到的字符串是只读的，因为存储位置位于常量区。这是使用前必须明确的。")]),s._v(" "),t("h3",{attrs:{id:"_2-2-字符数组的名字和字符指针的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-字符数组的名字和字符指针的关系"}},[s._v("#")]),s._v(" 2.2 字符数组的名字和字符指针的关系")]),s._v(" "),t("p",[s._v("由于上述两种关系，我们常常会觉得，字符数组的名字和字符指针是一样的。实际上在很多使用到数组名字的地方，确实编译器会帮我们自动将其替换成「一个指向数组首元素的指针」。这句话的另一层意思就是，二者其实是不一样的，只是“好像在一些操作中一样”。有两个点需要注意：")]),s._v(" "),t("ul",[t("li",[s._v("使用auto变量推断一个C风格字符串时得到的是字符指针，而非字符数组。")]),s._v(" "),t("li",[s._v("使用decltype推断时，得到的是一个字符数组而不是字符指针（也就是上述的转换没有发生）")])]),s._v(" "),t("p",[s._v("即：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcde"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto")]),s._v(" auto_c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("decltype")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" decl_c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("观察其类型：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://murray-pic-1254317211.cos.ap-guangzhou.myqcloud.com/gitee_bak/20210514210232.png",alt:""}})]),s._v(" "),t("p",[s._v("注意：decltype连大小都继承下来了，因此不注意的话非常容易出现错误（不过大部分IDE能检测到）。")]),s._v(" "),t("h3",{attrs:{id:"_2-3-赋值问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-赋值问题"}},[s._v("#")]),s._v(" 2.3 赋值问题")]),s._v(" "),t("p",[s._v("在知道了字符数组和字符指针的区别后，必须要指出，不建议使用2.1中所述的字符指针方法构建字符串（即第二类）。**这并不是一种标准的用法，而且十分危险。**它的内存存放在文本常量区，可读不可写。**如果试图写入，程序会直接崩溃，甚至编译器不会警告（GCC应该会）。**因此，一个常规的做法是用第一类方法初始化，而字符指针可以用来指向已经初始化好的字符串。"),t("strong",[s._v("接下来讨论赋值的时候，都是存储在栈中的字符串。")])]),s._v(" "),t("p",[s._v("当我们以为辨清了存储问题就可以随意赋值，那就大错特错了，因为在C风格的字符串中，"),t("strong",[s._v("不能将数组的内容拷贝给其他数组作为其初始值")]),s._v("。")]),s._v(" "),t("p",[s._v("也就是说，不能进行赋值操作。具体来说是不能使用「等号」进行赋值。我们应该是用cstring或string.h中提供的字符串拷贝函数来进行操作：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("strcpy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" src "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("strncpy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t count "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这里通常就会出现及其危险的操作了，必须足够注意：")]),s._v(" "),t("ul",[t("li",[s._v("使用strcpy的时候必须保证dest是由足够空间的，否则结果为undefined。")]),s._v(" "),t("li",[s._v("使用strncpy时，不会保证拷贝 null-terminated，即'\\0'。")])]),s._v(" "),t("p",[s._v("一个常用的方法时把dest开得大一些，然后用0作为初始值，这样能以一种相对优雅的方式防止大多数问题，但是使用起来仍需注意。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcde"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拷贝下标2开始的总共2个字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("strncpy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" dest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果输出：cd")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_3-关于混用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-关于混用"}},[s._v("#")]),s._v(" 3. 关于混用")]),s._v(" "),t("p",[s._v("前面也提到了，我们无法抛弃C风格的字符串。当我们使用STL的string时，难免遇到C风格与STL容器类混用的问题。幸运的是STL已经为我们考虑了足够多，二者的转换可以非常方便。")]),s._v(" "),t("h3",{attrs:{id:"_3-1-c风格字符串转stl-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-c风格字符串转stl-string"}},[s._v("#")]),s._v(" 3.1 C风格字符串转STL string")]),s._v(" "),t("p",[s._v("STL对于C风格是非常宽容的，我们可以直接使用构造函数将C风格转换成容器类。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" cs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unix"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstring "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出：unix")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("也可以直接用C风格给STL string赋值。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("string s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出：unix")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("进行STL string的加法运算时，C风格的字符串可以作为其中一个对象。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("string scs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" cs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" scs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出：unixunix")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("需要再次警告：我们必须保证C风格的字符串是正确的，如果它没有争取地以'\\0'结尾，那结果也是undefined。")])]),s._v(" "),t("h3",{attrs:{id:"_3-2-stl-string转c风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-stl-string转c风格"}},[s._v("#")]),s._v(" 3.2 STL string转C风格")]),s._v(" "),t("p",[s._v("当我们的一些API只能接收C风格的字符串时，就必须考虑STL string向C风格转换。这里STL再一次为我们考虑了，提供了对应的转换函数：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://murray-pic-1254317211.cos.ap-guangzhou.myqcloud.com/gitee_bak/20210514203805.png",alt:""}})]),s._v(" "),t("p",[s._v("它的使用方法非常简单，如下：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("string s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unix"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以C格式的字符指针传进去")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("c_str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[s._v("《C++ Primer 中文第五版》")]),s._v(" "),t("li",[s._v("cppreference.com")]),s._v(" "),t("li",[s._v("https://blog.csdn.net/u012611878/article/details/78291036")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
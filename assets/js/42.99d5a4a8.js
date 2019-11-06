(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{321:function(t,e,a){"use strict";a.r(e);var v=a(24),_=Object(v.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("blockquote",[a("p",[t._v("推荐在任何情景下摒弃 "),a("code",[t._v("==")]),t._v(" 操作符，使用 "),a("code",[t._v("===")]),t._v(" 替代。")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 故意混淆视野的取反操作，其实比较容易理解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果上面的解决了，那这个呢？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("h2",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),a("p",[t._v("关于这一部分 ECMA 有规范的说明："),a("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("5.1"),a("OutboundLink")],1),t._v(" 版、"),a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-7.2.12",target:"_blank",rel:"noopener noreferrer"}},[t._v("6.0"),a("OutboundLink")],1),t._v(" 版。")]),t._v(" "),a("p",[t._v("偷懒，借用一下阮一峰的翻译：")]),t._v(" "),a("ol",[a("li",[t._v("如果 "),a("code",[t._v("x")]),t._v(" 不是正常值（比如抛出一个错误），中断执行。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("y")]),t._v(" 不是正常值，中断执行。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Type(x)")]),t._v(" 与 "),a("code",[t._v("Type(y)")]),t._v(" 相同，执行严格相等运算 "),a("code",[t._v("x === y")]),t._v("。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("x")]),t._v(" 是 "),a("code",[t._v("null")]),t._v("，"),a("code",[t._v("y")]),t._v(" 是 "),a("code",[t._v("undefined")]),t._v("，返回 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("x")]),t._v(" 是 "),a("code",[t._v("undefined")]),t._v("，"),a("code",[t._v("y")]),t._v(" 是 "),a("code",[t._v("null")]),t._v("，返回 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Type(x)")]),t._v(" 是数值，"),a("code",[t._v("Type(y)")]),t._v(" 是字符串，返回 "),a("code",[t._v("x == ToNumber(y)")]),t._v(" 的结果。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Type(x)")]),t._v(" 是字符串，"),a("code",[t._v("Type(y)")]),t._v(" 是数值，返回 "),a("code",[t._v("ToNumber(x) == y")]),t._v(" 的结果。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Type(x)")]),t._v(" 是布尔值，返回 "),a("code",[t._v("ToNumber(x) == y")]),t._v(" 的结果。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Type(y)")]),t._v(" 是布尔值，返回 "),a("code",[t._v("x == ToNumber(y)")]),t._v(" 的结果。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Type(x)")]),t._v(" 是字符串或数值或 "),a("code",[t._v("Symbol")]),t._v(" 值，"),a("code",[t._v("Type(y)")]),t._v(" 是对象，返回 "),a("code",[t._v("x == ToPrimitive(y)")]),t._v(" 的结果。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Type(x)")]),t._v(" 是对象，"),a("code",[t._v("Type(y)")]),t._v(" 是字符串或数值或 "),a("code",[t._v("Symbol")]),t._v(" 值，返回 "),a("code",[t._v("ToPrimitive(x) == y")]),t._v(" 的结果。")]),t._v(" "),a("li",[t._v("返回 "),a("code",[t._v("false")]),t._v("。")])]),t._v(" "),a("p",[t._v("根据上述规则则可以得到：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不符合以上 11 种条件，返回 false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("h2",{attrs:{id:"toprimitive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toprimitive","aria-hidden":"true"}},[t._v("#")]),t._v(" ToPrimitive")]),t._v(" "),a("p",[t._v("对于以上的规则其中比较难以理解的为该部分了，对象转为原始值需要考虑三种（Boolean、String、Number）情况。")]),t._v(" "),a("h3",{attrs:{id:"_1-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-number","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Number")]),t._v(" "),a("p",[t._v("所有对象（包括数组、函数）都转为 true。")]),t._v(" "),a("h3",{attrs:{id:"_2-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-string","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. String")]),t._v(" "),a("p",[t._v("对象转为 "),a("strong",[t._v("String")]),t._v(" 经历以下步骤：")]),t._v(" "),a("ol",[a("li",[t._v("如果对象具有 "),a("code",[t._v("toString()")]),t._v(" 方法，则调用这个方法。如果它返回一个原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。")]),t._v(" "),a("li",[t._v("如果对象没有 "),a("code",[t._v("toString()")]),t._v(" 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 "),a("code",[t._v("valueOf()")]),t._v(" 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。")]),t._v(" "),a("li",[t._v("否则，JavaScript 无法从 "),a("code",[t._v("toString()")]),t._v(" 或 "),a("code",[t._v("valueOf()")]),t._v(" 获得一个原始值，因此这时它将抛出一个类型错误异常。")])]),t._v(" "),a("h3",{attrs:{id:"_3-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-number","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Number")]),t._v(" "),a("p",[t._v("对象转为 "),a("strong",[t._v("Number")]),t._v(" 顺序有些区别：")]),t._v(" "),a("ol",[a("li",[t._v("如果对象具有 "),a("code",[t._v("valueOf()")]),t._v(" 方法，后者返回一个原始值，则 JavaScript 将这个原始值转为数字（如果需要的话），并返回这个数字。")]),t._v(" "),a("li",[t._v("否则，如果对象具有 "),a("code",[t._v("toString()")]),t._v(" 方法，后者返回一个原始值，则 JavaScript 将其转换并返回。")]),t._v(" "),a("li",[t._v("否则，JavaScript 抛出一个类型错误异常。")])])])},[],!1,null,null,null);e.default=_.exports}}]);
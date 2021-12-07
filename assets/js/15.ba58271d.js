(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{554:function(s,n,a){"use strict";a.r(n);var t=a(12),i=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("技术总结：")]),s._v(" "),a("ol",[a("li",[s._v("使用float布局")]),s._v(" "),a("li",[s._v("两侧使用margin负值，以便和中间内容横向重叠")]),s._v(" "),a("li",[s._v("防止中间内容被两侧覆盖，分别用padding 和 margin")])]),s._v(" "),a("p",[s._v("圣杯布局比较复杂，使用到position: relative")]),s._v(" "),a("h2",{attrs:{id:"圣杯布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[s._v("#")]),s._v(" 圣杯布局")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7672c6364df74285bef50e25d67d2a26~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[s._v("#")]),s._v(" HTML")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div id="head"> head </div>\n    <div id="container" class="clearfix">\n        <div id="main" class="column">main </div>\n        <div id="left" class="column"> left 220px </div>\n        <div id="right" class="column"> right 200px </div>\n    </div>\n<div id="footer"> footer </div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[s._v("#")]),s._v(" CSS")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("       body {\n            min-width: 800px;\n        }\n\n        #container {\n            /* 3. 防止中间内容被两侧覆盖 */\n            padding: 0 300px 0 200px;\n        }\n\n        .column {\n            /* 1.关键点，使用float布局 */\n            float: left;\n            text-align: center;\n            min-height: 200px;\n        }\n\n        #left {\n            width: 200px;\n            background-color: red;\n\n            /* 2. 知识点： \n            margin-top margin-left 为负值的时候 自己向上 向左 移动\n            margin-bottom margin-right 为负值的时候 自己没有影响，后面的元素向上向右移动\n            */\n            margin-left: -100%;\n\n            /* 与双飞翼布局不同之处 */\n            position: relative;\n            left: -200px;\n        }\n\n        #main {\n            background-color: blue;\n            width: 100%;\n        }\n\n        #right {\n            width: 300px;\n            background-color: #99f;\n            margin-right: -300px;/* 2. 知识点 */\n        }\n\n        #footer,\n        #header {\n            text-align: center;\n            background-color: #f9f;\n        }\n\n\n        /* 清除浮动 */\n        #footer {\n            clear: both;\n        }\n\n        /* 手动写清除浮动 */\n        /* .clearfix:after {\n            content: '';\n            display: table;\n            clear: both;\n        } */\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br")])]),a("h2",{attrs:{id:"双飞翼布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双飞翼布局"}},[s._v("#")]),s._v(" 双飞翼布局")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe659fb6535a489ea8618547beaaecc6~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"html-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-2"}},[s._v("#")]),s._v(" HTML")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div id="main" class="col">\n        <div id="main-wrap">\n            this is main\n        </div>\n    </div>\n    <div id="left" class="col">\n        this is left\n    </div>\n    <div id="right" class="col">\n        this is right\n    </div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"css-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-2"}},[s._v("#")]),s._v(" CSS")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("body {\n            min-width: 550px;\n        }\n        .col {\n            /*1.使用float*/\n            float: left;\n        }\n\n        #main {\n            width: 100%;\n            height: 200px;\n            background-color: #ccc;\n        }\n        #main-wrap {\n            /* 3. 防止中间内容被两侧覆盖，分别用padding 和 margin */\n            margin: 0 190px 0 190px;\n        }\n\n        #left {\n            width: 190px;\n            height: 200px;\n            background-color: #0000FF;\n            /* 2. 两侧使用margin负值，以便和中间内容横向重叠 */\n            margin-left: -100%;\n        }\n        #right {\n            width: 190px;\n            height: 200px;\n            background-color: #FF0000;\n            /* 2. 两侧使用margin负值，以便和中间内容横向重叠 */\n            margin-left: -190px;\n        }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])])])}),[],!1,null,null,null);n.default=i.exports}}]);
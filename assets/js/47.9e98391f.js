(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1048:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_1-触发器概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-触发器概述"}},[s._v("#")]),s._v(" 1. 触发器概述")]),s._v(" "),n("p",[s._v("触发器是与表有关的数据库对象，是指在 insert/update/delete 之前或者之后，触发并执行触发器中定义的SQL语句集合。")]),s._v(" "),n("p",[s._v("触发器的这种特性可以协助应用在数据库端确保数据的完整性、日志记录、数据校验等操作。")]),s._v(" "),n("p",[s._v("目前触发器只支持行级触发，不支持语句级触发。")]),s._v(" "),n("p",[s._v("触发器类型：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("触发器类型")]),s._v(" "),n("th",[s._v("new 和 old 的使用")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("insert 型触发器")]),s._v(" "),n("td",[s._v("new 表示将要或者已经新增的数据")])]),s._v(" "),n("tr",[n("td",[s._v("update 型触发器")]),s._v(" "),n("td",[s._v("old 表示修改之前的数据，new 表示将要或者已经修改的数据")])]),s._v(" "),n("tr",[n("td",[s._v("delete 型触发器")]),s._v(" "),n("td",[s._v("old表示将要或者已经删除的触数据")])])])]),s._v(" "),n("h1",{attrs:{id:"_2-创建触发器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建触发器"}},[s._v("#")]),s._v(" 2. 创建触发器")]),s._v(" "),n("p",[s._v("语法结构：")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" trigger_name\n\nbefore"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("updete"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" table_name \n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n\n    trigger_statement\n    \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("需求：通过触发器记录 emp 表的数据变更日志，包括增加，修改，删除操作。")]),s._v(" "),n("p",[s._v("数据准备")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" emp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  age "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'年龄'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  salary "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'薪水'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("innodb")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" emp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("salary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'金毛狮王'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3800")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'白眉鹰\n王'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'青翼蝠王'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2800")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'紫衫龙王'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1800")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("创建日志表")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" emp_logs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  operation "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作类型, insert/update/delete'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  operate_time "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作时间'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  operate_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作表的ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  operate_params "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作参数'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("innodb")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("创建 insert 型触发器")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" emp_logs_insert_trigger\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" emp\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" emp_logs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'insert'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("concat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'插入后(id：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，name：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，age：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，salary：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 使用触发器需要将结束符改变  语法：delimiter $")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("创建 update 型触发器")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" emp_logs_update_trigger\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" emp\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" emp_logs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'update'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("concat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'修改前(id：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，name：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，age：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，salary：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("')；修改后(id：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，name：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，age：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，salary：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" $\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("创建 delete 型触发器")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" emp_logs_delete_trigger\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" emp\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" emp_logs\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("operate_params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'delete'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("concat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'删除前(id：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，name：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，age：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，salary：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("$\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("测试：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(894),alt:"d5d7960f87f20dfec53509a795347c6a.png"}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(895),alt:"71f940935b9802acdde64551b7b3d011.png"}})]),s._v(" "),n("h1",{attrs:{id:"_3-查看触发器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看触发器"}},[s._v("#")]),s._v(" 3. 查看触发器")]),s._v(" "),n("p",[s._v("语法结构：")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" trigger_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h1",{attrs:{id:"_4-删除触发器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除触发器"}},[s._v("#")]),s._v(" 4. 删除触发器")]),s._v(" "),n("p",[s._v("语法结构：")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" triggers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(896),alt:"7b3ef621cae2b3f6032da9ecb66a0a7c.png"}})])])}),[],!1,null,null,null);t.default=e.exports},894:function(s,t,a){s.exports=a.p+"assets/img/d5d7960f87f20dfec53509a795347c6a.d5d7960f.png"},895:function(s,t,a){s.exports=a.p+"assets/img/71f940935b9802acdde64551b7b3d011.71f94093.png"},896:function(s,t,a){s.exports=a.p+"assets/img/7b3ef621cae2b3f6032da9ecb66a0a7c.7b3ef621.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1053:function(s,a,e){"use strict";e.r(a);var t=e(6),v=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_1-nosql数据模型简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-nosql数据模型简介"}},[s._v("#")]),s._v(" 1. NoSQL数据模型简介")]),s._v(" "),t("p",[s._v("以一个电商客户、订单、订购、地址模型来对比关系型数据库和非关系型数据库")]),s._v(" "),t("ul",[t("li",[s._v("传统关系型数据库：采用ER图（1对1，1对n，n对n）和主外键等")]),s._v(" "),t("li",[s._v("NOSQL：使用 BSON，一种类json的一种二进制形式的存储格式，简称Binary JSON，它和JSON一样，支持内嵌的文档对象和数组对象")])]),s._v(" "),t("p",[s._v("两者对比：为什么要使用聚合模型？")]),s._v(" "),t("ol",[t("li",[s._v("高并发的操作不建议使用关联查询，互联网公司用冗余数据来避免关联查询")]),s._v(" "),t("li",[s._v("分布式事务支持不了太多的并发")])]),s._v(" "),t("h2",{attrs:{id:"_1-1-聚合模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-聚合模型"}},[s._v("#")]),s._v(" 1.1 聚合模型")]),s._v(" "),t("ol",[t("li",[s._v("KV")]),s._v(" "),t("li",[s._v("BSON")]),s._v(" "),t("li",[s._v("列族")])]),s._v(" "),t("p",[s._v("列族按列存储数据的。其最大的特点是方便存储结构化和半结构化数据，方便做数据压缩，对针对某一列或者某几列的查询有非常大的 IO 优势。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(931),alt:"81300673dd99aa99a86d81946b9a4bb6.png"}})]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("图形")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(932),alt:"585d380b2dcd8d17297c5b2586aa0724.png"}})]),s._v(" "),t("h2",{attrs:{id:"_1-2-nosql数据库的四大分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-nosql数据库的四大分类"}},[s._v("#")]),s._v(" 1.2 NoSQL数据库的四大分类")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("KV")]),s._v(" "),t("ul",[t("li",[s._v("新浪：BerkeleyDB + Redis")]),s._v(" "),t("li",[s._v("美团：Redis + tair")]),s._v(" "),t("li",[s._v("阿里、百度：memcache + Redis")])])]),s._v(" "),t("li",[t("p",[s._v("文档型数据库（bson格式较多）")]),s._v(" "),t("ul",[t("li",[s._v("CouchDB")]),s._v(" "),t("li",[s._v("MongoDB")])])]),s._v(" "),t("li",[t("p",[s._v("列存储数据库")]),s._v(" "),t("ul",[t("li",[s._v("Cassandra、HBase")]),s._v(" "),t("li",[s._v("分布式文件系统")])])]),s._v(" "),t("li",[t("p",[s._v("图关系数据库")]),s._v(" "),t("ul",[t("li",[s._v("它不是放图形的、放的是关系，比如：朋友圈社交网络、广告推荐系统")]),s._v(" "),t("li",[s._v("社交网络、推荐系统。专注于构建关系图谱")]),s._v(" "),t("li",[s._v("Neo4j、InfoGrid")])])]),s._v(" "),t("li",[t("p",[s._v("四者对比")])])]),s._v(" "),t("p",[t("img",{attrs:{src:e(933),alt:"11db2b8b8ab8e44bf755eebd9446ebee.png"}})]),s._v(" "),t("h2",{attrs:{id:"_1-3-分布式数据库cap原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-分布式数据库cap原理"}},[s._v("#")]),s._v(" 1.3 分布式数据库CAP原理")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("传统关系先行数据库的 ACID 原理")]),s._v(" "),t("ul",[t("li",[s._v("A (Atomicity) 原子性")])]),s._v(" "),t("p",[s._v("原子性很容易理解，也就是说事务里的所有操作要么全部做完，要么都不做，事务成功的条件是事务里的所有操作都成功，只要有一个操作失败，整个事务就失败，需要回滚。比如银行转账，从A账户转100元至B账户，分为两个步骤：1）从A账户取100元；2）存入100元至B账户。这两步要么一起完成，要么一起不完成，如果只完成第一步，第二步失败，钱会莫名其妙少了100元。")]),s._v(" "),t("ul",[t("li",[s._v("C (Consistency) 一致性")])]),s._v(" "),t("p",[s._v("一致性也比较容易理解，也就是说数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束。")])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("I (Isolation) 独立性")]),s._v(" "),t("p",[s._v("所谓的独立性是指并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响。比如现有有个交易是从A账户转100元至B账户，在这个交易还未完成的情况下，如果此时B查询自己的账户，是看不到新增加的100元的")]),s._v(" "),t("ul",[t("li",[s._v("D (Durability) 持久性")])]),s._v(" "),t("p",[s._v("持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失。")])])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("CAP")]),s._v(" "),t("ul",[t("li",[s._v("C：Consistency（强一致性）")]),s._v(" "),t("li",[s._v("A：Availability（可用性）")]),s._v(" "),t("li",[s._v("P：Partition tolerance（分区容错性）")])])])]),s._v(" "),t("p",[s._v("CAP理论就是说在分布式存储系统中，最多只能实现上面的两点。而由于当前的网络硬件肯定会出现延迟丢包等问题，所以"),t("strong",[s._v("分区容忍性是我们必须需要实现的")]),s._v("。所以我们只能在"),t("strong",[s._v("一致性和可用性之间进行权衡")]),s._v("，"),t("strong",[s._v("没有NoSQL系统能同时保证这三点")]),s._v("。")]),s._v(" "),t("ul",[t("li",[s._v("CA 传统Oracle数据库")]),s._v(" "),t("li",[s._v("AP 大多数网站架构的选择")]),s._v(" "),t("li",[s._v("CP Redis、Mongodb")])]),s._v(" "),t("p",[s._v("一致性和可用性之间取一个平衡。多余大多数web应用，其实并不需要强一致性。因此牺牲C换取P，这是目前分布式数据库产品的方向。")]),s._v(" "),t("p",[s._v("CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，"),t("strong",[s._v("最多只能同时较好的满足两个")]),s._v("。")]),s._v(" "),t("p",[s._v("因此，根据 CAP 原理将 NoSQL 数据库分成了满足 CA 原则、满足 CP 原则和满足 AP 原则三大类：")]),s._v(" "),t("ul",[t("li",[s._v("CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。")]),s._v(" "),t("li",[s._v("CP - 满足一致性，分区容忍性的系统，通常性能不是特别高。")]),s._v(" "),t("li",[s._v("AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(934),alt:"e32b542271efab25f3a3aab3b968aba6.png"}})]),s._v(" "),t("h2",{attrs:{id:"_1-4-base"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-base"}},[s._v("#")]),s._v(" 1.4 BASE")]),s._v(" "),t("p",[s._v("BASE就是为了解决关系数据库强一致性引起的问题而引起的可用性降低而提出的解决方案。")]),s._v(" "),t("p",[s._v("BASE其实是下面三个术语的缩写：")]),s._v(" "),t("ul",[t("li",[s._v("基本可用（Basically Available）")]),s._v(" "),t("li",[s._v("软状态（Soft state）")]),s._v(" "),t("li",[s._v("最终一致（Eventually consistent）")])]),s._v(" "),t("p",[s._v("它的思想是通过"),t("strong",[s._v("让系统放松对某一时刻数据一致性的要求来换取系统整体伸缩性和性能上改观")]),s._v("。为什么这么说呢，缘由就在于大型系统往往由于地域分布和极高性能的要求，不可能采用分布式事务来完成这些指标，要想获得这些指标，我们必须采用另外一种方式来完成，这里BASE就是解决这个问题的办法")]),s._v(" "),t("h2",{attrs:{id:"_1-5-分布式-集群简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-分布式-集群简介"}},[s._v("#")]),s._v(" 1.5 分布式+集群简介")]),s._v(" "),t("p",[s._v("分布式系统（distributed system）：")]),s._v(" "),t("p",[s._v("由多台计算机和通信的软件组件通过计算机网络连接（本地网络或广域网）组成。分布式系统是建立在网络之上的软件系统。正是因为软件的特性，所以分布式系统具有高度的内聚性和透明性。因此，网络和分布式系统之间的区别更多的在于高层软件（特别是操作系统），而不是硬件。分布式系统可以应用在在不同的平台上如：PC、工作站、局域网和广域网上等。")]),s._v(" "),t("p",[s._v("简单来讲：")]),s._v(" "),t("ol",[t("li",[s._v("分布式："),t("strong",[s._v("不同的多台服务器上面部署不同的服务模块（工程）")]),s._v("，他们之间通过Rpc/Rmi之间通信和调用，对外提供服务和组内协作。")]),s._v(" "),t("li",[s._v("集群："),t("strong",[s._v("不同的多台服务器上面部署相同的服务模块")]),s._v("，通过分布式调度软件进行统一的调度，对外提供服务和访问")])]),s._v(" "),t("h1",{attrs:{id:"_2-redis-在-linux-环境下的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-在-linux-环境下的安装"}},[s._v("#")]),s._v(" 2. Redis 在 Linux 环境下的安装")]),s._v(" "),t("h2",{attrs:{id:"_2-1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装"}},[s._v("#")]),s._v(" 2.1 安装")]),s._v(" "),t("p",[s._v("参考网址："),t("a",{attrs:{href:"https://www.cnblogs.com/bubbleboom/p/14185476.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu20.04安装Redis"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("strong",[s._v("安装 redis")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt install redis-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("安装完成后检查服务的状态")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo systemctl status redis-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("配置 redis")])]),s._v(" "),t("p",[s._v("安装完成后默认的配置文件在 "),t("code",[s._v("/etc/redis/redis.conf")]),s._v("，我们只需要修改该文件实现相应的配置。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo vim /etc/redis/redis.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置完成后，重新启动Redis")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo systemctl restart redis-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("使用 redis-cli 连接")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis-cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("启动 redis 服务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo systemctl start redis-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("关闭 redis 服务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo systemctl stop redis-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("重启 redis 服务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo systemctl restart redis-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2-2-hello-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-hello-world"}},[s._v("#")]),s._v(" 2.2 Hello World")]),s._v(" "),t("p",[t("img",{attrs:{src:e(935),alt:"75b04401510fe10a68b3ebed2a9ac07b.png"}})])])}),[],!1,null,null,null);a.default=v.exports},931:function(s,a,e){s.exports=e.p+"assets/img/81300673dd99aa99a86d81946b9a4bb6.81300673.png"},932:function(s,a,e){s.exports=e.p+"assets/img/585d380b2dcd8d17297c5b2586aa0724.585d380b.png"},933:function(s,a,e){s.exports=e.p+"assets/img/11db2b8b8ab8e44bf755eebd9446ebee.11db2b8b.png"},934:function(s,a,e){s.exports=e.p+"assets/img/e32b542271efab25f3a3aab3b968aba6.e32b5422.png"},935:function(s,a,e){s.exports=e.p+"assets/img/75b04401510fe10a68b3ebed2a9ac07b.75b04401.png"}}]);
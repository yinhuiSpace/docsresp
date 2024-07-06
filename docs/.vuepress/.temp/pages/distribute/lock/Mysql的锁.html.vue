<template><div><h1 id="mysql的锁" tabindex="-1"><a class="header-anchor" href="#mysql的锁"><span>Mysql的锁</span></a></h1>
<h2 id="全局锁" tabindex="-1"><a class="header-anchor" href="#全局锁"><span>全局锁</span></a></h2>
<p>全局锁就是对整个数据库实例加锁。MySQL 提供了一个加全局读锁的方法，命令是 Flush tables with read lock (FTWRL)，执行后整个库处于只读状态。</p>
<p>使用场景是做全库逻辑备份（mysqldump）。</p>
<h2 id="表级锁" tabindex="-1"><a class="header-anchor" href="#表级锁"><span>表级锁</span></a></h2>
<p>表级锁就是对当前操作的整张表加锁，MyISAM与InnoDB引擎都支持表级锁定。</p>
<p>主要可分为表锁、元数据锁（Metadata Lock, MDL）、意向锁（Intention Lock）和 自增长锁（AUTO-INC）。</p>
<h3 id="表锁" tabindex="-1"><a class="header-anchor" href="#表锁"><span>表锁</span></a></h3>
<p>表锁除了会限制别的线程的读写外，也会限制本线程接下来的读写操作。添加和释放表锁的命令如下：</p>
<h2 id="行级锁" tabindex="-1"><a class="header-anchor" href="#行级锁"><span>行级锁</span></a></h2>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407061735863.webp" alt="图片"></p>
</div></template>



# Mysql的锁

## 全局锁

全局锁就是对整个数据库实例加锁。MySQL 提供了一个加全局读锁的方法，命令是 Flush tables with read lock (FTWRL)，执行后整个库处于只读状态。

使用场景是做全库逻辑备份（mysqldump）。

## 表级锁

表级锁就是对当前操作的整张表加锁，MyISAM与InnoDB引擎都支持表级锁定。

主要可分为表锁、元数据锁（Metadata Lock, MDL）、意向锁（Intention Lock）和 自增长锁（AUTO-INC）。

### 表锁

表锁除了会限制别的线程的读写外，也会限制本线程接下来的读写操作。添加和释放表锁的命令如下：

## 行级锁

![图片](https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407061735863.webp)
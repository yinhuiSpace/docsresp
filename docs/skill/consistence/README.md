# 持久化手段

对用户填写的设置参数，配置文件，基本信息进行持久化，可以简化系统的使用

## properties
properties是由jdk提供的原生api,常用来加载，缓存或持久化配置参数
load方法：从指定文件中加载配置参数
setProperty：缓存配置参数
store方法：向指定文件中写出配置参数

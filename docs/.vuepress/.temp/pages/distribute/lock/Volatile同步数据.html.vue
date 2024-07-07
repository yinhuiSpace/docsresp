<template><div><h1 id="volatile同步数据" tabindex="-1"><a class="header-anchor" href="#volatile同步数据"><span>Volatile同步数据</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>Volatile 是一个Java语言的类型修饰符，一旦一个共享变量（类的成员变量、类的静态成员变量）被Volatile修饰之后，那么就具备了两层语义：</p>
<ol>
<li>保证多线程下的可见性</li>
<li>禁止进行指令重排序(即保证有序性)</li>
</ol>
<p>这里需要注意一个问题，Volatile只能让被他修饰内容具有可见性、有序性,无法保证操作的原子性</p>
<p>简单来说就是，只要在变量前加上volatile关键字修饰，就可以确保该变量的可见性和有序性</p>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2>
<p>jdk底层采用一种java内存模型JMM，这是一种内存使用机制</p>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407071235366.png" alt="image-20240707123510278"></p>
<p>Java 内存模型（JMM）是一种抽象的概念，并不真实存在，它描述了一组规则或规范，通过这组规范定义了程序中各个变量（包括实例字段、静态字段和构成数组对象的元素）的访问方式。</p>
<p>试图屏蔽各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的内存访问效果。</p>
<p>Java内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存，线程的工作内存中保存了该线程中是用到的变量的主内存副本拷贝，线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存。不同的线程之间也无法直接访问对方工作内存中的变量，线程间变量的传递均需要自己的工作内存和主存之间进行数据同步进行。</p>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407071248624.png" alt="图片"></p>
<p>volatile正是基于JMM机制来保证可见性的</p>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407071240682.png" alt="图片"></p>
<p>volatile变量规则：对一个变量的写操作先行发生于后面对这个变量的读操作</p>
<p>这里其实有二层，一个是前面提过的，读volatile总是能读到最新的值，即使是写线程和读线程同时进行。因为，写操作会被更新到主存，读线程的工作内存会被置为无效，需要重新到主存去读，而读主存的地址，是要等待该地址更新后才能成功读取。</p>
<p>另外，一个就是对于volatile上下文的变量的读写的影响，也就是说它为什么能禁止指令重排：volatile的准确可见性作用是，当一个线程写一个volatile变量时，写完成后会刷新工作内存到主存，这会把目前这个线程所做过修改的所有变量都刷新到主存。举个例子来说明：</p>
<p>主内存和工作内存之间的交互有具体的交互协议，JMM定义了八种操作来完成，这八种操作是原子的、不可再分的，它们分别是：lock，unlock，read，load，use，assign，store，write，其中lock,unlock,read,write作用于主内存；load,use,assign,store作用于工作内存。</p>
<p>(1) lock:将主内存中的变量锁定，为一个线程所独占</p>
<p>(2) unclock:将lock加的锁定解除，此时其它的线程可以有机会访问此变量</p>
<p>(3) read:将主内存中的变量值读到工作内存当中</p>
<p>(4) load:将read读取的值保存到工作内存中的变量副本中。</p>
<p>(5) use:将值传递给线程的代码执行引擎</p>
<p>(6) assign:将执行引擎处理返回的值重新赋值给变量副本</p>
<p>(7) store:将变量副本的值存储到主内存中。</p>
<p>(8) write:将store存储的值写入到主内存的共享变量当中。</p>
<ul>
<li>从主存复制变量到当前工作内存（read and load）</li>
<li>执行代码，改变共享变量值 （use and assign）</li>
<li>用工作内存数据刷新主存相关内容 （store and write）</li>
</ul>
<h2 id="内存屏障" tabindex="-1"><a class="header-anchor" href="#内存屏障"><span>内存屏障</span></a></h2>
<p>内存屏障(Memory Barriers)是处理器提供的一组内存操作指令，它的作用是限制内存操作的顺序，也就是说内存屏障像一个栅栏一样，它前面的指令要在它后面的指令之前完成；还能强制把缓存写入到主存；再有的就是触发缓存一致性，就是当有写变量时，会把其他CPU核心的缓存变为无效。</p>
<p>而volatile正是使用了内存屏障来保证有序性的</p>
</div></template>



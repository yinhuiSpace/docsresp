<template><div><p>分布式系统</p>
<ul>
<li>多线程并发和锁</li>
</ul>
<h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程"><span>多线程</span></a></h2>
<p>在优化慢接口时，经常采用多开线程，将任务拆分到不同的线程中处理，等任务处理完成后，再收集各线程的处理结果，从而提高了吞吐量</p>
<p>这样可以将并行部分的总耗时从 sum 降为 max，从而大幅降低接口的响应时间。</p>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407061631399.png" alt="多线程优化慢接口"></p>
<p>如何通过多线程来优化慢接口？</p>
<ol>
<li>创建线程池</li>
<li>拆分任务，并把拆分后的小任务提交到线程池执行</li>
<li>通过future对象拿到异步线程的结果，再全部整合成最终结果</li>
</ol>
<p>先分后合，体现了分治思想</p>
<h2 id="并发问题" tabindex="-1"><a class="header-anchor" href="#并发问题"><span>并发问题</span></a></h2>
<p>使用多线程，又会带来线程安全问题</p>
<p>那么，如何判断线程安全呢？</p>
<ul>
<li>原子性（Atomicity）：操作要么全部完成，要么全部不完成。</li>
<li>可见性（Visibility）：一个线程对共享变量的修改对其他线程是立即可见的。</li>
<li>有序性（Ordering）：程序的执行顺序符合预期，不会因为编译器优化或CPU重排序而改变。</li>
</ul>
<p>简单来说，如果我们能保证线程对共享变量的修改是立即可见，并且没有重排代码顺序，以及能够对错误回滚的，就可以确保线程安全了</p>
<p>那么，出现线程安全问题的根本原因是什么呢？</p>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407061718701.png" alt="image-20240706171803467"></p>
<p>线程对变量的所有操作（读取、写入）都必须在工作内存中进行，而不能直接读写主内存中的变量。线程之间无法直接访问对方的工作内存，变量的传递需要通过主内存来完成。</p>
<p>这样的内存机制，就会导致各个线程对共享变量的修改会有时间的滞后，从而无法达到我们最初的目的</p>
<h2 id="锁" tabindex="-1"><a class="header-anchor" href="#锁"><span>锁</span></a></h2>
<p>通过锁可以限制线程对共享变量的操作，从而保证线程安全</p>
<p>同一时刻，就能有一个线程对共享资源加锁成功，其他线程只能不停地循环(空转)</p>
<p>根据实现原理的不同，又可以对锁进行分类</p>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407061725709.png" alt="图片"></p>
<p>悲观锁基本都是先加锁之后再操作同步资源，而乐观锁直接就去操作同步资源。</p>
</div></template>



<template><div><h1 id="盛最多水的容器" tabindex="-1"><a class="header-anchor" href="#盛最多水的容器"><span>盛最多水的容器</span></a></h1>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<ol>
<li>暴力法：写两层for循环，逐个遍历计算，找出最大值，复杂度为O(n^2)</li>
<li>双指针法：头尾指针逐步逼近,复杂度为O(n)</li>
</ol>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407071059956.png" alt="image-20240707105948877"></p>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407071100184.jpeg" alt="img"></p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2>
<p>双指针法：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxArea</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//维护一个最大的面积</span></span>
<span class="line">        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//维护左右双指针</span></span>
<span class="line">        <span class="token keyword">int</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> rightIndex <span class="token operator">=</span> height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">int</span> x <span class="token operator">=</span> rightIndex <span class="token operator">-</span> leftIndex<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>height<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            result <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> x <span class="token operator">*</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> height<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                leftIndex<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                rightIndex<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



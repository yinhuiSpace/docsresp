<template><div><h1 id="三数之和" tabindex="-1"><a class="header-anchor" href="#三数之和"><span>三数之和</span></a></h1>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>双指针法：
对原数组中的每一个元素，都使用双指针来寻找剩下的两个元素，通过计算三元素的和来判断是否为符合要求的元素：</p>
<p>注意：</p>
<ul>
<li>需要先对原数组进行升序排列</li>
<li>需要保证 nums[i] &lt; nums[left] &lt; nums[right]</li>
</ul>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407080919905.png" alt="双指针法"></p>
<ul>
<li>当nums[i] + nums[left] + nums[right] &gt; 0时，说明三数之和大了，right左移</li>
<li>当nums[i] + nums[left] + nums[right] &lt; 0时，说明三数之和小了，left右移</li>
<li>当nums[i] + nums[left] + nums[right] == 0时，此时的三个元素是符合要求的元素</li>
</ul>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2>
<p><img src="https://raw.githubusercontent.com/yinhuiSpace/picgoimg/main/img/202407080908327.png" alt=""></p>
</div></template>



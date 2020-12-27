---
title: 饼图 Pie
order: 0
---

# <a name="4wlszb"></a>1 图表名称


| 标准中文名 | 饼图                    |
| ---------- | ----------------------- |
| 中文别名   | 饼状图                  |
| 英文名     | Pie Chart／Circle Chart |


# <a name="rin8bm"></a>2 图表简介

__hover版：__
一种划分为几个扇形的圆形统计图表，扇形弧长的大小，表示该种类占总体的比例。

__网页版：__
饼图，或称饼状图，是一个划分为几个扇形的圆形统计图表。在饼图中，每个扇形的弧长（以及圆心角和面积）大小，表示该种类占总体的比例，且这些扇形合在一起刚好是一个完全的圆形。
饼图最显著的功能在于表现“占比”。习惯上，人们也用饼图来比较扇形的大小，从而获得对数据的认知。但是，由于人类对“角度”的感知力并不如“长度”，在需要准确的表达数值（尤其是当数值接近、或数值很多）时，饼图常常不能胜任，建议用柱状图代替。
从数据来看，饼图一般需要一个分类数据字段、一个连续数据字段。值得注意的是，分类字段的数据，在图表使用的语境下，应当构成一个整体（例如一班、二班、三班，构成了整个高一年级），而不能是独立、无关的。
使用时，须确认各个扇形的数据加起来等于100%；避免扇区超过5个，尽量让图表简洁明了；注意扇形的排布顺序，一般情况下，将最大的扇形放在12点钟方向，接下来按面积依次排列；最后，正确使用颜色，既区分出需要强调的扇形，又不致于让人眼花缭乱。

# <a name="da1hzr"></a>3 属性

## <a name="fn9hqq"></a>形状
<span data-type="background" style="background-color:#FFADD2">饼状／Pie</span>

## <a name="kpp2ma"></a>图类
<span data-type="background" style="background-color:#FFADD2">统计图表／Chart</span>

## <a name="lcsdsg"></a>功能
<span data-type="background" style="background-color:#FFADD2">组成／Composition</span>

## <a name="xugcyg"></a>数据
日期：0；
地理：0；
分类：1；
数值：1；

# <a name="qf0gnz"></a>4 图表详解

## <a name="cpvncw"></a>元素构成
饼图主要由不同的扇形构成，扇形的弧长，代表该类别在总体中的占比。


![image.png | left | 436x313](https://cdn.nlark.com/yuque/0/2018/png/204492/1543476680578-c423c295-0882-4b73-a54c-6f14f7789b4d.png "")


数据如何计算得来：假设高一年级总人数为850人，其中，理科生700人、文科生100人、出国学生50人，那么他们各自占总人数的比重约为：82%、12%、6%。

## <a name="agzlpz"></a>适用场景
<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">想要表示某个大扇区在整体中所占比例，尤其是扇区所占比例达到总体的25%或50%时。</span></span>

## <a name="dpmqpy"></a>不适用场景
如果变量之间相互独立，并不构成一个整体，那么不可以使用饼图。另外，饼图也不能用来表现趋势。
同时，由于饼图用面积取代了长度，从而加大了对各个数据进行比较的难度。以下图为例，五个变量中，并没有一个占比特别明显的变量，彼此之间十分接近。如果用饼图表示，人们很难分辨大小。因此，当需要对数据进行比较，分清孰大孰小，尤其是当数据接近时，条形图更加合适。


![image.png | left | 238x170](https://cdn.nlark.com/yuque/0/2018/png/204492/1543465351142-c5790f37-edd7-4dc4-b9b3-c136a9650d7c.png "")

此外，当类别过多时，不建议使用饼图，否则阅读会将很差（如下图）。可行的办法，一是将一些不重要的变量合并为“其他”，避免扇区超过5个；二是改用条形图或者表格。尤其是，如果你想让读者清楚的阅读到每一条数据，选用表格会更加直截了当。


![image.png | left | 188x150](https://cdn.nlark.com/yuque/0/2018/png/204492/1543643408370-c72f0be4-2d50-48c8-82d3-c2f906c439bb.png "")



# <a name="1io7zt"></a>5 外形相似图表
<span data-type="background" style="background-color:#FADB14">*下面的图只是示例，实际放我们自己设计的图</span>

<span data-type="background" style="background-color:#FFADD2">（1）圆环图／甜甜圈图 Doughnut chart</span>


![image.png | left | 173x125](https://cdn.nlark.com/yuque/0/2018/png/204492/1543465118698-1a48e04e-818a-44d7-8c23-ef3a3fac8377.png "")


<span data-type="background" style="background-color:#FFADD2">（2）叠饼图／Spie chart  </span>
\*<span data-type="color" style="color:rgb(84, 84, 84)"><span data-type="background" style="background-color:rgb(255, 255, 255)">superimposed</span></span>这个真的完全没有中文翻译...我先尬翻一个


![image.png | left | 168x168](https://cdn.nlark.com/yuque/0/2018/png/204492/1543464993161-f171c760-fee8-41bd-9e44-f973592c2ea6.png "")

<span data-type="background" style="background-color:#FFADD2">（3）南丁格尔玫瑰图／极区图 Polar area diagram</span>


![image.png | left | 162x102](https://cdn.nlark.com/yuque/0/2018/png/204492/1543464395979-633f4c21-ed0d-4b41-b2e9-903ef0c28f34.png "")

<span data-type="background" style="background-color:#FFADD2">（4）旭日图／太阳图 sunburst chart</span>


![image.png | left | 153x165](https://cdn.nlark.com/yuque/0/2018/png/204492/1543464969185-78c5b692-7470-4dab-a23b-6c7cc243900b.png "")

<span data-type="background" style="background-color:#FFADD2">（5）</span><span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:#FFADD2">径向图／</span></span><span data-type="background" style="background-color:#FFADD2">Radial tree</span>


![image.png | left | 164x123](https://cdn.nlark.com/yuque/0/2018/png/204492/1543465051560-4606e2c9-4e8b-44ee-ad7e-6a3ae25bccea.png "")


# <a name="bugzpt"></a>6 功能相似图表（但外形不相似）
<span data-type="background" style="background-color:#FADB14">*下面的图只是示例，实际放我们自己设计的图</span>

<span data-type="background" style="background-color:#FFADD2">（1）百分比图 Square chart / 华夫饼图 Waffle chart</span>


![image.png | left | 184x146](https://cdn.nlark.com/yuque/0/2018/png/204492/1543465155699-7d448366-395b-486b-80d6-921365e86ada.png "")


<span data-type="background" style="background-color:#FFADD2">（1）100%长条</span><span data-type="color" style="color:rgb(84, 84, 84)"><span data-type="background" style="background-color:#FFADD2">堆叠图／</span></span><span data-type="background" style="background-color:#FFADD2">Stacked 100% Column Chart with Subcomponents</span>


![image.png | left | 159x136](https://cdn.nlark.com/yuque/0/2018/png/204492/1543465620723-839c0229-66fe-450d-b06a-626896ee367c.png "")

# <a name="qmq1fq"></a>7 设计案例
<span data-type="background" style="background-color:#FFADD2">（1）</span>
[https://multimedia.scmp.com/news/china/article/2170344/china-2025-aviation/index.html?src=follow-chapter](https://multimedia.scmp.com/news/china/article/2170344/china-2025-aviation/index.html?src=follow-chapter)
用有冲击力的颜色突出最想表现的扇形（首先是中国，再次是美国），其余的，则在视觉上弱化处理（其他国家虽然占比最大，但是用灰色处理）。此外，将文字注释巧妙的设计到图形中。


![屏幕快照 2018-12-01 下午2.28.52.png | left | 332x363](https://cdn.nlark.com/yuque/0/2018/png/204492/1543645728953-3a3e4054-58e3-449b-9edb-6d6f20d85ae8.png "")

<span data-type="background" style="background-color:#FFADD2">（2）</span>
[http://multimedia.scmp.com/news/hong-kong/article/20th-handover/index.html](http://multimedia.scmp.com/news/hong-kong/article/20th-handover/index.html)
《南华早报》关于香港少数族裔的报道。蓝色表示男性，红色表示女性，符合一般认知。同时，除了男女占比外，还用圆形面积代表了总人数。特别的，它还将菲律宾人（香港最多的少数族裔）画成了灰色轮廓，固定在底图上，并加入交互功能。这样，用户在滑动到其他族裔（如美国人）时，就可以方便的比较它与菲律宾人的规模差别。这是把简单的饼图，设计的丰富、精巧的案例。


![屏幕快照 2018-12-01 下午2.12.10.png | left | 157x279](https://cdn.nlark.com/yuque/0/2018/png/204492/1543644866253-29992d89-cd08-4573-9f12-c4196364ffe9.png "")


<span data-type="background" style="background-color:#FFADD2">（3）</span>
给扇形以装饰，使其更直观、美观的表现所属类别。
[http://www.emilyschramm.com/blog/2017/12/8/thanksgiving-pie-chart](http://www.emilyschramm.com/blog/2017/12/8/thanksgiving-pie-chart)


![image.png | left | 202x202](https://cdn.nlark.com/yuque/0/2018/png/204492/1543470251577-be0d1f79-89a6-407c-b352-695d8b979f70.png "")

<span data-type="background" style="background-color:#FFADD2">（4）</span>
创意性的使用实物拍摄。
[https://www.sweetspot.com/en/2014/10/21/focus-visualizations-pie-charts/](https://www.sweetspot.com/en/2014/10/21/focus-visualizations-pie-charts/)


![image.png | left | 299x150](https://cdn.nlark.com/yuque/0/2018/png/204492/1543469706699-b6fd6fbb-809e-43ae-8b83-5ade89f118dd.png "")

<span data-type="background" style="background-color:#FFADD2">(5) </span>
实物装饰+变形处理
[http://www.peterorntoft.com/infographicsincontext.html](http://www.peterorntoft.com/infographicsincontext.html)


![image.png | left | 279x255](https://cdn.nlark.com/yuque/0/2018/png/204492/1544011569937-afbad9d1-68e1-4a9a-98cb-ee989c2cacd9.png "")

<span data-type="background" style="background-color:#FFADD2">（6）</span>
《纽约时报》对比了民主党和共和党人士爱用词语的差异。对饼图进行变形（并不从圆心开始划分，而是左右划分），这样很好的契合了政治上两派相争、一左一右的概念，同时方便多个饼图排版——蓝色越多、民主党更爱提、越靠左；红色越多、共和党更爱提、越靠右。
[https://archive.nytimes.com/www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html#Businesshttp://](https://archive.nytimes.com/www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html#Businesshttp://)


![image.png | left | 313x285](https://cdn.nlark.com/yuque/0/2018/png/204492/1543480079659-6dc37188-ff73-498f-a84f-620c020d36e1.png "")

<span data-type="background" style="background-color:#FFADD2">（7）</span>
《世界语言地图》，对饼图进行了更自由的变形
[https://www.scmp.com/infographics/article/1810040/infographic-world-languages](https://www.scmp.com/infographics/article/1810040/infographic-world-languages)


![image.png | left | 147x240](https://cdn.nlark.com/yuque/0/2018/png/204492/1543470909888-4858e814-f213-43c3-bc87-477f81a81105.png "")


# <a name="zaa5hp"></a>8 使用场景案例
<span data-type="background" style="background-color:#FFADD2">（1）</span>
<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">通常认为，已知最早的饼图是</span></span>威廉·普莱菲<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">于1801年在他的《统计学摘要》</span></span>*Statistical Breviary*<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">中所作。这张饼图，描述了1789年以前</span></span>土耳其帝国<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">在</span></span>亚洲<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">、</span></span>欧洲<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">及</span></span>非洲<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">中所占的比例。</span></span>
为什么饼图适合表达这个话题呢？第一，其分类变量为<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">亚、欧、非三洲，这三洲的国土构成了土耳其疆域的整体。而我们的目的正是为了表现它们的“占比”。此外，总共三个类别，数量不多不少，不会使饼图太过杂乱。第二，其连续变量为各洲的国土面积，有一个部分（亚洲）占比显著（60%左右），很好辨别。另外，欧洲占比约为25%，在饼图中呈直角，也方便辨别（这也很可能是作者把欧洲放在12点钟方向的原因）。</span></span>


![image.png | left | 157x181](https://cdn.nlark.com/yuque/0/2018/png/204492/1543463720192-d6a22b1a-93d7-4680-8b16-6955250aea8b.png "")

<span data-type="background" style="background-color:#FFADD2">（2）</span>
《好奇心日报》分析外卖市场时，有一个很有趣的点。即多少人会使用单独的外卖app点单。事实上，这个比例只有11.1%。绝大多数人还是通过微信、支付宝、美团等大型app进入的。而在这11.1%的人中，又有超过96%的人使用饿了么、美团外卖、百度外卖点单。两个饼图叠加，可以很好的描画出整个外卖市场的流量池，尤其是反映外卖平台对于渠道的依赖。这个案例构思很棒，如果在版式、文字的设计上更细致、精美一些，就更好了。
[https://www.qdaily.com/articles/44463.html](https://www.qdaily.com/articles/44463.html)


![image.png | left | 189x208](https://cdn.nlark.com/yuque/0/2018/png/204492/1543647011426-93ac9b5d-05da-4bda-baa2-abe7ba9f91f3.png "")


# <a name="5ng1vb"></a>9 制作教程

<div class="bi-table">
  <table>
    <colgroup>
      <col width="121px" />
      <col width="78px" />
      <col width="556px" />
    </colgroup>
    <tbody>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">Excel</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">基础：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://support.office.com/zh-cn/article/%E6%B7%BB%E5%8A%A0%E9%A5%BC%E5%9B%BE-1a5f08ae-ba40-46f2-9ed0-ff84873b7863" class="bi-link">https://support.office.com/zh-cn/article/%E6%B7%BB%E5%8A%A0%E9%A5%BC%E5%9B%BE-1a5f08ae-ba40-46f2-9ed0-ff84873b7863</a>
          </div>
          <div data-type="p">使用颜色插件、调整标签位置：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://zhuanlan.zhihu.com/p/23350815" class="bi-link">https://zhuanlan.zhihu.com/p/23350815</a>
          </div>
          <div data-type="p">画复合／子母饼图：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://yq.aliyun.com/wenji/182682" class="bi-link">https://yq.aliyun.com/wenji/182682</a>
          </div>
          <div data-type="p">画半圆饼图：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.ruhe8.com/article/2539.html" class="bi-link">https://www.ruhe8.com/article/2539.html</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">Power BI</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">基础：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.jianshu.com/p/15a7bbdc464c" class="bi-link">https://www.jianshu.com/p/15a7bbdc464c</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">Tableau</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">基础：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/buildexamples_pie.htm" class="bi-link">https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/buildexamples_pie.htm</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">QlikView</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">基础教程：
            <a target="_blank" rel="noopener noreferrer nofollow" href="http://blog.sina.com.cn/s/blog_562c67060102wxix.html" class="bi-link">http://blog.sina.com.cn/s/blog_562c67060102wxix.html</a>
          </div>
          <div data-type="p">官方文档：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://help.qlik.com/zh-CN/qlikview/November2017/Subsystems/Client/Content/Pie_Chart.htm" class="bi-link">https://help.qlik.com/zh-CN/qlikview/November2017/Subsystems/Client/Content/Pie_Chart.htm</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">ECharts</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">官方实例：
            <a target="_blank" rel="noopener noreferrer nofollow" href="http://echarts.baidu.com/examples/#chart-type-pie" class="bi-link">http://echarts.baidu.com/examples/#chart-type-pie</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">AntV</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">官方实例：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/pie/innerlabel.html" class="bi-link">https://antv.alipay.com/zh-cn/g2/3.x/demo/pie/innerlabel.html</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">D3</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">基础：
            <a target="_blank" rel="noopener noreferrer nofollow" href="http://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js" class="bi-link">http://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js</a>
          </div>
          <div data-type="p">基础：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://bl.ocks.org/santi698/f3685ca8a1a7f5be1967f39f367437c0" class="bi-link">https://bl.ocks.org/santi698/f3685ca8a1a7f5be1967f39f367437c0</a>
          </div>
          <div data-type="p">进阶：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://beta.observablehq.com/@mbostock/d3-pie-chart" class="bi-link">https://beta.observablehq.com/@mbostock/d3-pie-chart</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">PS/AI</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">ps:
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://brushes8.com/83581.html" class="bi-link">https://brushes8.com/83581.html</a>
          </div>
          <div data-type="p">ai:
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.jb51.net/Illustrator/587203.html" class="bi-link">https://www.jb51.net/Illustrator/587203.html</a>
          </div>
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.jianshu.com/p/c6e824419dbf" class="bi-link">https://www.jianshu.com/p/c6e824419dbf</a>
          </div>
          <div data-type="p">也可以直接在网上下载素材</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">Sketch</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">y</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">3种基础方法：
            <a target="_blank" rel="noopener noreferrer nofollow" href="http://www.iueux.com/1116.html" class="bi-link">http://www.iueux.com/1116.html</a>
          </div>
          <div data-type="p">虚线法：
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://medium.com/d-d-mag/%E7%94%A8-sketch-%E8%99%9B%E7%B7%9A%E5%81%9A%E7%94%9C%E7%94%9C%E5%9C%88%E5%92%8C%E5%9C%93%E9%A4%85-c78e5bb995fc" class="bi-link">https://medium.com/d-d-mag/%E7%94%A8-sketch-%E8%99%9B%E7%B7%9A%E5%81%9A%E7%94%9C%E7%94%9C%E5%9C%88%E5%92%8C%E5%9C%93%E9%A4%85-c78e5bb995fc</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

# <a name="p15uft"></a>10 专项工具
none

# <a name="lapvgg"></a>11 学习资源
（1）【推荐】Why humans love pie charts：An historical and evolutionary perspective 人类为什么喜爱饼图，一个历史和进化的角度：[https://blog.usejournal.com/why-humans-love-pie-charts-9cd346000bdc](https://blog.usejournal.com/why-humans-love-pie-charts-9cd346000bdc)
（2）HOW TO DESIGN PIE CHARTS 饼状图入门及使用原则：[https://visage.co/data-visualization-101-pie-charts/](https://visage.co/data-visualization-101-pie-charts/)
（2）A focus on visualizations: Pie charts 饼状图入门及使用原则： [https://www.sweetspot.com/en/2014/10/21/focus-visualizations-pie-charts/](https://www.sweetspot.com/en/2014/10/21/focus-visualizations-pie-charts/)
（3）The Worst Chart In The World 迫不得已不要用饼状图：[https://www.businessinsider.com/pie-charts-are-the-worst-2013-6](https://www.businessinsider.com/pie-charts-are-the-worst-2013-6)
（4）Make a 3D Pie Chart That Actually Looks Good on PowerPoint 如何用PPT合理制作3D饼状图：[https://www.youtube.com/watch?v=F\_ETT2jDOe8](https://www.youtube.com/watch?v=F_ETT2jDOe8)
（5）MOTIF: PIE CHART 装饰性的饼图合集  [https://www.pinterest.com/getitscrapped/motif-pie-chart/?lp=true](https://www.pinterest.com/getitscrapped/motif-pie-chart/?lp=true)

# <a name="udp8qz"></a>12 参考文献
\*使用的APA格式

<span data-type="color" style="color:#262626">1.</span>Pie chart. (n.d.). Retrieved December 3, 2018, from [https://en.wikipedia.org/wiki/Pie\_chart](https://en.wikipedia.org/wiki/Pie_chart)
2.<span data-type="color" style="color:#262626">AntV墨者学院</span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:#262626">. (n.d.). </span></span><span data-type="color" style="color:#262626">饼图的简介, </span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:#262626">Retrieved from </span></span>[https://antv.alipay.com/zh-cn/vis/chart/pie.html](https://antv.alipay.com/zh-cn/vis/chart/pie.html)
3<span data-type="color" style="color:#262626">.Dennis Wong. (2018, October 30). Can ‘Made in China 2025’ help turn the nation’s domestic aerospace industry into a world leader?, Retrieved from </span>[https://multimedia.scmp.com/news/china/article/2170344/china-2025-aviation/index.html?src=follow-chapter](https://multimedia.scmp.com/news/china/article/2170344/china-2025-aviation/index.html?src=follow-chapter)
4<span data-type="color" style="color:#262626">.Marcelo Duhalde, Dennis Wong, Adolfo Arranz, Marco Hernandez. (n.d.). Twenty years, 20 visualisations, Retrived from </span>[http://multimedia.scmp.com/news/hong-kong/article/20th-handover/index.html](http://multimedia.scmp.com/news/hong-kong/article/20th-handover/index.html)
5<span data-type="color" style="color:#262626">.Emily Schramm</span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:#262626">. (2017, December 8). </span></span><span data-type="color" style="color:#262626">Thanksgiving Pie Chart, Retrived from </span>[http://www.emilyschramm.com/blog/2017/12/8/thanksgiving-pie-chart](http://www.emilyschramm.com/blog/2017/12/8/thanksgiving-pie-chart)
6.P<span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">eter Orntoft. </span></span>(n.d.). <span data-type="color" style="color:rgb(34, 34, 34)"><span data-type="background" style="background-color:rgb(255, 255, 255)">Infographics in context, </span></span>Retrieved December 2, 2018, from [http://www.peterorntoft.com/infographicsincontext.html](http://www.peterorntoft.com/infographicsincontext.html)
<span data-type="color" style="color:#BFBFBF">...</span>
<span data-type="color" style="color:#BFBFBF">Vercruse, R. [Robin]. (n.d.). Twin baby loris [Pinterest post]. Retrieved May 22, 2017, from https://au.pinterest.com/pin/19421842113477796/</span>

# <a name="6x9gyg"></a>13 贡献者


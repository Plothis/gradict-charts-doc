# 桑基图 Sankey

# 1 图表名称


| 标准中文名 | 桑基图 |
| --- | --- |
| 中文别名 | 桑基能量分流图、桑基能量平衡图 |
| 英文名 | Sankey Diagram |


# 2 图表简介

<span data-type="color" style="color:#262626">桑基图 (Sankey Diagram)，是一种特定类型的流程图，用于描述一组值到另一组值的流向</span>分支的宽度对应了数据流量的大小。
<span data-type="color" style="color:#262626">1869年，查尔斯米纳德（Charles Minard）绘制了1812年</span><span data-type="color" style="color:#262626"><span data-type="background" style="background-color:#D4EEFC">拿破仑征俄图</span></span><span data-type="color" style="color:#262626">（Map of Napolean&#x27;s Russian Campaign of 1812），这是一个在地图上覆盖桑基图的流程图。</span>
1898年爱尔兰人Matthew Henry Phineas Riall Sankey 在土木工程师学会会报纪要的一篇关于蒸汽机能源效率的文章中首次推出了第一个能量流动图，此后便以其名字命名为 Sankey 图。
桑基图的一大特点在于“能量守恒”，即起始流量和结束流量相同。不能在中间过程中创造出流量，流失的流量也不应莫名消失（可以流向表示损耗的节点）。也因此，桑基图的<span data-type="color" style="color:rgba(0, 0, 0, 0.85)"><span data-type="background" style="background-color:rgb(255, 255, 255)">每条边，宽度是保持不变的，即边的权重不变。</span></span>
使用时，注意变量的归类和颜色的选择，避免太过花哨、影响阅读。必要时建议加入交互功能。


# 3 属性

## 一般类型
其他

## 形状
<span data-type="background" style="background-color:#FFADD2">其他</span>

## 图类
<span data-type="background" style="background-color:#FFADD2">示意图</span>／Diagram

## 功能
<span data-type="background" style="background-color:#FFADD2">对比</span> Comparision  <span data-type="background" style="background-color:#FFADD2">趋势</span> Trend

## 数据
日期：0；
地理：0；
分类：1；
数值：1..n；

# 4 图表详解

## 元素构成


![image.png | left | 417x247](https://cdn.nlark.com/yuque/0/2018/png/204492/1543647785280-fce6a65e-5748-4274-9953-0df962fc5459.png "")

以此为例，每一条支流表示一种情况，如既是女生又是狮子座的有5人，既是男生又是白羊座的有2人。
source	target	value
女	        狮子座	  5
女	        白羊座	  1
女	        摩羯座	  1
男	        狮子座	  4
男	        白羊座	  2
男       	 摩羯座	  2

## 适用场景

适合表现分配情况、归类情况，以及变化和流动情况。

## 不适用场景

桑基图遵循能量守恒原则<span data-type="color" style="color:rgba(0, 0, 0, 0.85)"><span data-type="background" style="background-color:rgb(255, 255, 255)">，因此，每条边的宽度是保持不变的（边的权重不变），需要改变边的宽度的数据推荐使用</span></span><span data-type="background" style="background-color:#FFADD2">和弦图（Chord Diagram）</span>。

另外，在没有交互的情况下，变量如果太多，或者使用过多或过于相似的颜色，会导致“一团乱麻”的状态，使人难以聚焦。这种情况下，建议先将变量进行必要的归类，并赋予具有辨识度、反差感的颜色。有进一步需求的话，加入交互功能，在鼠标点击时，仅突出显示一个支流。


![image.png | left | 295x170](https://cdn.nlark.com/yuque/0/2018/png/204492/1543651067152-c8754295-f67b-4490-a3c9-28b8bf9bcec3.png "")

来源：[https://blog.ouseful.info/2013/02/18/reshaping-horse-importexport-data-to-fit-a-sankey-diagram/](https://blog.ouseful.info/2013/02/18/reshaping-horse-importexport-data-to-fit-a-sankey-diagram/)

# 5 外形相似图表
<span data-type="background" style="background-color:#FFADD2">（1）流型地图</span>


![image.png | left | 262x192](https://cdn.nlark.com/yuque/0/2018/png/204492/1543656509172-493b1e1d-c1e8-4cf9-a8d5-6d35ece2e91d.png "")



# 6 功能相似图表
<span data-type="background" style="background-color:#FFADD2">（1）和弦图</span>


![image.png | left | 242x209](https://cdn.nlark.com/yuque/0/2018/png/204492/1543655889322-743be8bf-4c9d-4c42-9674-7c58b05744a0.png "")



7 设计案例
<span data-type="background" style="background-color:#FFADD2">（1）</span><span data-type="color" style="color:#262626">1869年，查尔斯米纳德（Charles Minard）绘制的1812年拿破仑征俄图（Map of Napolean&#x27;s Russian Campaign of 1812）</span>
[https://en.wikipedia.org/wiki/Charles\_Joseph\_Minard](https://en.wikipedia.org/wiki/Charles_Joseph_Minard)


![image.png | left | 348x166](https://cdn.nlark.com/yuque/0/2018/png/204492/1543650385326-329649a2-6395-4d0b-8b17-639aff92b28e.png "")


<span data-type="background" style="background-color:#FFADD2">（2）</span>2017信息之美时政类金奖作品《在他们的路上：外国战斗士之旅》，描画ISIS斗士出征的情况。致敬了拿破仑征俄图。主干使用黑色，代表出征，支干使用黄色，代表归来。菱形代表出征国家，该国穆斯林人口越多，面积越大。斗士人数占穆斯林人数越大，颜色越深。通过这个图，读者可以清楚的追看ISIS的全部行动。
[https://www.dropbox.com/sh/4mnx8sulri5ugbj/AAAxZfxpAJ2LQi6AJrJvEOxfa?dl=0](https://www.dropbox.com/sh/4mnx8sulri5ugbj/AAAxZfxpAJ2LQi6AJrJvEOxfa?dl=0)


![image.png | left | 510x247](https://cdn.nlark.com/yuque/0/2018/png/204492/1543653006803-a170d761-110b-45bf-91c6-60f4ad93a02d.png "")


（3）合理用色，并保持类别间的区分度：《经济学人》在统计难民流向时，用蓝色表示难民来源国家，黄色表示迁移目的地，绿色表示成功入境，红色表示拒绝入境。
[https://www.economist.com/graphic-detail/2015/05/12/seeking-safety](https://www.economist.com/graphic-detail/2015/05/12/seeking-safety)


![image.png | left | 275x418](https://cdn.nlark.com/yuque/0/2018/png/204492/1543655203746-0dc47df0-01f0-4858-9e45-85002a915eef.png "")


<span data-type="background" style="background-color:#FFADD2">（3）</span>装饰性变形：川普攻击最多的人是谁？结果显示，并不是民主党，而是新闻媒体。严格来说，这个图并没有两个时间点的比较。主要是借鉴了桑基图的形态，实现了类似饼图的功能。
[https://www.axios.com/who-trump-attacks-the-most-on-twitter-1513305449-f084c32e-fcdf-43a3-8c55-2da84d45db34.html](https://www.axios.com/who-trump-attacks-the-most-on-twitter-1513305449-f084c32e-fcdf-43a3-8c55-2da84d45db34.html)


![image.png | left | 324x235](https://cdn.nlark.com/yuque/0/2018/png/204492/1543650931984-b9773d5c-c83f-4bc8-8c89-070204f2d6fb.png "")


（4）用点阵实现运动的桑基图。作者统计了近年来印度发生的强奸事件，以及它们的处理结果。作品用一个个运动的点来代表每一桩强奸案，大部分流向了无疾而终，令人震撼。
[https://adityajain15.github.io/Rape\_In\_India/](https://adityajain15.github.io/Rape_In_India/)


![image.png | left | 460x275](https://cdn.nlark.com/yuque/0/2018/png/204492/1544964204870-eaac3762-7354-4216-ad5f-ee261dd02a29.png "")


# 8 使用场景案例

<span data-type="background" style="background-color:#FFADD2">（1）</span>追踪用户状态。例如，多少用户的加入购物车行为转化为了付款；或者多少注册用户转换为了活跃用户等。
[https://me.bdp.cn/share/index.html?shareId=sdo\_667cd39c7baa7ee3e8e6ca97109ec6b0](https://me.bdp.cn/share/index.html?shareId=sdo_667cd39c7baa7ee3e8e6ca97109ec6b0)


![屏幕快照 2018-12-01 下午4.17.37.png | left | 640x282](https://cdn.nlark.com/yuque/0/2018/png/204492/1543652290450-5212ca77-1309-42d7-9dc4-04e9754686e1.png "")


<span data-type="background" style="background-color:#FFADD2">（2）</span>追踪跑票、变动、迁移等。《经济学人》分析了历年美国报纸对于总统候选人的提及率，制作了如下桑基图。
[https://www.economist.com/graphic-detail/2016/11/03/american-newspapers-resoundingly-reject-donald-trump](https://www.economist.com/graphic-detail/2016/11/03/american-newspapers-resoundingly-reject-donald-trump)


![image.png | left | 371x246](https://cdn.nlark.com/yuque/0/2018/png/204492/1543671973722-377ca211-f9b7-4ff4-afce-06e37be84cfe.png "")


# 9 制作教程

<div class="bi-table">
  <table>
    <colgroup>
      <col width="90px" />
      <col width="161px" />
      <col width="473px" />
    </colgroup>
    <tbody>
      <tr height="34px">
        <td rowspan="4" colSpan="1">
          <div data-type="p">商用工具</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Excel</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">Power BI</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">https://powerbi.microsoft.com/en-us/blog/visual-awesomeness-unlocked-sankey-diagram/</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">Tableau</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">https://www.theinformationlab.co.uk/2018/03/09/build-sankey-diagram-tableau-without-data-prep-beforehand/</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">QlikView</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="5" colSpan="1">
          <div data-type="p">代码库</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">ECharts</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="http://echarts.baidu.com/examples/#chart-type-sankey" class="bi-link">官方实例</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">AntV</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/sankey-layouts.html" class="bi-link">G2官方实例</a>
          </div>
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://antv.alipay.com/zh-cn/g6/2.x/demo/flow/table-sankey.html" class="bi-link">G6官方实例</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">D3</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://beta.observablehq.com/@mbostock/d3-sankey-diagram" class="bi-link">基本图形的实现</a>
          </div>
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://bost.ocks.org/mike/sankey/" class="bi-link">使用D3的sankey plugin</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">matplotlib</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://matplotlib.org/api/sankey_api.html" class="bi-link">matplotlib.sankey官方文档</a>
          </div>
          <div data-type="p">（另一个连接echarts的python库
            <a target="_blank" rel="noopener noreferrer nofollow" href="http://pyecharts.org/#/zh-cn/charts_base?id=sankey%EF%BC%88%E6%A1%91%E5%9F%BA%E5%9B%BE%EF%BC%89" class="bi-link">pyecharts</a>里也有sankey模块）</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">ggplot2</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://cran.r-project.org/web/packages/ggalluvial/vignettes/ggalluvial.html" class="bi-link">使用ggalluvial包</a>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="2" colSpan="1">
          <div data-type="p">设计工具</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">PS/AI</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">建议用专项工具生成桑基图后，下载svg文件，再在AI中进行编辑</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">Sketch</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">／</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

# 10 专用工具
（1）Raw Graph: [http://app.rawgraphs.io/](http://app.rawgraphs.io/)
（2）Sankeymatic: [http://sankeymatic.com/build/](http://sankeymatic.com/build/)
（3）镝数：[https://dydata.io/chart](https://dydata.io/chart)

# 11 学习资源
（1）桑基图有何作用，桑基图又是怎么做出来的？
[https://www.zhihu.com/question/45502919](https://www.zhihu.com/question/45502919)
（2）GO WITH THE FLOW: SANKEY DIAGRAMS ILLUSTRATE ENERGY ECONOMY [http://ecowest.org/2013/05/06/sankey-energy/](http://ecowest.org/2013/05/06/sankey-energy/)
（3）Sankey Diagrams: Six Tools for Visualizing Flow Data [https://www.azavea.com/blog/2017/08/09/six-sankey-diagram-tool/](https://www.azavea.com/blog/2017/08/09/six-sankey-diagram-tool/)

# 12 参考文献

